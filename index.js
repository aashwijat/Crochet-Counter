let count = 0;
let rowCount = 0;

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
    count+=1;
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
    rowCount+=1;
    document.getElementById("rowLabel").innerHTML=rowCount;
}