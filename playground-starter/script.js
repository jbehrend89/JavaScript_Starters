// console.log("Hello, world!");
// //alert("Hi there!")

// let username = "Jacinta";
// console.log("Hi" + " " + username);

// let num1 = 4;
// let num2 = 4;
// let total = num1 + num2;
// console.log(total);

function addition(x, y) {
//    let x = 2;
//    let y = 6; 
    return x + y;
//    console.log(result);
}

// console.log(addition(1, 9));

function showName() {
    //console.log("hi!");
    let username = document.getElementById("name-text").value;
    // console.log(username);
}

//for loop
for (let count = 0; count < 10; count++) {
    // console.log(count);
}

//array
let pets = ["Chilli", "Rex", "Roary", "Fleur"];
// console.log(pets);

// console.log(pets[0]);
// console.log(pets[3]);

pets.push("Ivy");
// console.log(pets);


//for loop
for (let index = 0; index < pets.length; index++){
    // console.log(pets[index]);
}

//short version of a for loop
pets.forEach((pet) => {
    // console.log(pet);
})

pet = "Ivy";

if (pet == "Chilli"){
    console.log("OMG you are the cutest!");
} else if (pet == "Ivy"){
    console.log("OMG cute bow");
}else {
    console.log("you are reasonably cute");
}
