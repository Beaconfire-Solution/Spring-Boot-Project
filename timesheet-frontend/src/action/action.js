import * as actionType from './actionTypes';
import ApiService from '../services/ApiService';


export const getTimesheetSummary = () => (dispatch) => {
    return ApiService.fetchWeeklyTimesheets()
    .then((response) => 
    {
        dispatch({type: actionType.GET_TIMESHEET_SUMMARY, payload: response.data});
    })
}