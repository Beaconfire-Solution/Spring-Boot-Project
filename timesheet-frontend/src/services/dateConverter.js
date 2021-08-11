import { daysInWeek } from "date-fns";

export function convertISO_to_Date(ISODate){
    let date = new Date(ISODate);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return  year + '-' + (month<10? '0'+month : month) + '-' + (day<10? '0'+day : day);
}