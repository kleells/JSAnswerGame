function runChatbot() {
    const response = document.getElementById('response');
    const answer = document.getElementById('answer').value;
    response.innerText = 'Your name is ' + answer + '.';
    const question = document.getElementById('question');
    question.innerText = "When is your birthday?";
}

const answerForm = document.getElementById('answerForm');

answerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    runChatbot();
});

