import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';


// const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var timesheet = [{
    "day" : "Sunday",
    "date": "2021-01-17T07:00:00.000Z",
    "startingTime": "2021-01-17T07:00:00.000Z",
    "endingTime": "2021-01-17T07:00:00.000Z",
    "isFloatingDay": false,
    "isHoliday": false,
    "isVacation": false
},
{
    "day" : "Monday",
    "date": "2021-01-17T07:00:00.000Z",
    "startingTime": "2021-01-17T07:00:00.000Z",
    "endingTime": "2021-01-17T07:00:00.000Z",
    "isFloatingDay": false,
    "isHoliday": false,
    "isVacation": false
},
{
    "day" : "Tuesday",
    "date": "2021-01-17T07:00:00.000Z",
    "startingTime": "2021-01-17T07:00:00.000Z",
    "endingTime": "2021-01-17T07:00:00.000Z",
    "isFloatingDay": false,
    "isHoliday": false,
    "isVacation": false
},
{
    "day" : "Wednesday",
    "date": "2021-01-17T07:00:00.000Z",
    "startingTime": "2021-01-17T07:00:00.000Z",
    "endingTime": "2021-01-17T07:00:00.000Z",
    "isFloatingDay": false,
    "isHoliday": false,
    "isVacation": false
},
{
    "day" : "Thursday",
    "date": "2021-01-17T07:00:00.000Z",
    "startingTime": "2021-01-17T07:00:00.000Z",
    "endingTime": "2021-01-17T07:00:00.000Z",
    "isFloatingDay": false,
    "isHoliday": false,
    "isVacation": false
},
{
    "day" : "Friday",
    "date": "2021-01-17T07:00:00.000Z",
    "startingTime": "2021-01-17T07:00:00.000Z",
    "endingTime": "2021-01-17T07:00:00.000Z",
    "isFloatingDay": false,
    "isHoliday": false,
    "isVacation": false
},
{
    "day" : "Saturday",
    "date": "2025-01-17T07:00:00.000Z",
    "startingTime": "2021-01-17T07:00:00.000Z",
    "endingTime": "2021-01-17T14:00:00.000Z",
    "isFloatingDay": false,
    "isHoliday": false,
    "isVacation": false
}

]


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
    text: 'Starting Time'
},
{
    dataField: 'endingTime',
    text: 'Ending Time'
},
{
    dataField: 'startingTime',
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

function totalHoursCalc(cell, row){
    var timeStart = new Date(row.startingTime).getHours();
    var timeEnd = new Date(row.endingTime).getHours();
    var hourDiff = timeEnd - timeStart;
    return  (
     <span>
        {hourDiff} = {timeEnd} - {timeStart}
    </span>)
}

export default function TimeSheetHome() {
    return (
        <div>
            <BootstrapTable keyField='id' data={ timesheet } columns={ columns } bordered={ false }/>
        </div>
    )
}
