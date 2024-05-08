// arr =[6,7,8,9];
// console.log("🚀 ~ ̥:", 0,1,2 ,arr)
// console.log("🚀 ~ ̥:", 0,1,2 ,...arr)

// console.log(arr.splice(2,3,0),arr);
 

// // callback function
// function fun1(callback) {
//         console.log("fn1");
//         console.log(callback);
//         callback();
//     };

// const arr =[1,2,3,4,8];
// arr.push(5)
// console.log(arr[2]);
// arr.splice(0,3);
// console.log(arr);

// console.log(arr.splice(3,1),arr)

// function fun1(call) {
//       console.log("fn1");
//       console.log("callback");
//       call();
// }̥
// function fun2(callback) {

//       console.log("fun2");
// }

// fun1(fun2);

// function traverse(value){
// console.log("🚀 ~ traverse ~ value:", value)
// }
//  const arr = [1,2,3,4,5];
// const traverse = (value, index, arr) => {
//       console.log("🚀 ~ value:", value, index,arr);

// }
// arr.forEach((value, index,arr)=>console.log(value*2,  index,arr));

      
    

//       function traverse(value) {
//       console.log("by using for each ", value);
//       return value;
// }

// const nums =[1,2,3,4,5,6];
//    const squarenums = nums.map(val => val**2);
//    console.log(squarenums);
    
//    const numbers = [4, 9, 16, 25];
// const squareRoots = numbers.map(Math.sqrt);
// console.log(squareRoots);


const num =[1,3,4,5,6,2];
//  const increment = num.map(val=>val+1);
//  console.log(increment);


//       arr.forEach((value) =>console.log(value));
      
      
// const evennums = num.filter(val=>!(val%2));   // 0 is a falsey value so we use not ! here, here the even num got falsey value so we use not to convert it to true value and print even number
// console.log("🚀 ~ evennums:", evennums)

// const oddnums = num.filter(val=>(val%2));    // here  which number get the value 0 it becomes false value and it is not printed so here all even false and odd numbers printed  
// console.log("🚀 ~ oddnums:", oddnums)

// const oddsquarenum = num.filter(val=>val%2).map(val=>val**2);
// console.log("🚀 ~ oddsquarenum:", oddsquarenum)
 
// const num =[1,3,4,5,6,2];

const sum = num.reduce((prev, curr)=>{
      console.log("🚀 ~ sum ~ prev:, curr:", prev , curr, prev*curr)
      return prev*curr;
},10000)
console.log("total sum is : " , sum );


//output
//🚀 ~ sum ~ prev:, curr: 10000 1 10000
// 🚀 ~ sum ~ prev:, curr: 10000 3 30000
// 🚀 ~ sum ~ prev:, curr: 30000 4 120000
// 🚀 ~ sum ~ prev:, curr: 120000 5 600000
// 🚀 ~ sum ~ prev:, curr: 600000 6 3600000
// 🚀 ~ sum ~ prev:, curr: 3600000 2 7200000

// const num1=[ "hii" , "bye"]

// const sum1 =num1.reduce ((st , nd)=>{
//       console.log(st,nd)
//       return st * nd
// },0)

 
