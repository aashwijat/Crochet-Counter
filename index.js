let count = 0;

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