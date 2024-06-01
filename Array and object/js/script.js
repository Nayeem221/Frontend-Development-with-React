

// push method
let array=[122,323,43,243,1,12,]
console.log(array);
array.push(1222,234,23);
// adding 1222 234 and 23 with push method
// pop method 

let array2=[23,23,35,45,34] 
// (last element will be cancel out)
console.log(array2);
array2.pop()
// shift
let array3=[233,432,345,324,345]
console.log(array3);
array3.shift();
// first element will be cancel out
array3.unshift(245) ;
// will added in the first position and index number will be changed 
 let array4=[323,2342,23234,2342,22,23,43]
 console.log(array4.includes(2342));
//  searching for a value 

 console.log(array4.indexOf(2342));
//  index number


let array5=[323,2342,23234,2342,22,23,43]
console.log(array5.splice(1,4)); 
// first element shifted and then index 0-2 and splice can add value 




// javascript object/////////////////////////////////////////////////////\\


let car= {
name: "viper srt",
color: "green",
model: "t7-2005",
wheel: 4,
}
console.log(car);
console.log(car.model);




// + 2 arrays
array6=[23,34,53,424,234,23,21]
array7=[234,534,342,3423,34,23,23]
let newArray=array6.concat(array7)
console.log(newArray);