let ques = document.querySelector(".Ques");
let mcq = document.querySelectorAll('.mcq');
let next = document.querySelector(".next");
let previous = document.querySelector(".prev");
let score = 0;

let Questions = [
    {
        Question: "What is the capital of India?",
        Options: [{ text: "Delhi", correct: true },
        { text: "Mumbai", correct: false }, { text: "Bangalore", correct: false }, { text: "Kolkata", correct: false }
        ]
    },
    {
        Question: "Which city is known as the 'city of Bollywood'?",
        Options: [{ text: "Delhi", correct: false },
        { text: "Mumbai", correct: true }, { text: "Bangalore", correct: false }, { text: "Kolkata", correct: false }]
    },
    {
        Question: "Where is the Red Fort located?",
        Options: [{ text: "Delhi", correct: true },
        { text: "Raebareli", correct: false }, { text: "Bangalore", correct: false }, { text: "Kolkata", correct: false }]
    }
];

let c = 0;

function loadQuestion() {
    ques.innerHTML = (c + 1) + "." + Questions[c].Question;
    for (let i = 0; i < 4; i++) {
        mcq[i].textContent = Questions[c].Options[i].text;
        mcq[i].classList.remove("correct", "incorrect");
        mcq[i].dataset.correct = Questions[c].Options[i].correct;
        mcq[i].disabled = false;
    }
}

function option(event) {
    const iscorrect = this.dataset.correct === "true";
    if (iscorrect) {
        this.classList.add("correct");
        score++;
    } else {
        this.classList.add("incorrect");
    }
    mcq.forEach(mcqOption => {
        mcqOption.disabled = true; // 
    });
    next.disabled = false;
    mcqOption.disabled = false;

}



function nextQuestion() {
    if (c < Questions.length - 1) {
        c++;
        loadQuestion();
        next.disabled = true;
    } else {
        next.innerHTML = "Submit";
        next.onclick = function () {

            const totalQuestions = Questions.length;
            const percentage = (score / totalQuestions) * 100;
            alert(`Your score: ${score}/${totalQuestions} (${percentage}%)`);
            next.disabled = true; // 
        };
    }
}

function previousQuestion() {
    if (c > 0) {
        c--;
        loadQuestion();
        next.innerHTML = "Next";
    }
}

loadQuestion();
mcq.forEach(mcqOption => mcqOption.addEventListener("click", option));
next.addEventListener("click", nextQuestion);
previous.addEventListener("click", previousQuestion);
