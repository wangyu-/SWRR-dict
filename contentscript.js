﻿ function mytrim(str){
　　     return str.replace(/(^\s*)|(\s*$)/g, "");
　　 }
function getSelText(){
    var txt = 'nothing';
    if (window.getSelection){
        txt = window.getSelection();
    } else if (document.getSelection) {
        txt = document.getSelection();
    } else if (document.selection) {
        txt = document.selection.createRange().text;
    } else txt = "";
    //alert(txt);
    return txt;
}
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "getText"){
        	var zzzzz="<error>";
        	select_text=getSelText();
        	if(select_text!="") 
        	{
        		zzzzz=""+select_text;
        	}
        	else
        		{
			        	try
			        	{
			        	zzzzz=document.getElementsByClassName("content pull-left")[0].innerHTML.split('<small>')[0];
			        	}
			        	catch(err)
			        	{
				        	try
				        	{   
				        		zzzzz=document.getElementsByClassName("vocab")[0].innerHTML;
				          }
				          catch(err)
				          {
				          }
			        	}
		        }

        	//alert(zzzzz);

		//alert(zzzzz);
		//alert("123123");
					zzzzz=mytrim(zzzzz);
            sendResponse({data: zzzzz,method: "getText"}); //same as innerText
        }
    }
);
//alert("0000");