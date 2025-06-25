//Basic for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

//Looping through an array
let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]); // red, green, blue
}

//Nested for loop (multiplication table)
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
// 1 * 1 = 1
// 1 * 2 = 2
// 1 * 3 = 3
// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9

//Loop control (break)
for (let i = 0; i < 10; i++) {
    if (i === 5)
        break;
    console.log(i); // 0, 1, 2, 3, 4 (after i==5 break keyword breaks the loop)
}

//Loop control (continue)
for (let i = 0; i < 5; i++) {
    if (i === 2)
        continue;
    console.log(i); // 0, 1, 3, 4 (when i===2 the loop skips 2 by using continue keyword)   
}