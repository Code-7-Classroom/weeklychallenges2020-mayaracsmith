// Write a function named min that takes two arguments and returns their minimum.

function min( num1, num2 ) {
	if ( num1 < num2 )
      return num1;
    else
      return num2;
}

console.log(min(3, 7));
console.log(min(20, 5));


// OR


var min = function(x, y) {
    return (x <= y) ? x : y;
};

console.log(min(5, 10));
console.log(min(5, 2));
