import {React, useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { TextField, Checkbox, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actionTypes from '../../action/actionTypes';
import TimeSheetHomeCSS from './TimeSheetHome.module.css';

function totalHoursCalc(cell, row){
    var timeStart = new Date(row.startingTime).getHours();
    var timeEnd = new Date(row.endingTime).getHours();
    var hourDiff = timeEnd - timeStart;
    return  (
     <span>
        {hourDiff}
    </span>)
}



function TimeSheetHome(props) {

    const [timesheet, setTimesheet] = useState(props.timesheet.startingTime);

    const columns = [{
        dataField: 'day',
        text: 'Week Day'
      },
    {
        dataField: 'date',
        text: 'Date'
    },
    {
        dataField: 'startingTime',
        text: 'Starting Time',
        formatter: ()=> (
            <form noValidate>
                <TextField
                    id="time"
                    type="time"
                    defaultValue="09:00"
                    // onChange={(e)=>setTimesheet(e.target.value)}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                />
            </form>
        )
    },
    {
        dataField: 'endingTime',
        text: 'Ending Time',
        formatter: ()=> (
            <form noValidate>
                <TextField
                    id="time"
                    type="time"
                    defaultValue="09:00"
                    // onChange={(e)=>setTimesheet(e.target.value)}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                />
            </form>
        )
    },
    {
        dataField: 'Total Hour',
        text: 'Total Hour',
        formatter: totalHoursCalc
    },
    {
        dataField: 'isFloatingDay',
        text: 'Floating Day',
    },
    {
        dataField: 'isHoliday',
        text: 'Holiday',
    },
    {
        dataField: 'isVacation',
        text: 'Vacation',
    },
    ];

    function editTimesheet(){
        props.editTimesheet(timesheet);
    }


    return (
        <div className={TimeSheetHomeCSS.container}>
            <div>
                <BootstrapTable keyField='id' data={ props.timesheet } columns={ columns } bordered={ false }/>
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={editTimesheet}>
                    Save
                </Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        timesheet: state.curr_timeSheet
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editTimesheet: (payload) => dispatch({type: actionTypes.EDIT_TIMESHEET, payload})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeSheetHome);
