// Write a program to tell if someone is shouting (typing in all caps), 
// whispering (typing in all lowercase), or neither. Use prompt to get user input, 
// and then console log whether the user was shouting, whispering, or talking normally.


var userInput = prompt("Please type something:");
    var upperCase = userInput.toUpperCase();
    var lowerCase = userInput.toLowerCase();

    if (userInput === upperCase){
        console.log("The user is shouting")
    }
    
    else if (userInput === lowerCase){
        console.log("The user is whispering")
    }
    
    else {
        console.log("The user is talking normally")
    }



