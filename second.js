// Task 1:

let password = '_zxd';

function checkSafetyPassword(password) {
    let checking = '';
    if (password.length >= 4 && (password.includes('-') || password.includes('_'))) {
        checking = 'Safety password';
    } else {
        checking = ' Password not safety enough';
    }
    return checking;
};

console.log(checkSafetyPassword(password) + '\n');

// Task 2:

let userName = 'Alon';
let userSurname = 'Fine';

function alignUserName(name, surname) {
    let changes = null;
    let correctName = (name.substring(0, 1)).toUpperCase() + (name.substring(1)).toLowerCase();
    let correctSurname = (surname.substring(0, 1)).toUpperCase() + (surname.substring(1)).toLowerCase();
    if (name === correctName && surname === correctSurname) {
        changes = 'name unchanged';
    } else {
        changes = 'name has been changed';
    }
    return `${correctName} \n${correctSurname} \n${changes}`;
}

console.log(alignUserName(userName, userSurname) + '\n');

// Task 3:

let number = 4;

function checkEvenOrOdd(num) {
    switch (num % 2) {
        case 0:
            return 'number is even';
        default:
            return 'number is odd';
    }
}

console.log(checkEvenOrOdd(number));