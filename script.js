var quizEl = document.querySelector("#quiz");
var resultsEl = document.querySelector("#results");
var startEl = document.querySelector("#start");
var submitEl = document.querySelector("#submit");

var timer = 60;
var score = 0;

//create array of object of questions and corresponding answers
var questions = [
    {
        question: "Commonly used data types DO NOT include: ",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },
        answer: "c"
    },
    {
        question: "The condition in an if/else statement is enclosed within _______.",
        answers: {
            a: "quotes",
            b: "curly brackets",
            c: "parentheses",
            d: "square brackets"
        },
        correct: "c"
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above"
        },
        correct: "d"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: {
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parenthesis"
        },
        correct: "c"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answers: {
            a: "Javascript",
            b: "console.log",
            c: "terminal/bash",
            d: "for loops"
        },
        correct: "b"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<js>",
            b: "<script>",
            c: "<javascript>",
            d: "<scripting>"
        },
        correct: "b"
    },
]

console.log(quizEl.children[0]);


function startGame(){
    startEl.textContent = "Next";
    var countdown = document.createElement("div");
    
    quizEl.appendChild(countdown);

    //create timer and update time every second
    var timerInterval = setInterval(function() {
        
        countdown.textContent = timer;
        timer--;

        if(timer === 0){
            clearInterval(timerInterval);

            //Go display results
        }
    }, 1000);

    //Display Quiz Questions

}

function displayResults(){

}

//when the Start button is clicked, then start the game
startEl.addEventListener("click", function(){

    startGame();

});