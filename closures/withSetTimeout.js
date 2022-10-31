//Example 1
function test() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  });
  console.log("test message");
}

test();

// Example 2

function test2() {
  for (var j = 1; j <= 5; j++) {
    setTimeout(function () {
      console.log(j);
    });
  }
  console.log("test 2 example");
}

test2();

// output for the above one is
/* 
test 2 example
6
6
6
6
6
*/

// to fix the above issue, replace var with let

function test3() {
  for (let k = 1; k <= 5; k++) {
    setTimeout(function () {
      console.log(k);
    });
  }
  console.log("test 3 example");
}

test3();

// fix the test 2 issue only with let

function test4() {
  for (let l = 1; l <= 5; l++) {
    function close(l) {
      setTimeout(function () {
        console.log(l);
      });
    }
    close(l);
  }
  console.log("test 4 example");
}

test4();
