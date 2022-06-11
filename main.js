// console.log("It works!");
// console.log("ewata nicholas");

// var number = 5;

// let num1 = prompt('insert number');

// let num2 = prompt('insert number');

// let sum = parseInt(num1) + parseInt(num2);

// alert(sum);


// const name1 = "hollas";
// console.log(name1.toUpperCase);

// const name1 = 'Nicholas';
// const pet = 'dogs';
// const age = 22;
// const lastName = 'Ewata '

// let statement = 'Hi I am ' + lastName + name1 + ' I am ' + age + ' years old and i love ' + pet;

// console.log(statement);

// let num1 = +prompt('what is the first number');
// let num2 = +prompt('what is the second number');
// let date = new Date;

// num1.toString;
// alert(num1+num2);
// console.log(date);
// console.log(typeof num1);
// console.log(num1);

// let firstName="Nicholas";
// let lastName="Ewata";
// let val;
// val = lastName.concat(' ',firstName);
// console.log(val);
// val = firstName.indexOf('n');
// console.log(val);
// val = firstName.substring(0, 4);
// console.log(val);
// val = firstName.slice(-2);

// console.log(val);

// let statement = "hey How are you";

// val = statement.split(" ");
// console.log(val);

// val = Math.floor(Math.random() *20 +1);
// console.log(val);
// let fullName = lastName + " " + firstName;

// console.log(fullName);

// let a = 34;
// let b = 21;
// a = 2;

// console.log("anwser is 23");
// console.log(a+b);

// let c;
// console.log("undefined");
// console.log(c);

// console.log(true===false);
// console.log(true!=true);
// console.log("A" > "B");
// console.log("B" > "C");
// console.log("a" > "A");
// console.log("b" > "A");

// let age = parseInt(prompt("insert number"));

// // alert(age);

// if(age<18){
//     alert("Sorry, you are too young to drive this car. Powering off!!");
// }else if(age===18){
//     alert("Congratulations on your first year of driving. Enjoy the ride.")
// }else if(age<=60){
//     alert("Powering on. Enjoy the ride!!")
// }else if(age>60){
//     alert("You should retire from driving. Powering off!!")
// }else if(age!=Number){
//     alert("This is not a number")
// }

// area of a triangle
function areaTriangle(b,h) {
    b = +prompt("Insert base amount");
    h = +prompt("Insert height amount");
    return alert(0.5*b*h);
}
areaTriangle();
// let base = +prompt("Insert base amount");
// let height = +prompt("Insert height amount");
// let area = (1/2)*base*height;
// alert(area);
// guessing game

// guessing game
function gameLogic(comp, user) {
    comp = Math.floor(Math.random()*20)+1;
    user = +prompt("Insert a random number between 1-20");
    
    let userGuess= user;
    if (userGuess===comp){
        alert("Correct Guess")
    } else if (userGuess>20) {
        alert("only numbers from 1-20 allowed")
    } else if (userGuess>comp) {
        alert("your guess was "+userGuess+", my guess was "+comp+". That's too high, try again")
    } else if(userGuess<comp){
        alert("your guess was "+userGuess+", my guess was "+comp+". That's too low, try again")
    }
    
}

gameLogic();