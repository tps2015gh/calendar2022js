//================================================================
/**
 * file calendar1.ts
 * @update 2565-06-10 15.25
 */
//================================================================
/**
 * @file Calendar1.ts
 * @since 2022-06-10 15.25
 * @update  2022-07-17
 * @author  tps012015@gmail.com
 * @license  MIT
 * @desc
 *      all function is static function for create HTML Element
 */
import { ElBuilder } from './ElBuilder.js';
class Calendar2022js {
    //===========================================
    constructor() {
        this.elb = new ElBuilder();
    }
    //===========================================
    set_year_month(year, month) {
        this.year = year;
        this.month = month;
    }
    //===========================================
    set_root(selector) {
        console.log(" > call set_root() " + selector);
        let el = document.querySelector(selector);
        this.root = el;
        el.innerHTML = "@root(setok)";
        this.tb1 = new CalendarTable(this.root);
    }
    //===========================================
    /**
     *
     * @param div1  container for table
     */
    paint_days(div1) {
        let t1 = ElBuilder.newTableNoTr();
        let daynum = 0;
        let startcount = false;
        const START_CELL = CalendarModelInfo.getFirstDateNumberOfMonth(this.year, this.month);
        const DAY_IN_MONTH = 31;
        for (let rowi = 1; (rowi <= 6) && (daynum < DAY_IN_MONTH); rowi++) {
            // if( ){ break ; /* exit rowi */ }
            let tr1 = ElBuilder.newTr();
            for (let celli = 1; celli <= 7; celli++) {
                if (rowi == 1 && celli == START_CELL) {
                    startcount = true;
                }
                if (startcount) {
                    daynum += 1;
                }
                let c1 = ElBuilder.newTd();
                if (daynum == 0) {
                    c1.innerHTML = "r" + rowi + ".c" + celli + "<br>";
                }
                else {
                    c1.innerHTML = "r" + rowi + ".c" + celli + "<br>" + "dn: " + daynum + ",sc:" + startcount;
                }
                c1.setAttribute("xrow", "" + rowi);
                c1.setAttribute("xcell", "" + celli);
                c1.setAttribute("daynum", "99");
                tr1.appendChild(c1);
                //============================= 
            }
            t1.appendChild(tr1);
        }
        div1.appendChild(t1);
    }
    //===========================================
    paint() {
        //this.root      
        //        let mon  = ElBuilder.newTr();
        //      this.root.append(mon);
        let div1 = ElBuilder.newDiv();
        div1.innerHTML = "@calendar2022js";
        this.root.append(div1);
        // let tb1 = ElBuilder.newMonth();
        // this.root.append(tb1 )
        //=======================================
        let dYearMonth = ElBuilder.newDiv();
        dYearMonth.innerHTML = "<h1>year: " + this.year + " ,month:" + this.month + " </h1>";
        div1.append(dYearMonth);
        //=======================================
        // add Table 
        this.paint_days(div1);
        //=================
        let d1OK = ElBuilder.newDiv();
        d1OK.innerHTML = "<h1>OK " + new Date().toISOString() + " </h1>";
        div1.append(d1OK);
    }
}
//==================================
class CalendarTable {
    constructor(div) {
        this.div = div;
        this.tb1 = ElBuilder.newTableNoTr();
        this.tb1.setAttribute("border", "1");
        this.newRow();
    }
    appendRow(r) {
        this.tb1.append(r.row);
    }
    newRow() {
        let r = new CalendarRow(this);
    }
}
//==================================
class CalendarRow {
    constructor(tb1) {
        this.row = ElBuilder.newTr();
        tb1.tb1.appendChild(this.row);
    }
    newCol() {
        this.c1 = new CalendarCell(this);
        this.c1.init();
    }
}
//==================================
class CalendarCell {
    constructor(ctr) {
        this.trow = ctr;
    }
    init() {
        this.cell = ElBuilder.newTd();
        this.cell.innerHTML = "@newTD";
    }
}
//================================================================
class CalendarModelInfo {
    //===========================================
    static getFirstDateNumberOfMonth(year, month) {
        return 5;
    }
    static getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }
}
//========================
export { Calendar2022js };
