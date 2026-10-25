# UCR-08 – Code ausführen

| Autor | Realisiert |
| ----- | ---------- |
| Leonie | [UC-08 – Code ausführen](../use_cases/UC-08_code-ausfuehren.md) |

## 1. Einleitung

Diese Use-Case-Realisierung beschreibt, wie ein angemeldeter Spieler während einer Mission den aktuellen Java-Code aus dem Editor zur Probe ausführt (Erweiterung von UC-03). Sie deckt den Hauptablauf und die Alternativabläufe 2a (Backend nicht erreichbar), 3a (Compiler- oder Laufzeitfehler) und 3b (Zeitlimit überschritten) von UC-08 ab.

Der Editor übergibt den Code an das Backend, das ihn in einer isolierten Ausführungsumgebung übersetzen und ausführen lässt. Die Ausgabe oder die Fehlermeldung erscheint in der Konsole.

Die Prüfung gegen die Tests der Mission gehört zu UC-04 und ist hier nicht enthalten. Ein Probelauf ist kein Lösungsversuch und wird nicht gespeichert.

Die Realisierung orientiert sich am Figma-Mockup M3 „Mission 01“.

## 2. Realisierung

### 2.1 Beteiligte Objekte

| Objekt | Stereotyp | Verantwortung |
|---|---|---|
| :CodeEditor | boundary | Nimmt den Start der Ausführung entgegen, stellt den aktuellen Code bereit und zeigt Ausgabe, Fehlermeldungen und das Zeitlimit in der Konsole an. |
| :CodeAusführen | control | Nimmt den Code entgegen, übergibt ihn zur Ausführung und gibt Ausgabe, Fehlermeldung oder Zeitlimit zurück. |
| :Ausführungsumgebung | boundary | Externes System: übersetzt und führt den Code isoliert aus, begrenzt die Laufzeit auf 5 s und meldet Ausgabe, Fehlermeldung oder Zeitlimit. |

Es gibt kein Entity-Objekt, weil ein Probelauf nicht gespeichert wird. Die Konsole gehört im Analysemodell zur Boundary :CodeEditor.

### 2.2 Sequenzdiagramme

Das Diagramm zeigt den Hauptablauf und die Alternativabläufe 2a, 3a und 3b als Fragmente. Das Zeitlimit wird von der Ausführungsumgebung gemeldet.

![Sequenzdiagramm UCR-08](../diagrams/UCR-08_sequence.png)

### 2.3 Ablaufbeschreibung

#### Hauptablauf

1. Der Spieler führt seinen Code aus (`codeAusführen(code)` an :CodeEditor).
2. :CodeEditor übergibt den aktuellen Code an :CodeAusführen (`ausführen(code)`).
3. :CodeAusführen übergibt den Code an :Ausführungsumgebung (`übersetzenUndAusführen(code, 5 s)`).
4. Läuft der Code fehlerfrei, liefert :Ausführungsumgebung die Ausgabe an :CodeAusführen, das sie an :CodeEditor zurückgibt.
5. :CodeEditor zeigt die Ausgabe in der Konsole an.

#### Alternativablauf 2a – Backend nicht erreichbar

1. Bei Schritt 2 antwortet das Backend nicht.
2. :CodeEditor zeigt eine Fehlermeldung an, der Code bleibt im Editor erhalten.
3. Der Ablauf geht bei Schritt 1 weiter.

#### Alternativablauf 3a – Compiler- oder Laufzeitfehler

1. Bei Schritt 3 meldet :Ausführungsumgebung eine Fehlermeldung.
2. :CodeAusführen gibt sie an :CodeEditor zurück.
3. :CodeEditor zeigt die Fehlermeldung in der Konsole an. Der Use Case endet.

#### Alternativablauf 3b – Zeitlimit überschritten

1. Bei Schritt 3 meldet :Ausführungsumgebung, dass das Zeitlimit überschritten wurde.
2. :CodeAusführen gibt die Meldung an :CodeEditor zurück.
3. :CodeEditor zeigt „Zeitlimit überschritten“ in der Konsole an. Der Use Case endet.

### 2.4 Zustandsautomat

Nicht zutreffend. Ein Probelauf wird nicht gespeichert, es gibt kein Objekt mit eigenem Status.

### 2.5 Entwurfsklassen

| Analyseobjekt (2.1) | Entwurfsklasse(n) |
|---|---|
| :CodeEditor «boundary» | CodeEditorComponent, ConsoleComponent, RunApiService |
| :CodeAusführen «control» | RunController, RunService |
| :Ausführungsumgebung «boundary» | CodeRunner (Schnittstelle), SandboxRunner |

Zusätzlich bündelt RunResult Ausgabe, Fehlermeldung und die Angabe `timedOut` für die Antwort.

![Klassendiagramm UCR-08](../diagrams/UCR-08_classes.png)

![Sequenzdiagramm UCR-08, Entwurfsklassen](../diagrams/UCR-08_sequence_design.png)

## 3. Abgeleitete Anforderungen

- DR-08-01 — Der Code wird über die Schnittstelle CodeRunner in einer isolierten Umgebung ausgeführt.
- DR-08-02 — Die Ausführung ist auf 5 s (5000 ms) begrenzt. Wird das Limit überschritten, meldet die Ausführungsumgebung das Zeitlimit.
- DR-08-03 — Das Ergebnis enthält die Ausgabe, eine Fehlermeldung und die Angabe, ob das Zeitlimit überschritten wurde.
- DR-08-04 — Compiler- und Laufzeitfehler werden mit ihrer Fehlermeldung in der Konsole angezeigt.
- DR-08-05 — Ist das Backend nicht erreichbar, bleibt der Code im Editor erhalten.
- DR-08-06 — Ein Probelauf wird nicht gespeichert, zählt nicht als Lösungsversuch und ändert den Fortschritt nicht.