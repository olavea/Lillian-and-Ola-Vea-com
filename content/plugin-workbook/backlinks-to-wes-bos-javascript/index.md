




[38 if](https://wesbos.com/javascript/07-logic-and-flow-control/if-statements-function-returns-truthy-falsy)

Sub-task

Write does not equal

Hungry alligator greater than and less than.

"and" and "or" operators.


[Truthy or Falsy](https://wesbos.com/javascript/07-logic-and-flow-control/if-statements-function-returns-truthy-falsy#truthy-or-falsy)
19:00


Sort into Truthy or Falsy

Truthy or Falsy values
0
1
-10
undefined variable
Variable set to null
a variable set to `"hello" - 10` NaN
empty string
full string
a string of "0"
empty array
empty object


39 Tina Ternary
Coercion, Ternaries and Conditional Abuse
Coercion , if you wanted to check if someone is not cool,

Coerce into a true boolean

Sub-task

i.
Coerce "wes" into a true boolean

If you type name into the console, it should return "wes" (we assigned that variable in earlier exercises in this JavaScript file).

Get it to return false.

ii.
coerce it into a Boolean of it exists or not.



[Ternary](https://wesbos.com/javascript/07-logic-and-flow-control/coercion-ternaries-and-conditional-abuse/#ternary)

Wes likes to think of ternary's as shorthand if statements.
1. condition
2. true
3. false

A ternary needs 3 things:

1. A condition
2. What to do if it' true
3. What to do if it's false.


For example let's say you had 3 functions and you wanted to make sure that all 3 functions are true before going ahead.

```js
function check1(){
  return true;
}
function check2(){
  return true;
}
function check3(){
  return true;
}
```

Poisoning the well

That is sometimes referred to in JavaScript as short-circuiting, meaning that we never finished what we wanted, but we knew it wouldn't work out anyway so we short-circuited it and went directly to else.

{isAdmin && <AdminBar/>}








## Case Switch and Animating a Turtle with CSS Variables

 to do is listen for the keydown event. Make a function called handleKeyDown which you will pass to the keydown event listener.

In the handleKeyDown function, grab the event and log the event key like so 👇

```js
function handleKeyDown(event) {
  console.log(event.key);
}
window.addEventListener("keydown", handleKeyDown);

```

YOu only care if it's an arrow key or not, so add code to check if the event key includes the word arrow and if it does not, just return which will exit out of the function like so 👇

```js
if (!event.key.includes("Arrow")) { return; }
console.log(event.key);
```

Declare two variables, x and y, right before the handleKeyDown variable and set both to zero.

Now within handleKeyDown, when they move right, decrease the x and vice versa. This is a use case for a switch statement.



skip on


## [Object](https://wesbos.com/javascript/08-data-types/objects/)


Creating an person Object

Why do we add a trailing comma or a comma dangle?

const
Wes is Wes, he has been born and this object represents properties about him.

Those properties can change as he grows up, however no one can ever replace him. No one can ever overwrite the binding to him.

No one could ever come by and say "oh a new Wes was born" and create an object like this further down in the code

[Accessing Properties](https://wesbos.com/javascript/08-data-types/objects/#accessing-properties)
Wes has already shown us one way to access properties, which is using the dot notation.

For example to access the job property you would write wes.job which would return "Web Developer".

However, we have this other notation to access properties and that is with square brackets.

Similarly to how you can access the property using the dot notation you can also use square brackets.

Why do we have that? That seems like a much uglier way to access the properties.

There are a few reasons.





[Creating an Object](https://wesbos.com/javascript/08-data-types/objects#creating-an-object)


```js

age: 100,

```
The property is on the left, and then there is a colon and then we have the value on the right.

The values of an object can be any type (string, function, boolean, other objects, arrays etc).



```js

person.job = 'Dev Rel';

```


You might have noticed that the `person` object is a const variable, however you just went ahead and changed part of it.

That is a gotcha in JavaScript.

`const` does not mean that the value of an object cannot be changed. `const` means that the binding (reference) to that variable cannot be changed.

So if you ever want to make an object so it cannot be changed, you could do that with Object.freeze().

The word in programming that we use to describe something that cannot be changed is **immutable**. **Mutation** is changing a value.

[Accessing Properties](https://wesbos.com/javascript/08-data-types/objects#accessing-properties)

Wes has already shown us one way to access properties, which is using the dot notation.

For example to access the job property you would write wes.job which would return "Web Developer".


[Deleting a Property from an Object]()
To delete a property object you use the delete keyword.

For example delete wes.job; will delete the job property.



[Methods](https://wesbos.com/javascript/08-data-types/objects#methods)
Now, let's talk about methods.

We have already talked a lot about this.

As we went over earlier, the difference between a method and a function is that a method is just a function that lives inside of an object.