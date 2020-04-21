// HARD: Create two buttons, one that when clicked turns the background of the body red. 
// The other, when clicked, turns the body's background color white. Each of the background colors should be defined as class 
// styles and when the buttons are pushed the body's classList is updated to include the correct class for the background. 
// Create a single function that takes an input className and updates the body's classList to ONLY include that className
// Check the Assigned Weekly Challenges Repo under 10-modernjs/challenges/hard for html starter code.

const colorBackground = () => {
    const red = () => {   
        document.querySelector(".bodyBackground").style['background-color'] = 'red'; 
    } ;

    const white = () => {   
        document.querySelector(".bodyBackground").style['background-color'] = 'white';  
    };
    
    document.querySelector (".red").addEventListener('click', red);
    document.querySelector (".white").addEventListener('click', white);
}

colorBackground();