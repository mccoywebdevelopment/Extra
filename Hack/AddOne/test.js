/*$(document).ready(function(){

	alert("Hello");
	var node=document.getElementsByName("input");
    $("#press").click(function(){
        document.getElementById("input1").value="Text";
        document.getElementById("submit1").click();
    });
    


});*/
$(document).ready(function(){

    $("#press").click(function(){
    	var x=0;
    	do
    	{
    		x=x+1;
    		document.getElementById("input1").value=x;
    	}while(x<100);
    	alert("The value is:"+x);
        //document.getElementById("input1").value="Text";
        document.getElementById("submit1").click();
    });
    


});