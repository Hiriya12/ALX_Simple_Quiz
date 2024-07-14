function checkAnswer() {
    const correctAnswer = "4";
    const selectedopton = document.querySelector('input[name="quiz"]:checked').value;
    const feedback = document.getElementById('feedback');

  

 if (userAnswer === correct){
     feedbackElement.textContent = "Correct! Well done.";
 
 } else{
    feedbackElement.textContent= "that's incorrect.try again!";
 
 }
   
} 
document.getElementById("submit-answer").addEventListener("click", checkAnswer);