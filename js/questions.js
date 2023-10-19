const questions = [
    {
        question: "هل أنت ذكر أم أنثى ؟",
        answers: [
            { text: "ذكر", value: 5 },
            { text: "انثى", value: 10 },

        ],
    },
    {
        question: "Question 2?",
        answers: [
            { text: "Answer 2A", value: 3 },
            { text: "Answer 2B", value: 6 },
            { text: "Answer 2C", value: 9 }
        ],
    },
    {
        question: "Question 3?",
        answers: [
            { text: "Answer 2A", value: 3 },
            { text: "Answer 2B", value: 6 },
            { text: "Answer 2C", value: 9 }
        ],
    },
    {
        question: "Question 4?",
        answers: [
            { text: "Answer 2A", value: 3 },
            { text: "Answer 2B", value: 6 },
            { text: "Answer 2C", value: 9 }
        ],
    },
    {
        question: "Question 5?",
        answers: [
            { text: "Answer 2A", value: 3 },
            { text: "Answer 2B", value: 6 },
            { text: "Answer 2C", value: 9 }
        ],
    },
    {
        question: "Question 6?",
        answers: [
            { text: "Answer 2A", value: 3 },
            { text: "Answer 2B", value: 6 },
            { text: "Answer 2C", value: 9 }
        ],
    },
    {
        question: "Question 7?",
        answers: [
            { text: "Answer 2A", value: 3 },
            { text: "Answer 2B", value: 6 },
            { text: "Answer 2C", value: 9 }
        ],
    },
    {
        question: "Question 6?",
        answers: [
            { text: "Answer 2A", value: 3 },
            { text: "Answer 2B", value: 6 },
            { text: "Answer 2C", value: 9 }
        ],
    },
    {
        question: "Question 9?",
        answers: [
            { text: "Answer 2A", value: 3 },
            { text: "Answer 2B", value: 6 },
            { text: "Answer 2C", value: 9 }
        ],
    },
    {
        question: "Question 10?",
        answers: [
            { text: "Answer 2A", value: 3 },
            { text: "Answer 2B", value: 6 },
            { text: "Answer 2C", value: 9 }
        ],
    },
   ];

let currentQuestionIndex = 0;
let totalValue = 0;
const progressElements = document.querySelectorAll('.progress1');
const increaseButton = document.getElementById('increaseButton');
const decreaseButton = document.getElementById('decreaseButton');
let currentIndex = 0;
const selectedAnswerValues = [];


function loadQuestion(index) {
    console.log("dsdsd",currentQuestionIndex,totalValue,currentIndex,selectedAnswerValues)

    const questionContainer = document.getElementById("question");
    const answers = questions[index].answers;
console.log("abd abd",answers.length)
    let html = `
        <div>
            <p class="questionNumber">${questions[index].question}</p>
            <div class="radios" id="hell"> 
    `;
   

    for (let i = 0; i < answers.length; i++) {
        html += `
        <div class="radioGroup" > 
            <input type="radio" name="answer" id="radioButton${i}" value="${answers[i].value}">
            <label class="answers" for="radioButton${i}">${answers[i].text}</label>
            </div>
        `;
    }

    html += `
            </div>
        </div>
    `;

    questionContainer.innerHTML = html;
  
    
}
    progressElements[0].style.opacity = '100%';
  


    function nextQuestion() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        
        if (selectedAnswer) {
            currentQuestionIndex++;

            // Get the selected answer's value
            const answerValue = parseInt(selectedAnswer.value);
            selectedAnswerValues.push(answerValue);
            totalValue += answerValue;
            console.log(`Question ${currentQuestionIndex + 1}: Selected Answer Value ${answerValue}`);
            console.log(`Total Value So Far: ${totalValue}`);
            loadQuestion(currentQuestionIndex);
            progressElements[currentIndex+1].style.opacity = '100%';
            currentIndex++;


        } else {
            alert("Please select an answer before proceeding.");
            return; // Prevent further execution if no answer is selected
        }
    
        // Move to the next question
        
        if (currentQuestionIndex < questions.length) {
          
        } else {
            alert(`You have completed the questionnaire. Total Value: ${totalValue}`);
        }
    }
    
    
loadQuestion(currentQuestionIndex);
function increaseProgress() {
    if (currentIndex < progressElements.length) {
    }
}

// function decreaseProgress() {
//     if (currentQuestionIndex > 0) {
//         currentQuestionIndex--; // Decrement the current question index
//         currentIndex - 1; // Decrement the current progress index
//         loadQuestion(currentQuestionIndex);
//         progressElements[currentIndex].style.opacity = '11%';
//     }
// }

decreaseButton.addEventListener('click', decreaseProgress);


   