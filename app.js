const api = "https://api.adviceslip.com/advice"
const advice = document.querySelector('#advice')


function randomAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const adviceElement = document.getElementById('advice');
            adviceElement.textContent = data.slip.advice;
        })
        .catch(error => {
            console.error('Error advice:', error);
        });
}