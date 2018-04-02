// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz”
// instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

// Easiest way but foor loop is not a really good practice.
for (let i = 1; i < 101; i++) {
  if (i % 15 === 0) console.log('FizzBuzz');
  else if (i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('Buzz');
  else console.log(i);
}


for (let i = 0; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  }
  i % 5 === 0 // Ternary operator
    ? console.log('Buzz')
    : console.log(i);
}

// option 2 using spread operator and arrow function. (best option)

const numbers = [...Array(100).keys()];

const FizzBuzz = (number) => {
  let string = '';
  if (number % 3 === 0) string += 'Fizz';
  if (number % 5 === 0) string += 'Buzz';
  const obj = string === '' ? number : string;
  return `${number} : ${obj}`;
};

FizzBuzzRes = numbers.map(FizzBuzz);
console.log(FizzBuzzRes);

// Shorter way with for loop and ternary operator.
for (let i = 0; i < 100;)console.log((++i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);

