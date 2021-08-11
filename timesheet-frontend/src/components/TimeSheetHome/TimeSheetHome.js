import {React, useState, useEffect} from 'react';
import { TextField, Checkbox, Button, makeStyles, TableBody, Table, TableCell, TableContainer, TableHead, TableRow, Paper,
    InputLabel, MenuItem , FormControl , Select } from '@material-ui/core';
// import { KeyboardTimePicker , MuiPickersUtilsProvider } from "@material-ui/pickers";
import { connect } from 'react-redux';
import * as actionTypes from '../../action/actionTypes';
import TimeSheetHomeCSS from './TimeSheetHome.module.css';
import * as ApiService from '../../services/ApiService';
// import DateFnsUtils from '@date-io/date-fns';


function TimeSheetHome(props) {

    const [isValid, setValid] = useState(true);
    const [newTimesheet, setNewTimesheet] = useState([]);

    function getWeeklyTimesheets(){
        ApiService.fetchAllTimesheets()
        .then((response)=>{
            props.getWeeklyTimesheets(response.data[0].weeklyTimesheets);
            setNewTimesheet(response.data[0].weeklyTimesheets);
        })
    }
    
    
    useEffect(() => {
        getWeeklyTimesheets();
        // console.log(newTimesheet);
    },[])

    function testChange(){
        ApiService.postTemplate(newTimesheet.dailyTimesheets);
    }
    const useStyles = makeStyles((theme)=>({
        table: {
          minWidth: 650,
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 520,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
      }));
    const classes = useStyles();

    function totalHoursCalc(startingTime, endingTime){
        var timeStart = new Date('01/07/2007 ' + startingTime);
        var timeEnd = new Date('01/07/2007 ' + endingTime);
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

    function handleStartingTimeChange(index, e){
        let changedTimesheet = [...newTimesheet.dailyTimesheets];
        let row = {...changedTimesheet[index]};
        row.startingTime = e.target.value;
        changedTimesheet[index] = row;
        setNewTimesheet({
            ...newTimesheet,
            dailyTimesheets: changedTimesheet});
    }

    function handleEndingTimeChange(index, e){
        console.log(e.target.value);
        let changedTimesheet = [...newTimesheet.dailyTimesheets];
        let row = {...changedTimesheet[index]};
        row.endingTime = e.target.value;
        changedTimesheet[index] = row;
        setNewTimesheet({
            ...newTimesheet,
            dailyTimesheets: changedTimesheet});
    }

    function handleFloatingDayChange(index, e){
        let changedTimesheet = [...newTimesheet.dailyTimesheets];
        let row = {...changedTimesheet[index]};
        row.floatingDay = e.target.checked;
        changedTimesheet[index] = row;
        setNewTimesheet({
            ...newTimesheet,
            dailyTimesheets: changedTimesheet});
    }

    function handleVacationChange(index, e){
        let changedTimesheet = [...newTimesheet.dailyTimesheets];
        let row = {...changedTimesheet[index]};
        row.vacation = e.target.checked;
        changedTimesheet[index] = row;
        setNewTimesheet({
            ...newTimesheet,
            dailyTimesheets: changedTimesheet});
    }

    function handleHolidayChange(index, e){
        let changedTimesheet = [...newTimesheet.dailyTimesheets];
        let row = {...changedTimesheet[index]};
        row.holiday = e.target.checked;
        changedTimesheet[index] = row;
        setNewTimesheet({
            ...newTimesheet,
            dailyTimesheets: changedTimesheet});
    }
    // add mode edit/view
    return (
        <div className={TimeSheetHomeCSS.container}>
            <div>
            <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">{newTimesheet.weekEnding}</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    // value={newTimesheet.weekEnding}
                    // onChange={handleChange}
                    >
                    <MenuItem value={10}>{newTimesheet.weekEnding}</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            </div>
            <br></br>
            <br></br>
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
                    {newTimesheet.dailyTimesheets && newTimesheet.dailyTimesheets.map((row, index) => (
                        <TableRow key={row.day}>
                        <TableCell component="th" scope="row">
                            {row.day}
                        </TableCell>
                        <TableCell align="center">{row.date}</TableCell>
                        <TableCell align="center">
                        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
                        <TextField
                                    id="time"
                                    type="time"
                                    defaultValue={row.startingTime}
                                    onChange={(e)=>handleStartingTimeChange(index, e)}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    minutesStep={10}
                                    inputProps={{
                                    step: 300, // 5 min
                                    }}
                            />
                        {/* <KeyboardTimePicker value={row.startingTime} mask="__:__ _M" onChange={(e)=>handleStartingTimeChange(index, e)} minutesStep={30} /> */}
                        {/* </MuiPickersUtilsProvider> */}
                        </TableCell>
                        <TableCell align="center">
                            <TextField
                                    id="time"
                                    type="time"
                                    defaultValue={row.endingTime}
                                    onChange={(e)=>handleEndingTimeChange(index, e)}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    minutesStep={10}
                                    inputProps={{
                                    step: 300, // 5 min
                                    }}
                            />
                            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardTimePicker mask="__:__ _M" value={row.endingTime} onChange={(e)=>handleEndingTimeChange(index, e)} minutesStep={30} />
                            </MuiPickersUtilsProvider> */}
                        </TableCell>
                        <TableCell align="center">
                            
                                {totalHoursCalc(row.startingTime, row.endingTime)}
                            
                        </TableCell>
                        <TableCell align="center">
                            <Checkbox
                                checked={row.floatingDay}
                                onChange={(e)=>handleFloatingDayChange(index, e)}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                disabled={row.holiday || row.vacation}
                            />
                        </TableCell>
                        <TableCell align="center">
                            <Checkbox
                                checked={row.holiday}
                                onChange={(e)=>handleHolidayChange(index, e)}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                disabled={row.vacation || row.floatingDay}
                            />
                        </TableCell>
                        <TableCell align="center">
                            <Checkbox
                                checked={row.vacation}
                                onChange={(e)=>handleVacationChange(index, e)}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                disabled={row.holiday || row.floatingDay}
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
        curr_timesheet: state.curr_timeSheet,
        timesheetTemplate: state.timesheetTemplate,
        weeklyTimesheets: state.weeklyTimesheets,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postTemplate: () => dispatch({type: actionTypes.POST_TIMESHEET_TEMPLATE}),
        editTimesheet: (payload) => dispatch({type: actionTypes.EDIT_TIMESHEET, payload}),
        getWeeklyTimesheets: (payload) => dispatch({type: actionTypes.GET_WEEKLYTIMESHEETS, payload})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeSheetHome);
