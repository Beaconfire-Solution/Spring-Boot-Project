import { React, Component, useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { getTimesheetSummary } from '../../action/action'
import { Link } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import { convertISO_to_Date } from '../../services/dateConverter';
import { Tooltip } from '@material-ui/core';


class Summaries extends Component {

    constructor(props) {
        super(props);
        this.props.getTimesheetSummary();
        this.state = {
            currentWeeklyTimesheets: [],
            tableSize: 3,
            showAll: false,
            showSubmissionTag: false,
        }
    }

    async componentDidMount() {
        await this.props.getTimesheetSummary()
        const initialList = await this.props.timesheetSummaries
        this.setState({ currentWeeklyTimesheets: initialList.slice(0, this.state.tableSize) });      
    }

    changeToShowMoreOrLess = () => {
        if (this.state.showAll == false) {
            this.setState({ showAll: true });
            this.setState({ currentWeeklyTimesheets: this.props.timesheetSummaries});
        }
        if (this.state.showAll == true) {
            this.setState({ showAll: false });
            this.setState({ currentWeeklyTimesheets: this.props.timesheetSummaries.slice(0, this.state.tableSize) });
        }     
    };

    showMoreTag = () => {
        if (this.state.showAll == true) return "Show Less"
        return "Show More"
    }

    optionTags = (week) => {
        let selectedWeek = convertISO_to_Date(week.weeklyTimesheets.weekEnding)
        let option = week.weeklyTimesheets.approvedStatus == "Approved" ? "view" : "edit"
        let url = "timesheet?weekEnding="+ selectedWeek + '/' + option;
        return <Link to={ url}>{ option}</Link>
    }


    tagTextSubmission = (week) => {
        const status = week.weeklyTimesheets.submissionStatus; 
        const fileType = week.weeklyTimesheets.document.type;
        if (status != 'Not Started' && fileType != 'Approved') {
            return 'Items due: Proof of Approved TimeSheet'
        } 
        return 'Approval denied by Admin, please contact your HR manager'
    }

    showComment = (week) => {
        
    }


    render() {
        
        console.log("before render")
        console.log(this.props)
        
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>WeekEnding</th>
                            <th>Total Hours</th>
                            <th>Submission Status</th>
                            <th>Approval Status</th>
                            <th>Option</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.currentWeeklyTimesheets.map(week => (
                            <tr key={week.id}>
                                <td>{convertISO_to_Date(week.weeklyTimesheets.weekEnding)}</td>
                                <td>{week.weeklyTimesheets.totalBillingHours}</td>
                                <td>
                                    <span>{week.weeklyTimesheets.submissionStatus}</span> <span></span>
                                    {week.weeklyTimesheets.submissionStatus == "Incomplete" &&
                                        <Tooltip title={this.tagTextSubmission(week)}>
                                            <span>
                                                <FaInfoCircle />
                                            </span> 
                                        </Tooltip>
                                        }
                                    
                                </td>
                                <td>{week.weeklyTimesheets.approvedStatus}</td>
                                <td>{this.optionTags(week)}</td>
                                <td>{this.showComment(week)}

                                </td>
                            </tr>
                        
                        ))}
                    </tbody>
                </table>
                <div className="text-center">
                    {this.state.currentWeeklyTimesheets.length!=0&&<button type="button" className="btn btn-light" onClick={() => this.changeToShowMoreOrLess()}>{this.showMoreTag()}</button>}
                </div>
                
                
            </div>          
        );
    }
    
}
const mapStateToProps = (state) => {
    return {
        timesheetSummaries: state.summaryTimesheets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTimesheetSummary: () => dispatch(getTimesheetSummary())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summaries);