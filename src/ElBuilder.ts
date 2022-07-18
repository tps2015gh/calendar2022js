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
}
//================================================================

export {ElBuilder}