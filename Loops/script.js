

// namta with do while loops 


// let i=1
// do{
//     console.log(5+"X"+i+"="+5*i);
//     i++
// }while(i<=10)
// namta calculator 
// let result=document.querySelector(".result")


// let i=1
// do{
//  result.innerHTML+=   5+"X"+i+"="+5*i +'<br>'
//     i++
// }while(i<=10)

 
let input1=document.querySelector('.input1')
const input2=document.querySelector('.input2')
const button=document.querySelector('.tap')
const result=document.querySelector('.result')

button.addEventListener('click',()=>{
 
    if(input1.value==''||input2.value==''){

         alert('enter a number')
    }else{
        for(let i=1;i<11;i++){

            result.innerHTML=input1.value+"X"+input2.value+"="+input1.value*input2.value+'<br>'
        }
        input1.value=''
        input2.value=''
    }

})