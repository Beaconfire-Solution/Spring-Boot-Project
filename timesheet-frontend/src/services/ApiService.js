import axios from 'axios';



export function fetchTimesheetTemplate(){
    return axios.get('https://api.npoint.io/3875a568da79eafd2aa0')
}

export function fetchAllTimesheets(){
    return axios.get('http://localhost:9000/timesheet/timesheets/61101603d0ca8600cd04d961')

}

// send a new template to set as default in the future
export function postTemplate(template){
    return axios.post('https://2f610c95-42e2-4af7-8779-f43307fa47ed.mock.pstmn.io', template)

}

//update the current weekly timesheet
export function postWeeklyTimesheet(weeklyTimesheet){
    return axios.post('https://080dc608-fead-4169-9690-0bc109ef0a63.mock.pstmn.io', weeklyTimesheet)
}



// For Summary Section to get a list of WeeklyTimesheets summary
export function fetchWeeklyTimesheets(){
    return axios.get('https://api.npoint.io/626ec669cd7ed6db4711')
}

// For uploading file
export function uploadFile(file){
    let formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    return axios.post('http://localhost:9000/timesheet/fileUpload', formData, {
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    })
}

