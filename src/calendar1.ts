//================================================================
/**
 * file calendar1.ts
 * @update 2565-06-10 15.25
 */
//================================================================

class Calendar2022js {
    root : HTMLDivElement = null ;
    elb : ElBuilder = null 
    tb1 : CalendarTable ; 
    //===========================================
    constructor(){
        this.elb = new ElBuilder();
        
    }
    //===========================================
    set_root(selector: string ):void {
        console.log(" > call set_root() " + selector )
        let el = <HTMLDivElement>document.querySelector(selector);
        this.root = el ;
        el.innerHTML = "@root(setok)";
        this.tb1 = new CalendarTable(this.root);
    }
    //===========================================
    paint(){
        //this.root      
//        let mon  = ElBuilder.newTr();
  //      this.root.append(mon);
        let div1 = ElBuilder.newDiv();
        div1.innerHTML = "@calendar2022js";
        this.root.append(div1 )
        // let tb1 = ElBuilder.newMonth();
        // this.root.append(tb1 )
        
    }
}
//==================================
class CalendarTable {
    div : HTMLDivElement
    tb1 : HTMLTableElement  ;
    r1 :  CalendarRow
    constructor( div : HTMLDivElement ){
        this.div = div ;
        this.tb1 = ElBuilder.newTable();
        this.tb1.setAttribute("border","1")
        this.newRow();
    }
    private appendRow(r : CalendarRow){
        this.tb1.append( r.row) ; 
    }
    private newRow(){
        let r : CalendarRow =  new CalendarRow(this);
    }
}
//==================================
class CalendarRow {
    tb1 : CalendarTable 
    row : HTMLTableRowElement 
    c1 : CalendarCell ; 
    constructor( tb1 : CalendarTable){ 
        this.row =  ElBuilder.newTr();
        tb1.tb1.appendChild(this.row)    
    }
    newCol() : void {
        this.c1 = new CalendarCell( this );
        this.c1.init();
    }
}

//==================================
class CalendarCell {
    trow : CalendarRow
    cell : HTMLTableCellElement  ; 
    constructor(ctr : CalendarRow){
        this.trow = ctr 
    }   
    init(){
        this.cell = ElBuilder.newTd();
        this.cell.innerHTML = "@newTD"
    }
}


//================================================================
class ElBuilder{
    static newDiv(): HTMLDivElement {
        let d  :HTMLDivElement =  document.createElement("div");
        d.innerHTML = "@newdiv";
        return d ;
    }
    static newTable(): HTMLTableElement {
        let t =  document.createElement("table");
        t.setAttribute("border","2");
        return t;
    }
    static newTr() : HTMLTableRowElement{
        let t =  document.createElement("tr");
        return null;
    }        
    static newTd() : HTMLTableCellElement{
        let t =  document.createElement("td");
        t.setAttribute("border","2");
        return null;
    }    
}
//================================================================

export {Calendar2022js}