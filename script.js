document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-btn");
    const container = document.getElementById("test-container");

    if (startButton && container) {
        startButton.addEventListener("click", () => {
            container.innerHTML = `
                <h2>Benvenuto/a al test IAT</h2>
                <p>Per favore, inserisci le prime tre lettere del tuo nome e cognome:</p>
                <input type="text" id="codice" maxlength="6" placeholder="Es. ROSRAI" />
                <button onclick="iniziaTest()">Inizia</button>
            `;
        });
    }
});

function iniziaTest() {
    const codice = document.getElementById("codice").value.toUpperCase();
    if (codice.length !== 6) {
        alert("Inserisci esattamente 3 lettere del nome e 3 del cognome.");
        return;
    }

    document.getElementById("test-container").innerHTML = `
        <h3>Grazie, ${codice}</h3>
        <p>(Qui inizierà il tuo test IAT con parole e immagini)</p>
        <!-- Qui aggiungeremo gli stimoli IAT -->
    `;
}
