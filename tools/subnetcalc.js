class Page1{

    masknum = 0 ;
    
    onload(){
        console.log(" > onload ")
        this.setMask (28)
    }
    setMask( num ){
        let m = document.querySelector("#mask")
        m.value = num
        this.masknum = num
        console.log("setmask " + this.masknum)
        let html1 = this.calc_host();
        this.setHtml("#calc_ip_count",html1)

        //=================================
        let html2  = this.calc_mask();
        this.setHtml("#calc_mask",html2);
    }
    on_maskchange(htmltextbox){
        let val = htmltextbox.value
        let valnum = parseInt(val);
        console.log("on_maskchange: " + valnum )
        this.masknum = valnum 
        let html1 = this.calc_host();
        this.setHtml("#calc_ip_count",html1)

        //=================================
        let html2  = this.calc_mask();
        this.setHtml("#calc_mask",html2);
    }
    setHtml(selector ,html ){
        let el = document.querySelector(selector);
        el.innerHTML = html
    }

    calc_host(){
        console.log("calc_host() ... ") 
        this.rightBitCount = (32 - this.masknum);
        this.host_address = Math.pow(2,this.rightBitCount);  
        let str  = 
        " right Bit Count = " + this.rightBitCount + " bit <br> " +
        "= 2^32 -  2^" + this.rightBitCount  + "<bR> = " + 
        ("2^" + this.rightBitCount + " = " +  this.host_address + " IP Address");
        console.log(str );        
        return str ;
    }
    calc_mask(){
        this.OCT4 = 255 - Math.pow(2, this.rightBitCount) +1 ; 
        console.log("calc_mask() ... ");
        let str  = 
        "  จำนวนบิตขวามือ คือ  " + this.rightBitCount  + " <br> " +
        "  เท่ากับ 2^MRB  = 2^" +   this.rightBitCount  + " <br> " +
        "  MRB.Calc = " +  Math.pow(2, this.rightBitCount) + "<bR>  " +     
        "จำนวน เลข subnet = 255 - MRB.Calc + 1  =  " +  this.OCT4  + "<bR>  "      
        + "<br>"
        + " Subnet Mask = 255.255.255." + this.OCT4 
        + "<br><br> ";
        console.log(str );        
        return str ;
    }

}

export {Page1}