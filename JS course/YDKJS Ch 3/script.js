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

// // chained
// var p = Promise.resolve( 21 );

// p
// .then( function(v){
//   console.log( v );	// 21

//   // fulfill the chained promise with value `42`
//   return v * 2;
// } )
// // here's the chained promise
// .then( function(v){
//   console.log( v );	// 42
// } );

// function delay(time) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(resolve, time);
//   });
// }

// delay(100) // step 1
//   .then(function STEP2() {
//     console.log("step 2 (after 100ms)");
//     return delay(200);
//   })
//   .then(function STEP3() {
//     console.log("step 3 (after another 200ms)");
//   })
//   .then(function STEP4() {
//     console.log("step 4 (next Job)");
//     return delay(50);
//   })
//   .then(function STEP5() {
//     console.log("step 5 (after another 50ms)");
//   });

// // Promise.all([..])

// var p1 = request( "http://some.url.1/" );
// var p2 = request( "http://some.url.2/" );

// Promise.all( [p1,p2] )
// .then( function(msgs){
// 	// both `p1` and `p2` fulfill and pass in
// 	// their messages here
// 	return request(
// 		"http://some.url.3/?v=" + msgs.join(",")
// 	);
// } )
// .then( function(msg){
// 	console.log( msg );
// } );

// // with Promise.all it will be only be fulfilled if and when all its constituent promises are fulfilled. If any one of those promises is rejected
// // the main Promise.all will be rejected

// // Same code but now using Promise.race:

// // `request(..)` is a Promise-aware Ajax utility,
// // like we defined earlier in the chapter

// var p1 = request( "http://some.url.1/" );
// var p2 = request( "http://some.url.2/" );

// Promise.race( [p1,p2] )
// .then( function(msg){
// 	// either `p1` or `p2` will win the race
// 	return request(
// 		"http://some.url.3/?v=" + msg
// 	);
// } )
// .then( function(msg){
// 	console.log( msg );
// } );

// // this one will return the first promise to resolve.

var p = Promise.resolve( 42 );
console.log(p) // logs: Promise {<fulfilled>: 42}
