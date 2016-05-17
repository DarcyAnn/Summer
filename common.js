/**
 * Created by Administrator on 2016-5-7.
 */
(function(){
    function encodeHTML(text){
        return text.replace(/</g,'&lt;').replace(/>/g,'&gt;')
    }
    var codelist = document.querySelectorAll('pre');
    for(var i=0;i<codelist.length;i++){
        codelist[i].innerHTML=encodeHTML(codelist[i].innerHTML);
    }
    })();