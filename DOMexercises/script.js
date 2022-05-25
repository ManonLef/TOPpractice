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

// 2
const h3 = document.createElement('h3');
h3.textContent = "Hey, I'm blue";
h3.setAttribute('style', 'color: blue;');
document.body.appendChild(h3);

// 3
const container = document.createElement('div');
container.setAttribute('style', 'background: pink; border: 10px solid black;'); // inline 1 string
document.body.appendChild(container);

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
container.appendChild(h1);

const para2 = document.createElement('p');
para2.textContent = "Me too!";
container.appendChild(para2);

// method 2 button
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

//my own method without arrow function
// btn.onclick = function() {
//     alert("hello babe");
// }