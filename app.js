'use strict'
// use strict tells us to follow some baseline 'strict rules'

// variables = storing data as values. 

// declaring the variable firstname to be equal to the value
// let firstName = 'brandon'; // string
// let lastName = "Iverson" ; // single or double qoutes are acceptable
// let numberofCats = 2; // number
// let lovesCoffee = true; // boolean

let firstName = prompt('What is your Name?');
let number = prompt('How many Dinos do you hold?'(1-69);
let message = '';

if(number <= 5){
    message = 'NGMI!!!';
    // console.log('NGMI!!!');
} else if(number <= 15){
    message = 'Raptor!!!';
    // console.log('Raptor!!!');
} else if(number <= 69){
    message = 'T-Rex!!!';
    // console.log('Good Night!')
} else if(number >= 69){
    message = 'Whale!!!'
    // console.log('Whale!!!')
} else{
    message = 'Future Holder!!!'
    // console.log('Future Holder!!!');
}

// console.log('done with program');

document.write('Hello '+ firstName +'! ' + message);

// Brandon is not equals to brandon
// === strict equals
// == loose equals (truthy or falsy) '1' == 1
// if(firstName === 'brandon'){
//     console.log('brandon')
// }

// output to the console some value
// console.log('Your age is, ' + age);
