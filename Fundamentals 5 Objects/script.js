let user = {
    name: "John",
    age: 30,
    isAdmin: true,
    "likes noobs": true, //check notation for calling upon this key 
};

console.log(user.name); //string result = John
console.log(user.age);  //number result = 30
console.log(user.isAdmin); //boolean result = true
console.log(user["likes noobs"]); //true

let key = "age"; // This is useful since you can for example let key = prompt ("what would you like to know?", "age");
console.log(user[key]);
//practice deleting a key
// delete user.age;
// console.log(user.age);

