 

// for loop

// for (startvalue , condition, incrementalvalue/decrementalvalue){

// }

// for (let i = 0; i<10 ; i++){
//     console.log(i+1);
//     console.log("hello");
// } 
// console.log("loop done");


// const username = "sai laxman kadari "; 
// const stringlength = username.length;
// // console.log(stringlength);
// for (i = 0; i < stringlength ; i++){
//     console.log(username[i])
// }
// s
// a
// i
 
// l
// a
// x
// m
// a
// n
 
// k
// a
// d
// a
// r
// i 

//nested for looop
 
// for ( let i=1 ; i <=10; i++){
//     for( let j=1 ; j<=12; j++){

//       let sum  = i * j ;
//       console.log(`${i} X ${j} = ${sum}`);}
// } 


//  for (let i = 11 ; i <= 20 ; i++){
//     for(let j = 1; j<=10 ; j++){
//         let product = i*j;
//         console.log(`${i} X ${j} = ${product}`);
//     } console.log(`_________________`);
   
//  }


// const symbol = " * "
// // console.log(symbol.repeat(i));
// const readlinesync = require("readline-sync")
// const value = readlinesync.question("give input number   ")

// for (let i = 1 ; i <= value ; i++){
//     console.log(symbol.repeat(i))
// }


// const symbol = " * "
// for (let i = 0 ; i <=6 ; i++){
//     console.log(symbol.repeat(i))

// } 





// const username =  "sai laxman kadari"
//  let count = 0;
//  for (i =0 ; i < username.length; i++){
//      count++
     
// console.log(count , username[i]);

//  }
// console.log(count);
 
  // for even numbers and odd numbers


//for odd numbers
// for (let i=0 ; i<10 ; i++){
//     if (i %2 != 0){
//     console.log(i);
// }
// } 
 
           //while loop
//  let i = 0
//   while (i<10 ){
//     console.log(i);
//     i = i+1
//   }


    //enter lessthan 50 

    const readlinesync = require("readline-sync")

     let number = readlinesync.question("enter number less than 50   ")

     while (number >= 50) {
      number=readlinesync.question("try enter less than 50  ")
      
      }  
       console.log("YES!!",number ,"is lessthan 50");