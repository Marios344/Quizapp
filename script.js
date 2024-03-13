let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wofür steht HTML?",
        "answer_1": "HyperText Makeup Language",
        "answer_2": "HyperText Markup Language",
        "answer_3": "HighTech Machine Learning",
        "answer_4": "HyperTransferable Multimedia Language",
        "right_answer": 2
    },
    {
        "question": "Welches HTML-Tag wird verwendet, um einen Hyperlink zu erstellen?",
        "answer_1": "link",
        "answer_2": "a",
        "answer_3": "url",
        "answer_4": "hlink",
        "right_answer": 2
    },
    {
        "question": "Wie können Sie ein Element mit der ID 'myElement' in CSS auswählen?",
        "answer_1": "#myElement",
        "answer_2": " .myElement",
        "answer_3": "element.myElement",
        "answer_4": "@myElement",
        "right_answer": 1
    },
    {
        "question": "Wofür steht CSS?",
        "answer_1": "Counter Style Sheet",
        "answer_2": "Creative Style Selector",
        "answer_3": "Cascading Style Sheet",
        "answer_4": " Computer Style Syntax",
        "right_answer": 3
    },
    {
        "question": "Wie deklarieren Sie eine Variable in JavaScript?",
        "answer_1": "let x = 5",
        "answer_2": "variable x = 5",
        "answer_3": "x = 5",
        "answer_4": "var x = 5",
        "right_answer": 1
    },
    {
        "question": "Was ist der Zweck der console.log() Funktion in JavaScript?",
        "answer_1": "Eine Meldung anzeigen",
        "answer_2": "Ausgabe in der Konsole anzeigen",
        "answer_3": "Eine neue Variable erstellen",
        "answer_4": "Eine neue Funktion definieren",
        "right_answer": 2
    },
    {
        "question": "Welches Tag wird in HTML verwendet, um eine externe JavaScript-Datei einzubinden?",
        "answer_1": "script",
        "answer_2": "link",
        "answer_3": "js",
        "answer_4": "include",
        "right_answer": 1
    },
    {
        "question": "Welche Eigenschaft wird in CSS verwendet, um die Textfarbe eines Elements zu ändern?",
        "answer_1": "text-style",
        "answer_2": "color",
        "answer_3": " font-color",
        "answer_4": "text-color",
        "right_answer": 2
    },
    {
        "question": "In HTML, welches Tag wird verwendet, um eine ungeordnete Liste zu erstellen?",
        "answer_1": "ol",
        "answer_2": "list",
        "answer_3": "ul",
        "answer_4": "li",
        "right_answer": 3
    }
];

let rightAnswers = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('sounds/correct.mp3')
let AUDIO_FAIL = new Audio('sounds/wrong.mp3')


function init() {
    document.getElementById('high_Number').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    //Show end screen
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProggressBar();
        showNextQuestion();
    }
}

function gameIsOver(){
    return currentQuestion >= questions.length;
}

function showEndScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightAnswers;
}

function updateProggressBar() {
    //Show next Question
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`
}

function showNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('low_Number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}

function answer(selection) {
    //showing the corect answer
    let question = questions[currentQuestion];
    let selectedQuestion = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`

    //if answer corect then +1 to corectAnswers else show the corect ones 
    if (selectedQuestion == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play()
        rightAnswers++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentElement.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('next-button').disabled = true;
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('endScreen').style = 'display: none';
    document.getElementById('questionBody').style = '';
    currentQuestion = 0;
    rightAnswers = 0;
    init();
}