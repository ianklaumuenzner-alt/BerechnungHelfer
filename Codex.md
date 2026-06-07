# Codex Notizen

Diese Datei vor neuen Änderungen am Projekt zuerst lesen.

## Projektziel

Der Berechnungshelfer soll ohne Server und ohne `fetch` funktionieren. `Main.html` wird direkt im Browser geöffnet. Die einzelnen Berechnungsseiten werden links über ein HTML-`object` geladen.

## Wichtige Struktur

- `Main.html`: Hauptdatei mit rechter Navigation und linkem Anzeigebereich.
- `Styles_Main.css`: Design nur für Hauptlayout und Navigation.
- `script.js`: Enthält `ladeSeite(pfad)` und ändert nur `seitenFenster.data`.
- `Interface/`: Enthält einzelne Berechnungsseiten, die nicht weiter unterteilt sind.
- `Interface/Geometrie/`: Enthält die Unterordner `Koerper` und `Flaechen`.
- `Interface/Geometrie/Koerper/`: Enthält die Volumen-Körperseiten.
- `Interface/Geometrie/Flaechen/`: Enthält die Flächenberechnungen.
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
- Die vorhandene Zylinderseite `Interface/Geometrie/Koerper/Volumen_berechnung.html` in diese Kategorie eingeordnet.
- Neue Volumen-Seiten erstellt:
  - `Interface/Geometrie/Koerper/Volumen_quader.html`
  - `Interface/Geometrie/Koerper/Volumen_wuerfel.html`
  - `Interface/Geometrie/Koerper/Volumen_kugel.html`
  - `Interface/Geometrie/Koerper/Volumen_kegel.html`
  - `Interface/Geometrie/Koerper/Volumen_pyramide.html`
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
- Alle Körperseiten wurden in den Ordner `Interface/Geometrie/Koerper/` verschoben.
- Die Navigation in `Main.html` zeigt bei Körpern jetzt auf `Interface/Geometrie/Koerper/...`.
- Geometrie-Seiten binden wegen der tieferen Ordnerstruktur `../../Styles_Interface.css` und `../../Interface.js` ein.
- Jede Geometrie-Seite hat eine Ausgabe-Einheit-Auswahl: `mm`, `cm`, `m`, `km`.
- Jede Geometrie-Eingabe hat zusätzlich eine eigene Einheit-Auswahl direkt neben dem Eingabefeld.
- Längen-Eingaben können `mm`, `cm`, `m` oder `km` sein.
- Flächen-Eingaben können `mm²`, `cm²`, `m²` oder `km²` sein.
- Volumen-Eingaben können `mm³`, `cm³`, `m³` oder `km³` sein.
- Die Funktionen rechnen Eingaben intern zuerst in `m`, `m²` oder `m³` um und geben danach in der gewählten Ausgabe-Einheit aus.
- Jede Geometrie-Berechnung hat direkt im Abschnitt eine Formelbox im Stil einer kompakten Formelsammlung.
- Formelboxen nutzen die CSS-Klasse `.formel` in `Interface/Styles_Interface.css`.
- Neue Navigation `Geometrie Flächen` in `Main.html` ergänzt.
- Neue Flächenberechnungen erstellt:
  - `Interface/Geometrie/Flaechen/Flaeche_quadrat.html`
  - `Interface/Geometrie/Flaechen/Flaeche_rechteck.html`
  - `Interface/Geometrie/Flaechen/Flaeche_dreieck.html`
  - `Interface/Geometrie/Flaechen/Flaeche_trapez.html`
  - `Interface/Geometrie/Flaechen/Flaeche_kreis.html`
  - `Interface/Geometrie/Flaechen/Flaeche_ellipse.html`
- SVG-Hilfebilder liegen in:
  - `Interface/Geometrie/Flaechen/SVG/`
  - `Interface/Geometrie/Koerper/SVG/`
- Flächenfunktionen in `Interface/Interface.js` ergänzt; insgesamt wurden 35 Geometrie-Berechnungen lokal geprüft.

## Prüfungen

- `rg`-Prüfung auf `fetch` und `XMLHttpRequest`: keine Nutzung gefunden.
- Alle `ladeSeite(...)`-Pfade aus `Main.html` wurden geprüft und zeigen auf vorhandene Dateien.
- Der integrierte Browser konnte `file://` aus Sicherheitsgründen nicht öffnen; deshalb wurde statisch geprüft.
