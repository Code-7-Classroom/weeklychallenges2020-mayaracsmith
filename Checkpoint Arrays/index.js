// ARRAYS

// 1. Name 3 JS array methods
// push()
// pop()
// indexof()

// 2. Code 
// Create an empty array named 'drinks'
var drinks = [];

// add 3 beverages: water, coffee and tea to the drinks array
var drinks = [
    "water", "coffee", "tea"
];

// Create a second array named 'foods'
var foods = [];

// add 3 foods: apple, sandwich, chips to the foods array
var foods = [
    "apple", "sandwich", "chips"
];

// Combine the drinks and foods arrays into an array named 'meals'
var meals = drinks.concat(foods);
console.log(meals);

// Reverse the meals array and log it to the console
meals.reverse();
console.log(meals);