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

function eingabeEinheit(id) {
    const feld = document.getElementById(`${id}Einheit`);
    if (!feld) {
        return "m";
    }

    return feld.value;
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

function wertLaenge(id) {
    return zahl(id) / einheitFaktor(eingabeEinheit(id));
}

function wertFlaeche(id) {
    const faktor = einheitFaktor(eingabeEinheit(id));
    return zahl(id) / (faktor * faktor);
}

function wertVolumen(id) {
    const faktor = einheitFaktor(eingabeEinheit(id));
    return zahl(id) / (faktor * faktor * faktor);
}

function berechneZylinderVolumen() {
    const einheit = ausgabeEinheit("zylinderEinheit");
    const d = wertLaenge("zylinderDurchmesserV");
    const h = wertLaenge("zylinderHoeheV");
    const r = d / 2;
    const V = Math.PI * r * r * h;

    schreibeResultat("resultatZylinderVolumen", `Volumen V = ${formatiereVolumen(V, einheit)}`);
}

function berechneZylinderHoehe() {
    const einheit = ausgabeEinheit("zylinderEinheit");
    const V = wertVolumen("zylinderVolumenH");
    const d = wertLaenge("zylinderDurchmesserH");
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
    const V = wertVolumen("zylinderVolumenD");
    const h = wertLaenge("zylinderHoeheD");
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
    const a = wertLaenge("quaderLaengeV");
    const b = wertLaenge("quaderBreiteV");
    const h = wertLaenge("quaderHoeheV");
    const V = a * b * h;

    schreibeResultat("resultatQuaderVolumen", `Volumen V = ${formatiereVolumen(V, einheit)}`);
}

function berechneQuaderLaenge() {
    const einheit = ausgabeEinheit("quaderEinheit");
    const V = wertVolumen("quaderVolumenA");
    const b = wertLaenge("quaderBreiteA");
    const h = wertLaenge("quaderHoeheA");
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
    const V = wertVolumen("quaderVolumenB");
    const a = wertLaenge("quaderLaengeB");
    const h = wertLaenge("quaderHoeheB");
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
    const V = wertVolumen("quaderVolumenH");
    const a = wertLaenge("quaderLaengeH");
    const b = wertLaenge("quaderBreiteH");
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
    const a = wertLaenge("wuerfelSeiteV");
    const V = a * a * a;

    schreibeResultat("resultatWuerfelVolumen", `Volumen V = ${formatiereVolumen(V, einheit)}`);
}

function berechneWuerfelSeite() {
    const einheit = ausgabeEinheit("wuerfelEinheit");
    const V = wertVolumen("wuerfelVolumenA");
    const a = Math.cbrt(V);

    schreibeResultat("resultatWuerfelSeite", `Seitenlänge a = ${formatiereLaenge(a, einheit)}`);
}

function berechneKugelVolumen() {
    const einheit = ausgabeEinheit("kugelEinheit");
    const r = wertLaenge("kugelRadiusV");
    const V = (4 / 3) * Math.PI * r * r * r;

    schreibeResultat("resultatKugelVolumen", `Volumen V = ${formatiereVolumen(V, einheit)}`);
}

function berechneKugelRadius() {
    const einheit = ausgabeEinheit("kugelEinheit");
    const V = wertVolumen("kugelVolumenR");
    const r = Math.cbrt((3 * V) / (4 * Math.PI));

    schreibeResultat("resultatKugelRadius", `Radius r = ${formatiereLaenge(r, einheit)}`);
}

function berechneKugelDurchmesser() {
    const einheit = ausgabeEinheit("kugelEinheit");
    const V = wertVolumen("kugelVolumenD");
    const r = Math.cbrt((3 * V) / (4 * Math.PI));
    const d = 2 * r;

    schreibeResultat("resultatKugelDurchmesser", `Durchmesser d = ${formatiereLaenge(d, einheit)}`);
}

function berechneKegelVolumen() {
    const einheit = ausgabeEinheit("kegelEinheit");
    const r = wertLaenge("kegelRadiusV");
    const h = wertLaenge("kegelHoeheV");
    const V = (Math.PI * r * r * h) / 3;

    schreibeResultat("resultatKegelVolumen", `Volumen V = ${formatiereVolumen(V, einheit)}`);
}

function berechneKegelHoehe() {
    const einheit = ausgabeEinheit("kegelEinheit");
    const V = wertVolumen("kegelVolumenH");
    const r = wertLaenge("kegelRadiusH");
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
    const V = wertVolumen("kegelVolumenR");
    const h = wertLaenge("kegelHoeheR");
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
    const G = wertFlaeche("pyramideGrundflaecheV");
    const h = wertLaenge("pyramideHoeheV");
    const V = (G * h) / 3;

    schreibeResultat("resultatPyramideVolumen", `Volumen V = ${formatiereVolumen(V, einheit)}`);
}

function berechnePyramideGrundflaeche() {
    const einheit = ausgabeEinheit("pyramideEinheit");
    const V = wertVolumen("pyramideVolumenG");
    const h = wertLaenge("pyramideHoeheG");
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
    const V = wertVolumen("pyramideVolumenH");
    const G = wertFlaeche("pyramideGrundflaecheH");
    const fehler = pruefeNenner(G, "Die Grundfläche");

    if (fehler) {
        schreibeResultat("resultatPyramideHoehe", fehler);
        return;
    }

    const h = (3 * V) / G;
    schreibeResultat("resultatPyramideHoehe", `Höhe h = ${formatiereLaenge(h, einheit)}`);
}

function berechneQuadratFlaeche() {
    const einheit = ausgabeEinheit("quadratEinheit");
    const l = wertLaenge("quadratSeiteA");
    const A = l * l;

    schreibeResultat("resultatQuadratFlaeche", `Fläche A = ${formatiereFlaeche(A, einheit)}`);
}

function berechneQuadratSeite() {
    const einheit = ausgabeEinheit("quadratEinheit");
    const A = wertFlaeche("quadratFlaecheL");
    const l = Math.sqrt(A);

    schreibeResultat("resultatQuadratSeite", `Seitenlänge l = ${formatiereLaenge(l, einheit)}`);
}

function berechneRechteckFlaeche() {
    const einheit = ausgabeEinheit("rechteckEinheit");
    const l = wertLaenge("rechteckLaengeA");
    const b = wertLaenge("rechteckBreiteA");
    const A = l * b;

    schreibeResultat("resultatRechteckFlaeche", `Fläche A = ${formatiereFlaeche(A, einheit)}`);
}

function berechneRechteckLaenge() {
    const einheit = ausgabeEinheit("rechteckEinheit");
    const A = wertFlaeche("rechteckFlaecheL");
    const b = wertLaenge("rechteckBreiteL");
    const fehler = pruefeNenner(b, "Die Breite");

    if (fehler) {
        schreibeResultat("resultatRechteckLaenge", fehler);
        return;
    }

    const l = A / b;
    schreibeResultat("resultatRechteckLaenge", `Länge l = ${formatiereLaenge(l, einheit)}`);
}

function berechneRechteckBreite() {
    const einheit = ausgabeEinheit("rechteckEinheit");
    const A = wertFlaeche("rechteckFlaecheB");
    const l = wertLaenge("rechteckLaengeB");
    const fehler = pruefeNenner(l, "Die Länge");

    if (fehler) {
        schreibeResultat("resultatRechteckBreite", fehler);
        return;
    }

    const b = A / l;
    schreibeResultat("resultatRechteckBreite", `Breite b = ${formatiereLaenge(b, einheit)}`);
}

function berechneDreieckFlaeche() {
    const einheit = ausgabeEinheit("dreieckEinheit");
    const l = wertLaenge("dreieckGrundseiteA");
    const b = wertLaenge("dreieckHoeheA");
    const A = (l * b) / 2;

    schreibeResultat("resultatDreieckFlaeche", `Fläche A = ${formatiereFlaeche(A, einheit)}`);
}

function berechneDreieckGrundseite() {
    const einheit = ausgabeEinheit("dreieckEinheit");
    const A = wertFlaeche("dreieckFlaecheL");
    const b = wertLaenge("dreieckHoeheL");
    const fehler = pruefeNenner(b, "Die Höhe");

    if (fehler) {
        schreibeResultat("resultatDreieckGrundseite", fehler);
        return;
    }

    const l = (2 * A) / b;
    schreibeResultat("resultatDreieckGrundseite", `Grundseite l = ${formatiereLaenge(l, einheit)}`);
}

function berechneDreieckHoehe() {
    const einheit = ausgabeEinheit("dreieckEinheit");
    const A = wertFlaeche("dreieckFlaecheB");
    const l = wertLaenge("dreieckGrundseiteB");
    const fehler = pruefeNenner(l, "Die Grundseite");

    if (fehler) {
        schreibeResultat("resultatDreieckHoehe", fehler);
        return;
    }

    const b = (2 * A) / l;
    schreibeResultat("resultatDreieckHoehe", `Höhe b = ${formatiereLaenge(b, einheit)}`);
}

function berechneTrapezFlaeche() {
    const einheit = ausgabeEinheit("trapezEinheit");
    const l1 = wertLaenge("trapezLaenge1A");
    const l2 = wertLaenge("trapezLaenge2A");
    const b = wertLaenge("trapezHoeheA");
    const A = ((l1 + l2) / 2) * b;

    schreibeResultat("resultatTrapezFlaeche", `Fläche A = ${formatiereFlaeche(A, einheit)}`);
}

function berechneTrapezHoehe() {
    const einheit = ausgabeEinheit("trapezEinheit");
    const A = wertFlaeche("trapezFlaecheB");
    const l1 = wertLaenge("trapezLaenge1B");
    const l2 = wertLaenge("trapezLaenge2B");
    const nenner = l1 + l2;
    const fehler = pruefeNenner(nenner, "Die Summe der parallelen Seiten");

    if (fehler) {
        schreibeResultat("resultatTrapezHoehe", fehler);
        return;
    }

    const b = (2 * A) / nenner;
    schreibeResultat("resultatTrapezHoehe", `Höhe b = ${formatiereLaenge(b, einheit)}`);
}

function berechneKreisFlaecheRadius() {
    const einheit = ausgabeEinheit("kreisEinheit");
    const r = wertLaenge("kreisRadiusA");
    const A = Math.PI * r * r;

    schreibeResultat("resultatKreisFlaecheRadius", `Fläche A = ${formatiereFlaeche(A, einheit)}`);
}

function berechneKreisFlaecheDurchmesser() {
    const einheit = ausgabeEinheit("kreisEinheit");
    const d = wertLaenge("kreisDurchmesserA");
    const A = (d * d * Math.PI) / 4;

    schreibeResultat("resultatKreisFlaecheDurchmesser", `Fläche A = ${formatiereFlaeche(A, einheit)}`);
}

function berechneKreisRadius() {
    const einheit = ausgabeEinheit("kreisEinheit");
    const A = wertFlaeche("kreisFlaecheR");
    const r = Math.sqrt(A / Math.PI);

    schreibeResultat("resultatKreisRadius", `Radius r = ${formatiereLaenge(r, einheit)}`);
}

function berechneKreisDurchmesser() {
    const einheit = ausgabeEinheit("kreisEinheit");
    const A = wertFlaeche("kreisFlaecheD");
    const d = 2 * Math.sqrt(A / Math.PI);

    schreibeResultat("resultatKreisDurchmesser", `Durchmesser d = ${formatiereLaenge(d, einheit)}`);
}

function berechneEllipseFlaeche() {
    const einheit = ausgabeEinheit("ellipseEinheit");
    const D = wertLaenge("ellipseAchseGrossA");
    const d = wertLaenge("ellipseAchseKleinA");
    const A = (Math.PI * D * d) / 4;

    schreibeResultat("resultatEllipseFlaeche", `Fläche A = ${formatiereFlaeche(A, einheit)}`);
}

function berechneEllipseGrosseAchse() {
    const einheit = ausgabeEinheit("ellipseEinheit");
    const A = wertFlaeche("ellipseFlaecheD");
    const d = wertLaenge("ellipseAchseKleinD");
    const fehler = pruefeNenner(Math.PI * d, "π mal kleine Achse");

    if (fehler) {
        schreibeResultat("resultatEllipseGrosseAchse", fehler);
        return;
    }

    const D = (4 * A) / (Math.PI * d);
    schreibeResultat("resultatEllipseGrosseAchse", `Große Achse D = ${formatiereLaenge(D, einheit)}`);
}

function berechneEllipseKleineAchse() {
    const einheit = ausgabeEinheit("ellipseEinheit");
    const A = wertFlaeche("ellipseFlaecheKleinD");
    const D = wertLaenge("ellipseAchseGrossD");
    const fehler = pruefeNenner(Math.PI * D, "π mal große Achse");

    if (fehler) {
        schreibeResultat("resultatEllipseKleineAchse", fehler);
        return;
    }

    const d = (4 * A) / (Math.PI * D);
    schreibeResultat("resultatEllipseKleineAchse", `Kleine Achse d = ${formatiereLaenge(d, einheit)}`);
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

    if (document.getElementById("resultatQuadratFlaeche")) {
        berechneQuadratFlaeche();
        berechneQuadratSeite();
    }

    if (document.getElementById("resultatRechteckFlaeche")) {
        berechneRechteckFlaeche();
        berechneRechteckLaenge();
        berechneRechteckBreite();
    }

    if (document.getElementById("resultatDreieckFlaeche")) {
        berechneDreieckFlaeche();
        berechneDreieckGrundseite();
        berechneDreieckHoehe();
    }

    if (document.getElementById("resultatTrapezFlaeche")) {
        berechneTrapezFlaeche();
        berechneTrapezHoehe();
    }

    if (document.getElementById("resultatKreisFlaecheRadius")) {
        berechneKreisFlaecheRadius();
        berechneKreisFlaecheDurchmesser();
        berechneKreisRadius();
        berechneKreisDurchmesser();
    }

    if (document.getElementById("resultatEllipseFlaeche")) {
        berechneEllipseFlaeche();
        berechneEllipseGrosseAchse();
        berechneEllipseKleineAchse();
    }

    if (document.getElementById("resultatLeistung")) {
        berechneLeistung();
    }
};
