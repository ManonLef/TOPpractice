// code along with lesson https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern

// factory function
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
const jeff = new Person("Jeff", 34);
