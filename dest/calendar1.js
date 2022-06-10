//================================================================
/**
 * file calendar1.ts
 * @update 2565-06-10 15.25
 */
//================================================================
class Calendar2022js {
    //===========================================
    constructor() {
        this.root = null;
        this.elb = null;
        this.elb = new ElBuilder();
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
    paint() {
        //this.root      
        //        let mon  = ElBuilder.newTr();
        //      this.root.append(mon);
        let div1 = ElBuilder.newDiv();
        div1.innerHTML = "@calendar2022js";
        this.root.append(div1);
        // let tb1 = ElBuilder.newMonth();
        // this.root.append(tb1 )
    }
}
//==================================
class CalendarTable {
    constructor(div) {
        this.div = div;
        this.tb1 = ElBuilder.newTable();
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
class ElBuilder {
    static newDiv() {
        let d = document.createElement("div");
        d.innerHTML = "@newdiv";
        return d;
    }
    static newTable() {
        let t = document.createElement("table");
        t.setAttribute("border", "2");
        return t;
    }
    static newTr() {
        let t = document.createElement("tr");
        return null;
    }
    static newTd() {
        let t = document.createElement("td");
        t.setAttribute("border", "2");
        return null;
    }
}
//================================================================
export { Calendar2022js };
