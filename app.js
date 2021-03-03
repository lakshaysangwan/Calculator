const input = document.getElementById('input');
const body = document.getElementById('main');
function clr(){
    input.value="";
}
function enter(x){
    if(x=='left'){
        input.value+=')';
    }
    else if(x=='right'){
        input.value+='(';
    }
    else{
        input.value+=x;
    }
}
function back(){
    var hello = input.value.length ;
    var result='';
    for(var i=0;i<hello-1;i++){
        result+=input.value.charAt(i);
    }
    input.value=result;
}
function insert(event){
    var x = event.key;
    input.value+=x;
}
input.addEventListener("keypress",function(e){
    if(e.keyCode == 13){
        result();
    }
    else if(e.keyCode == 27){
        clr();
    }
});