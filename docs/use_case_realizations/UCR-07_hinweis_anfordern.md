# UCR-07 – Hinweis anfordern

| Autor | Realisiert |
| ----- | ---------- |
| Leonie | [UC-07 – Hinweis anfordern](../use_cases/UC-07_hinweis-anfordern.md) |

## 1. Einleitung

Diese Use-Case-Realisierung beschreibt, wie ein angemeldeter Spieler während einer Mission einen Hinweis anfordert (Erweiterung von UC-03). Sie deckt den Hauptablauf und die Alternativabläufe 2a (keine Hinweise mehr) und 2b (Backend nicht erreichbar) von UC-07 ab.

Das Backend prüft, ob für die Mission noch Hinweise übrig sind, liest den nächsten Hinweis und speichert die Nutzung. Anschließend zeigt der Editor den Hinweis und die Zahl der verbleibenden Hinweise an. Die Auswertung der genutzten Hinweise (Dialog „Fall gelöst“, Erfolge) gehört zu UC-05 und UC-06.

Die Realisierung orientiert sich am Figma-Mockup M3 „Mission 01“.

## 2. Realisierung

### 2.1 Beteiligte Objekte

| Objekt | Stereotyp | Verantwortung |
|---|---|---|
| :CodeEditor | boundary | Nimmt die Anfrage des Spielers im Editor entgegen und zeigt Hinweis, verbleibende Hinweise, Meldungen und Fehlermeldungen an. |
| :HinweisAnfordern | control | Prüft, ob noch Hinweise übrig sind, liest den nächsten Hinweis, speichert die Nutzung und gibt das Ergebnis an die Boundary zurück. |
| :Missionsfortschritt | entity | Speichert, wie viele Hinweise ein Spieler in einer Mission genutzt hat. |
| :Hinweis | entity | Speichert die Hinweise einer Mission mit Reihenfolge und Text. |

### 2.2 Sequenzdiagramme

Das Diagramm zeigt den Hauptablauf und die Alternativabläufe 2a und 2b als Fragmente. Die Nutzung des Hinweises wird gespeichert, bevor :HinweisAnfordern den Hinweis an die Boundary zurückgibt.

![Sequenzdiagramm UCR-07](../diagrams/UCR-07_sequence.png)

### 2.3 Ablaufbeschreibung

#### Hauptablauf

1. Der Spieler fordert im Editor einen Hinweis an (`hinweisAnfordern()` an :CodeEditor).
2. :CodeEditor fragt bei :HinweisAnfordern den nächsten Hinweis für Spieler und Mission an (`nächstenHinweis`).
3. :HinweisAnfordern liest bei :Missionsfortschritt, wie viele Hinweise der Spieler in der Mission schon genutzt hat.
4. Sind es weniger als drei, liest :HinweisAnfordern bei :Hinweis den Hinweis mit der Reihenfolge „genutzte Hinweise + 1“.
5. :HinweisAnfordern speichert bei :Missionsfortschritt die Nutzung des Hinweises und gibt Hinweis und verbleibende Anzahl an :CodeEditor zurück.
6. :CodeEditor zeigt den Hinweis und die verbleibenden Hinweise an.

#### Alternativablauf 2a – Keine Hinweise mehr

1. Bei Schritt 4 hat der Spieler schon drei Hinweise genutzt.
2. :HinweisAnfordern meldet `keineHinweise` an :CodeEditor und speichert nichts.
3. :CodeEditor zeigt „Keine weiteren Hinweise“ an. Der Use Case endet.

#### Alternativablauf 2b – Backend nicht erreichbar

1. Bei Schritt 2 antwortet das Backend nicht.
2. :CodeEditor zeigt eine Fehlermeldung an. Der Hinweis zählt nicht als genutzt.
3. Der Ablauf geht bei Schritt 1 weiter.

### 2.4 Zustandsautomat

Nicht zutreffend. Die Zahl der genutzten Hinweise ist ein Zähler ohne eigene Zustände.

### 2.5 Entwurfsklassen

| Analyseobjekt (2.1) | Entwurfsklasse(n) |
|---|---|
| :CodeEditor «boundary» | CodeEditorComponent, HintApiService |
| :HinweisAnfordern «control» | HintController, HintService |
| :Missionsfortschritt «entity» | ProgressRepository (findHintsUsed, incrementHintsUsed) |
| :Hinweis «entity» | Hint, HintRepository |

Zusätzlich bündelt HintResponse den Hinweis, die verbleibende Anzahl und die Angabe `noHintsLeft` für die Antwort an das Frontend.

![Klassendiagramm UCR-07](../diagrams/UCR-07_classes.png)

![Sequenzdiagramm UCR-07, Entwurfsklassen](../diagrams/UCR-07_sequence_design.png)

## 3. Abgeleitete Anforderungen

- DR-07-01 — Pro Mission stehen höchstens drei Hinweise zur Verfügung.
- DR-07-02 — Der nächste Hinweis ist der mit der Reihenfolge „genutzte Hinweise + 1“, die Reihenfolge der Hinweise ist je Mission fest.
- DR-07-03 — Die Zahl der genutzten Hinweise wird je Spieler und Mission gespeichert.
- DR-07-04 — Ist das Backend nicht erreichbar, zeigt der Editor eine Fehlermeldung, und der Hinweis zählt nicht als genutzt.
- DR-07-05 — Sind alle Hinweise genutzt, antwortet das Backend mit „keine Hinweise mehr“ und speichert nichts.
- DR-07-06 — Das Anfordern eines Hinweises verändert den Missionsstatus nicht.