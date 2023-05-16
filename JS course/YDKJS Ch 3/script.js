// function add(getX, getY, cb) {
//   var x, y;
//   getX(function (xVal) {
//     log("getting x");
//     log("xval: " + xVal);
//     x = xVal;
//     // both are ready?
//     if (y != undefined) {
//       cb(x + y); // send along sum
//     }
//   });
//   getY(function (yVal) {
//     log("getting Y");
//     log("yval: " + yVal);
//     y = yVal;
//     // both are ready?
//     if (x != undefined) {
//       cb(x + y); // send along sum
//     }
//   });
// }

// // `fetchX()` and `fetchY()` are sync or async
// // functions
// add(fetchX, fetchY, function (sum) {
//   console.log(sum); // that was easy, huh?
// });

// // own additions

// function log(msg) {
//   console.log(msg);
// }

// function fetchX(cb) {
//   log("cb:" + cb);
//   setTimeout(() => {
//     cb(5);
//   }, 500);
// }

// function fetchY(funcEval) {
//   log(funcEval);
//   funcEval(100);
// }

// So it took me a while to wrap my head around this. Especially how the yVal and xVal are passed.
// Conclusion of the whole code: the first out of getY or getX will always fail since the other is undefined.
// Then when the other one is ready, both are, and it will pass the sum.

// when the function is invoked, a call back to fetchX and fetchY gets passed, and a function as the 3rd parameter
// the callback fetchX as parameter will be called getX in the actual add function
// fetchX is a function that takes "cb" as an argument.
// if getX is called in the add(..), it will be getX(function(xVal) { x = xVal; and if y != undefined; cb(x+y)})
// fetchX(cb) is the same as getX(function(xVal)) so function(xVal) will be the parameter cb passed to fetchX
// fetchX(function(xVal){}) translates to:
// without the timeout:
// fetchX(function passed...)
// function(5)
// back to the getX function passed:
// function(5) {
//  x = 5
//  if ( y != undefined ) {
//     cb( 5 + y )
//    // cb being the passed function that will console.log(sum)
// }
// }
// }

// example to demonstrate that an object with property then will be treatable as "thenable"
// even though this has nothing to do with the Promise "thenable"
// var o = { then: function () {} };

// var v = Object.create(o);

// v.someStuff = "cool";
// v.otherStuff = "not so cool"

// console.log("ownProperty:" + v.hasOwnProperty("then"));

// var p = new Promise(function(resolve, reject) {
//   resolve("double");
// })

// p.then(
//   function fulfilled(msg){
//     // foo.bar();
//     console.log(msg + " nope");
//     // because p is already resolved, it can't reject anymore. Now there's an error in the resolution and it will just throw an error
//   },
//   function rejected(err){
//     console.log(err);
//   }
// )

// // chaining promises
// var q = Promise.resolve( 21 );

//   // unchained
// var q2 = q.then( function(v){
// 	console.log( v );	// 21

// 	// fulfill `p2` with value `42`
// 	return v * 2;
// } );

// // chain off `p2`
// q2.then( function(v){
// 	console.log( v );	// 42
// } );

  // chained
  var p = Promise.resolve( 21 );

  p
  .then( function(v){
    console.log( v );	// 21
  
    // fulfill the chained promise with value `42`
    return v * 2;
  } )
  // here's the chained promise
  .then( function(v){
    console.log( v );	// 42
  } );