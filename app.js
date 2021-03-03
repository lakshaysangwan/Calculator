{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/9.2.0/math.js" integrity="sha512-SewEag0kt1xsJdbfAXgLyLvYXeAoGEla4M6JSitT6ocJVI+VeUbFXkgrbloNn4cVgq46caRf31un2eoalq6YOw==" crossorigin="anonymous"></script> */}
const input = document.getElementById('input');
function hello(){
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
