import moment from "moment";

//TODO: format time in 12hrs AM-PM
export const formatTime = (time, timezone) => {
    let currTimezone = 19800;
    currTimezone -= timezone;
    console.log('currTimezone', currTimezone)
    time = new Date((time - currTimezone) * 1000);
    time = moment(time).format('h:mm A');
    return time;
}

//TODO: convert length from meter to kilometer
export const changeLengthUnit = (length) => {
    length = length / 1000;
    return length;
}

//TODO: convert speed from meter/sec to kilometer/hour
export const changeSpeedUnit = (speed) => {
    speed = (speed * 3600) / 1000;
    speed = Math.round(speed * 100) / 100;
    return speed;
}