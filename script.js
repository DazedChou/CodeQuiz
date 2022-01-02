var quizEl = document.querySelector("#quiz");
var resultsEl = document.querySelector("#results");
var startEl = document.querySelector("#start");
// var submitEl = document.querySelector("#submit");
var choicesEl = document.querySelector("#choiceSelection");
var timeEl = document.querySelector("#timeLeft");
var hiscoreEl = document.querySelector("#highScores");

var name = []; //empty array to store names and scores


var questions = [
    {
        question: "Commonly used data types DO NOT include: ",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },
        correct: "c"
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
];



function createQuiz() {
    var timer = 60; //set time length of quiz
    var score = 0; //user score
    var i = 0; //index to track current question

    //Create button choices with unique id
    var choiceA = document.createElement("button");
    choiceA.setAttribute("id", "choiceA")
    var choiceB = document.createElement("button");
    choiceB.setAttribute("id", "choiceB")
    var choiceC = document.createElement("button");
    choiceC.setAttribute("id", "choiceC")
    var choiceD = document.createElement("button");
    choiceD.setAttribute("id", "choiceD")

    function startGame() {
        console.log(document.querySelector(".button"));
        document.querySelector(".button").removeChild(startEl);
        // startEl.textContent = "";

        //quizEl.children[1].textContent = ""; //removing p content
        quizEl.children[1].setAttribute("style","display:none");
        //create timer and update time every second
        var timerInterval = setInterval(function () {

            timer--;
            timeEl.textContent = "Time Left: " + timer;

            if (timer === 0 || timer <= 0) {
                timer = 0; //if timer is at 5 seconds, and user gets question wrong, timer 
                //can become negative.
                clearInterval(timerInterval);
                endGame(); //end game when timer reaches 0
                //Go display results
            }
        }, 1000);


        choicesEl.appendChild(choiceA);
        choicesEl.appendChild(choiceB);
        choicesEl.appendChild(choiceC);
        choicesEl.appendChild(choiceD);
        console.log(choicesEl);
        //Display quiz questions

        quizEl.children[0].textContent = questions[i].question;
        choiceA.textContent = "1." + questions[i].answers.a;
        choiceB.textContent = "2." + questions[i].answers.b;
        choiceC.textContent = "3." + questions[i].answers.c;
        choiceD.textContent = "4." + questions[i].answers.d;



        choiceA.addEventListener("click", function () {

            //Display Next Question
            if (i < 6) {
                i++;
            }


            //Set condition to end game when last question has been answered
            if (i == 6) {
                endGame();
                clearInterval(timerInterval)
            } else {
                quizEl.children[0].textContent = questions[i].question;
                choiceA.textContent = "1." + questions[i].answers.a;
                choiceB.textContent = "2." + questions[i].answers.b;
                choiceC.textContent = "3." + questions[i].answers.c;
                choiceD.textContent = "4." + questions[i].answers.d;
            }
            //there is no question with the correct choice of A,
            //so whenever user chooses A, time gets deducted by 10.
            timer = timer - 10;

        });
        choiceB.addEventListener("click", function () {

            //conditional to check for answer
            if (i < 4) {
                timer = timer - 10;
            } else {
                score++;
            }

            //Display Next Question
            if (i < 6) {
                i++;
            }

            //Set condition to end game when last question has been answered
            if (i == 6) {
                endGame();
                clearInterval(timerInterval)
            } else {
                quizEl.children[0].textContent = questions[i].question;
                choiceA.textContent = "1." + questions[i].answers.a;
                choiceB.textContent = "2." + questions[i].answers.b;
                choiceC.textContent = "3." + questions[i].answers.c;
                choiceD.textContent = "4." + questions[i].answers.d;
            }

        });
        choiceC.addEventListener("click", function () {

            //conditional to check for answer
            if (i == 2 || i == 4 || i == 5) {
                timer = timer - 10;
            } else {
                score++;
            }

            //Display Next Question
            if (i < 6) {
                i++;
            }

            //Set condition to end game when last question has been answered
            if (i == 6) {
                clearInterval(timerInterval)
                endGame();
            } else {
                quizEl.children[0].textContent = questions[i].question;
                choiceA.textContent = "1." + questions[i].answers.a;
                choiceB.textContent = "2." + questions[i].answers.b;
                choiceC.textContent = "3." + questions[i].answers.c;
                choiceD.textContent = "4." + questions[i].answers.d;
            }

        });
        choiceD.addEventListener("click", function () {

            //conditional to check for answer
            if (i == 2) {
                score++;
            } else {
                timer = timer - 10;
            }

            //Display Next Question
            if (i < 6) {
                i++;
            }

            //Set condition to end game when last question has been answered
            if (i == 6) {
                clearInterval(timerInterval);
                endGame();
            } else {
                quizEl.children[0].textContent = questions[i].question;
                choiceA.textContent = "1." + questions[i].answers.a;
                choiceB.textContent = "2." + questions[i].answers.b;
                choiceC.textContent = "3." + questions[i].answers.c;
                choiceD.textContent = "4." + questions[i].answers.d;
            }

        });

    }
    function endGame() {
        //When game ends, remove the buttons and update text
        choicesEl.removeChild(document.getElementById("choiceA"));
        choicesEl.removeChild(document.getElementById("choiceB"));
        choicesEl.removeChild(document.getElementById("choiceC"));
        choicesEl.removeChild(document.getElementById("choiceD"));


        document.querySelector("body").children[0].children[0].textContent = "All Done";
        quizEl.children[0].textContent = "";

        //create textbox and prompt user to enter initials
        resultsEl.children[0].textContent = "Enter your initials below";
        var textbox = document.createElement("input");
        textbox.setAttribute("type", "text");
        resultsEl.appendChild(textbox);

        //create submit button
        var submit = document.createElement("button");
        resultsEl.appendChild(submit);
        submit.textContent = "Submit"

        submit.addEventListener("click", function () {
            console.log(textbox.value);
            document.querySelector("body").children[0].children[0].textContent = "High Scores";
            resultsEl.children[0].textContent = "";
            localStorage.setItem(textbox.value, score);

            //create list for hi scores
            resultsEl.removeChild(textbox);
            resultsEl.removeChild(submit);
            var listEl = document.createElement("ul");
            var li1 = document.createElement("li");
            var li2 = document.createElement("li");


            resultsEl.appendChild(listEl);
            listEl.appendChild(li1);
            listEl.appendChild(li2);

            li1.textContent = textbox.value + localStorage.getItem(textbox.value);

            var restartGame = document.createElement("button");
            restartGame.textContent = "Play again";
            resultsEl.appendChild(restartGame);
            restartGame.addEventListener("click", createQuiz);


            // hiscores();
        });


    }

    startGame();

}



function hiscores() {
    // resultsEl.removeChild(textbox);
    // resultsEl.removeChild(submit);
    // var listEl = document.createElement("ul");
    // var li1 = document.createElement("li");
    // var li2 = document.createElement("li");
    // var li3 = document.createElement("li");
    // var li4 = document.createElement("li");
    // var li5 = document.createElement("li");
    // var li6 = document.createElement("li");

    // resultsEl.appendChild(listEl);
    // listEl.appendChild(li1);
    // listEl.appendChild(li2);
    // listEl.appendChild(li3);
    // listEl.appendChild(li4);
    // listEl.appendChild(li5);
    // listEl.appendChild(li6);

    li1 = localStorage.getItem(name[0])

    var restartGame = document.createElement("button");
    restartGame.textContent = "Play again";
    resultsEl.appendChild(restartGame);
    restartGame.addEventListener("click", startGame());

}

// function displayResults(){
//     var textbox = document.createElement("input");
//     textbox.setAttribute("type","text");
//     resultsEl.appendChild(textbox);
// }

//when the Start button is clicked, then start the game
startEl.addEventListener("click",createQuiz);

hiscoreEl.addEventListener("click",hiscores)
