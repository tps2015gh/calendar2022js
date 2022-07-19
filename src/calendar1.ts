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

import { CalendarModelInfo } from './CalendarModelInfo.js';
import { ElBuilder } from './ElBuilder.js'

/**
 * self :   this variable is global variable in scope of this file  ( not real global ).  
 *          No export , so can not access from outside this module .
 */
var  self  : Calendar2022js ;  

class Calendar2022js {
    root: HTMLDivElement;
    elb: ElBuilder
    tb1: CalendarTable;
    year: number;
    month: number;
    ddSelectMonth1 : HTMLSelectElement ;
    days_layout : Array<string>;
    //===========================================
    constructor() {
        self = this ;
        this.elb = new ElBuilder();
        this.days_layout = CalendarModelInfo.getDaysLayoutArray_MondayToSatSun();
    }
    //===========================================
    set_year_month(year: number, month: number) {
        this.year = year
        this.month = month
    }

    //===========================================
    set_year_month_now(): void {
        let dt = new Date();
        // console.log( dt );
        // console.log(  dt.getFullYear() ); 
        // console.log( dt.getMonth() + 1 ); 

        this.year = dt.getFullYear();
        this.month = dt.getMonth() + 1
    }
    //===========================================
    set_root(selector: string): void {
        console.log(" > call set_root() " + selector)
        let el = <HTMLDivElement>document.querySelector(selector);
        this.root = el;
        el.innerHTML = "@root(setok)";
        this.tb1 = new CalendarTable(this.root);
    }


    //===========================================
    /**
     * 
     * @param div1  container for table
     */
    private paint_days(div1: HTMLDivElement) {
        let t1 = ElBuilder.newTableNoTr();
        let daynum = 0;
        let startcount = false;
        let DayName_Of1 :string  = CalendarModelInfo.getFirstDateNameOfMonth(this.year, this.month);
        let DAY_IN_MONTH : number = CalendarModelInfo.getDaysInMonth(this.year, this.month);

        console.assert(DayName_Of1 != null);
        console.assert(this.days_layout != null ); 
        console.assert(this.days_layout.length == 8 );  /* index 0 is empty slot */
        // console.assert(this.days_layout );

        for (let rowi = 1; (rowi <= 6) && (daynum < DAY_IN_MONTH); rowi++) {
            // if( ){ break ; /* exit rowi */ }
            let tr1 = ElBuilder.newTr();
            for (let celli = 1; celli <= 7; celli++) { 

               
                let current_cell_dayname : string = this.days_layout[celli];
                console.assert( current_cell_dayname != null );

                if ((rowi == 1) && ( current_cell_dayname == DayName_Of1)) {
                    startcount = true; /* start counting day */
                }

                if (startcount) {
                    daynum += 1;    
                }
                let c1 = ElBuilder.newTd();
                if (daynum == 0) {
                    c1.innerHTML = "r" + rowi + ".c" + celli + "<br>"
                            + "<div style='color:red;'>@: " + this.days_layout[celli] + "</div>";
                    c1.style.backgroundColor = "lightcyan"
                } else if( daynum > DAY_IN_MONTH ){
                    c1.innerHTML = "r" + rowi + ".c" + celli + "<br>"
                            + "<div style='color:red;'>@: " + this.days_layout[celli] + "</div>";
                    c1.style.backgroundColor = "lightcyan"                    
                } else {
                    c1.innerHTML = "r" + rowi + ".c" + celli
                        + "<br>" + "dn: "
                        + daynum + ",sc:" + startcount
                        + "<br> dayname : "
                        + CalendarModelInfo.getDayName(this.year, this.month, daynum)
                        + "<br> dt : "
                        + CalendarModelInfo.getDateString(this.year, this.month, daynum)
                        + "<div style='color:red;'>@: " + this.days_layout[celli] + "</div>";

                }
                c1.setAttribute("xrow", "" + rowi);
                c1.setAttribute("xcell", "" + celli);
                c1.setAttribute("daynum", "" + daynum);
                c1.setAttribute("dayname", CalendarModelInfo.getDayName(this.year, this.month, daynum));
                tr1.appendChild(c1);
                //============================= 

            }
            t1.appendChild(tr1);
        }
        div1.appendChild(t1);
    }
    //===========================================
    onchange_month(  ev: Event ) {
        // alert( " ok ")
        // alert (ev.target )
        if (ev.target) {
            console.log(" target not null ")

            let s1: HTMLSelectElement = <HTMLSelectElement>(ev.target);
            let newmonth : number =  Number.parseInt( s1.value)  ; 
            self.set_year_month(self.year , newmonth); 
            
            console.log(" clear  ")
            self.clear();
            console.log(" clear finished ")
            self.show_month_selector();
            self.paint();

            console.log(" paint finished ")
            
            // this point all new object in DOM destroyed can not refer 
            // but ddSelectMonth1 new registerd in paint() 
            // ,  so can call from object

            self.ddSelectMonth1.focus();
            
             
 
            
            // alert("" + s1.value)
        }else{ 
            console.log(" target is null  ")

        }
    }

    //===========================================
    show_month_selector(div1_selector? : string ) {
        let div1 : HTMLDivElement 
        if(div1_selector){
            div1 = document.querySelector(div1_selector)!;
        }else{
            div1 = this.root;
        }

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let mp1 = new Map<string, number>([
            // ["Jan",1 ],
            // ["Feb",2 ],
        ]);


        for (let index = 0; index < monthNames.length; index++) {
            const mName = monthNames[index];
            mp1.set(mName, index + 1);
        }

        console.log( " call show_month_selector() , month = " + this.month );
        let ddSelectMonth1 = ElBuilder.newDropDown(this.month, mp1);
        ddSelectMonth1.name = "ddSelMonth1";
        ddSelectMonth1.id = "ddSelMonth1";
        ddSelectMonth1.onchange = this.onchange_month;
        this.ddSelectMonth1 = ddSelectMonth1 ;          // register new created 

        //===================================
        let divPan = ElBuilder.newDiv();
        divPan.style.border = "1px solid orange";
        divPan.style.backgroundColor = "lightyellow";
        divPan.style.width = "100%";
        divPan.style.padding = "4px";
        divPan.style.margin = "4px";
        divPan.innerHTML = "";

        let divLabel = ElBuilder.newLabel("ddSelMonth1");
        divLabel.innerHTML = "Select Month : ";
        
        divPan.appendChild(divLabel )
        divPan.appendChild(ddSelectMonth1 )

        div1.appendChild(divPan);
    }

    clear() { 
        this.root.innerHTML = "";
    }
    //===========================================
    paint() {
        //this.root      
        //        let mon  = ElBuilder.newTr();
        //      this.root.append(mon);
        let div1 = ElBuilder.newDiv();
        div1.innerHTML = "@calendar2022js";
        this.root.append(div1)
        // let tb1 = ElBuilder.newMonth();
        // this.root.append(tb1 )

        //====================================


        //=======================================
        let dYearMonth = ElBuilder.newDiv();
        dYearMonth.innerHTML = "<h1>year: " + this.year + " ,month:" + this.month + " </h1>"
            + "dayName of 1st  : "
            + CalendarModelInfo.getFirstDateNameOfMonth(this.year, this.month);
        div1.append(dYearMonth)

        //=======================================
        // add Table 
        this.paint_days(div1);


        //=================
        let d1OK = ElBuilder.newDiv();
        d1OK.innerHTML = "<h1>OK " + new Date().toISOString() + " </h1>";
        div1.append(d1OK)
    }


}
//==================================
class CalendarTable {
    div: HTMLDivElement
    tb1: HTMLTableElement;
    r1: CalendarRow
    constructor(div: HTMLDivElement) {
        this.div = div;
        this.tb1 = ElBuilder.newTableNoTr();
        this.tb1.setAttribute("border", "1")
        this.newRow();
    }
    private appendRow(r: CalendarRow) {
        this.tb1.append(r.row);
    }
    private newRow() {
        let r: CalendarRow = new CalendarRow(this);
    }
}
//==================================
class CalendarRow {
    tb1: CalendarTable
    row: HTMLTableRowElement
    c1: CalendarCell;
    constructor(tb1: CalendarTable) {
        this.row = ElBuilder.newTr();
        tb1.tb1.appendChild(this.row)
    }
    newCol(): void {
        this.c1 = new CalendarCell(this);
        this.c1.init();
    }
}

//==================================
class CalendarCell {
    trow: CalendarRow
    cell: HTMLTableCellElement;
    constructor(ctr: CalendarRow) {
        this.trow = ctr
    }
    init() {
        this.cell = ElBuilder.newTd();
        this.cell.innerHTML = "@newTD"
    }
}


//========================


export { Calendar2022js }