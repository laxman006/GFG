
//  function greet(name) {
//     console.log(`my name is ${name}`);
    
//  }
// greet("krish"); 

// let anonymusfun = function greet(){
//     console.log("varaiable is converted to function");
// }

// anonymusfun();



//   greet( `chinnu`);
// function greet(name) {
//     console.log(`name is ${name}`);
//   }

// const greet = function (name){
//     console.log(` name is ${name}`);
// }
// greet("nandu")


// setTimeout(function ( ) {
//     console.log(`hello world `);
// }, 1000)

// const greet = name => console.log(` my name is ${name}`);
// greet("hii")

        //Parameters And Arguments :

//    function multiply (num1 , num2){

//         return num1*num2 ;
//       }
//       console.log(multiply(1,2));


// function greet (name = "world"){

//     console.log(`hello ${name}`);
    
// }
// greet()
// greet("john")

        //  //rest function 


        //  function sum(...nums) {
        //         let total = 0;
        //         for (const num of nums){
        //         total += num ;
        // }
        // return total;
        //  }
        //  console.log(sum(1,2,3,4,5,6));
         

        //  function multiply (...nums){
        //         let total = 1;
        //         for (const value of nums){
        //                 total *= value ;

        //         }
        //         return total
        //  }
        //  console.log(multiply(1,2,3,4,5,6,7,8));


          function multiply() {
               let sum = 1;
               for (i =0 ; i < arguments.length; i ++) {

                sum *= arguments[i];
               }
               return sum
         }
         console.log(multiply(1,2,5));