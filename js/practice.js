function scriphandle(){
alert("do you want to proceed?");
if(confirm("proceed to next page")){
    return true;
}else{
    return false;
}
}
 

function prompthandle(){

var ans = prompt("what is your name?","");
if(ans) {
    alert("your name is: " + ans);
    document.getElementById('displaytext').innerHTML = ans;
}else{
    alert("You did not say anything");
}

}
function alertbut(){
alert("you clicked the alert button");

}