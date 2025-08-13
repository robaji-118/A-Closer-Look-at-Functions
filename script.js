`use strict`;

const bookings = []; // gunakan plural biar tidak bingung

// const creatingBooking = function(
//     flightNum,
//     numPassengers = 1,
//     price = 199 * numPassengers
// ) {
//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };

//     console.log(booking);
//     bookings.push(booking); // sekarang variabelnya ada
// };

// creatingBooking('LH123');
// creatingBooking('LH123', 2, 800);
// creatingBooking('LH123', 2);
// creatingBooking('LH123', 5);
// creatingBooking('LH123', undefined, 1000);

// console.log(bookings);

///////////////////
// How Passing Arguments Works: Values vs. Reference
// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 24739479284,
// };

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 24739479284) {
//         alert('Checked in');
//     } else {
//         alert('Wrong passport!');
//     }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // Is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 100000000000);
// };

// Object.freeze(jonas);

// newPassport(jonas);
// checkIn(flight, jonas);

///////////////////////////////////////
// Functions Accepting Callback Functions
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function() {
    console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);