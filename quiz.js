function checkAnswer(){
    const correctAnswer ="4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    if (userAnswer === correctAnswer){
        document.getElementById('feedback').textContent ="Correct! Well done.";

    } else {
        document.getElementById('feedback').textContent ="ThaThat's incorrect. Try again!";
    }
   }
   
   document.getElementById('submit-answer').addEventListener('click',checkAnswer);