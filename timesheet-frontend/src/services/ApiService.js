import axios from 'axios';


export function fetchTimesheetTemplate(){
    return axios.get('https://api.npoint.io/3875a568da79eafd2aa0')
}

export function postTemplate(template){
    return axios.post('https://2f610c95-42e2-4af7-8779-f43307fa47ed.mock.pstmn.io', template)
}


// For Summary Section to get a list of WeeklyTimesheets summary
export function fetchWeeklyTimesheets(){
    return axios.get('https://api.npoint.io/3a7560ddcaa149d9173b')
}

