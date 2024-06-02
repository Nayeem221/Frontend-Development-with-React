let height=document.querySelector(".height");
let weight=document.querySelector(".weight");
let result=document.querySelector(".result");
let button=document.querySelector(".main button");
let p=document.querySelector(".main p");
let heighterror=document.querySelector(".main .heighterror");
let weighterror=document.querySelector(".weighterror");
button.addEventListener("click",function(){
    if(height.value==""){
       heighterror.innerHTML=("please enter your height in inch")
    }else{
        heighterror.innerHTML=("");
    }

     if(weight.value==""){
        weighterror.innerHTML="please enter weight"
     }else{
         weighterror.innerHTML=("");
     }
    if(!height.value=="" && !weight.value==""){
       let bmi=(weight.value * 2.20462) / (height.value * height.value) * 703
       result.innerHTML= "Result:" + bmi.toFixed(2)
       if(bmi<18.5){
        p.innerHTML="underweight"
        p.style.color="red"

       }else if(bmi>=18.5 &&bmi<=24){
        p.innerHTML="healthy range"
        p.style.color="green"
       }else{
        p.innerHTML="overweight"
        p.style.color="red"
       }
    }
})