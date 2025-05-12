document.getElementById("validate").addEventListener("click", function () {
    const questions = ["q1", "q2", "q3"];
    let score = 0;

    questions.forEach(q => {
        const answer = document.querySelector(`input[name=${q}]:checked`);
        if (answer && answer.value === "correct") {
            score++;
        }
    });

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Votre score : ${score} / ${questions.length}`;

    // Animation légère du résultat
    resultDiv.classList.add("animate__animated", "animate__fadeIn");
    setTimeout(() => {
        resultDiv.classList.remove("animate__animated", "animate__fadeIn");
    }, 1000);
});
