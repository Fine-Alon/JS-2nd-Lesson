# JS-2nd-Lesson
### task 1:search for a substring within a string.
### task 2:convert string to upper/lower case and extract parts from string.  
### task 3:check if numbers are even.  
Task 1...  
Check password safety. A password is safety when it has at least four characters, one of which is '-' or '_'. Print "Password safety" or "Password not safety enough".  

Task 2...  
you need to format the lines uniformly. the first letters of the first and last name are uppercase, and the remaining letters are lowercase. Write the result to new variables and output them. print the message "Name changed" or "Name unchanged"  

Task 3...  
It is necessary to display a message indicating whether the number is even or odd.  

my decision:  
// Task 1:  

let password = '_zxd';  

function checkSafetyPassword(password) {  
__     let checking = '';  
__     if (password.length >= 4 && (password.includes('-') || password.includes('_'))) {  
____          checking = 'Safety password';  
__     } else {  
____         checking = ' Password not safety enough';  
__     }  
__     return checking;  
};  

console.log(checkSafetyPassword(password) + '\n');  

// Task 2:  

let userName = 'Alon';  
let userSurname = 'Fine';  

function alignUserName(name, surname) {  
__     let changes = null;  
__     let correctName = (name.substring(0, 1)).toUpperCase() + (name.substring(1)).toLowerCase();  
__     let correctSurname = (surname.substring(0, 1)).toUpperCase() + (surname.substring(1)).toLowerCase();  
__     if (name === correctName && surname === correctSurname) {  
______            changes = 'name unchanged';  
__     } else {  
______            changes = 'name has been changed';  
__     }  
__     return `${correctName} \n${correctSurname} \n${changes}`;  
}  

console.log(alignUserName(userName, userSurname) + '\n');  

// Task 3:  

let number = 4;  

function checkEvenOrOdd(num) {  
__     switch (num % 2) {  
____            case 0:  
______                   return 'number is even';  
____            default:  
______                   return 'number is odd';  
__     }  
}  

console.log(checkEvenOrOdd(number));  
