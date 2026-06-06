function berechneWiderstand() {
    const U = Number(document.getElementById("U").value);
    const R = Number(document.getElementById("R").value);

    const resultat = document.getElementById("resultatWiderstand");

    if (R === 0) {
        resultat.innerHTML = "Der Widerstand darf nicht 0 Ω sein.";
        return;
    }

    const I = U / R;

    resultat.innerHTML = `
        Strom I = ${I.toFixed(3)} A
    `;
}

function berechneVolumen() {
    const d = Number(document.getElementById("durchmesser").value);
    const h = Number(document.getElementById("hoehe").value);

    const resultat = document.getElementById("resultatVolumen");

    const r = d / 2;
    const V = Math.PI * r * r * h;

    resultat.innerHTML = `
        Volumen V = ${V.toFixed(3)} m³
    `;
}

/* Automatisch beim Öffnen berechnen */
window.onload = function () {
    if (document.getElementById("resultatWiderstand")) {
        berechneWiderstand();
    }

    if (document.getElementById("resultatVolumen")) {
        berechneVolumen();
    }
};