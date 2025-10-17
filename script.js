// Array of question objects
const questions = [
    {
        question: "What app or interactive element of tech allows you to search the internet?",
        answers: [
            "Browser",
            "Microsoft Office",
            "Apple OS",
            "File folders and files"
        ],
        correctAnswer: 0
    },
    {
        question: "Which anser is a typically accepted photo format for upload?",
        answers: [
            "TXT",
            "JS",
            "JPEG",
            "HTML"
        ],
        correctAnswer: 2
    },
    {
        question: "What would be a the best option for submitting a specific question thgough a website for an organization?",
        answers: [
            "Contact Us form",
            "About Us page",
            "Location page",
            "Register as New User form"
        ],
        correctAnswer: 0
    },
    {
        question: "What would be the best answer for what user Data can be?",
        answers: [
            "How many visits a website receives",
            "Preffered Contact Method",
            "Browser specific site performance",
            "Required MFA methods"
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
        button.style.backgroundColor = ""; // Reset background color
    });
    
    feedback.textContent = '';
    nextBtn.style.display = 'none';
}

// Handle answer selection
function handleAnswerClick(event) {
    const selectedButton = event.target;
    const selectedIndex = parseInt(selectedButton.dataset.index);
    const currentQuestion = questions[currentQuestionIndex];
    
    // Check if answer is correct
    if (selectedIndex === currentQuestion.correctAnswer) {
        selectedButton.style.backgroundColor = 'lightgreen';
        feedback.textContent = 'Correct!';
    } else {
        selectedButton.style.backgroundColor = 'lightcoral';
        answerButtons[currentQuestion.correctAnswer].style.backgroundColor = 'lightgreen';
        feedback.textContent = 'Incorrect! The correct answer is highlighted.';
    }
    
    // Disable all answer buttons after selection
    answerButtons.forEach(button => {
        button.disabled = true;
    });
    //Shoe next button
    nextBtn.style.display = 'block';
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