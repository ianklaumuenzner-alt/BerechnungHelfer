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

function ausgabeEinheit(id) {
    const feld = document.getElementById(id);
    if (!feld) {
        return "m";
    }

    return feld.value;
}

function einheitFaktor(einheit) {
    if (einheit === "mm") {
        return 1000;
    }

    if (einheit === "cm") {
        return 100;
    }

    if (einheit === "km") {
        return 0.001;
    }

    return 1;
}

function formatiereLaenge(wertInMeter, einheit) {
    const faktor = einheitFaktor(einheit);
    return `${(wertInMeter * faktor).toFixed(3)} ${einheit}`;
}

function formatiereFlaeche(wertInQuadratmeter, einheit) {
    const faktor = einheitFaktor(einheit);
    return `${(wertInQuadratmeter * faktor * faktor).toFixed(3)} ${einheit}²`;
}

function formatiereVolumen(wertInKubikmeter, einheit) {
    const faktor = einheitFaktor(einheit);
    return `${(wertInKubikmeter * faktor * faktor * faktor).toFixed(3)} ${einheit}³`;
}

function berechneZylinderVolumen() {
    const einheit = ausgabeEinheit("zylinderEinheit");
    const d = zahl("zylinderDurchmesserV");
    const h = zahl("zylinderHoeheV");
    const r = d / 2;
    const V = Math.PI * r * r * h;

    schreibeResultat("resultatZylinderVolumen", `Volumen V = ${formatiereVolumen(V, einheit)}`);
}

function berechneZylinderHoehe() {
    const einheit = ausgabeEinheit("zylinderEinheit");
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
    schreibeResultat("resultatZylinderHoehe", `Höhe h = ${formatiereLaenge(h, einheit)}`);
}

function berechneZylinderDurchmesser() {
    const einheit = ausgabeEinheit("zylinderEinheit");
    const V = zahl("zylinderVolumenD");
    const h = zahl("zylinderHoeheD");
    const fehler = pruefeNenner(h, "Die Höhe");

    if (fehler) {
        schreibeResultat("resultatZylinderDurchmesser", fehler);
        return;
    }

    const d = 2 * Math.sqrt(V / (Math.PI * h));
    schreibeResultat("resultatZylinderDurchmesser", `Durchmesser d = ${formatiereLaenge(d, einheit)}`);
}

function berechneQuaderVolumen() {
    const einheit = ausgabeEinheit("quaderEinheit");
    const a = zahl("quaderLaengeV");
    const b = zahl("quaderBreiteV");
    const h = zahl("quaderHoeheV");
    const V = a * b * h;

    schreibeResultat("resultatQuaderVolumen", `Volumen V = ${formatiereVolumen(V, einheit)}`);
}

function berechneQuaderLaenge() {
    const einheit = ausgabeEinheit("quaderEinheit");
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
    schreibeResultat("resultatQuaderLaenge", `Länge a = ${formatiereLaenge(a, einheit)}`);
}

function berechneQuaderBreite() {
    const einheit = ausgabeEinheit("quaderEinheit");
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
    schreibeResultat("resultatQuaderBreite", `Breite b = ${formatiereLaenge(b, einheit)}`);
}

function berechneQuaderHoehe() {
    const einheit = ausgabeEinheit("quaderEinheit");
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
    schreibeResultat("resultatQuaderHoehe", `Höhe h = ${formatiereLaenge(h, einheit)}`);
}

function berechneWuerfelVolumen() {
    const einheit = ausgabeEinheit("wuerfelEinheit");
    const a = zahl("wuerfelSeiteV");
    const V = a * a * a;

    schreibeResultat("resultatWuerfelVolumen", `Volumen V = ${formatiereVolumen(V, einheit)}`);
}

function berechneWuerfelSeite() {
    const einheit = ausgabeEinheit("wuerfelEinheit");
    const V = zahl("wuerfelVolumenA");
    const a = Math.cbrt(V);

    schreibeResultat("resultatWuerfelSeite", `Seitenlänge a = ${formatiereLaenge(a, einheit)}`);
}

function berechneKugelVolumen() {
    const einheit = ausgabeEinheit("kugelEinheit");
    const r = zahl("kugelRadiusV");
    const V = (4 / 3) * Math.PI * r * r * r;

    schreibeResultat("resultatKugelVolumen", `Volumen V = ${formatiereVolumen(V, einheit)}`);
}

function berechneKugelRadius() {
    const einheit = ausgabeEinheit("kugelEinheit");
    const V = zahl("kugelVolumenR");
    const r = Math.cbrt((3 * V) / (4 * Math.PI));

    schreibeResultat("resultatKugelRadius", `Radius r = ${formatiereLaenge(r, einheit)}`);
}

function berechneKugelDurchmesser() {
    const einheit = ausgabeEinheit("kugelEinheit");
    const V = zahl("kugelVolumenD");
    const r = Math.cbrt((3 * V) / (4 * Math.PI));
    const d = 2 * r;

    schreibeResultat("resultatKugelDurchmesser", `Durchmesser d = ${formatiereLaenge(d, einheit)}`);
}

function berechneKegelVolumen() {
    const einheit = ausgabeEinheit("kegelEinheit");
    const r = zahl("kegelRadiusV");
    const h = zahl("kegelHoeheV");
    const V = (Math.PI * r * r * h) / 3;

    schreibeResultat("resultatKegelVolumen", `Volumen V = ${formatiereVolumen(V, einheit)}`);
}

function berechneKegelHoehe() {
    const einheit = ausgabeEinheit("kegelEinheit");
    const V = zahl("kegelVolumenH");
    const r = zahl("kegelRadiusH");
    const nenner = Math.PI * r * r;
    const fehler = pruefeNenner(nenner, "Die Grundfläche");

    if (fehler) {
        schreibeResultat("resultatKegelHoehe", fehler);
        return;
    }

    const h = (3 * V) / nenner;
    schreibeResultat("resultatKegelHoehe", `Höhe h = ${formatiereLaenge(h, einheit)}`);
}

function berechneKegelRadius() {
    const einheit = ausgabeEinheit("kegelEinheit");
    const V = zahl("kegelVolumenR");
    const h = zahl("kegelHoeheR");
    const fehler = pruefeNenner(h, "Die Höhe");

    if (fehler) {
        schreibeResultat("resultatKegelRadius", fehler);
        return;
    }

    const r = Math.sqrt((3 * V) / (Math.PI * h));
    schreibeResultat("resultatKegelRadius", `Radius r = ${formatiereLaenge(r, einheit)}`);
}

function berechnePyramideVolumen() {
    const einheit = ausgabeEinheit("pyramideEinheit");
    const G = zahl("pyramideGrundflaecheV");
    const h = zahl("pyramideHoeheV");
    const V = (G * h) / 3;

    schreibeResultat("resultatPyramideVolumen", `Volumen V = ${formatiereVolumen(V, einheit)}`);
}

function berechnePyramideGrundflaeche() {
    const einheit = ausgabeEinheit("pyramideEinheit");
    const V = zahl("pyramideVolumenG");
    const h = zahl("pyramideHoeheG");
    const fehler = pruefeNenner(h, "Die Höhe");

    if (fehler) {
        schreibeResultat("resultatPyramideGrundflaeche", fehler);
        return;
    }

    const G = (3 * V) / h;
    schreibeResultat("resultatPyramideGrundflaeche", `Grundfläche G = ${formatiereFlaeche(G, einheit)}`);
}

function berechnePyramideHoehe() {
    const einheit = ausgabeEinheit("pyramideEinheit");
    const V = zahl("pyramideVolumenH");
    const G = zahl("pyramideGrundflaecheH");
    const fehler = pruefeNenner(G, "Die Grundfläche");

    if (fehler) {
        schreibeResultat("resultatPyramideHoehe", fehler);
        return;
    }

    const h = (3 * V) / G;
    schreibeResultat("resultatPyramideHoehe", `Höhe h = ${formatiereLaenge(h, einheit)}`);
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
