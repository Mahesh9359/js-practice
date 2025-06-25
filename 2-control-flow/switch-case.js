//Basic switch-case
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

//Multiple cases
let fruit = "apple";
switch (fruit) {
    case "apple":
    case "banana":
        console.log("Common fruit");
        break;
    case "kiwi":
        console.log("Exotic fruit");
        break;
}

//switch with expressions
let num = 10;
switch (true) {
    case num > 0:
        console.log("Positive");
        break;
    case num < 0:
        console.log("Negative");
        break;
    default:
        console.log("Zero");
}

//Fall-through (intentional no-break)
let trafficLight = "yellow";
switch (trafficLight) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Caution");
    case "green":
        console.log("Go");
        break;
}

//Default case only
let randomValue = 42;
switch (randomValue) {
    default:
        console.log("Unknown value");
}