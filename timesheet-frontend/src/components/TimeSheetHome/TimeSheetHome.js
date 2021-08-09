import {React, useState, useEffect} from 'react';
import { TextField, Checkbox, Button, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actionTypes from '../../action/actionTypes';
import TimeSheetHomeCSS from './TimeSheetHome.module.css';
import * as ApiService from '../../services/ApiService';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function TimeSheetHome(props) {

    const [isValid, setValid] = useState(true);

    function getTimesheetTemplate(){
        ApiService.fetchTimesheetTemplate()
        .then((response)=>{
            props.getTimesheetTemplate(response.data.template);
        })
    }

    useEffect(() => {
        getTimesheetTemplate();
    })

    function testChange(){
        props.postTemplate();
    }
    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
    const classes = useStyles();

    function totalHoursCalc(startingTime, endingTime){
        var timeStart = new Date("01/01/2007 " + startingTime);
        var timeEnd = new Date("01/01/2007 " + endingTime);
        var hourDiff = (timeEnd - timeStart) / 60 / 60 / 1000;
        hourDiff = hourDiff.toFixed(2);
        if (hourDiff >= 0){
            return  (
                <span>
                   {hourDiff}
               </span>)
        }
        else {
            return (
            <span>
                   Invalid
            </span>
            )
        }
    }

    return (
        <div className={TimeSheetHomeCSS.container}>
            <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Day</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Starting Time</TableCell>
                        <TableCell align="center">Ending Time</TableCell>
                        <TableCell align="center">Total Hours</TableCell>
                        <TableCell align="center">Floating Day</TableCell>
                        <TableCell align="center">Holiday</TableCell>
                        <TableCell align="center">Vacation Day</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.timesheetTemplate.map((row) => (
                        <TableRow key={row.day}>
                        <TableCell component="th" scope="row">
                            {row.day}
                        </TableCell>
                        <TableCell align="center">{row.date}</TableCell>
                        <TableCell align="center">
                            <TextField
                                id="time"
                                type="time"
                                defaultValue={row.startingTime}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                inputProps={{
                                step: 300, // 5 min
                                }}
                        />
                        </TableCell>
                        <TableCell align="center">
                            <TextField
                                    id="time"
                                    type="time"
                                    defaultValue={row.endingTime}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    inputProps={{
                                    step: 300, // 5 min
                                    }}
                            />
                        </TableCell>
                        <TableCell align="center">
                            
                                {totalHoursCalc(row.startingTime, row.endingTime)}
                            
                        </TableCell>
                        <TableCell align="center">
                            <Checkbox
                                checked={row.isFloatingDay}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </TableCell>
                        <TableCell align="center">
                            <Checkbox
                                checked={row.isHoliday}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </TableCell>
                        <TableCell align="center">
                            <Checkbox
                                checked={row.isVacation}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={testChange} disabled={!isValid}>
                    Save
                </Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        timesheet: state.curr_timeSheet,
        timesheetTemplate: state.timesheetTemplate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postTemplate: () => dispatch({type: actionTypes.POST_TIMESHEET_TEMPLATE}),
        editTimesheet: (payload) => dispatch({type: actionTypes.EDIT_TIMESHEET, payload}),
        getTimesheetTemplate: (payload) => dispatch({type: actionTypes.GET_TIMESHEET_TEMPLATE, payload})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeSheetHome);
