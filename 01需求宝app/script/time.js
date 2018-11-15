function fnDate(time) {
	var date;
	if (time) {
		date = new Date(time);
	} else {
		date = new Date();
	}
	var seperator1 = "-";
	var seperator2 = ":";
	var month = fnDateMonth(date);
	var strDate = fnDateDay(date);

	var hour = fnDateHours(date);
	var minute = fnDateMinutes(date);
	var second = fnDateSeconds(date);

	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + hour + seperator2 + minute + seperator2 + second;
	return currentdate;
}

function fnDateMDHMS(time) {
	var date = new Date(time);
	var seperator1 = "-";
	var seperator2 = ":";
	var month = fnDateMonth(date);
	var strDate = fnDateDay(date);
	var hour = fnDateHours(date);
	var minute = fnDateMinutes(date);
	var second = fnDateSeconds(date);
	var currentdate = month + seperator1 + strDate + " " + hour + seperator2 + minute + seperator2 + second;
	return currentdate;
}

function fnDateYMD(time) {
	var date = new Date(time);
	var seperator1 = "-";
	var seperator2 = ":";
	var year = date.getFullYear(date);
	var month = fnDateMonth(date);
	var strDate = fnDateDay(date);
	var currentdate = year + '年' + month + '月' + strDate + '日';
	return currentdate;
}

function fnDateSeparatorYMD(time, separtor) {
	var date = new Date(time);
	var seperator1 = "-";
	var seperator2 = ":";
	var year = date.getFullYear(date);
	var month = fnDateMonth(date);
	var strDate = fnDateDay(date);
	var currentdate = year + separtor + month + separtor + strDate;
	return currentdate;
}

function fntDateMD(time) {
	var date = new Date(time);
	var seperator1 = "-";
	var seperator2 = ":";
	var month = fnDateMonth(date);
	var strDate = fnDateDay(date);
	var currentdate = month + '月' + strDate + '日';
	return currentdate;
}

function fnDateHM(time) {
	var date = new Date(time);
	var seperator1 = "-";
	var seperator2 = ":";
	var hour = fnDateHours(date);
	var minute = fnDateMinutes(date);
	var currentdate = hour + seperator2 + minute;
	return currentdate;
}

function fnDateAgo(time) {
	if (!time)
		return ''
	var currentTimestamp = new Date().getTime();
	var date = new Date(time);
	if (currentTimestamp - time < 60 * 1000) {
		return "刚刚";
	} else if (currentTimestamp - time < 60 * 60 * 1000) {
		return parseInt((currentTimestamp - time) / 1000 / 60) + "分钟前";
	} else if (currentTimestamp - time < 60 * 60 * 24 * 1000) {
		var timeStr = parseInt((currentTimestamp - time) / 1000 / 60 / 60) + "小时前";
		if (fnIsNewDay(currentTimestamp, time)) {
			timeStr = "昨天" + fnDateHM(time);
		}
		if (fnIsNewDay(currentTimestamp, time) && !fnIsNewDay(currentTimestamp - 60 * 60 * 24 * 2 * 1000, time)) {
			timeStr = "前天" + fnDateHM(time);
		}
		return timeStr;
	} else if (currentTimestamp - time >= 60 * 60 * 24 * 1000 && currentTimestamp - time < 60 * 60 * 24 * 2 * 1000) {
		if (!fnIsNewDay(currentTimestamp - 60 * 60 * 24 * 1000, time)) {
			return "昨天" + fnDateHM(time);
		}
		return "前天" + fnDateHM(time);
	} else {
		if (!fnIsNewDay(currentTimestamp - 60 * 60 * 24 * 2 * 1000, time)) {
			return "前天" + fnDateHM(time);
		}
		var currentDate = new Date(currentTimestamp);
		var currentYear = currentDate.getFullYear();
		var currentMonth = currentDate.getMonth();
		var currentDay = currentDate.getDate();
		if (date.getFullYear() == currentYear && date.getMonth() == currentMonth && date.getDate() != currentDay) {
			return fnDateMDHMS(time);
		} else if (date.getFullYear() == currentYear && date.getMonth() != currentMonth) {
			return fnDateMDHMS(time);
		} else {
			return fnDate(time);
		}
	}
}

function fnIsNewDay(time1, time2) {
	var day1 = fnDateYMD(parseInt(time1));
	var day2 = fnDateYMD(parseInt(time2));
	if (day1 != day2) {
		return true;
	}
	return false;
}

function fnDateMonth(date) {
	var month = date.getMonth() + 1;
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	return month;
}

function fnDateDay(date) {
	var strDate = date.getDate();
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	return strDate;
}

function fnDateHours(date) {
	var hour = date.getHours();
	if (hour >= 0 && hour <= 9) {
		hour = "0" + hour;
	}
	return hour;
}

function fnDateMinutes(date) {
	var minute = date.getMinutes();
	if (minute >= 0 && minute <= 9) {
		minute = "0" + minute;
	}
	return minute;
}

function fnDateSeconds(date) {
	var second = date.getSeconds();
	if (second >= 0 && second <= 9) {
		second = "0" + second;
	}
	return second;
}

function fnCompareDate(DateOne, DateTwo) {
	var OneMonth = DateOne.substring(5, DateOne.lastIndexOf("-"));
	var OneDay = DateOne.substring(DateOne.length, DateOne.lastIndexOf("-") + 1);
	var OneYear = DateOne.substring(0, DateOne.indexOf("-"));
	var TwoMonth = DateTwo.substring(5, DateTwo.lastIndexOf("-"));
	var TwoDay = DateTwo.substring(DateTwo.length, DateTwo.lastIndexOf("-") + 1);
	var TwoYear = DateTwo.substring(0, DateTwo.indexOf("-"));
    if (Date.parse(OneMonth + "/" + OneDay + "/" + OneYear) > Date.parse(TwoMonth + "/" + TwoDay + "/" + TwoYear)) {
		return true;
	} else {
		return false;
	}
}
function fnFiveDate(DateOne, DateTwo) {
    var OneMonth = DateOne.substring(5, DateOne.lastIndexOf("-"));
    var OneDay = DateOne.substring(DateOne.length, DateOne.lastIndexOf("-") + 1);
    var OneYear = DateOne.substring(0, DateOne.indexOf("-"));
    var TwoMonth = DateTwo.substring(5, DateTwo.lastIndexOf("-"));
    var TwoDay = DateTwo.substring(DateTwo.length, DateTwo.lastIndexOf("-") + 1);
    var TwoYear = DateTwo.substring(0, DateTwo.indexOf("-"));
    if ((Date.parse(TwoMonth + "/" + TwoDay + "/" + TwoYear) - Date.parse(OneMonth + "/" + OneDay + "/" + OneYear)) / 86400000 > 5) {
        return true;
    } else {
        return false;
    }
}
function fnCompareToday(DateOne) {
    var OneMonth = DateOne.substring(5, DateOne.lastIndexOf("-"));
    var OneDay = DateOne.substring(DateOne.length, DateOne.lastIndexOf("-") + 1);
    var OneYear = DateOne.substring(0, DateOne.indexOf("-"));
    var myDate = new Date();
    var TwoDay = myDate.getDate() > 9 ? myDate.getDate() : '0' + myDate.getDate();
    var TwoMonth = (myDate.getMonth() + 1) > 9 ? (myDate.getMonth() + 1) : '0' + (myDate.getMonth() + 1);
    var TwoYear  = myDate.getFullYear();
    if (Date.parse(OneMonth + "/" + OneDay + "/" + OneYear) < Date.parse((TwoMonth + "/" + TwoDay + "/" + TwoYear))) {
        return true;
    } else {
        return false;
    }
}