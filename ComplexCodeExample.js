// File Name: ComplexCodeExample.js

// This is a complex JavaScript code example that demonstrates a sophisticated and elaborate system for managing user information and generating personalized greetings.

// Define a class to represent a User
class User {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  // Method to generate a personalized greeting message
  generateGreeting() {
    if(this.age < 18) {
      return `Hello ${this.firstName}, as a minor, please obtain parental consent.`;
    } 
    else if(this.age >= 18 && this.age < 30) {
      return `Hey ${this.firstName}, welcome to the adult life!`;
    }
    else {
      return `Greetings ${this.firstName} ${this.lastName}, hope you're having a great day!`;
    }
  }
}

// Define a function to validate email addresses
function validateEmail(email) {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@[a-zA-Z]+(\.[a-zA-Z]+)+$/;
  return emailRegex.test(email);
}

// Prompt the user for their information
const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");
const age = parseInt(prompt("Enter your age:"));
let email = prompt("Enter your email address:");

// Validate the email address
while (!validateEmail(email)) {
  alert("Invalid email address. Please enter a valid email.");
  email = prompt("Enter your email address:");
}

// Create a new User instance using the provided information
const user = new User(firstName, lastName, age, email);

// Generate the personalized greeting
const greetingMessage = user.generateGreeting();

// Display the greeting message
alert(greetingMessage);

// More lines of complex code can be added here...