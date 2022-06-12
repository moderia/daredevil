console.log("Hello World");
// Created a variable and a function to execute
let randomNumber = Math.random(); //0.0-1
// if condition statement for the variable less than 0.5
if (randomNumber < 0.50) {
    //verifies that condition was met
    console.log("Condition was Met");
    //Outputs a random number
    console.log(randomNumber);

}

//Condition statement for variable greater than or equal to 0.5
if (randomNumber >= 0.5) {
    // Outputs the string condition was met
    console.log('Condition Was Met');
    //outputs the integers for the passing variable
    console.log(randomNumber); 
}

// Set a constant variable for day of week 
const dayOfWeek = 'Saturday';

// If condition statement for Monday
if (dayOfWeek === 'Monday'){
    // Outputs string statement if condition was met 
    console.log("Yay its Monday!");
   //else if  condition statement for Friday
} else if (dayOfWeek === 'Friday'){
    //Outputs string statement if condition passes
    console.log("Yay Its Friday");
//else if condition for the variable Saturday
}else if (dayOfWeek === 'Saturday') {
    //Outputs string statement if condition passes 
    console.log("You have the correct Day from the variable"); 

}
// Variable represents age and shows a prompt requesting an age input
const age = prompt("Enter An Age");
// if condition statement for a variable greater than age 5 
if (age < 5) {
    //Outputs string statement if condition passes
    console.log("Hey, you're a baby!");
// else if conidtion for age greater than 10
} else if (age < 10) {
    //Outputs string statement if condition passes
    console.log("Hey, you're just a kid!");
// else if condition for age greater than 35
} else if (age < 35) {
    //Outputs string statement if condition passes
    console.log("You're getting older.");
}
// IF ALL OTHER CONDITIONS FAIL - ELSE. 
else {
    //Outputs this string statement if all other conditions fail
    console.log("You are over the age of 35.");
}

// switch condition
switch (fruit) {
    //case condition for oranges
    case 'Oranges':
        //If condition passes, output this string
        console.log("Oranges are $0.59 a pound");
        break;
    // Case condition for Bananas
    case 'Bananas':
        //If condition passes, output this string
        console.log("Bananas are $0.10 a pound");
        break;
    // Case condition for
    case 'Avocados':
        //If condition passes, output this string
        console.log("Advocados are expensive");   
        break; 
    // Case condition for
    case 'Papayas':
        //If condition passes, output this string
        console.log("Papayas are $0.70 a pound");
         break;
        // If all conditions fail, output default
    default:
         console.log("Last Resort If All Conditions Fail");
    
     }

 // declared password variable with a prompt request    
 const password = prompt("Enter in a new password");
// if condition for password length must be greater than or equal to 6 characters
 if (password.length >= 6) {
     // nested if condition confirms no spaces in password
     if (password.indexOf(' ') === -1) {
         //if condition passes, output valid password 
         console.log("Valid Password");
     // else condition for nested if condition
     } else {
        // if nested if condition fails, output password cant have spaces
         console.log("Password Cant Have Spaces");
     }
    // if condition fails then - ELSE 
 } else {
    // Output statement for else 
     console.log("Password is too short");
 }

 //created function  
 function singSong() {
    // Output console log for function
    console.log("DO");
    console.log("RE");
    console.log("ME");
}
//Calling the function 
singSong()
singSong()
singSong()

// Created function with a variable passing through the argument parameter 
function greet(firstName) {
    // Outputs template string 
    console.log(`Hey There, ${firstName}`)
}
//Calls the function and prints out a statement  
greet('Boomer');

//declares function name and passes two variables in argument parameter 
function greet1(firstName,lastName) {
    //Prints out template string 
    console.log(`Hey There, ${firstName} ${lastName}`)
}
//Calls the function and prints out statement with two variables 
greet1('Boomer','Sooner');
