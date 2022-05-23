// 1. a <p> with red text that says “Hey I’m red!”
// 2. an <h3> with blue text that says “I’m a blue h3!”
// 3. a <div> with a black border and pink background color with the following elements inside of it:
//     a. another <h1> that says “I’m in a div”
//     b. a <p> that says “ME TOO!”
//     c. Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

// 1
const para = document.createElement('p');
para.textContent = "Hey, I'm red";
para.setAttribute('style', 'color: red;');
document.body.appendChild(para);
