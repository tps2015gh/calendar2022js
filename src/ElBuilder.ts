/**
 * @file ElBuilder.ts
 * @since  2022-07-17
 * @author  tps012015@g
 * @license  MIT 
 * @desc  
 *      all function is static function for create HTML Element
 */
class ElBuilder{
    static newDiv(): HTMLDivElement {
        let d  :HTMLDivElement =  document.createElement("div");
        d.innerHTML = "@newdiv";
        return d ;
    }
    static newLabel(forWhatId : string ): HTMLLabelElement {
        let el  :HTMLLabelElement =  document.createElement("label");
        el.innerHTML = "@label";
        el.setAttribute("for" , forWhatId);
        return  el ;
    }    
    static newTableNoTr (): HTMLTableElement {
        let t =  document.createElement("table");
        t.setAttribute("border","2");
        return t;
    }
    static newTr() : HTMLTableRowElement{
        let t =  document.createElement("tr");
        return t;
    }        
    static newTd() : HTMLTableCellElement{
        let t =  document.createElement("td");
        t.setAttribute("border","2");
        return t;
    }    

    static newDropDown( value : number , mp  : Map<string,number> ) : HTMLSelectElement{
        let s = document.createElement("select");
        mp.forEach((val:number ,key:string ) =>{
            let op = document.createElement("option");
            op.innerHTML =  key + "/" + val
            op.value = ""+ val 
            if( val  == value){
                op.selected =true ;
            }
            s.appendChild(op )
        })
        return s ; 
    }
}
//================================================================

export {ElBuilder}