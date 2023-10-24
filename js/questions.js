const questions = [
    {
        question: "Are you male or female",
        answers: [
            { text: "male", value: 0 },
            { text: "Female", value: 0 },

        ],
    },
    {
        question: "Do you walk regularly",
        answers: [
            { text: "yes", value: 10 },
            { text: "no", value: 0 },


        ],
    },
    {
        question: "Which of the following statements best describes your situation",
        answers: [
            { text: "I have no current intention nor have I started walking", value: 0 },
            { text: "I intend to start walking within the next 30 days", value: 6 },
            { text: "I started walking within the next 6 months ", value: 2 }
        ],
    },
    {
        question: "How long have you been practicing walking?",
        answers: [
            { text: "Less than 6 months ago", value: 8 },
            { text: "more than 6 months ago", value: 20 },
        ],
    },
    {
        question: "While walking, do you feel sweaty and your heart rate increases?",
        answers: [
            { text: "yes", value: 0 },
            { text: "no", value: 0 },
        ],
    },
    {
        question: "Which of the following statements describes your condition?",
        answers: [
            { text: "I intended to practice walking, but I don’t know when to start", value: 2 },
            { text: "I started and tried several times to stick to walking", value: 6 },
            { text: "Have been walking recently", value: 8 },
            { text: "I have been practicing walking for a long time (more than 6 months) and I have a plan to continue", value: 20 }
        ],
    },
    {
        question: "Do you think mental and/or physical health is affected by daily walks ?",
        answers: [
            { text: "yes", value: 0 },
            { text: "no", value: 0 },
        ],
    },
    {
        question: "Do you have reasons that prevent you from walking?",
        answers: [
            { text: "I have nothing to stop me from walking", value: 0 },
            { text: "There is no suitable place", value: 0 },
            { text: "I do not have time", value: 0 },
            { text: "I do not have time", value: 0 },
            { text: "pver", value: 0 }

        ],
    },
    {
        question: "What are the reasons that encourage you to practice walking?",
        answers: [
            { text: "Maintain a healthy weight", value: 0 },
            { text: "Improve fitness and mood", value: 0 },
            { texT: "Control or prevent chronic disease", value: 0 },
            { text: "over", value: 0 }
        ],
    },
    {
        question: "What are the places you prefer when practicing walking:",
        answers: [
            { text: "Sports club", value: 0 },
            { text: "Public place", value: 0 },
            { text: "the job", value: 0 },
            { text: "Other", value: 0 }
        ],
    },
];

const questionsAr = [
    {
        question: "هل أنت ذكر أم أنثى",
        answers: [
            { text: "ذكر", value: 0 },
            { text: "أنثى", value: 0 },
        ],
    },
    {
        question: "هل تمارس رياضة المشي بانتظام",
        answers: [
            { text: "نعم", value: 10 },
            { text: "لا", value: 0 },
        ],
    },
    {
        question: "أي العبارات التالية تصف حالتك بشكل أفضل",
        answers: [
            { text: "ليس لدي نية حالية ولم أبدأ المشي", value: 0 },
            { text: "أعتزم بدء المشي خلال الـ30 يومًا القادمة", value: 6 },
            { text: "أعتزم بدء المشي خلال الـ6 أشهر القادمة", value: 2 },
        ],
    },
    {
        question: "منذ متى مستمر على ممارسة المشي",
        answers: [
            { text: "أقل من 6 أشهر مضت", value: 8 },
            { text: "أكثر من 6 أشهر مضت", value: 20 },
        ],
    },
    {
        question: " أثناء ممارسة المشي هل تشعر بالتعرق وتزيد نبضات القلب",
        answers: [
            { text: "نعم", value: 0 },
            { text: "لا", value: 0 },
        ],
    },
    {
        question: " أي العبارات التالية تصف حالتك",
        answers: [
            { text: "أعتزم ممارسة المشي، لكني لا أعرف متى سأبدأ", value: 2 },
            { text: "لقد بدأت وحاولت عدة مرات الالتزام بالمشي", value: 6 },
            { text: "لقد قمت بالمشي مؤخرًا", value: 8 },
            { text: "لقد قمت بممارسة المشي لفترة طويلة (أكثر من 6 أشهر) ولدي خطة للاستمرار", value: 20 },
        ],
    },
    {
        question: "هل تعتقد أن الصحة العقلية و/أو الجسدية تتأثر بالمشي اليومي؟",
        answers: [
            { text: "نعم", value: 0 },
            { text: "لا", value: 0 },
        ],
    },
    {
        question: "هل لديك أسباب تمنعك من ممارسة المشي",
        answers: [
            { text: "ليس هناك شيء يمنعني من المشي", value: 0 },
            { text: "لا يوجد مكان مناسب", value: 0 },
            { text: "ليس لدي وقت", value: 0 },
            { text: "ليس لدي وقت", value: 0 },
            { text: "أخرى", value: 0 },
        ],
    },
    {
        question: "ماهي الأسباب التي تشجعك على ممارسة رياضة المشي",
        answers: [
            { text: "الحفاظ على وزن صحي", value: 0 },
            { text: "تحسين اللياقة والمزاج", value: 0 },
            { text: "السيطرة على أو منع الأمراض المزمنة", value: 0 },
            { text: "أخرى", value: 0 },
        ],
    },
    {
        question: "ماهي الأماكن التي تفضلها عند ممارسة رياضة المشي",
        answers: [
            { text: "نادي رياضي", value: 0 },
            { text: "مكان عام", value: 0 },
            { text: "مكان العمل", value: 0 },
            { text: "أخرى", value: 0 },
        ],
    },
];
let currentQuestionIndex = 0;
let savedIndex = []
let totalValue = 0;
const progressElements = document.querySelectorAll('.progress1');
const increaseButton = document.getElementById('increaseButton');
const decreaseButton = document.getElementById('decreaseButton');
let currentIndex = 0;
const selectedAnswerValues = [];
function loadQuestion(index) {
    
    setInterval(function () {
        const newLang = document.documentElement.lang;

        if (lg !== newLang) {
            lg = newLang;
            console.log("Language changed to " + lg);
            loadQuestion(currentQuestionIndex);
        }
    }, 0);
    const questionContainer = document.getElementById("question");
    let lg = document.documentElement.lang;
    if (index + 1 <= questionsAr.length) {
        console.log(questionsAr.length, index + 1)
        if (lg === 'ar') {
            const answers = questionsAr[index].answers;
            console.log("abd abd", answers.length)
            let html = `
        <div>
            <p class="questionNumber">${questionsAr[index].question}</p>
            <div class="${index === 7 || index === 8 || index === 9 ? 'checkboxes' : 'radios'}" id="hell">
            `;

            for (let i = 0; i < answers.length; i++) {
                if (index === 7 || index === 8 || index === 9) {
                    html += `
                        <div class="checkboxGroup">
                            <input type="checkbox" name="answer" id="checkbox${i}" value="${answers[i].value}">
                            <label class="answersCheckBox" for="checkbox${i}"> &nbsp;${answers[i].text}</label>
                        </div>
                    `;
                }
                else {
                    html += `
                        <div class="radioGroup">
                            <input type="radio" name="answer" id="radioButton${i}" value="${answers[i].value}">
                            <label class="answers" for="radioButton${i}">${answers[i].text}</label>
                        </div>
                    `;
                }
            }

            html += `
            </div>
        </div>
    `;
            questionContainer.innerHTML = html;
        }
        if (lg === 'en') {
            const answers = questions[index].answers;
            console.log("abd abd", answers.length)
            let html = `
        <div>
            <p class="questionNumber">${questions[index].question}</p>
            <div class="${index === 6 || index === 7 || index === 8 ? 'checkboxes' : 'radios'}" id="hell">
            `;
            for (let i = 0; i < answers.length; i++) {
                if (index === 7 || index === 8 || index === 9) {
                    html += `
                        <div class="checkboxGroup">
                            <input type="checkbox" name="answer" id="checkbox${i}" value="${answers[i].value}">
                            <label class="answersCheckBox" for="checkbox${i}">${answers[i].text}</label>
                        </div>
                    `;
                }
                else {
                    html += `
                        <div class="radioGroup">
                            <input type="radio" name="answer" id="radioButton${i}" value="${answers[i].value}">
                            <label class="answers" for="radioButton${i}">${answers[i].text}</label>
                        </div>
                    `;
                }
            }

            html += `
            </div>
        </div>
    `;
            questionContainer.innerHTML = html;
        }

    } else {
        showToast(`You have completed the questionnaire. Total Value: ${totalValue}`)
    }
    const prevButton = document.getElementById("prevButton");
    if (currentQuestionIndex === 0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "inline-block";
    }
}
progressElements[0].style.opacity = '100%';
function nextQuestion() {

    const selectedAnswers = document.querySelectorAll('input[name="answer"]:checked');
    if (selectedAnswers.length > 0) {
        let answerValue = 0;
        const selectedAnswerTexts = [];
        selectedAnswers.forEach((selectedAnswer) => {
            answerValue += parseInt(selectedAnswer.value);
            const label = document.querySelector(`label[for="${selectedAnswer.id}"]`);
            if (label) {
                selectedAnswerTexts.push(label.textContent.trim());
            }
        });
        console.log("Selected Answer Texts:", selectedAnswerTexts);

        // selectedAnswers.forEach((selectedAnswer) => {
        //     answerValue += parseInt(selectedAnswer.value);
        // });
        selectedAnswerValues.push(answerValue);
        totalValue += answerValue;
        console.log(`Question ${currentQuestionIndex + 1}: Selected Answer Value ${answerValue}`);
        console.log(`Total Value So Far: ${totalValue}`);
        localStorage.setItem('totalValue', totalValue);
        savedIndex.push(currentQuestionIndex);
        localStorage.setItem('questionsIndexes', JSON.stringify(savedIndex));
        console.log("1212121", savedIndex)
        if (currentQuestionIndex === 1 && selectedAnswers[0].value === "10") {
            currentQuestionIndex = 3;
        }
        else if (currentQuestionIndex === 1 && selectedAnswers[0].value === "0") {
            currentQuestionIndex = 2;
        }
        else if (currentQuestionIndex === 3 && selectedAnswers[0].value === "8") {
            currentQuestionIndex = 4;
        }
        else if (currentQuestionIndex === 3 && selectedAnswers[0].value === "20") {
            currentQuestionIndex = 4;
        }
        else if (currentQuestionIndex === 5) {
            currentQuestionIndex = 6;
        }
        else if (currentQuestionIndex === 6) {
            currentQuestionIndex = 7;
        }
        else if (currentQuestionIndex === 7) {
            currentQuestionIndex = 8;
        }
         else if (currentQuestionIndex === 8) {
            currentQuestionIndex = 9;
        }
        else if (currentQuestionIndex === 1 && selectedAnswers[0].value === "0") {
            currentQuestionIndex = 2;
        }
        else if (currentQuestionIndex === 2 && selectedAnswers[0].value === "0") {
            currentQuestionIndex = 6;
        }
        else if (currentQuestionIndex === 2 && selectedAnswers[0].value === "2") {
            currentQuestionIndex = 5;
        }
        else if (currentQuestionIndex === 2 && selectedAnswers[0].value === "6") {
            currentQuestionIndex = 5;
        }
        else {
            currentQuestionIndex++;
        }
        if (currentQuestionIndex < 10) {
            loadQuestion(currentQuestionIndex);
            progressElements[currentIndex + 1].style.opacity = '100%';
        } else {
           window.location.href = "../pages/sucess.html"
        }
        currentIndex++;
    } else {
        showToast("Please select at least one answer before proceeding.");
    }
}
function showToast(message) {
    const toastContainer = document.querySelector(".toast-container");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.style.position = "fixed";
    toast.style.top = "5%";
    toast.style.transform = "translateY(-50%)";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.innerHTML = `
            <div class="toast-body">${message}</div>
        `;
    toastContainer.appendChild(toast);

    $(toast).toast("show");

    setTimeout(function () {
        toastContainer.removeChild(toast);
    }, 3000);
}
function prev() {

    if (currentQuestionIndex > 0) {
        const lastAnswerValue = selectedAnswerValues.pop();
        totalValue -= lastAnswerValue;
        console.log("new total", totalValue)

    }

    const savedIndexesJSON = localStorage.getItem('questionsIndexes');
    if (savedIndex.length > 0) {
        savedIndex.pop();
    }
    if (savedIndexesJSON) {
        const savedIndexes = JSON.parse(savedIndexesJSON);

        if (savedIndexes.length > 0) {

            // Pop the last index from the array
            const lastIndex = savedIndexes.pop();
            // Save the updated array back to localStorage after popping
            localStorage.setItem('questionsIndexes', JSON.stringify(savedIndexes));
            // Set the currentQuestionIndex to the popped index
            currentQuestionIndex = lastIndex;
            // Load the previous question
            loadQuestion(currentQuestionIndex);
        } else {
            console.log("No previous index in the array.");
        }
    } else {
        console.log("No saved indexes found in localStorage.");
    }

    if (currentQuestionIndex < 10) {
        progressElements[currentIndex].style.opacity = '10%';
    }
    currentIndex--;
    localStorage.setItem('questionsIndex', prev);
    console.log("ababababa", currentQuestionIndex)
}
loadQuestion(currentQuestionIndex);
function increaseProgress() {
    if (currentIndex < progressElements.length) {
    }
}
decreaseButton.addEventListener('click', decreaseProgress);


