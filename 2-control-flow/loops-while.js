//Basic while loop
let count = 0;
while (count < 3) {
    console.log(count); // 0, 1, 2
    count++; //increases the count value by 1
}

//While with condition from user input
let userInput;
while (userInput !== "exit") {
    userInput = prompt("Type 'exit' to stop"); //Loop will continue till the user type "exit"
    console.log("You typed:", userInput);
}

//Infinite loop
while (true) {
    console.log("This runs forever!"); //this will run infinite times till you close the browser
}

//Do-while (runs at least once)
//beacause it checks the condition after running the loop once
let x = 10;
do {
    console.log(x); // 10(executes once even if condition is false)
    x++;
} while (x < 5);

//While loop with break
let num = 1;
while (true) {
    console.log(num); // 1, 2, 3, 4, 5
    num++;
    if (num > 5)
        break;
}