import { getDisplayDate } from '@material-ui/pickers/_helpers/text-field-helper';
import { setISODay } from 'date-fns';
import * as actionTypes from '../action/actionTypes';
import * as ApiService from '../services/ApiService';


const initialState = {
    weeklyTimesheets: [],
    timesheetTemplate: [],
    user_profile: {},
    curr_timeSheet: [],
    summaryTimesheets: [],
    profile: Object,
    currentWeeklyTimesheets: [],
    tableSize: 3,
}

// const setWeeklyTimesheet = (state) => {
    
// }

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


const getTimesheetSummary = (state, action) => {
    return {
        ...state,
        summaryTimesheets: action.payload, 
        currentWeeklyTimesheets : action.payload.slice(0, state.tableSize)
    };
}



const getProfile = (state, action) => {
    return {
        ...state,
        profile: action.payload
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
        
        case actionTypes.GET_TIMESHEET_SUMMARY:
            return getTimesheetSummary(state, action);

        case actionTypes.GET_WEEKLYTIMESHEETS:
            return setWeeklyTimesheet(state, action);
        case actionTypes.GET_PROFILE:
            return getProfile(state, action)
        // case actionTypes.SET_USER_ID:
        //     return setId(state, action)
        // case actionTypes.GET_USER_ID:
        //     return 

        default:
            return state;

    }
}
