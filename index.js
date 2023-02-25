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

function runQandA() {
    event.preventDefault();

    const response = document.getElementById('response');
    const answer = document.getElementById('answer').value;
    const question = document.getElementById('question');

    if (questionNumber === 0) {
        response.innerText = 'Your name is ' + answer + '.';
        question.innerText = "When is your birthday?";

        document.getElementById("birthdayForm").style.visibility = "visible";
        document.getElementById("answerForm").style.visibility = "hidden";
    }
    else if (questionNumber === 1) {
        calculateNextBirthday();
        question.innerText = "What is your favorite holiday?";
    }
    else if (questionNumber === 2) {
        response.innerText = 'That holiday is X days away.';
        question.innerText = "How old are you?";
    }

    questionNumber++;

}

const answerForm = document.getElementById('answerForm');
answerForm.addEventListener("submit", function(event) {
    runQandA();
});

const birthdayForm = document.getElementById('birthdayForm');
birthdayForm.addEventListener("submit", function(event) {
    runQandA();
});


const holidayForm = document.getElementById('holidayForm');
holidayForm.addEventListener("submit", function(event) {
    runQandA();
})
