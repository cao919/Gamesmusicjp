var tag_51voa = "51voa_v0.212";
 

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
    myBtn.ctx = {};
    myBtn.v = blo0.blMD(myBtn.id+tag_51voa,tag_51voa,11,121,111,555,blGrey[0]);
    var tb = blo0.blDiv(myBtn.v, myBtn.v.id + "tb","tb",blGrey[1]);    
    var v1 = blo0.blDiv(myBtn.v,myBtn.v.id + "v1","v1","lightblue");
    

    this. blrDownload51VOAIndex = function(b,d){
        var w = {};
        w._2do = function(txt){ 
            var str = "var oReturn =" +  txt;  
			eval(str);
            oReturn.blrShowMe = function(b2,d2){
                fShowLocalHTMLFile(oReturn.filename,b2,d2);
            }
            blo0.blShowObj2Div(d,oReturn);
        }
        var urlLrc = "http://localhost:8080/download?url=https://www.51voa.com/&filename=index_51voa.html"
        blo0.blAjx(w,urlLrc);
 
        b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];   
    }
    this.blrStep2 = function(b,d){
        fStep2(b,d,myBtn.ctx);
    }
    this.blrStep3 = function(b,d){
        fStep3(b,d,myBtn.ctx);
    }
    this. blrSandBox = function(b,d){
        if(!d.v){
            d.v = blo0.blSandBox(d);
        }
        _on_off_div(b,d);
        b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];   
    }

    blo0.blShowObj2Div(v1,this);

    var fShowLocalHTMLFile = function(filename,b2,d2){ 
        if(!d2.v){
            b2.v = blo0.blMDiv(d2, d2.id + "mv", "mv4Lyrics",444,10,1111,200,blGrey[1]);
            var v1 = blo0.blDiv(b2.v,b2.v.id+"v1","v1",blGrey[2]);
            var w = {};
            w._2do = function(txt){   
                v1.innerHTML = txt;
            }
            var urlLrc = "http://localhost:8080/" + filename;
            blo0.blAjx(w,urlLrc);
        } 

        _on_off_div(b2,d2);
        b2.style.background = b2.style.background=="red"?blGrey[5]:blColor[4];            
    }
    var fStep2 = function(b,d,c){
        var md =blo0.blMD("md4fStep2","md4fStep2", 222 ,121, 333 ,555,blGrey[0]);
        md.v1 = blo0.blDiv(md,md.id+"v1","v1",blGrey[2]);
        var x = new CTest();
        blo0.blShowObj2Div(md.v1, x); 
        _on_off_div(this,md); 
        
        function CTest(){
            this.blrFun1 = function(b,d){
                var tb = blo0.blDiv(d,d.id+"tb","tb","grey");
                var v1= blo0.blDiv(d,d.id+"v1","v1","white");
                const x = document.getElementsByTagName("ul");
                var n = 0;
                for(i in x){
                    n++;
                    var btn = blo0.blBtn(tb,tb.id+"btn"+n,n,"grey");
                    btn.onclick = function(_myBtn,_i,_n){
                    return function(){ 
                        v1.innerHTML = _i.innerHTML;
                        c.o = _i.getElementsByTagName("li");                        
                    }
                    }(btn,x[i],n);
                }
            };
        }
    }
    var fStep3 = function(b,d,c){
        var md =blo0.blMD("md4fStep3","md4fStep3", 333 ,121, 333 ,555,blGrey[0]);
        var tb = blo0.blDiv(md,md.id+"tb","tb",blGrey[0]);
        var v1 = blo0.blDiv(md,md.id+"v1","v1",blGrey[2]);
        var n = 0;
        var ls = [];
        for(i in c.o){
            n++;
            var btn = blo0.blBtn(tb,tb.id+"btn"+n,n,"grey");  
            btn.onclick = function(_myBtn,_i,_n){
                return function(){
                    fA4Step3(v1,_i);
                    blo0.blMarkBtnInList(_myBtn,ls,"yellow","grey"); 
                }
            }(btn,c.o[i],n); 
            ls.push(btn);
        }        
        _on_off_div(this,md); 
    }
    var fA4Step3 = function(v,_i){
        v.innerHTML = "";
        var a = _i.getElementsByTagName("a"); 
        var l = _i.getElementsByClassName("lrc"); 
        var t = _i.getElementsByClassName("tran"); 
        var n = 1;
        var tb = blo0.blDiv(v,v.id+"tb","tb","gray");
        var v1 = blo0.blDiv(v,v.id+"v1","v1","gray");
        var btnLrc = null;
        if(l.length>0){
            btnLrc = blo0.blBtn(tb,tb.id+"btnLrc","lrc","purple"); n++;
            var a1 = l[0].href;
            var a2 = a1.split("/lrc/");

            btnLrc.lrcURL = "https://www.51voa.com//lrc/" + a2[1];
        }
        if(t.length>0){
            var btnTran = blo0.blBtn(tb,tb.id+"btnTran","btnTran","green"); n++;
        }
        if(btnLrc){
            var url = "http://localhost:8080/download?url=https://www.51voa.com/";
            var a1 = a[n].href;
            var a2 = a1.split("VOA_Special_English");
            url += "VOA_Special_English" + a2[1];
            url += "&filename=lrcPage.html";
            btnLrc.onclick = function(){
                fDownloadLrcPage(this,v1,url);
            }
        } 
        
        v1.innerHTML = a.length + ":" + l.length + ":" + t.length + ": n =" + n + " :lrcHREF=" +  a[n].href;        
    }
    var fDownloadLrcPage = function(b,d,url){
        var w = {};
        w._2do = function(txt){ 
            var str = "var oReturn =" +  txt;  
			eval(str);
            oReturn.originalURL = url;
            oReturn.blrShowLrcPage = function(b2,d2){
                fShowLocalHTMLFile(oReturn.filename,b2,d2);
            }
            oReturn.blrLastStep = function(b3,d3){ 
                var o = {};                
                o.v = "lastV0.11";
                o.now = Date();
                o.lrcURL = b.lrcURL;
                o.mp3URL  = document.getElementById("mp3");
                var imgs = document.getElementsByTagName("img");
                o.imgURL = imgs[2].src;

                o.blrCreateMP4 = function(b4,d4){ _createMP4(b4,d4,o.lrcURL,o.mp3URL,o.imgURL);};
                o.blrCreateBLS = function(b5,d5){ _createBLS(b5,d5,o.lrcURL,o.mp3URL,o.imgURL);};
                blo0.blShowObj2Div(d3,o);
            }
            blo0.blShowObj2Div(d,oReturn);
        } 
        blo0.blAjx(w,url);
 
        b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];   
    }

    var _createMP4 = function(b,d,_urlLrc,_urlMP3,_urlImg){
        
        var urlMP4 = "http://localhost:8080/image/combine?subtitlefile=";
        urlMP4 += _urlLrc;
        urlMP4 +=  "&audiofile=" +_urlMP3;
        urlMP4 += "&bgfile=" + _urlImg; 

        var w = {};
        w._2do = function(resTxt){
            d.innerHTML = resTxt;    
        }
        
        blo0.blAjx(w,urlMP4);
        b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];   
    }
    var _createBLS = function(b,d,ul,ua,ui){
        var o1 = {};
        o1.urlMp3 = ua;
        o1.urlLrc = ul;
        o1.urlImg = ui;
        o1.blr2MakeMP4 = function(_o){ 
            var data = _makeBLS(ua,ul,ui);
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                //ta.value = this.responseText; 
            }	
            });
            xhr.open("POST", "http://localhost:8080/json?fileName=v_51voa.json");
            xhr.setRequestHeader("Content-Type", "text/plain");
            xhr.send(data);

            return function(b,d){
                var url = 'http://localhost:8080/image/json2video?script=video16.json&video=51voa.mp4';
                var w = {};
                w._2do = function(txt){
                    d.innerHTML = txt;
                }
                blo0.blAjx(w,url);
            }
        }(o1);


        blo0.blShowObj2Div(d,o1);
    }
    var _makeBLS = function(ua,ul,ui){         
        var o= {};
        o.v = "v0.32";
        o.ua = ua;
        o.ul = ul;
        o.ui = ui;
        var r = JSON.stringify(o);
        return r;
    }
}