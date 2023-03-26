# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

-------

## 1. What is the difference between a parameter and an argument?

Your answer: 

A parameter is a variable declared in a function's definition, while an argument is the actual value passed to the function when it is called.

Researched answer:

In programming, functions are used to perform specific tasks or sets of tasks. Parameters and arguments are used to pass values to functions.

A parameter is a variable declared in the function's definition. It is a placeholder for a value that will be passed to the function when it is called. The purpose of a parameter is to define what types of values a function can accept and how those values can be used inside the function. Parameters are typically placed inside the parentheses of a function definition.

An argument is the actual value passed to the function when it is called. Arguments are used to supply values for the function's parameters. The purpose of an argument is to provide the actual data that the function needs to perform its task. Arguments are typically placed inside the parentheses of a function call.

When a function is called, the values of the arguments are assigned to the corresponding parameters. The function then uses these values to perform its task and returns a value or performs an action.

In summary, parameters and arguments are important concepts in programming that are used to pass values to functions. A parameter is a variable declared in a function's definition, while an argument is the actual value passed to the function when it is called. Understanding the difference between parameters and arguments is important for writing effective and efficient code.

Source:

"JavaScript Function Parameters and Arguments" on W3Schools - https://www.w3schools.com/js/js_function_parameters.asp

-------

## 2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer:  

The .map() method in JavaScript transforms each array element using a required callback function (element, index, array), with an optional this parameter that sets the context for the callback function. The 'this' parameter in .map() refers to the object that the function belongs to and lets the callback function access the object's properties and methods.

Researched answer:

The .map() method is a built-in function in JavaScript that is used to transform each element in an array into a new value. When using .map(), there are two parameters that can be passed in. The first parameter is a callback function that is required, and the second parameter is an optional value for 'this.'

The callback function is the heart of .map(). It's called for each element in the array, and it takes three arguments: the current element being processed, the index of the current element, and the array that the .map() method was called upon. The callback function must return a new value that will be added to the resulting array. This new value can be of any data type, such as a string, number, or object. The second parameter, this, is used to set the context for the callback function. If no second parameter is provided, then 'this' defaults to the global object or undefined in strict mode. The this parameter is optional, so it's not always necessary to include it when calling the .map() method.

In summary, the .map() method is a powerful function in JavaScript that allows developers to easily transform each element in an array. It requires a callback function as its first parameter, which is called for each element in the array and must return a new value. The second parameter, this, is optional and is used to set the context for the callback function.

Source:

"JavaScript Map – How to Use the JS .map() Function (Array Method)" byy Nathan Sebhastian - https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/

-------

## 3. What is the difference between map and filter?

Your answer:

The main difference between the map() and filter() methods in JavaScript is that map() transforms each element in an array into a new value, while filter() creates a new array with only the elements that pass a certain condition. In other words, map() transforms the entire array, while filter() only selects specific elements from the array based on a condition.

Researched answer:

The map() and filter() methods are both important tools in a JavaScript developer's toolbox when working with arrays.

map() is used when you want to transform each element of an array into a new value. It creates a new array with the same length as the original, where each element corresponds to the result of the transformation function applied to the element of the original array. The original array is not modified by the map() method. It is a pure function that does not mutate the original array. The map() method requires a callback function as an argument, which takes the current element of the array as an argument and returns the new value for that element.

On the other hand, filter() is used when you want to create a new array from the original array, containing only the elements that pass a certain condition. It creates a new array with only the elements that pass the test function. The original array is not modified by the filter() method. It is also a pure function that does not mutate the original array. The filter() method requires a callback function as an argument, which takes the current element of the array as an argument and returns a boolean value indicating whether the element should be included in the new array.

Both map() and filter() methods can be chained together with other array methods, allowing for more complex operations to be performed on arrays in a concise and readable manner. While the main difference between map() and filter() is that the former transforms each element into a new value and the latter selects only certain elements, both methods are powerful and versatile and can be used to solve a wide range of problems when working with arrays.

Source: 

SitePoint: "JavaScript Map vs. Filter: Simplify your JavaScript Code" - https://www.sitepoint.com/map-vs-filter-javascript/

-------

## 4. What is iteration?

Your answer:

Iteration refers to the process of repeatedly executing a set of instructions or statements for a specific number of times or until a certain condition is met.

Researched answer:

In programming, iteration is the process of repeatedly executing a block of code until a specific condition is met. In JavaScript, there are several ways to iterate over an array, including the for loop, the forEach() method, and the map() method. For example, a for loop can be used to iterate over an array and execute a set of statements for each element in the array:

        let myArray = [1, 2, 3, 4, 5]
        for (let i = 0; i < myArray.length; i++) {
            console.log(myArray[i])
        }

In this example, the for loop starts at index 0 and iterates over the array until the index is less than the length of the array. For each iteration, the loop prints the value of the current element to the console.

Source: 

MDN Web Docs: Iteration - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

-------

## 5. What is the difference between a function and a method?

Your answer:

A function is a block of code that can be called by name and can be executed multiple times. A method is a function that is associated with an object and can be called on that object.

Researched answer:

In JavaScript, a function is a block of code that can be called by name and can be executed multiple times with different arguments. A method, on the other hand, is a function that is associated with an object and can be called on that object.

Functions can be declared as standalone entities, like this:

        function myFunction(param1, param2) {
            // function code here
        }

Functions can also be assigned to variables or passed as arguments to other functions, like this:

        let myFunction = function(param1, param2) {
            // function code here
        }

In contrast, methods are functions that are attached to objects and are called using dot notation, like this:


        let myObject = {
            myMethod: function() {
            // method code here
            }
        }

        myObject.myMethod(); // call the method on the object

In this example, myMethod is a method that is attached to the myObject object. The method can be called using dot notation on the object.

Source: 

MDN Web Docs: Functions - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
MDN Web Docs: Working with objects - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

-------

## 6. STRETCH: What is hoisting in JavaScript?

Your answer:

 Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their respective scopes before code execution.

Researched answer:

Hoisting is a mechanism in JavaScript where variable and function declarations are moved to the top of their respective scopes before code execution. This means that variables and functions can be declared after they are used in code. However, only the declaration is moved, not the initialization or assignment.  

For example, the following code will still work even though the function is called before it is declared:  

    
        myFunction(); // "Hello, world!"

        function myFunction() {
            console.log("Hello, world!")
        }

In this example, the myFunction function is called before it is declared, but the code still works because the function declaration is hoisted to the top of the scope.  

Variables are also hoisted in JavaScript, but with a subtle difference. Variable declarations are hoisted, but not their assignments. This means that variables can be declared after they are used in code, but they will be undefined until they are assigned a value.

For example, the following code will log undefined because the variable is declared after it is used:

        console.log(myVar); // undefined
        var myVar = "Hello, world!"

In this example, the myVar variable is declared after it is used, but it is hoisted to the top of the scope so the code still works. However, the variable is undefined until it is assigned a value.

Source:

MDN Web Docs: Hoisting - https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

------


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component:

2. Spread operator:

3. React state:

4. React props:

5. DOM events:
