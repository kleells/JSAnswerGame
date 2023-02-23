var questionNumber = 0;

function runChatbot() {
    event.preventDefault();
    const response = document.getElementById('response');
    const answer = document.getElementById('answer').value;
    const question = document.getElementById('question');

    if (questionNumber === 0) {
        response.innerText = 'Your name is ' + answer + '.';
        question.innerText = "When is your birthday?";
        questionNumber++;
        document.getElementById("birthdayForm").style.visibility = "visible";
        document.getElementById("answerForm").style.visibility = "hidden";
    }
    else {
        response.innerText = "Your birthday is recorded.";
        question.innerText = "What is your favorite holiday?";
    }
}

const answerForm = document.getElementById('answerForm');
answerForm.addEventListener("submit", function(event) {
    runChatbot();
});

const birthdayForm = document.getElementById('birthdayForm');
birthdayForm.addEventListener("submit", function(event) {
    runChatbot();
});

