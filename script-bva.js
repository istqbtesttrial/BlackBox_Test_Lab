document.getElementById("validate").addEventListener("click", function () {
    const questionsBVA = ["q11", "q12", "q13", "q14", "q15", "q16", "q17", "q18", "q19", "q20"];
    let scoreBVA = 0;

    questionsBVA.forEach(q => {
        const answer = document.querySelector(`input[name=${q}]:checked`);
        if (answer && answer.value === "correct") {
            scoreBVA++;
        }
    });

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Votre score (Analyse des Valeurs Limites) : ${scoreBVA} / ${questionsBVA.length}`;

    // Animation subtile avec animate.css
    resultDiv.classList.add("animate__animated", "animate__fadeIn");
    setTimeout(() => {
        resultDiv.classList.remove("animate__animated", "animate__fadeIn");
    }, 1000);
});
