window.onload=function(){

var array1=new Array(700);
var bars=document.querySelectorAll("#elements");
var sortBtn=document.querySelector("button");
loadArray(array1);
createBars(array1);

sortBtn.addEventListener("click",function(){

	var myNode = document.querySelector(".chart");
	while (myNode.firstChild) 
	{
    	myNode.removeChild(myNode.firstChild);
	}

	var swap=false;
	while(swap===false)
	{
		for(var i=0;i<array1.length;++i)
		{
			if((i+1)>=array1.length)
			{
				//Do nothing
				if(swap===false)
				{
					swap=true;
				}
			}
			else
			{
				var second=array1[i+1];
				var first=array1[i];

				if(first>second)
				{
					array1[i+1]=first;
					array1[i]=second;
					swap=true;
				}
			}
		}
	}
	createBars(array1);
	console.log(array1);
});





//================================FUNCTIONS=======================================================================
function loadArray(array)
{
	var rand;
	for(var i=0;i<array.length;++i)
	{
		rand=Math.floor(Math.random()*101);
		array[i]=rand;
	}
}
function contentsDisplay(array)
{
	for(var i=0;i<array.length;++i)
	{
		console.log(array[i]);
	}
}
function createBars(array){
	for(var i=0;i<700;++i)
	{
		var num=array[i];
		var bar=document.createElement("div");
		bar.classList.add("bar-"+(i+1));
		bar.setAttribute("style","grid-row-start:"+num);
		document.querySelector(".chart").appendChild(bar);
	}
	console.log(bar);

}













































}