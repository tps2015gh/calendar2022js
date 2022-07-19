/**
 * @file ElBuilder.ts
 * @since  2022-07-17
 * @author  tps012015@g
 * @license  MIT
 * @desc
 *      all function is static function for create HTML Element
 */
class ElBuilder {
    static newDiv() {
        let d = document.createElement("div");
        d.innerHTML = "@newdiv";
        return d;
    }
    static newLabel(forWhatId) {
        let el = document.createElement("label");
        el.innerHTML = "@label";
        el.setAttribute("for", forWhatId);
        return el;
    }
    static newTableNoTr() {
        let t = document.createElement("table");
        t.setAttribute("border", "2");
        return t;
    }
    static newTr() {
        let t = document.createElement("tr");
        return t;
    }
    static newTd() {
        let t = document.createElement("td");
        t.setAttribute("border", "2");
        return t;
    }
    static newDropDown(value, mp) {
        let s = document.createElement("select");
        mp.forEach((val, key) => {
            let op = document.createElement("option");
            op.innerHTML = key + "/" + val;
            op.value = "" + val;
            if (val == value) {
                op.selected = true;
            }
            s.appendChild(op);
        });
        return s;
    }
}
//================================================================
export { ElBuilder };
