var quizEl = document.querySelector("#quiz");
var resultsEl = document.querySelector("#results");
var startEl = document.querySelector("#start");
var submitEl = document.querySelector("#submit");
var choicesEl = document.querySelector("#choiceSelection");
var timeEl = document.querySelector("#timeLeft");

var timer = 60;
var score = 0;
var i = 0; //index to track current question
var j = 0;

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
]


function startGame(){

    document.querySelector(".button").removeChild(startEl);
    // var nextQuestion = document.createElement("button");
    // nextQuestion.textContent="Next";
    // document.querySelector(".button").appendChild(nextQuestion);

    quizEl.children[1].textContent=""; //removing p content

    //create timer and update time every second
    var timerInterval = setInterval(function() {
        
        timer--;
        timeEl.textContent = "Time Left: " + timer;

        if(timer === 0 || timer <=0){
            clearInterval(timerInterval);

            //Go display results
        }
    }, 1000);

    //Create button choices with unique id
    var choiceA = document.createElement("button");
    choiceA.setAttribute("id","choiceA")
    var choiceB = document.createElement("button");
    choiceB.setAttribute("id","choiceB")
    var choiceC = document.createElement("button");
    choiceC.setAttribute("id","choiceC")
    var choiceD = document.createElement("button");
    choiceD.setAttribute("id","choiceD")

    choicesEl.appendChild(choiceA);
    choicesEl.appendChild(choiceB);
    choicesEl.appendChild(choiceC);
    choicesEl.appendChild(choiceD);
    console.log(choicesEl);
    //Display quiz questions
 
    quizEl.children[0].textContent = questions[i].question;
    choiceA.textContent = "1." + questions[i].answers.a;
    choiceB.textContent = "2." +  questions[i].answers.b;
    choiceC.textContent = "3." +  questions[i].answers.c;
    choiceD.textContent = "4." +  questions[i].answers.d;



    choiceA.addEventListener("click",function(){
        j++;
        //Display Next Question
        if(i<6){
            i++;
        }


        //Set condition to end game when last question has been answered
        if(i == 6){
            endGame();
            clearInterval(timerInterval)
        }else{
            quizEl.children[0].textContent = questions[i].question;
            choiceA.textContent = "1." + questions[i].answers.a;
            choiceB.textContent = "2." +  questions[i].answers.b;
            choiceC.textContent = "3." +  questions[i].answers.c;
            choiceD.textContent = "4." +  questions[i].answers.d;
        }
        //there is no question with the correct choice of A,
        //so whenever user chooses A, time gets deducted by 10.
        timer = timer - 10;

    });
    choiceB.addEventListener("click",function(){
        j++;
        //conditional to check for answer
        if(i < 4){
            timer = timer - 10;
        }else{
            score++;
        }
        
        //Display Next Question
        if(i<6){
            i++;
        }

        //Set condition to end game when last question has been answered
        if(i == 6){
            endGame();
            clearInterval(timerInterval)
        }else{
            quizEl.children[0].textContent = questions[i].question;
            choiceA.textContent = "1." + questions[i].answers.a;
            choiceB.textContent = "2." +  questions[i].answers.b;
            choiceC.textContent = "3." +  questions[i].answers.c;
            choiceD.textContent = "4." +  questions[i].answers.d;
        }

    });
    choiceC.addEventListener("click",function(){
        j++;
        //conditional to check for answer
        if(i == 2 || i == 4 || i == 5){
            timer = timer - 10;
        }else{
            score++;
        }

        //Display Next Question
        if(i<6){
            i++;
        }
        
        //Set condition to end game when last question has been answered
        if(i == 6){
            clearInterval(timerInterval)
            endGame();
        }else{
            quizEl.children[0].textContent = questions[i].question;
            choiceA.textContent = "1." + questions[i].answers.a;
            choiceB.textContent = "2." +  questions[i].answers.b;
            choiceC.textContent = "3." +  questions[i].answers.c;
            choiceD.textContent = "4." +  questions[i].answers.d;
        }

    });
    choiceD.addEventListener("click",function(){
        j++;
        //conditional to check for answer
        if(i == 2 ){
            score++;
        }else{
            timer = timer - 10;
        }

        //Display Next Question
        if(i<6){
            i++;
        }

        //Set condition to end game when last question has been answered
        if(i == 6){
            clearInterval(timerInterval)
            endGame();
        }else{
            quizEl.children[0].textContent = questions[i].question;
            choiceA.textContent = "1." + questions[i].answers.a;
            choiceB.textContent = "2." +  questions[i].answers.b;
            choiceC.textContent = "3." +  questions[i].answers.c;
            choiceD.textContent = "4." +  questions[i].answers.d;
        }

    });

}
function endGame(){
    choicesEl.removeChild(document.getElementById("choiceA"));
    choicesEl.removeChild(document.getElementById("choiceB"));
    choicesEl.removeChild(document.getElementById("choiceC"));
    choicesEl.removeChild(document.getElementById("choiceD"));

    document.querySelector("body").children[0].children[0].textContent = "All Done";
    quizEl.children[0].textContent = "";
}
function displayResults(){

}

//when the Start button is clicked, then start the game
startEl.addEventListener("click", function(){

    startGame();

});

