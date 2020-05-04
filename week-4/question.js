var quizContainer = document.querySelector('#quiz')
var resultsCont = document.querySelector('results')
var submitButton = document.querySelector('submit')

function buildQuiz() {
    var questions = [
        {
            title: "Commonly used data types DO NOT include:",
            choices: ["strings", "booleans", "alerts", "numbers"],
            answer: "alerts"
        },
        {
            title: "The condition in an if / else statement is enclosed within ____.",
            choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
            answer: "parentheses"
        },
    ];

    var output = []

    questions.forEach((currentQuestion, questionNumber) => {
            var answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                <input type="radio" name = "questions$(questionNumber" value = "${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
                output.push(
                    `<div class = "question"> ${currentQuestion.question} </div>
                            <div class = "answers"> ${answers.join('')} </div >`
                );
            })
    quizContainer.innerHTML = output.join('');
}

function finalResult() {
    var answerContainers = quizContainer.querySelectorAll('.answers')
    let numCorrect = 0

    myQuestions.forEach((currentQuestion, questionNumber) => {
        var answerContainers = answerContainers[questionNumber]
        var selector = 'input[name=question' + questionNumber + ']checked';
        var userAnswer = (answerContainers.querySelector(selector) || {}).value
        if (userAnswer === currentQuestion.correctAnswer) {

            numCorrect++
            answerContainers[questionNumber].style.color = 'lightgreen'
        }else {
            answerContainers[questionNumber.style.color = 'red']
        }
    })
    resultsContainer.innerHTML = `${numCorrect}  out of ${myQuestions.length}`;

}



buildQuiz()

submitButton.addEventListener('click', finalResult)