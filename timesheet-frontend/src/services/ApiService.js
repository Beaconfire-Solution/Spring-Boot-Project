import axios from 'axios';


export function fetchAllTimesheets(){
    return axios.get('http://localhost:9000/timesheet/timesheets/61101603d0ca8600cd04d961')
}

export function postTemplate(template){
    return axios.post('https://2f610c95-42e2-4af7-8779-f43307fa47ed.mock.pstmn.io', template)
}