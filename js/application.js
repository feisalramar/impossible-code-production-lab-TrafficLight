var last;
var run;

function turnRed(){
    var x = document.getElementById("red");
    x.className = "redOn";
    last="red";
    turnoff("green","yellow","greenOff","yellowoff");
}

function turnGreen(){
    var x = document.getElementById("green");
    x.className = "greenOn";
    last="green";
    turnoff("yellow","red","yellowOff","redoff");
}

function turnYellow(){
    var x = document.getElementById("yellow");
    x.className = "yellowOn";
    last="yellow"
    turnoff("green","red","greenOff","redoff");
}

function turnoff(id1,id2,class1,class2){
    var light1=document.getElementById(id1);
    var light2=document.getElementById(id2);
    light1.className=class1;
    light2.className=class2;
}


function auto(){
    if(last=="red"){
        turnYellow();
        run = setTimeout(auto,3000);
    }
    else if(last=="yellow"){
        turnGreen();
        run = setTimeout(auto,3000);
    }else{
        turnRed();
        run = setTimeout(auto,3000);
    }
}


function clickRed(){
    turnRed();
    last="green";
    clearTimeout(run);
}


function clickYellow(){
    turnYellow();
    last="red";
    clearTimeout(run);
}


function clickGreen(){
    turnGreen();
    last="yellow";
    clearTimeout(run);
}
