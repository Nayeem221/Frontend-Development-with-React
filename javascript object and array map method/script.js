// let arr=['nayeem' ,'ridoy','nadeem','mim']
//   adding two varible with dollar sign
// let a ='nayeem'
// let b= `I am ${a} `
// console.log(b);

// arr.pop();
// arr.push(9)
// console.log(arr);
// let obj={
    // name:'nayeem',
    // id:'18-38917-3',
    // Department:'Cse'
    // }
    // console.log(obj.name);
    // console.log(obj.id);
    // console.log(obj.Department);
    
//push
//pop
//shift 
//unshift 
//dlete an element 
   //array concat method    
// let arr=['nayeem','redwaan','rikisi','ridoy']

// let arr2=['mim' ,'tim']
//  let arr3=arr.concat(arr2)
//  console.log(arr3); it will add both the varibale array in a new variable 


// //push
// const arr=['nayeem' ,'ridoy','asim','ridom']
// arr.push('here')
// //pop last element will be deleted 
// arr.pop()
// //shift
// arr.shift()
// //unshift
// arr.unshift('unshift') 
// //[unshift,ridoy asim ridom]
// delete arr[2]//index 2 will be deleted.
// console.log(arr);

const obj=[
        {
          "id": 1,
          "name": "Liam Johnson",
          "email": "liam.johnson@example.com",
          "age": 25,
          "city": "New York"
        },
        {
          "id": 2,
          "name": "Emma Brown",
          "email": "emma.brown@example.com",
          "age": 30,
          "city": "Los Angeles"
        },
        {
          "id": 3,
          "name": "Noah Williams",
          "email": "noah.williams@example.com",
          "age": 28,
          "city": "Chicago"
        },
        {
          "id": 4,
          "name": "Olivia Smith",
          "email": "olivia.smith@example.com",
          "age": 22,
          "city": "Houston"
        },
        {
          "id": 5,
          "name": "Sophia Davis",
          "email": "sophia.davis@example.com",
          "age": 35,
          "city": "Phoenix"
        }
      ]
//Map method and find their specific name id and email 
 obj.map((key)=>{
  
     console.log(key.name);
     console.log(key.age);
     console.log(key.email)


 })




