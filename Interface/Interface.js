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

function zahl(id) {
    return Number(document.getElementById(id).value);
}

function schreibeResultat(id, text) {
    const resultat = document.getElementById(id);
    if (resultat) {
        resultat.innerHTML = text;
    }
}

function pruefeNenner(wert, einheit) {
    if (wert === 0) {
        return `${einheit} darf nicht 0 sein.`;
    }

    return "";
}

function berechneZylinderVolumen() {
    const d = zahl("zylinderDurchmesserV");
    const h = zahl("zylinderHoeheV");
    const r = d / 2;
    const V = Math.PI * r * r * h;

    schreibeResultat("resultatZylinderVolumen", `Volumen V = ${V.toFixed(3)} m³`);
}

function berechneZylinderHoehe() {
    const V = zahl("zylinderVolumenH");
    const d = zahl("zylinderDurchmesserH");
    const r = d / 2;
    const grundflaeche = Math.PI * r * r;
    const fehler = pruefeNenner(grundflaeche, "Die Grundfläche");

    if (fehler) {
        schreibeResultat("resultatZylinderHoehe", fehler);
        return;
    }

    const h = V / grundflaeche;
    schreibeResultat("resultatZylinderHoehe", `Höhe h = ${h.toFixed(3)} m`);
}

function berechneZylinderDurchmesser() {
    const V = zahl("zylinderVolumenD");
    const h = zahl("zylinderHoeheD");
    const fehler = pruefeNenner(h, "Die Höhe");

    if (fehler) {
        schreibeResultat("resultatZylinderDurchmesser", fehler);
        return;
    }

    const d = 2 * Math.sqrt(V / (Math.PI * h));
    schreibeResultat("resultatZylinderDurchmesser", `Durchmesser d = ${d.toFixed(3)} m`);
}

function berechneQuaderVolumen() {
    const a = zahl("quaderLaengeV");
    const b = zahl("quaderBreiteV");
    const h = zahl("quaderHoeheV");
    const V = a * b * h;

    schreibeResultat("resultatQuaderVolumen", `Volumen V = ${V.toFixed(3)} m³`);
}

function berechneQuaderLaenge() {
    const V = zahl("quaderVolumenA");
    const b = zahl("quaderBreiteA");
    const h = zahl("quaderHoeheA");
    const nenner = b * h;
    const fehler = pruefeNenner(nenner, "Breite mal Höhe");

    if (fehler) {
        schreibeResultat("resultatQuaderLaenge", fehler);
        return;
    }

    const a = V / nenner;
    schreibeResultat("resultatQuaderLaenge", `Länge a = ${a.toFixed(3)} m`);
}

function berechneQuaderBreite() {
    const V = zahl("quaderVolumenB");
    const a = zahl("quaderLaengeB");
    const h = zahl("quaderHoeheB");
    const nenner = a * h;
    const fehler = pruefeNenner(nenner, "Länge mal Höhe");

    if (fehler) {
        schreibeResultat("resultatQuaderBreite", fehler);
        return;
    }

    const b = V / nenner;
    schreibeResultat("resultatQuaderBreite", `Breite b = ${b.toFixed(3)} m`);
}

function berechneQuaderHoehe() {
    const V = zahl("quaderVolumenH");
    const a = zahl("quaderLaengeH");
    const b = zahl("quaderBreiteH");
    const nenner = a * b;
    const fehler = pruefeNenner(nenner, "Länge mal Breite");

    if (fehler) {
        schreibeResultat("resultatQuaderHoehe", fehler);
        return;
    }

    const h = V / nenner;
    schreibeResultat("resultatQuaderHoehe", `Höhe h = ${h.toFixed(3)} m`);
}

function berechneWuerfelVolumen() {
    const a = zahl("wuerfelSeiteV");
    const V = a * a * a;

    schreibeResultat("resultatWuerfelVolumen", `Volumen V = ${V.toFixed(3)} m³`);
}

function berechneWuerfelSeite() {
    const V = zahl("wuerfelVolumenA");
    const a = Math.cbrt(V);

    schreibeResultat("resultatWuerfelSeite", `Seitenlänge a = ${a.toFixed(3)} m`);
}

function berechneKugelVolumen() {
    const r = zahl("kugelRadiusV");
    const V = (4 / 3) * Math.PI * r * r * r;

    schreibeResultat("resultatKugelVolumen", `Volumen V = ${V.toFixed(3)} m³`);
}

function berechneKugelRadius() {
    const V = zahl("kugelVolumenR");
    const r = Math.cbrt((3 * V) / (4 * Math.PI));

    schreibeResultat("resultatKugelRadius", `Radius r = ${r.toFixed(3)} m`);
}

function berechneKugelDurchmesser() {
    const V = zahl("kugelVolumenD");
    const r = Math.cbrt((3 * V) / (4 * Math.PI));
    const d = 2 * r;

    schreibeResultat("resultatKugelDurchmesser", `Durchmesser d = ${d.toFixed(3)} m`);
}

function berechneKegelVolumen() {
    const r = zahl("kegelRadiusV");
    const h = zahl("kegelHoeheV");
    const V = (Math.PI * r * r * h) / 3;

    schreibeResultat("resultatKegelVolumen", `Volumen V = ${V.toFixed(3)} m³`);
}

function berechneKegelHoehe() {
    const V = zahl("kegelVolumenH");
    const r = zahl("kegelRadiusH");
    const nenner = Math.PI * r * r;
    const fehler = pruefeNenner(nenner, "Die Grundfläche");

    if (fehler) {
        schreibeResultat("resultatKegelHoehe", fehler);
        return;
    }

    const h = (3 * V) / nenner;
    schreibeResultat("resultatKegelHoehe", `Höhe h = ${h.toFixed(3)} m`);
}

function berechneKegelRadius() {
    const V = zahl("kegelVolumenR");
    const h = zahl("kegelHoeheR");
    const fehler = pruefeNenner(h, "Die Höhe");

    if (fehler) {
        schreibeResultat("resultatKegelRadius", fehler);
        return;
    }

    const r = Math.sqrt((3 * V) / (Math.PI * h));
    schreibeResultat("resultatKegelRadius", `Radius r = ${r.toFixed(3)} m`);
}

function berechnePyramideVolumen() {
    const G = zahl("pyramideGrundflaecheV");
    const h = zahl("pyramideHoeheV");
    const V = (G * h) / 3;

    schreibeResultat("resultatPyramideVolumen", `Volumen V = ${V.toFixed(3)} m³`);
}

function berechnePyramideGrundflaeche() {
    const V = zahl("pyramideVolumenG");
    const h = zahl("pyramideHoeheG");
    const fehler = pruefeNenner(h, "Die Höhe");

    if (fehler) {
        schreibeResultat("resultatPyramideGrundflaeche", fehler);
        return;
    }

    const G = (3 * V) / h;
    schreibeResultat("resultatPyramideGrundflaeche", `Grundfläche G = ${G.toFixed(3)} m²`);
}

function berechnePyramideHoehe() {
    const V = zahl("pyramideVolumenH");
    const G = zahl("pyramideGrundflaecheH");
    const fehler = pruefeNenner(G, "Die Grundfläche");

    if (fehler) {
        schreibeResultat("resultatPyramideHoehe", fehler);
        return;
    }

    const h = (3 * V) / G;
    schreibeResultat("resultatPyramideHoehe", `Höhe h = ${h.toFixed(3)} m`);
}

function berechneLeistung() {
    const U = Number(document.getElementById("leistungSpannung").value);
    const I = Number(document.getElementById("leistungStrom").value);

    const resultat = document.getElementById("resultatLeistung");
    const P = U * I;

    resultat.innerHTML = `
        Leistung P = ${P.toFixed(3)} W
    `;
}

/* Automatisch beim Öffnen berechnen */
window.onload = function () {
    if (document.getElementById("resultatWiderstand")) {
        berechneWiderstand();
    }

    if (document.getElementById("resultatZylinderVolumen")) {
        berechneZylinderVolumen();
        berechneZylinderHoehe();
        berechneZylinderDurchmesser();
    }

    if (document.getElementById("resultatQuaderVolumen")) {
        berechneQuaderVolumen();
        berechneQuaderLaenge();
        berechneQuaderBreite();
        berechneQuaderHoehe();
    }

    if (document.getElementById("resultatWuerfelVolumen")) {
        berechneWuerfelVolumen();
        berechneWuerfelSeite();
    }

    if (document.getElementById("resultatKugelVolumen")) {
        berechneKugelVolumen();
        berechneKugelRadius();
        berechneKugelDurchmesser();
    }

    if (document.getElementById("resultatKegelVolumen")) {
        berechneKegelVolumen();
        berechneKegelHoehe();
        berechneKegelRadius();
    }

    if (document.getElementById("resultatPyramideVolumen")) {
        berechnePyramideVolumen();
        berechnePyramideGrundflaeche();
        berechnePyramideHoehe();
    }

    if (document.getElementById("resultatLeistung")) {
        berechneLeistung();
    }
};
