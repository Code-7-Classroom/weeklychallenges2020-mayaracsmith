// Create a program that accepts a number (1-12) as input and logs to the console that number and its 
// corresponding month. For example: if the user enters the number 3, then it should return the month “March.” 
// Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

var number = prompt("Please enter a number:");

if (number == 1){
    console.log('January');
} else if (number == 2){
    console.log('February');
} else if (number == 3){
    console.log('March');
} else if (number == 4){
    console.log('April');
} else if (number == 5){
    console.log('May');
} else if (number == 6){
    console.log('June');
} else if (number == 7){
    console.log('July');
} else if (number == 8){
    console.log('August');
} else if (number == 9){
    console.log('September');
} else if (number == 10){
    console.log('October');
} else if (number == 11){
    console.log('November');
} else if (number == 12){
    console.log('December');
}


if (number < 1 || number > 12){
    alert('Invalid Number!');
}

