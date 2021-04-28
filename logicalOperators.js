// What's the result of OR?
// alert( null || 2 || undefined );
// rezult = 2
console.log(null || 2 || undefined);

// What's the result of OR'ed alerts?
// alert( alert(1) || 2 || alert(3) );
// rezult = 1, then 2

// What is the result of AND?
// alert( 1 && null && 2 );
// result = null
console.log(1 && null && 2);

// What is the result of AND'ed alerts?
// alert( alert(1) && alert(2) );
// result = 1, then undefined
console.log(1);

// The result of OR AND OR
// alert( null || 2 && 3 || 4 );
// rezult = 3
console.log(null || (2 && 3) || 4);

// Check the range between
// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90
// if (age >= 14 && age <= 90)
