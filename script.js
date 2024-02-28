
document.getElementById('submit-btn').addEventListener('click', function() {
    // Check the answers for all questions
    const answerQ1 = document.querySelector('input[name="q1"]:checked');
    const answerQ2 = document.querySelector('input[name="q2"]:checked');
    const answerQ3 = document.querySelector('input[name="q3"]:checked');

    // Calculate the score
    let score = 0;
    if (answerQ1 && answerQ1.value === 'October 28') score++;
    if (answerQ2 && answerQ2.value === '27 months') score++;
    if (answerQ3 && answerQ3.value === 'Omegle') score++;

    // Display the score
    document.getElementById('score').textContent = `Your Score: ${score}`;

    // Display a result message based on the score
    const resultMessage = document.getElementById('result-message');
    if (score === 3) {
        resultMessage.textContent = 'Galing naman ng baby love ko na yan! You got all questions right!';
    } else {
        resultMessage.textContent = 'Nubayan Loveee! You can retake the quiz to improve your score.';
    }

    // Show the result section
    document.getElementById('result-section').style.display = 'block';
});

document.getElementById('retake-btn').addEventListener('click', function() {
    // Hide the result section and show the questions section again
    document.getElementById('result-section').style.display = 'none';

    // Clear radio button selections
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(button => {
        button.checked = false;
    });
});

