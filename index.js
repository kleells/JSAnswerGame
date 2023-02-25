var questionNumber = 0;

function calculateHowManyDaysAway(date) {
    
    const differenceInMilliseconds = date - new Date();

    const millisecondsInASecond = 1000;
    const differenceInSeconds = differenceInMilliseconds / millisecondsInASecond;

    const secondsInAMinute = 60;
    const differenceInMinutes = differenceInSeconds / secondsInAMinute;

    const minutesInAnHour = 60;
    const differenceInHours = differenceInMinutes / minutesInAnHour;

    const hoursInADay = 24;
    const differenceInDays = differenceInHours / hoursInADay

    const howManyDaysAwayIsTheDate = differenceInDays ;

    return Math.ceil(howManyDaysAwayIsTheDate);
}

function calculateNextBirthday() {
    let birthdayYear = new Date().getFullYear();

    const selectedBirthdayMonthElement = document.getElementById("months");
    const birthdayMonth = selectedBirthdayMonthElement.selectedIndex + 1;

    const birthdayDay = document.getElementById("birthdayDayAnswer").value;

    let birthdayDate = new Date(birthdayYear + "-" + birthdayMonth + "-" + birthdayDay);
    if (new Date() > birthdayDate) {
        birthdayYear = birthdayYear + 1;
        birthdayDate = new Date(birthdayYear + "-" + birthdayMonth + "-" + birthdayDay);
    }

    response.innerText = "Your birthday is " + calculateHowManyDaysAway(birthdayDate) + 
    " days away!";
}

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
        calculateNextBirthday();

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

