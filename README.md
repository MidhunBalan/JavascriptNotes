# JavascriptNotes

### Table of Contents

| No. | Topic  |
| --- | ------ |
| 1   | [Closures in Javascript]() |
| 2   | []() |

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

