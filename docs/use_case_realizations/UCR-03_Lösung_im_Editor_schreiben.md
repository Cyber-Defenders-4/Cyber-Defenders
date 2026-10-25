# UCR-03 – Lösung im Editor schreiben

| Autor | Realisiert |
| ----- | ---------- |
| Marco D'Aquila | [UC-03 Lösung im Editor schreiben](../use_cases/UC-03_loesung-schreiben.md) |

## 1. Einleitung

Diese Use-Case-Realisierung beschreibt, wie das System Eingaben im Code-Editor verarbeitet, automatisch zwischenspeichert und das Zurücksetzen von Code-Entwürfen verwaltet. Sie deckt den Hauptablauf sowie das Zurücksetzen (3c) und fehlschlagende Speicherversuche (4a) ab.

## 2. Realisierung

### 2.1 Beteiligte Objekte

| Objekt | Stereotyp | Verantwortung |
|---|---|---|
| :CodeEditor | boundary | Nimmt Code-Eingaben entgegen, bietet Syntaxhervorhebung und zeigt Speicher-Fehler an. |
| :EntwurfBearbeiten | control | Verarbeitet automatische Speicheranfragen und stellt den Originalcode beim Zurücksetzen wieder her. |
| :Codeentwurf | entity | Speichert den aktuellen Zwischenstand des geschriebenen Codes. |
| :Mission | entity | Liefert das unveränderliche Code-Gerüst für das Zurücksetzen. |

### 2.2 Sequenzdiagramme

![Sequenzdiagramm UCR-03](../diagrams/UCR-03_sequence.png)

### 2.3 Ablaufbeschreibung

#### Hauptablauf

1. Der Spieler öffnet den Editor in der Boundary :CodeEditor, welche den Entwurf über die Control :EntwurfBearbeiten anfragt. 
2. Die Control sucht in der :Codeentwurf-Entity nach einem gespeicherten Stand; falls keiner existiert, lädt sie das Code-Gerüst aus der :Mission-Entity.
3. Während der Spieler arbeitet, sendet die Boundary bei Änderungen den Code an die Control, welche ihn in der :Codeentwurf-Entity speichert.

#### Alternativablauf 3c – Code zurücksetzen

1. Setzt der Spieler den Code zurück, fordert die Boundary dies bei der Control an.
2. Die Control lädt erneut das Code-Gerüst aus der :Mission-Entity, speichert dieses als neuen Entwurf und gibt es an die Boundary zurück, um den Editor zu überschreiben.

#### Alternativablauf 4a – Entwurf nicht speicherbar

1. Schlägt das Speichern fehl, meldet die Control einen Fehler an die Boundary.
2. Die Boundary zeigt einen Hinweis an, während der lokal getippte Code im Editor erhalten bleibt.

### 2.4 Zustandsautomat

Nicht zutreffend. Es werden nur Entwürfe aktualisiert, aber keine Statusübergänge durchlaufen.

### 2.5 Entwurfsklassen

| Analyseobjekt (2.1) | Entwurfsklasse(n) |
|---|---|
| :CodeEditor | CodeEditorComponent, DraftApiService |
| :EntwurfBearbeiten | DraftController, DraftService |
| :Codeentwurf | CodeDraft, DraftRepository |
| :Mission | Mission, MissionRepository |

![Klassendiagramm UCR-03](../diagrams/UCR-03_classes.png)

![Sequenzdiagramm UCR-03, Entwurfsklassen](../diagrams/UCR-03_sequence_design.png)

## 3. Abgeleitete Anforderungen

- DR-03-01 — Das Frontend fragt den Code-Entwurf über einen asynchronen HTTP GET-Call ab; Änderungen werden per HTTP PUT alle 10 Sekunden automatisch an das Backend gesendet (Auto-Save).
- DR-03-02 — Beim Zurücksetzen des Codes überschreibt das Backend den Entwurf aktiv mit dem ursprünglichen Code-Template aus der Datenbank und liefert diesen Zustand zurück.
