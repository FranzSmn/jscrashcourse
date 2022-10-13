// const computation = (n,p) => parseInt(n* p/100 + parseInt(n))
  

// let food = prompt('How much was the food?')
// let percentage = prompt('TIP %?')

// console.log('the total is: ', computation(food, percentage))

//Functions
// this is a function called 'sayMyName'
// and it has 0 arguments
// it prints out your name to the console
const sayMyNam = () => console.log('Qazi')

// This is a function called sayMyName2
// and it has 1 agument called name
// template litterals
const sayMyNam2 = (name) => console.log(`Hi ${name}, Nice to meet you`)

// Function called sum that adds up two given argument
const sum = (a,b) => a+b;


// function called tip calculator 
// that calculates the tip percentage and add it to
// the total amount of food
//arrow function with implicit return
const tipCalculator = (food, tip) => sum((food * (tip/100)), food)



const groceries = ['banana','apple', 'orange', 'pear']
groceries.push('cookie', 'blueberry')

//grab the 2nd index
// console.log(groceries[2])

//Array methods .push() adds element on the last part of the array
//groceries.push('cookie')

//Array slice()
// console.log(groceries.splice(0,99))
// console.log(groceries)


// Objects {}
// Objects are key: value pairs

const person = {
  name: 'Leonardo', 
  shirt: 'White'
}

const person2 = {
  name: 'Qazi',
  shirt: 'black'
}

// Object that accept 2 parameter that return an introduction like
// it use template literals 
// it also has a method that caculates the networth of a person
const greetObject = (a, b) => {
  const person = {
    a: a, 
    b: b,
    assets: 50000,
    liabilities: 1000,
    networth: function() {return this.assets - this.liabilities}
  }
  return `Hi my name is ${person.a} and the color of my shirt is ${person.b} and my networth is ${person.networth()}`
}


//lOOPS
const fruits = ['apples', 'banana', 'strawberry', 'blueberry', 'watermelon']

// for (let i = 0; i<fruits.length; i++){
//   console.log(`Fruit number: ${i+1} ${fruits[i]}`)
// }

// fruits.map((el, i) => console.log(`#${i+1}: ${el}`))

// for(const fruit of fruits){
//   console.log(fruit)
// }


const number = [1,2,3,4,5,6,7,8,9,10]
let doubled = []

//Function that accept an array that multiplies each element of it
//return a new set of array
const numberOfArray2 = (arr) =>{
  let result = []
  for(const elTomultiply of arr){
    result.push(elTomultiply*2)
  }
  return result;
}

//callback function that counts the letter of a given string usign .length
const letterCounter = (el) => el.split('').length

//callback function that counts the letter of a given string usign for loop
const forLetterCounter = (el) =>{
  let result = 0;
  for(const letterIndex in el){
    result++
  }
  return {result}
}

//callback function that counts the letter of a given string using .map()
const mapLetterCounter = (el) => el.split('').map((els, i)=> i+1).pop();


//Find the min and max values in array
const minMax = (arr) =>{
let res = [];
  let minValue = Math.min.apply(null, arr);
  let maxValue = Math.max.apply(null, arr);
  return res.push(minValue, maxValue);
};

//ES6
const getMinMax = (arr) =>{
  return [Math.min(...arr), Math.max(...arr)]
}


//Function that sum all the numbers in an array FOR 
const sumArray = (arr) =>{
 let sum = 0;
  for (let num of arr){
   sum = sum + num
  }
  return {sum};
}

//Function that sum all the numbers in an array using .map()
const sumArray2 = (arr) => {
  let sum = 0;
  arr.map((el) =>{
    sum = el + sum
  })
  return sum
}

//Function that finds the max value of an array using for
const maxValue = (arr) =>{
  let limit = 0;
  for(const num of arr){
    if(num > limit){
      limit = num
    }
  }
  return limit
}

const maxValue2 = (arr) => {
  let limit = 0
  arr.map((el)=>{
    if(el>limit){
      limit = el
    }
  })
  return {limit}

}

//Function that accept string and count each letter of it
const letterFrequency = (phrase) => {
  const objPhrase = {}
  
  for (letter of phrase){
  if(letter in objPhrase){
    objPhrase[letter]++
  }else{
    objPhrase[letter] = 1
  }
  }
  return objPhrase
}

const wordFrequency = (phrase) =>{
  let frequency = {}
  phrase.split(' ').map((el)=>{
    if(el in frequency){
      frequency[el]++
    }else{
      frequency[el] = 1
    }
  })
  return frequency
}

//Function that accept an array and double each element using map()
const doubleArrMap = (arr) => arr.map(number => number * 2);

//.map()
//.filter()
const actors = [
  {name: 'Johny', netWorth: 2000000},
  {name: 'PAPA', netWorth: 10},
  {name: 'Mama', netWorth: 3134141},
  {name: 'Yes', netWorth: 13123},
  {name: 'baby', netWorth: 14151413},
  {name: 'Kid', netWorth: 1512312315},
  {name: 'Wow', netWorth: 123123154},
  {name: 'Test', netWorth: 123425},
  {name: 'chicken', netWorth: 2325253},
  {name: 'Popeyes', netWorth: 45346354},
  {name: 'Eyelis', netWorth: 32341241},
  {name: 'Lize', netWorth: 323415123123}
]

const result = actors.reduce((prev,curr)=> prev + curr.netWorth, 0)

//Filter Functions that take 2 arguments actors array and networth limit
// return an array which satisfy the arguments
const filterArctors = (actorsArr, networthAmount) => actorsArr.filter(actor => actor.netWorth < networthAmount);
// console.log(filterArctors(actors, 20));


// let results = actors.filter(actor => actor.netWorth > 10)
// let names = results.map(actor => actor.name).join(', ')

// playground.innerHTML = `<h1></h1>`


//.reduce()
//reduce takes in a function as an argument
// reduce loops and gives you back the accumulator
let nums = [1,2,3,4,5,6,7,8,9,10]
const sumOfNum = (arr) => arr.reduce((prev, curr) => prev + curr);
