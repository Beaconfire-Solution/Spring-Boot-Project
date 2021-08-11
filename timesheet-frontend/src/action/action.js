import * as actionType from './actionTypes';
import { fetchAllTimesheets } from '../services/ApiService'

export const getTimesheetSummary = () => (dispatch) => {
    return fetchAllTimesheets()
    .then((response) => 
    {
        dispatch({type: actionType.GET_TIMESHEET_SUMMARY, payload: response.data});
    })
}