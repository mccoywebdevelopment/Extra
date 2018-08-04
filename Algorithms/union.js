//======================================================================================================================
var quickFind={
    id:[],
    ways:[],
    loadArray: function (nodes,row,col) {
        console.log(nodes.array);
        var i=0;
        for(var i=0;i<nodes.array.length;++i){
            if(!nodes.array[i].North_Connected && !nodes.array[i].West_Connected)
            {
                this.id.push(nodes.array[i].ID);

            }
            else if(nodes.array[i].North_Connected)
            {
                var newNumber=this.id[i-row];
                var oldNumber=this.id[i];
                for(var x=0;x<this.id.length;++x)
                {
                    if(this.id[x]===oldNumber)
                    {
                        this.id[x]=newNumber;
                    }
                }
                this.id.push(newNumber);

            }
           //else if(nodes.array[i].West_Connected){
            else{
                this.id.push(this.id[i-1]);
            }


        }
        for(var i=0;i<nodes.array.length;++i)
        {
            if(nodes.array[i].East_Connected)
            {
                oldNumber=this.id[i+1];
                newNumber=this.id[i];
                if(this.id[i]!==this.id[i+1])
                {
                    for(var ix=0;ix<this.id.length;++ix)
                    {
                        if(this.id[ix]===oldNumber)
                        {
                            this.id[ix]=newNumber;
                        }
                    }
                }

            }
        }
    },

};

var Node={
    _id:0,
    array:[],
    connectedNorth:false,
    connectedSouth:false,
    connectedWest:false,
    connectedEast:false,

    connectNorth:function () { //All of these are constructors
        this.connectedNorth=true;
    },
    connectSouth:function () {
        this.connectedSouth=true;
    },
    connectWest:function () {
        this.connectedWest=true;
    },
    connectEast:function () {
        this.connectedEast=true;
    },
    isConnectWest:function (){
        return this.connectWest();
    },
    updateArray:function(){
        this.array.push({
            "ID":this._id,
            "North_Connected":this.connectedNorth,
            "South_Connected":this.connectedSouth,
            "East_Connected":this.connectedEast,
            "West_Connected":this.connectedWest
        });
        this.connectedNorth=false;
        this.connectedSouth=false;
        this.connectedWest=false;
        this.connectedEast=false;
    },
    createHtmlNode: function() {
        this._id=this._id+1;

        var newNode=document.createElement("span");
        newNode.setAttribute("class", "dot");
        newNode.setAttribute("id",this._id.toString());

        var numNode=document.createElement("a");
        var textNode=document.createTextNode(this._id.toString());
        numNode.appendChild(textNode);
        newNode.appendChild(numNode);

        return newNode;
    }
};
//======================================================================================================================
var edges= {
    _lastRowNode:null,
    _nodeConnectedWest:0,


    createEdge: function(row,currentNode) {

        var line=document.createElement("span");
        line.setAttribute("class", "line");
        var textNode=document.createTextNode("--------");
        line.appendChild(textNode);




        var test=currentNode._id-row

        if(row==currentNode._id) { //fix
            this._lastRowNode=currentNode._id;
            return null;
        }
        else if(this._lastRowNode==currentNode._id-row)
        {
            this._lastRowNode=currentNode._id;
            return null;
        }
        else{
            this.updateLogic(false,false,true,false,currentNode,row);                                                   // FIXXXXXXXXXXXXXXXXXXXXXXXXXXX
            if(currentNode._id+1<=this._lastRowNode || currentNode._id+1<=this._lastRowNode)
            {
                this._nodeConnectedWest=currentNode._id+1;
            }
        }

        return line;
    },
    updateLogic:function(north,south,east,west,currentNode,row){//fix
        if(north && this.isTopNodeConnected(row,currentNode))
        {
            currentNode.connectNorth();
        }
        if(south)
        {
            currentNode.connectSouth();
        }
        if(east)
        {
            currentNode.connectEast();

        }
        if(west)
        {
            currentNode.connectWest();
        }
        //fix!!!
    },
    createGap: function (row,currentNode) {
        if(row==currentNode._id) { //fix
            this._lastRowNode=currentNode._id;
        }
        else if(this._lastRowNode==currentNode._id-row)
        {
            this._lastRowNode=currentNode._id;
        }

        var line=document.createElement("span");
        line.setAttribute("class", "space");
        var textNode=document.createTextNode("--------");
        line.appendChild(textNode);

        //currentNode.updateArray({currentNode});

        return line;
    },
    createVerticalEdge: function (row,currentNode) {
        var line=document.createElement("span");
        line.setAttribute("class", "vertical-line");
        /*currentNode.connectSouth();
        currentNode.updateArray({currentNode});*/

        return line;
    },
    createVerticalGap:function () {
        var line=document.createElement("span");
        line.setAttribute("class", "vertical-gap");
        return line;
    },
    isTopNodeConnected:function (row,currentNode) {
        var topNode;
        if(currentNode._id==row)
        {
            topNode=currentNode._id-this._lastRowNode;
        }
        else{
            topNode=currentNode._id-row;
        }
        if(topNode>0)
        {
            for(var i=0;i<Node.array.length-1;++i)
            {
                if(Node.array[topNode-1].South_Connected==true)
                {
                    return true;
                }

            }
        }
        return false;

    }
};
//=================================================MAIN=================================================================
//NEED TO FIX NOTH CONNECTED SINCE I CHANGE THE INDEX TO BEG W/ 0 INSTEAD OF 1 !!!!!!!!!!!!!!!
row=20;
col=20
createGrid(row,col,Node,quickFind);
quickFind.loadArray(Node,row,col);
console.log(quickFind.id);
console.log()



var nodes=document.getElementsByClassName("dot");
var startNodeClicked=false;
var endNodeClicked=false;
var startNodeId=null;
var endNodeId=null;


for(var i=0;i<nodes.length;++i)
{
    nodes[i].addEventListener("click",function () {
        if(startNodeClicked==false && endNodeClicked==false)
        {
            startNodeClicked=true;
            this.style.backgroundColor="green";
            startNodeId=this.id;
            console.log(startNodeId);
        }
        else if(startNodeClicked==true && endNodeClicked==false)
        {
            this.style.backgroundColor="red";
            endNodeId=this.id;
            endNodeClicked=true;
            console.log(startNodeId);
            if(quickFind.id[endNodeId-1]===quickFind.id[startNodeId-1])
            {
                setTimeout(connected(),2000);
            }
            else{
                notConnected();
            }



        }


    });
}





//======================================================================================================================
function notConnected() {
    console.log("Not connected");
}
function connected() {
    console.log("It's connected");
    alert("connected");
}

function createGrid(x,y,nodes,quickFind){
    for(var i=0;i<y-1;++i)
    {
        createRow(x,nodes,quickFind);
        createNewLine();
    }
    createBottomRow(x,nodes,quickFind);


}
function createRow(x,nodes,quickFind) {
    var num=0;
    var row=x;
    do{
        appendNode(nodes);
        if(num<row)
        {
            appendEdge(row,nodes,quickFind);
        }
        nodes.updateArray();

        num++;
    }while(num<row);
}
function appendNode(nodes) {
    var htmlNode=nodes.createHtmlNode();
    document.getElementById("grid").appendChild(htmlNode);


}
function appendEdge(row,nodes,quickFind){

    var num=getRndInteger(1,4);


    // returns a random integer from 1 to 4
    //1 returns horizontal edge
    // 2 returns both vertical & horizontal
    // 3 returns a vertical edge
    //4 returns nothing








    if(num==1)
    {
        var edge=edges.createEdge(row,nodes);
        var verticalGap=edges.createVerticalGap(row,nodes);
        if(edge!=null) {

            document.getElementById("grid").appendChild(edge);
        }

        var elements = document.getElementsByClassName('dot');

        var requiredElement = elements[elements.length-1];
        requiredElement.appendChild(verticalGap);


    }
    else if(num==2){
        var edge=edges.createEdge(row,nodes);
        var verticalEdge=edges.createVerticalEdge(row,nodes);
        if(edge!=null) {

            document.getElementById("grid").appendChild(edge);
        }
        var elements = document.getElementsByClassName('dot');

        var requiredElement = elements[elements.length-1];
        requiredElement.appendChild(verticalEdge);
        nodes.connectSouth();
    }
    else if(num==3)
    {
        var verticalEdge=edges.createVerticalEdge(row,nodes);
        var edgeGap=edges.createGap(row,nodes);

        var elements = document.getElementsByClassName('dot');

        var requiredElement = elements[elements.length-1];
        requiredElement.appendChild(verticalEdge);
        document.getElementById("grid").appendChild(edgeGap);
        nodes.connectSouth();
    }
    else{
        var edgeGap=edges.createGap(row,nodes);
        var verticalGap=edges.createVerticalGap(row,nodes);
        var elements = document.getElementsByClassName('dot');

        var requiredElement = elements[elements.length-1];
        requiredElement.appendChild(verticalGap);
        document.getElementById("grid").appendChild(edgeGap);
    }

    if(edges.isTopNodeConnected(row,nodes))
    {
        nodes.connectNorth();
    }
    if(nodes._id-1>0)
    {
        if(nodes.array[nodes._id-2].East_Connected)
        {
            nodes.connectWest();
        }
    }

}
function createBottomRow(x,nodes,quickFind) {
    var num=0;
    var rowNum=x;
    do{
        appendNode(nodes);
        if(edges.isTopNodeConnected(x,nodes))
        {
            nodes.connectNorth();
        }
        if(nodes._id-1>0)
        {
            if(nodes.array[nodes._id-2].East_Connected)
            {
                nodes.connectWest();
            }
        }
        if(num<rowNum-1)
        {
            appendBottomEdge(x,nodes);
        }

        nodes.updateArray();
        num++;
    }while(num<rowNum);
}
function createNewLine(){
    var line=document.createElement("br");
    document.getElementById("grid").appendChild(line);

    var p=document.createElement("p");
    var textNode=document.createTextNode("*");
    p.appendChild(textNode);
    document.getElementById("grid").appendChild(p);

}
function appendBottomEdge(row,nodes,quickFind) {
    var num=getRndInteger(1,2);  // returns a random integer from 1 to 2
    //1 returns horizontal edge
    // 2 returns nothing
    if(num==1)
    {
        var edge=edges.createEdge(row,nodes);
        var verticalGap=edges.createVerticalGap(row,nodes);
        if(edge!=null) {

            document.getElementById("grid").appendChild(edge);
        }

        var elements = document.getElementsByClassName('dot');

        var requiredElement = elements[elements.length-1];
        requiredElement.appendChild(verticalGap);


    }
    else{
        var edgeGap=edges.createGap(row,nodes);
        var verticalGap=edges.createVerticalGap(row,nodes);
        var elements = document.getElementsByClassName('dot');

        var requiredElement = elements[elements.length-1];
        requiredElement.appendChild(verticalGap);
        document.getElementById("grid").appendChild(edgeGap);
    }

    if(edges.isTopNodeConnected(row,nodes))
    {
        nodes.connectNorth();

    }
    if(nodes._id-1>0)
    {
        if(nodes.array[nodes._id-2].East_Connected)
        {
            nodes.connectWest();
        }
    }

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
