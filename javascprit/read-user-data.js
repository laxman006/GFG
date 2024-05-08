/**
 * read data from user
 */
const readlinesync=require("readline-sync");

const name = readlinesync.question("what is your name ? ");
const age = readlinesync.question ("whats your age");
// const age = readlinesync.questionInt ("whats your age");


console.log(`hii ${name} "good to see you really are you ${age}`);
console.log(age);
console.log ( 2024 +  Number(age ));





































