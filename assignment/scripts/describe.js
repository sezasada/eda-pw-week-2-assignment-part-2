// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it's value to Dane.
// Then, we create an if/else statement that logs 'Hi, Mary!' only if there is an exact match between the variable - name and 'Mary'.
// If they are not true, with an exact match, 'How do you do?' will be logged. 
// Because name is not equal to 'Mary', we console.log('How do you do?').

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable - secret and set its value to false. 
// We create a second variable - code and set its value to 123.
// We create an if statement, with the condition that the variable code is an exact match to the value 123. The variable secret has the value of the string 'super' and the variable code has the value of (code multiplied 2). 
// The second if statement's condition says the variable code is greater than 250. The variable secret now has the value of 'duper'.
// Because code = 123, console.log(secret) will yield 'super' as its output.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a variable isStudent and set its value to true. We create a variable age and set is value to 34. We create a variable zip and set its value to 55407.
// We create an if/else statement. It states: if isStudent an exact match to the boolean true AND zip has a vale greater than 80000, 'You're a student on the West Coast!' will be logged to the console. 
// If the variable isStudent is an exact match to the boolean false or the variable age is less than 30, 'What are your hobbies?' will be logged to the console. 
// If the variable isStudent is an exact match to the boolean true, 'Welcome to Prime!' will be logged to the console.
// If none of the above conditions are satisfied, 'How about the weather?' will be logged to the console.
// Because isStudent = true, 'Welcome to Prime!' is logged to the console. 

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
// FIX - colorOne is set to 'red', should be set to 'blue'.
let colorTwo = 'blue';
// FIX - colorTwo is set to 'blue', should be set to 'red'.
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
// FIX - colorOne and colorTwo should both be set to 'purple'. - colorTwo = 'purple';
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// FIX - Because both temp and time variables remain the same no matter what, at least in this problem, they should both be declared as constants. - const temp = 40; 
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}

// FIX - Instead of using || we use && because both sides must be true. - if (temp > 39 && time >= 4) { console.log('throw away the food!'); }
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// FIX - I believe age and min age are declared properly becuase the variable age could be changed to any value but minAge can't be changed. Just wanted to share my explanation for not changing anything. 
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
// FIX - Correction - if(age >= minAge) {
  console.log('enter');
}
// FIX - If we are supposed to follow the directions as precise as possible, my code change is correct. age and minAge should be flipped along with the <= sign. no else statement should be included as the directions did not indicate it being neccessary. 
// However, this code also gives the same result...
// if(minAge <= age) {
    console.log('enter');
  } 
*/

