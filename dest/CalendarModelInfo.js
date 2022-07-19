//================================================================
export class CalendarModelInfo {
    //===========================================
    /**
     *
     * @param year
     * @param month
     * @returns number
     * @see
     *      https://www.codegrepper.com/code-examples/javascript/get+day+number+from+date+javascript
     */
    static getFirstDateNameOfMonth(year, month) {
        let dt1 = new Date(year, month - 1, 1);
        let firstDayName = CalendarModelInfo.getDayName(year, month, 1);
        console.log(year == 2022 && month == 1 && firstDayName == "Friday");
        return firstDayName;
    }
    static getDaysInMonth(year, month) {
        return new Date(year, month - 1, 0).getDate();
    }
    static getDateString(year, month, day) {
        let a = new Date(year, month - 1, day);
        let r = a.toString();
        return r;
    }
    static getDayName(year, month, day) {
        let a = new Date(year, month - 1, day);
        let weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        let r = weekdays[a.getDay()];
        return r;
    }
    static getDaysLayoutArray_MondayToSatSun() {
        let weekdays = new Array(7);
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        weekdays[7] = "Sunday";
        return weekdays;
    }
}
