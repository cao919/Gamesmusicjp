var tag_51voa = "51voa_v0.51";
 

const btn4Me = bl$("id_4_btn_blx_51voa");
btn4Me.innerHTML = tag_51voa;

if(btn4Me){  
    var jo = new CMyJob(btn4Me);

    btn4Me.onclick = function(){
        var b = this;
        _on_off_div(b,b.v);
        b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];   
    } 
    btn4Me.onclick();
}
 
function CMyJob(myBtn){ 
    myBtn.v = blo0.blMD(myBtn.id+tag_51voa,tag_51voa,110,121,666,555,blGrey[0]);
    var tb = blo0.blDiv(myBtn.v, myBtn.v.id + "tb","tb",blGrey[1]);    
    var v1 = blo0.blDiv(myBtn.v,myBtn.v.id + "v1","v1","lightblue");
    

    this. blrStep1 = function(b,d){
        var w = {};
        w._2do = function(txt){ 
            var str = "var oReturn =" +  txt;  
			eval(str);
            oReturn.blrStep2 = function(b2,d2){
                fStep2(oReturn,b2,d2);
            }
            blo0.blShowObj2Div(d,oReturn);
        }
        var urlLrc = "http://localhost:8080/download?url=https://www.51voa.com/&filename=51voa.html"
        blo0.blAjx(w,urlLrc);
 
        b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];   
    }

    blo0.blShowObj2Div(v1,this);

    var fStep2 = function(oReturn,b2,d2){ 
        if(!d2.v){
            b2.v = blo0.blMDiv(d2, d2.id + "mv", "mv4Lyrics",444,10,1111,200,blGrey[1]);
            var v1 = blo0.blDiv(b2.v,b2.v.id+"v1","v1",blGrey[2]);
            var w = {};
            w._2do = function(txt){   
                v1.innerHTML = txt;
            }
            var urlLrc = "http://localhost:8080/" + oReturn.filename;
            blo0.blAjx(w,urlLrc);

        } 

        _on_off_div(b2,d2);
        b2.style.background = b2.style.background=="red"?blGrey[5]:blColor[4];            
    }
}