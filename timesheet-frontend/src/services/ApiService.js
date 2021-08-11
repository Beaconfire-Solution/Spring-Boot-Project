import axios from 'axios';



export function fetchTimesheetTemplate() {
    return axios.get('https://api.npoint.io/3875a568da79eafd2aa0')
}

export function fetchAllTimesheets(){
    return axios.get('http://localhost:9000/timesheet/timesheets/61101603d0ca8600cd04d961')

}

export function postTemplate(template){
    return axios.post('https://2f610c95-42e2-4af7-8779-f43307fa47ed.mock.pstmn.io', template)

}

export function getProfile(){
    return axios.get('http://localhost:11000/profile/61101603d0ca8600cd04d961')

}

export function postProfile(contact){
    return axios.post('http://localhost:11000/profile/61101603d0ca8600cd04d961', contact)
}


// For Summary Section to get a list of WeeklyTimesheets summary
export function fetchWeeklyTimesheets(){
    return axios.get('https://api.npoint.io/626ec669cd7ed6db4711')

}