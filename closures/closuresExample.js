function myFunction(name) {
  //   const name = "Midhun";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFun = myFunction("Midhun");
myFun();
