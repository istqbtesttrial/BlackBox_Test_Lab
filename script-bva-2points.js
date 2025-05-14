document.getElementById("validate").addEventListener("click", function () {
    const questionsBVA2 = [
        "q21", "q22", "q23", "q24", "q25",
        "q26", "q27", "q28", "q29", "q30"
    ];
    let scoreBVA2 = 0;

    questionsBVA2.forEach(q => {
        const answer = document.querySelector(`input[name=${q}]:checked`);
        if (answer && answer.value === "correct") {
            scoreBVA2++;
        }
    });

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Votre score (Valeurs Limites à 2 points) : ${scoreBVA2} / ${questionsBVA2.length}`;

    // Animation subtile avec animate.css
    resultDiv.classList.add("animate__animated", "animate__fadeIn");
    setTimeout(() => {
        resultDiv.classList.remove("animate__animated", "animate__fadeIn");
    }, 1000);
});
