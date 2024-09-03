// ES6 code goes here
import moment from 'moment';    // importamos moment desde node_modules

// date object
/*
const rightNow = moment();
console.log(rightNow);
*/

// custom date object
/*
const birthday = moment('1996-12-18', 'YYYY-MM-DD');
console.log(birthday.format('dddd'));   // Wed
console.log(birthday.fromNow());        // 27 years ago
console.log(birthday.format('MMM Do YYYY'));    // Dec 18th 1996

const randomDate = moment('2025-02-26');
console.log(randomDate.fromNow());        // 
*/

// calculations
const twoWeeksFromNow = moment().add(14, 'days');
// const twoWeeksFromNow = moment().add(2, 'weeks'); -> sería lo mismo
console.log(twoWeeksFromNow.toString());    // Mon Jul 16 2024 15:12:52 GMT+0100
//Restar 6 meses a la fecha actual
const sixMonthAgo = moment().subtract(6, 'months');
console.log(sixMonthAgo.toString());        // Mon Feb 01 2024 15:12:52 GMT+0100