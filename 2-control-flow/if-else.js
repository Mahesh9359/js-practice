//Basic if-else
let age = 18;
if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You cannot vote.");
}

//else-if ladder
let marks = 85;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

//Nested if-else
let isRaining = true;
let hasUmbrella = false;
if (isRaining) {
  if (hasUmbrella) {
    console.log("Go outside!");
  } else {
    console.log("Stay indoors.");
  }
}

//Truthy/Falsy checks
let name = "";
if (name) {
  console.log("Name exists");
} else {
  console.log("Name is empty"); 
}

//Short-circuiting with &&
//any non empty string and all non zero numbers are truthy so it prints the right hand side of &&
let isLoggedIn = true; 
isLoggedIn && console.log("User is logged in");