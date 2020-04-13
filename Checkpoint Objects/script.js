// 1. How is information stored in an object?

// Surrounded by curly brackets {}; pairs of names (strings) and values(any value) where the name is separated from the value by a colon.


// 2. Using ES6 Syntax code:
// - Declare a variable, 'me' and assign an instance of an object
// - On the object include a property, 'name', with the value of your first and last name, for example, "John Doe"
// - Log the value of me's name to the console
// - Add a method to the variable named 'sayHi' and assign function that logs its name value to the console
// - Call/Invoke the method sayHi

let me = {
    name: 'Mayara Caldeira',
    sayHi: function() {
       return 'hello, my name is ' + this.name;
    }
};

console.log(me.name);
console.log(me.sayHi);