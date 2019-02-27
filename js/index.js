const greetings = 'Hello World';
alert('greetings');
// number
// string
// boolean
// null
// undefined
// Object
// Symbol

const age = 42;
let isMarried = false;

const userAge = +prompt('Enter your age');
alert('Your age is ' + userAge);
const nextAge = userAge + 1;
alert('Next year you will be ' + nextAge);


const ageString = checkAge(userAge);
alert('You are ' + ageString);

function checkAge(age) {
    if (age > 100) { // < > <= >= == === != !==
        return 'old';
    }
    else {
        return 'child';
    }
}
