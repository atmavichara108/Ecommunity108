document.addEventListener("DOMContentLoaded", () => {
    let score = 0;
    const scoreDisplay = document.querySelector('.score');
    const hamsterImage = document.getElementById('hamster');
    const progressBar = document.getElementById('progress');

    hamsterImage.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = score;
        hamsterImage.style.transform = "scale(0.95)";

        setTimeout(() => {
            hamsterImage.style.transform = "scale(1)";
        }, 100);

        let progress = (score % 100) / 100 * 100;
        progressBar.style.width = `${progress}%`;

        if (score % 100 === 0) {
            alert('🐹 +100');
            progressBar.style.width = '0%';
        }
    });
});
