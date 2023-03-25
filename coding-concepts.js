// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Bravo 2023"
// console.log(cohort.split(""))

// a) Your answer: [ 'B', 'r', 'a', 'v', 'o', ' ', '2', '0', '2', '3' ]
// b) Verify and explain:

    // This will log an array of each character in the string cohort. The split() method is being called on the string with an empty string as its argument, which splits the string at every character, resulting in an array where each element is a character in the original string. In this case, the resulting array will look like ["B", "r", "a", "v", "o", " ", "2", "0", "2", "3"], where each element is a single character from the original string cohort.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined (it's mising the return statement)
// b) Verify and explain: 

    // The greeter function returns undefined because it is not explicitly returning anything. An arrow function with a single expression will automatically return the value of that expression. In this case, the expression is just a string wrapped in backticks, and it's not being returned with a return statement. To fix the issue, either add the return keyword before the string expression, see example bellow:
      const greeter1 = (name) => {
      return `Hello, ${name}!`
      }
      console.log(greeter1("LEARN Student"))
    // Or remove the curly braces and just put the expression on the same line as the arrow, like this:
      const greeter2 = (name) => `Hello, ${name}!`
      console.log(greeter2("LEARN Student"))
    
    // Both of these options will correctly return the string "Hello, LEARN Student!" when greeter("LEARN Student") is called. (This information was verified utilizing the documents on arrow functions in the MDN Web Docs. Specifically, the documentation on arrow function expressions covers the syntax, usage, and differences between traditional function expressions and arrow function expressions, and it also discusses the return behavior of arrow functions.)

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [ 8, 10, 12, 14, 16 ]
// b) Verify and explain:

    // The function const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2):
      // The map() method applies the callback function (number) => number * 2 to each element of the array [4, 5, 6, 7, 8], resulting in a new array [8, 10, 12, 14, 16].

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [ 11, 13, 15 ]
// b) Verify and explain:

    // The function const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0):
      // The filter() method applies the callback function (number) => number % 2 !== 0 to each element of the array [11, 12, 13, 14, 15] and only returns the ones that pass the test, resulting in a new array [11, 13, 15].

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain:

    // The method console.log(myCodingSkills.languages[0]):
      // This logs the first element of the languages array, which is "JavaScript".

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: Learn { student: 'George', cohort: 'Bravo', year: 2023 }
// b) Verify and explain:

    // The function "const learnStudent = new Learn("George") and console.log(learnStudent)":
      // A new instance of the Learn class is created with the name property set to "George". The console.log() statement logs this new instance, which has properties student: 'George', cohort: 'Bravo', and year: 2023.