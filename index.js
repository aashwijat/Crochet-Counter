let count = 0;
let rowCount = 0;
let radioBtn = document.querySelectorAll("input[name='base']")
let radioBtn2 = document.querySelectorAll("input[name='base1']");
var y = 0;
var x = 0;

let findSelected = () => {
    let selected = document.querySelector("input[name='base']:checked").value;
    x = parseInt(selected);
}

let findSelected1 = () => {
    let selected1 = document.querySelector("input[name='base1']:checked").value;
    y = parseInt(selected1);
}

radioBtn.forEach(radioBtn=>{
    addEventListener("change",findSelected);
});

radioBtn2.forEach(radioBtn2=>{
    addEventListener("change",findSelected1);
});


// Stitch counter
document.getElementById("dec").onclick=function(){
    if(count==0) {
        return count;
    }
    else {
        count-=1;
    }
    
    document.getElementById("countLabel").innerHTML=count;
}

document.getElementById("res").onclick=function(){
    count=0;
    document.getElementById("countLabel").innerHTML=count;
}

document.getElementById("inc").onclick=function(){
    count=count+x;
    document.getElementById("countLabel").innerHTML=count;
}

// Row Counter
document.getElementById("dec1").onclick=function(){
    if(rowCount==0) {
        return rowCount;
    }
    else {
        rowCount-=1;
    }
    
    document.getElementById("rowLabel").innerHTML=rowCount;
}

document.getElementById("res1").onclick=function(){
    rowCount=0;
    document.getElementById("rowLabel").innerHTML=rowCount;
}

document.getElementById("inc1").onclick=function(){
    rowCount+=y;
    document.getElementById("rowLabel").innerHTML=rowCount;
}