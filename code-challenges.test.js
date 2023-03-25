// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.
// a) Create a test with expect statements for each of the variables provided.
// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]
// b) Create the function that makes the test pass.





// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudocode:
    // 1. Extract the number value from the object.
    // 2. Check if the number is divisible by 3 using the modulo < % > operator.
    // 3. If the result of the modulo operation is 0, return a string indicating that the number is divisible by three. Otherwise, return a string indicating that the number is not divisible by three.


// a) Create a test with expect statements for each of the variables provided.

// Pseudocode:
    // 1. Describe the behavior of the function using the describe function and provide a name for the test suite.
    // 2. Use the it function to define individual test cases within the test suite.
    // 3. For each test case, provide a description of the expected behavior of the function and the input that will be passed to the function.
    // 4. Inside each test case, call the function with the input and use the expect function to make assertions about the output.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"

const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

const object2 = { number: 0 }
// Expected output: "0 is divisible by three"

describe("divisibleByThree", () => {
    it("returns '15 is divisible by three' when given { number: 15 }", () => {
            // call the function with the input { number: 15 }
        const result = divisibleByThree({ number: 15 })
            // assert that the output is equal to the expected output
    expect(result).toEqual("15 is divisible by three")
    })
    it("returns '0 is divisible by three' when given { number: 0 }", () => {
            // call the function with the input { number: 0 }
        const result = divisibleByThree({ number: 0 })
            // assert that the output is equal to the expected output
        expect(result).toEqual("0 is divisible by three")
    })
    it("returns '-7 is not divisible by three' when given { number: -7 }", () => {
            // call the function with the input { number: -7 }
    const result = divisibleByThree({ number: -7 })
            // assert that the output is equal to the expected output
    expect(result).toEqual("-7 is not divisible by three")
    })
})

    //Result:
        // FAIL  ./code-challenges.test.js
        // divisibleByThree
        //   ✕ returns '15 is divisible by three' when given { number: 15 }
        //   ✕ returns '0 is divisible by three' when given { number: 0 }
        //   ✕ returns '-7 is not divisible by three' when given { number: -7 }


// b) Create the function that makes the test pass.

// Pseudocode:
    // 1. Define a function named divisibleByThree that takes an object as its argument.
    // 2. Extract the value of the number property from the input object and store it in a variable named number.
    // 3. Use the modulo operator (%) to determine if number is evenly divisible by 3.
    // 4. If number is evenly divisible by 3, return a string indicating that it is divisible by three, including the value of number.
    // 5. If number is not evenly divisible by 3, return a string indicating that it is not divisible by three, including the value of number.

function divisibleByThree(obj) {
    const number = obj.number
    if (number % 3 === 0) {
    return `${number} is divisible by three`
    } else {
    return `${number} is not divisible by three`
    }
}

    // Result:
        // PASS  ./code-challenges.test.js
        // divisibleByThree
        //   ✓ returns '15 is divisible by three' when given { number: 15 } (1 ms)
        //   ✓ returns '0 is divisible by three' when given { number: 0 }
        //   ✓ returns '-7 is not divisible by three' when given { number: -7 }





// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudocode:
    // 1. Define a function named capitalizeWords that takes an array of words as its argument.
    // 2. Create an empty array to store the capitalized words.
    // 3. Loop through the input array using a for loop.
    // 4. For each word in the input array, use the toUpperCase method to convert the first character to uppercase, and then concatenate the rest of the string using the slice method.
    // 5. Add the capitalized word to the empty array created in step 2 using the push method.
    // 6. After the loop is finished, return the array with capitalized words.

// a) Create a test with expect statements for each of the variables provided.

// Pseudocode:
    // 1. Describe the behavior of the function using the describe function and provide a name for the test suite.
    // 2. Use the it function to define individual test cases within the test suite.
    // 3. For each test case, provide a description of the expected behavior of the function and the input that will be passed to the function.
    // 4. Inside each test case, call the function with the input and use the expect function to make assertions about the output.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("capitalizeWords", () => {
    it("returns an array with capitalized words when given ['streetlamp', 'potato', 'teeth', 'conclusion', 'nephew']", () => {
        // call the function with the input ['streetlamp', 'potato', 'teeth', 'conclusion', 'nephew']
    const result = capitalizeWords(["streetlamp", "potato", "teeth", "conclusion", "nephew"])
        // assert that the output is equal to the expected output
    expect(result).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    })
    
    it("returns an array with capitalized words when given ['temperature', 'database', 'chopsticks', 'mango']", () => {
        // call the function with the input ['temperature', 'database', 'chopsticks', 'mango']
    const result = capitalizeWords(["temperature", "database", "chopsticks", "mango"])
        // assert that the output is equal to the expected output
    expect(result).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

    // Result:
        // FAIL  ./code-challenges.test.js
        // capitalizeWords
        //  ✕ returns an array with capitalized words when given ['streetlamp', 'potato', 'teeth', 'conclusion', 'nephew']
        //  ✕ returns an array with capitalized words when given ['temperature', 'database', 'chopsticks', 'mango']


// b) Create the function that makes the test pass.

// Pseudocode:
    // 1. Define a function named capitalizeWords that takes an array of words as its argument.
    // 2. Use the map function to create a new array that contains the capitalized version of each word.
    // 3. To capitalize a word, use the toUpperCase method to convert the first character to uppercase, and then concatenate the rest of the string using the slice method.
    // 4. Return the new array with capitalized words.

function capitalizeWords(words) {
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    }

    // Result:
        // PASS  ./code-challenges.test.js
        // capitalizeWords
        //  ✓ returns an array with capitalized words when given ['streetlamp', 'potato', 'teeth', 'conclusion', 'nephew'] (1 ms)
        //  ✓ returns an array with capitalized words when given ['temperature', 'database', 'chopsticks', 'mango']





// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudocode:
    // 1. Define a function named firstVowelIndex that takes a string as its argument.
    // 2. Loop through the string using a for loop.
    // 3. For each character in the string, use the indexOf method to check if it is a vowel.
    // 4. If the character is a vowel, return its index.
    // 5. If no vowels are found in the string, return -1 (Takes into account any edge cases).

// a) Create a test with expect statements for each of the variables provided.

// Pseudocode:
    // 1. Define a test suite using describe and name it "firstVowelIndex".
    // 2. Within the test suite, define a test using it and describe what the function should do for a specific input string.
    // 3. Call the firstVowelIndex function with the input string as an argument.
    // 4. Use expect to check that the output from the function matches the expected value.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("firstVowelIndex", () => {
    it("returns 1 when given 'learn'", () => {
        // call the function with the input 'learn'
    expect(firstVowelIndex("learn")).toEqual(1)
        // assert that the output is equal to the expected output
    })
    
    it("returns 0 when given 'academy'", () => {
        // call the function with the input 'academy'
        expect(firstVowelIndex("academy")).toEqual(0)
        // assert that the output is equal to the expected output
    })
    
    it("returns 2 when given 'challenges'", () => {
        // call the function with the input 'challenges'
    expect(firstVowelIndex("challenges")).toEqual(2)
        // assert that the output is equal to the expected output
    })
    })

    // Results:
        // FAIL  ./code-challenges.test.js
        // firstVowelIndex
        //  ✕ returns 1 when given 'learn'
        //  ✕ returns 0 when given 'academy'
        //  ✕ returns 2 when given 'challenges'

// b) Create the function that makes the test pass.

// Pseudocode:
    // 1. Define a function named firstVowelIndex that takes a string as its argument.
    // 2. Loop through the string using a for loop.
    // 3. For each character in the string, check if it is a vowel.
    // 4. If the character is a vowel, return its index.
    // 5. If no vowels are found in the string, return -1 (Takes into account any edge cases).

function firstVowelIndex(str) {
    for (let i = 0; i < str.length; i++) {
    if (/[aeiou]/i.test(str[i])) {
        // using regular expression to check if a character is a vowel
    return i
    }
    }
    return -1
    }

    // Results:
        // PASS  ./code-challenges.test.js
        // firstVowelIndex
        //  ✓ returns 1 when given 'learn' (1 ms)
        //  ✓ returns 0 when given 'academy'
        //  ✓ returns 2 when given 'challenges' (1 ms)