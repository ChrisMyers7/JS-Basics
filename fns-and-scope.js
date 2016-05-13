//////////////////PROBLEM 1////////////////////

;
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
var name = 'Tyler';

function isTyler(name) {
    if (name === "Tyler") {
        return true;
    }
    else {
        return false;
    }
}
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getName() {
    var newName = prompt();
    return newName;
}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome(fn1) {
    var userName = getName();
    alert("Welcome, " + userName);
}
//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here: arguments the actually value that is passed into a function while a parameter is the variable that stores the argument localy so that it can be tested whithin the function


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here: null, 0, undefined, NaN, '', and false. 



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  
function myName() {
    return "Chris";
}

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = myName;
//Now alert the result of invoking newMyName

alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn() {
    return function() {
        return "Chris";
    };
}
//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();
//Now invoke innerFn.
innerFn();
