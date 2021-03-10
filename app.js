const input = document.getElementById('result');

function clr(){
    input.value="";
}
function back(){
    var value = "";
    var length = input.value.length;
    for(var i=0;i<length-1;i++){
        value+=input.value.charAt(i);
    }
    input.value=value;
}
function reciprocal(){
    var value = eval(input.value);
    input.value="1/"+value;
}
function square(){
    var value = eval(input.value);
    input.value=value*value;
}
function factorial(){
    var value = eval(input.value);
    var result = 1;
    for(var i=1;i<=value;i++){
        result*=i;
    }
    input.value=result;
}
function randomNo(){
    input.value=Math.ceil(Math.random()*10);
}
function calculate(){
    input.value=eval(input.value);
}
function plusMinus(){
    input.value=eval(input.value);
    var value = input.value;
    if(value>0){
        input.value=value-(value*2);
    }
    else{
        input.value=Math.abs(value);
    }
}
function insert(value){
    if(value=='left'){
        input.value+='()';
    }
    else if(value=='right'){
        input.value+=')';
    }
    else{
        input.value+=value;
    }
}
function insertOperation(value){
    let size = document.getElementById('result').value.length;
    if(!isNaN(input.value.charAt(size-1))){
        input.value+=value;
    }
    else{
        input.value.charAt(size-1)=value;
    }
}
function keyPressed(event){
    if(event.keyCode==13){
        calculate();
    }
    else if(event.keyCode==27){
        clr();
    }
}