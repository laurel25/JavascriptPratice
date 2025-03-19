{
    // Declaring variables
    let letVariable = 10;
    const constVariable = 20;
    var varVariable = 30;
  
    // Trying to reassign inside the block
    letVariable = 15; // This should work
    // constVariable = 25; // This will throw an error because const variables cannot be reassigned
    varVariable = 35; // This should work
  
    console.log("Inside block:");
    console.log("letVariable:", letVariable); // Output: 15
    console.log("constVariable:", constVariable); // Output: 20
    console.log("varVariable:", varVariable); // Output: 35
  }
  
  // Trying to reassign outside the block
  // Note: `let` and `const` have block scope, while `var` has function/global scope
  
  try {
    letVariable = 50; // This will throw an error because letVariable is not accessible outside the block
  } catch (error) {
    console.log("Error reassigning letVariable outside block:", error.message);
  }
  
  try {
    constVariable = 60; // This will throw an error because constVariable is not accessible outside the block
  } catch (error) {
    console.log("Error reassigning constVariable outside block:", error.message);
  }
  
  varVariable = 70; // This should work because varVariable has global scope
  console.log("Outside block:");
  console.log("varVariable:", varVariable); // Output: 70
  