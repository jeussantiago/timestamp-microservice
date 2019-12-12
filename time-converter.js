//turns a unix timestamp to a datetime timestamp
//parameters: unix timestamp as integer
//returns: date stamp
function unix_to_date(unix) {
  //turn unix to date --> js works in millisecs - unix works in secs
  var date_time = new Date(unix * 1000);
  var date = date_time.toUTCString();
  return date
}

//checks if the number is a valid unix number
//returns boolean
function isUnix(entry) {
  return isFinite(entry) && !isNaN(parseFloat(entry))
}

//converts unix time to date time and vice versa
//parameter: input user string
//returns unix and date time in an object otherwise "NaN" if improper format
function time_converter(input) {
  var unix_time;
  var date_time;
  if(isUnix(input)) {
    //is a unix number
    unix_time = input;
    date_time = unix_to_date(input)
  } else {
    //might date format - might be wrong format - check
    //check if valid date entry
    unix_time = new Date(input).getTime()
    if (!isNaN(unix_time)) {
      //a proper date
      date_time = unix_to_date(unix_time / 1000)
    } else {
      //not a proper date - return error
      return NaN
    }
  }
  return {unix: unix_time, utc: date_time}
}

exports.time_converter = time_converter;