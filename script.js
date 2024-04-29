let password=document.getElementById("password")
let passicon=document.getElementById("eye")
eye.onclick=function(){
    if(password.type == "password"){
        password.type="text"
        eye.src="pic/view.png"
    }
    else{
        password.type="password"
        eye.src="pic/eye close.png"
    }
    password.onkeydown= function(){
        eye.src="pic/eye close.png"
        
        password.type="password"

    }
}




let eight=document.getElementById("eight")
let upper=document.getElementById("upper")
let lower=document.getElementById("lower")
let special=document.getElementById("special")
let number=document.getElementById("number")
let submitbtn=document.getElementById("submit")
let finalbtn=document.querySelector(".finalbtn")
let one;
let two;
let three;
let four;
let five;
password.onkeyup=()=>{
 

    var upperletters=/[A-Z]/g;
    if(password.value.match(upperletters)){
        upper.classList.add("valid")
        upper.classList.remove("invalid")
        one=true;
       
    }else{
        upper.classList.add("invalid")
        upper.classList.remove("valid")
        one=false
        
    }


    var lowerletters=/[a-z]/g;
    if(password.value.match(lowerletters)){
        lower.classList.add("valid")
        lower.classList.remove("invalid")
        two=true
      
    }else{
        lower.classList.add("invalid")
        lower.classList.remove("valid")
        two=false
        
    }
var specialchar=/[!@#$%^&*?/<>":;]/g
if(password.value.match(specialchar)){
    special.classList.add("valid")
    special.classList.remove("invalid")
        three=true
}else{
    special.classList.add("invalid")
    special.classList.remove("valid")
    three=false
    
}

var numbers=/[0-9]/g
if(password.value.match(numbers)){
    number.classList.add("valid")
    number.classList.remove("invalid")
  four=true
}else{
    number.classList.add("invalid")
    number.classList.remove("valid")
    four=false
    
}

if(password.value.length >=8){
    eight.classList.add("valid")
    eight.classList.remove("invalid")
  five=true
}else{
    eight.classList.add("invalid")
    eight.classList.remove("valid")
    five=false
    
}



 
   
    if(four==true && one==true && two==true && three==true && five==true){
   
        submitbtn.style.width="100%"
        submitbtn.style.height="2rem"
        submitbtn.style.marginTop="1rem"
        console.log("all is true")
        // submitbtn.classList.add("finalbtnnew")

    }
    else{
        submitbtn.style.width="0%"
        submitbtn.style.height="0"
   
        // submitbtn.classList.remove("finalbtnnew")
    }


}


let wrapper=document.querySelector(".wrapper")

let btnok=document.getElementById("ok")
submitbtn.addEventListener("click",popup)



function popup(event){
   
event.preventDefault()
    wrapper.classList.add("move")
    console.log("popup")
}

btnok.addEventListener("click",popdown)
function popdown(){
    wrapper.classList.remove("move")
}




