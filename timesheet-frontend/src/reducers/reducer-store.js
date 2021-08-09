import React from 'react';
import * as actionTypes from '../action/actionTypes';

const initialState = {
    curr_timeSheet: [{
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
        "isVacation": true,
    }
    
    ]
}

const editTimesheet = (state, action) => {
    return {
        ...state,
        curr_timeSheet: action.payload
    }
}

export default function appReducer(state = initialState, action) {
    switch (action.type){
        case actionTypes.EDIT_TIMESHEET:
            return editTimesheet(state, action);

        default:
            return state;

    }
}
