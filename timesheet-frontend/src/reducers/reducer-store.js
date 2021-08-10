import * as actionTypes from '../action/actionTypes';
import * as ApiService from '../services/ApiService';


const initialState = {
    weeklyTimesheets: [],
    timesheetTemplate: [],
    curr_timeSheet: []
}

const setWeeklyTimesheet = (state, action) => {
    return {
        ...state,
        weeklyTimesheets: action.payload
    }
}

const setTimesheetTemplate = (state, action) =>{
    return {
        ...state,
        timesheetTemplate: action.payload
    }
}


const setCurrTimesheet = (state, action) => {
    return {
        ...state,
        curr_timeSheet: action.payload
    }
}

const postTemplate = (state) => {
    ApiService.postTemplate(state.timesheetTemplate)
    return {
        ...state
    }
}

export default function appReducer(state = initialState, action) {
    switch (action.type){

        case actionTypes.EDIT_TIMESHEET:
            return setCurrTimesheet(state, action);
        
        case actionTypes.GET_TIMESHEET_TEMPLATE:
            return setTimesheetTemplate(state, action);
        
        case actionTypes.POST_TIMESHEET_TEMPLATE:
            return postTemplate(state);
        
        case actionTypes.GET_WEEKLYTIMESHEETS:
            return setWeeklyTimesheet(state, action);

        default:
            return state;

    }
}
