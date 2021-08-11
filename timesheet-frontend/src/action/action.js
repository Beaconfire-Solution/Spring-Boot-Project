import * as actionType from './actionTypes';
import { fetchWeeklyTimesheets} from '../services/ApiService';


export const getTimesheetSummary = () => (dispatch) => {
    return fetchWeeklyTimesheets()
    .then((response) => 
    {
        dispatch({type: actionType.GET_TIMESHEET_SUMMARY, payload: response.data});
    })
}