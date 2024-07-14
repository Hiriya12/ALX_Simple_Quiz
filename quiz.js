function checkAnswer() {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const feedbackElement = document.getElementById('feedback');

        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
