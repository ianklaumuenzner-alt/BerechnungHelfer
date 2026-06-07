# Codex Notizen

Diese Datei vor neuen Änderungen am Projekt zuerst lesen.

## Projektziel

Der Berechnungshelfer soll ohne Server und ohne `fetch` funktionieren. `Main.html` wird direkt im Browser geöffnet. Die einzelnen Berechnungsseiten werden links über ein HTML-`object` geladen.

## Wichtige Struktur

- `Main.html`: Hauptdatei mit rechter Navigation und linkem Anzeigebereich.
- `Styles_Main.css`: Design nur für Hauptlayout und Navigation.
- `script.js`: Enthält `ladeSeite(pfad)` und ändert nur `seitenFenster.data`.
- `Interface/`: Enthält alle einzelnen Berechnungsseiten.
- `Interface/Interface.js`: Gemeinsame Berechnungsfunktionen für Interface-Seiten.
- `Interface/Styles_Interface.css`: Gemeinsames Design für Interface-Seiten.

## Regeln

- Keine `fetch`-Funktion verwenden.
- Keine Serverabhängigkeit einbauen.
- Navigation bleibt in `Main.html`.
- Berechnungen bleiben einzelne HTML-Dateien im Ordner `Interface`.
- Neue Seiten werden über `ladeSeite('Interface/Dateiname.html')` in das `object` geladen.
- Dateipfade und Gross-/Kleinschreibung genau beachten.

## Bisherige Änderungen

- Neue Seite `Interface/Leistung_berechnung.html` erstellt.
- In `Interface/Interface.js` die Funktion `berechneLeistung()` ergänzt.
- In `Main.html` einen Button für Leistungsberechnung ergänzt.
- In `Main.html` eine aufklappbare Kategorie `Volumen Körper` erstellt.
- Die vorhandene Zylinderseite `Interface/Volumen_berechnung.html` in diese Kategorie eingeordnet.
- Neue Volumen-Seiten erstellt:
  - `Interface/Volumen_quader.html`
  - `Interface/Volumen_wuerfel.html`
  - `Interface/Volumen_kugel.html`
  - `Interface/Volumen_kegel.html`
  - `Interface/Volumen_pyramide.html`
- In `Interface/Interface.js` die passenden Volumen-Funktionen ergänzt:
  - `berechneVolumenQuader()`
  - `berechneVolumenWuerfel()`
  - `berechneVolumenKugel()`
  - `berechneVolumenKegel()`
  - `berechneVolumenPyramide()`
- In `Styles_Main.css` Styling für die aufklappbare Navigation ergänzt.
- Volumen-Seiten korrigiert: Jede Körperseite enthält mehrere kleine Berechnungsbereiche für mögliche gesuchte Werte.
- Beispiel: Beim Zylinder können `Volumen`, `Höhe` oder `Durchmesser` gesucht werden.
- Beispiel: Beim Quader können `Volumen`, `Länge a`, `Breite b` oder `Höhe h` gesucht werden.
- Der Quader ist wieder ein normaler Quader mit drei Maßen `a`, `b` und `h`; keine quadratische Grundfläche.
- Die Volumen-Seiten berechnen aktuell gezielt Volumen-Umstellungen, nicht Oberfläche.

## Prüfungen

- `rg`-Prüfung auf `fetch` und `XMLHttpRequest`: keine Nutzung gefunden.
- Alle `ladeSeite(...)`-Pfade aus `Main.html` wurden geprüft und zeigen auf vorhandene Dateien.
- Der integrierte Browser konnte `file://` aus Sicherheitsgründen nicht öffnen; deshalb wurde statisch geprüft.
