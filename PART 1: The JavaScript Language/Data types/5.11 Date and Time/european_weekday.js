// TASK 3

function getLocalDay(date) {
    let day = date.getDay();

    // weekday 0 (sunday) is 7 in European
    if (day == 0) {
        day = 7;
    }

    return day;
}

let date = new Date(2012, 0, 3);
alert( getLocalDay(date) );     // 2 (Tuesday)