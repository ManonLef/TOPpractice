function add(getX, getY, cb) {
  var x, y;
  //////
  // log(x);
  // log(y);
  // log(getX);
  // log(getY);
  // log(cb);
  //////
  getX(function (xVal) {
    log("getting x");
    log("xval: " + xVal);
    x = xVal;
    // both are ready?
    if (y != undefined) {
      cb(x + y); // send along sum
    }
  });
  getY(function (yVal) {
    log("getting Y");
    log("yval: " + yVal);
    y = yVal;
    // both are ready?
    if (x != undefined) {
      cb(x + y); // send along sum
    }
  });
}

// `fetchX()` and `fetchY()` are sync or async
// functions
add(fetchX, fetchY, function (sum) {
  console.log(sum); // that was easy, huh?
});

// own additions

function log(msg) {
  console.log(msg);
}

function fetchX(cb) {
	log("cb:" + cb)
  setTimeout(() => {
    cb(5);
  }, 500);
}

function fetchY(funcEval) {
	log(funcEval)
  funcEval(100);
}
