// Array of question objects
const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language"
        ],
        correctAnswer: 0
    },
    {
        question: "Which language is used for styling web pages?",
        answers: [
            "JavaScript",
            "Python",
            "CSS",
            "HTML"
        ],
        correctAnswer: 2
    },
    {
        question: "What does DOM stand for?",
        answers: [
            "Document Object Model",
            "Data Object Management",
            "Digital Optical Media",
            "Desktop Operating Mode"
        ],
        correctAnswer: 0
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        answers: [
            "/* */",
            "//",
            "#",
            "<!-->"
        ],
        correctAnswer: 1
    }
];

// Get DOM elements
const questionText = document.getElementById('question-text');
const answerButtons = document.querySelectorAll('.answer-btn');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;

// Display the current question
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.disabled = false;
        button.classList.remove('correct', 'incorrect');
    });
    
    feedback.textContent = '';
}

// Handle answer selection
function handleAnswerClick(event) {
    const selectedButton = event.target;
    const selectedIndex = parseInt(selectedButton.dataset.index);
    const currentQuestion = questions[currentQuestionIndex];
    
    // Check if answer is correct
    if (selectedIndex === currentQuestion.correctAnswer) {
        selectedButton.classList.add('correct');
        feedback.textContent = 'Correct!';
        feedback.style.color = '#4CAF50';
    } else {
        selectedButton.classList.add('incorrect');
        answerButtons[currentQuestion.correctAnswer].classList.add('correct');
        feedback.textContent = 'Incorrect! The correct answer is highlighted.';
        feedback.style.color = '#f44336';
    }
    
    // Disable all answer buttons after selection
    answerButtons.forEach(button => {
        button.disabled = true;
    });
}

// Handle next question
function handleNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        questionText.textContent = 'Quiz completed!';
        answerButtons.forEach(button => {
            button.style.display = 'none';
        });
        feedback.textContent = 'Thank you for playing!';
        feedback.style.color = '#2196F3';
        nextBtn.style.display = 'none';
    }
}

// Add event listeners to answer buttons
answerButtons.forEach(button => {
    button.addEventListener('click', handleAnswerClick);
});

// Add event listener to next button
nextBtn.addEventListener('click', handleNextQuestion);

// Display the first question on load
displayQuestion();