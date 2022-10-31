# JavascriptNotes

### Table of Contents

| No. | Topic                                                          |
| --- | -------------------------------------------------------------- |
| 1   | [What are the possible ways to create objects in JavaScript]() |
| 2   | [What is the difference between Call, Apply and Bind]()        |
| 2   | [Closures in Javascript]()                                     |

## 1. What are the possible ways to create objects in JavaScript

1.1 Object constructor
1.2 Object's create method
1.3 Object literal syntax
1.4 Function constructor
1.5 Function constructor with prototype
1.6 ES6 Class syntax
1.7 Singleton pattern

#### 1.1 Object constructor

The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.

```
var object = new Object();

```

#### 1.2 Object's create method

The create method of Object creates a new object by passing the prototype object as a parameter

```
var object = Object.create(null);

```

#### 1.3 Object literal syntax:

The object literal syntax (or object initializer), is a comma-separated set of name-value pairs wrapped in curly braces.

```
var object = {
     name: "Midhun",
     age: 29
};

Object literal property values can be of any data type, including array, function, and nested object.
```

Note: This is an easiest way to create an object

#### 1.4 Function constructor:

Create any function and apply the new operator to create object instances,

```
function Person(name) {
  this.name = name;
  this.age = 21;
}
var object = new Person("Midhun");
```

#### 1.5 Function constructor with prototype:

This is similar to function constructor but it uses prototype for their properties and methods,

```
function Person() {}
Person.prototype.name = "Midhun";
var object = new Person();
```

This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.

```
function func() {};

new func(x, y, z);
```

(OR)

```
// Create a new instance using function prototype.
var newInstance = Object.create(func.prototype)

// Call the function
var result = func.call(newInstance, x, y, z),

// If the result is a non-null object then use it otherwise just use the new instance.
console.log(result && typeof result === 'object' ? result : newInstance);

```

#### 1.6 ES6 Class syntax:

ES6 introduces class feature to create the objects

```
class Person {
  constructor(name) {
    this.name = name;
  }
}

var object = new Person("Midhun");
```

#### 1.7 Singleton pattern:

A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.

```
var object = new (function () {
  this.name = "Midhun";
})();
```

## What is the difference between Call, Apply and Bind

The difference between Call, Apply and Bind can be explained with below examples,

`Call`: The call() method invokes a function with a given this value and arguments provided one by one

```
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
```

`Apply:` Invokes the function with a given this value and allows you to pass in arguments as an array

```
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?
```

`Bind:` returns a new function, allowing you to pass any number of arguments

```
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?
```

Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for comma (separated list) and Apply is for Array.

Whereas Bind creates a new function that will have this set to the first parameter passed to bind().

## Closures In Javascript

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to.

Example:

```
function myFunction(name) {
  //   const name = "Midhun";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFun = myFunction("Midhun");
myFun();
```

Output:
`Midhun`

Uses of closures:

- Module design pattern
- Currying
- Functions like once
- Memorize
- Maintaing state in async world
- setTimeouts
- Iterators
  any many more

Closures interview questions

will add it here later

#### short note on lexical scope

What is lexical scope?
Lexical scope is the definition area of an expression. In other words, an item's lexical scope is the place in which the item got created.

- Another name for lexical scope is static scope.
- The place an item got invoked (or called) is not necessarily the item's lexical scope. Instead, an item's definition space is its lexical scope.

Example of Lexical scope:

```
const myName = "MidhunBalan";

function getName() {
  return myName;
}

```

Question: Which of the two spaces is myName’s lexical scope? Is it the global scope or the getName() function’s local scope?

Answer: Remember that lexical scope means definition space — not invocation space. Therefore, myName’s lexical scope is the global scope because we defined myName in the global environment.

Another Example:

```
function getName() {
  const myName = "Oluwatobi";
  return myName;
}
```

Question: Where is myName’s lexical scope?

Answer: Notice that we created and called myName within getName(). Therefore, myName’s lexical scope is getName()’s local environment because getName() is myName’s definition space.
