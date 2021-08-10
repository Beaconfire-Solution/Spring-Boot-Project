import {React, useState, useEffect} from 'react';
import { TextField, Checkbox, Button, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { getTimesheetSummary } from '../../action/action/action.js'

class Summaries extends Component {

    componentDidMount() {
        this.props.getSummaries();
    }
    render() {
        return (
            <ul>
                {this.props.timesheetSummaries.map(d => <li key={d.id}>{d.totalHours}</li>)}
            </ul>
        );
    }
    
}
const mapStateToProps = (state)=>{
    return {
        timesheetSummaries: state.timesheetSummaries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSummaries : () => dispatch(getTimesheetSummary())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summaries)
