// document.getElementById("count-entry").innerHTML = 5;
// let count = 0;
// console.log(count);

// let myAge = 23;
// let dogAge = 7;
// let myDogAge = myAge * dogAge;
// console.log(" Your Dog Age is: " + myDogAge + " years");

// function sumOfLaps(lap1,lap2,lap3) {
//     let lapOne = lap1;
//     let lapTwo = lap2;
//     let lapThree = lap3;
//     let result = lapOne + lapTwo + lapThree;
//     return result;
// }

// console.log(sumOfLaps(35,65,25));
let countIncrement = document.getElementById("count-entry");
let count = 0;
let saveEntry = document.getElementById("prev-entries");


// innerText alternative mdn (mozilla developer network)

function increment() {
    count += 1;
    countIncrement.textContent = count;
}
function decrement() {
    count -=1;
    countIncrement.textContent = count;
}
function save() {
    let saveData = count + " - ";
    saveEntry.textContent += saveData;
    countIncrement.textContent = 0;
    count = 0;
    // here it's efficient to use .textContent than .innerText
    
}
// let greeting = document.getElementById("greet-user");
// let myName = "Sayem!";
// let greet = " Hello " + myName + " Welcome back";
// greeting.innerText = greet;
// greeting.innerText += " 👋";