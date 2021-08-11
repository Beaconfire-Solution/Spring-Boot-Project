import { React, Component, useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { getTimesheetSummary } from '../../action/action'
import { Link } from 'react-router-dom';
import InfoIcon from './infoIcon';
import { FaInfoCircle } from 'react-icons/fa';
import ReactTooltip from "react-tooltip";
import { convertISO_to_Date } from '../../services/dateConverter';


class Summaries extends Component {

    constructor(props) {
        super(props);
        this.props.getTimesheetSummary();
        this.state = {
            currentWeeklyTimesheets: [],
            tableSize: 3,
            showAll: false,
            showSubmissionTag: false,
            showCommentTag : false
        }
    }

    async componentDidMount() {
        await this.props.getTimesheetSummary()
        const initialList = await this.props.timesheetSummaries
        this.setState({currentWeeklyTimesheets : initialList.slice(0, this.state.tableSize)});
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

    optionTags = (args) => {
        console.log("week  " + args.week)
        let selectedWeek = args.week.weekEnding
        let option = args.week.approvalStatus == "Approved" ? "view" : "edit"
        let url = "timesheet?weekEnding="+ selectedWeek + '/' + option;
        return <Link to={ url}>{ option}</Link>
    }

    setIfShowSubmissionStatusTag = (showHover) => {
        console.log("showHover?")
        this.setState({showSubmissionTag : showHover});
    }

    showInfoIcon = (args) => {
        if (args.status == "Incomplete")
            return <FaInfoCircle data-tip data-for="submissionTip"
                        onMouseEnter={() => this.setIfShowSubmissionStatusTag(true)}
                        onMouseLeave={() => this.setIfShowSubmissionStatusTag(false)}
        />
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
                                    {week.weeklyTimesheets.submissionStatus}<span> </span>
                                    {this.showInfoIcon({ status: week.weeklyTimesheets.submissionStatus })}
                                    <ReactTooltip id="submissionTip" place="top" effect="solid">
                                        This is submission tip
                                    </ReactTooltip>
                                </td>
                                <td>{week.weeklyTimesheets.approvedStatus}</td>
                                <td>{this.optionTags({ week: week })}</td>
                                <td>{week.comment}
                                    {this.showInfoIcon({ status: week.submissionStatus })}
                                    <ReactTooltip id="submissionTip" place="top" effect="solid">
                                        This is submission tip
                                    </ReactTooltip>
                                </td>
                            </tr>
                        
                        ))}
                    </tbody>
                </table>
                <div className="text-center">
                    {<button type="button" className="btn btn-light" onClick={() => this.changeToShowMoreOrLess()}>{this.showMoreTag()}</button>}
                    
                </div>
                
                
            </div>          
        );
    }
    
}
const mapStateToProps = (state) => {
    console.log("mapStateToProps called")
    console.log(state.summaryTimesheets)
    return {
        timesheetSummaries: state.summaryTimesheets
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps called")
    return {
        getTimesheetSummary: () => dispatch(getTimesheetSummary())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summaries);