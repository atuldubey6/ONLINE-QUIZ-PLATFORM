const questions = [
    {
        question: "HTML stands for?",
        options: ["Hyper Text Markup Language", "Hyper Type Markup Language", "Hype Text Makeup Language"],
        correct: 0 // "Hyper Text Markup Language" is correct
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Rome"],
        correct: 1 // "Paris" is correct
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter"],
        correct: 1 // "Mars" is correct
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
        correct: 2 // "Pacific Ocean" is correct
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Mark Twain", "William Shakespeare", "Charles Dickens"],
        correct: 1 // "William Shakespeare" is correct
    }
];

let currentQuestion = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', loadQuestion);

function nextQuestion() {
    let selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        if (parseInt(selectedOption.value) === questions[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Please select an option before proceeding.");
    }
}

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("questionTitle").textContent = `Question ${currentQuestion + 1}`;
    document.getElementById("questionText").textContent = question.question;
    const optionsList = document.getElementById("optionsList");
    optionsList.innerHTML = "";
    question.options.forEach((option, index) => {
        optionsList.innerHTML += `
            <li>
                <label>
                    <input type="radio" name="option" value="${index}" required>
                    ${option}
                </label>
            </li>
        `;
    });
}

function showResult() {
    const total = questions.length;
    window.location.href = `result.html?score=${score}&total=${total}`;
}
