// code along with lesson https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern

// factory function

"use strict";
const personFactory = (name, age) => {
  const sayHello = () => console.log("Hello " + `${name}` + "!");
  return { name, age, sayHello };
};
//creating a new person Object using the above factory function
const jeff = personFactory("Jeff", 34);

//same person creator but now with an Object Constructor:
const Person = function (name, age) {
  this.sayHello = () => console.log("Hello " + `${name}` + "!");
  this.name = name;
  this.age = age;
};
//creating a new person Object using the above Object Constructor
// const jeff = new Person("Jeff", 34);

// Private Variables and functions
const FactoryFunction = (string) => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`----${capitalizeString()}----`);
  return { printString };
};

const taco = FactoryFunction("taco");

taco.printString();

//another example
const counterCreator = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};

const counter = counterCreator();

counter();
counter();
counter();

const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign({},o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.


// another play along from https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9
const proto = {
  hello: function hello() {
    return `Hello, my name is ${ this.name }`;
  }
};

const george = Object.assign({}, proto, {name: 'George'});

const msg = george.hello();

console.log(msg); // Hello, my name is George

// learned about mixins in the above article 

// IIFE's Module patterns
