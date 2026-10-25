# UCR-04 – Lösung prüfen lassen

| Autor | Realisiert |
| ----- | ---------- |
| Felix | [UC-04 – Lösung prüfen lassen](../use_cases/UC-04_loesung-pruefen.md) |

## 1. Einleitung

Diese Use-Case-Realisierung beschreibt, wie eine eingereichte Java-Lösung gegen die Tests einer Mission geprüft wird. Sie umfasst den Hauptablauf und die Alternativabläufe 2a (Backend nicht erreichbar), 3a (Compilerfehler), 3b (Zeitlimit überschritten) und 4a (Lösung falsch). Das Speichern eines erfolgreichen Missionsabschlusses gehört zu UC-05.

## 2. Realisierung

### 2.1 Beteiligte Objekte

| Objekt | Stereotyp | Verantwortung |
| --- | --- | --- |
| :CodeEditor | boundary | Nimmt die Lösung entgegen und zeigt Testergebnisse oder Fehlermeldungen an. |
| :LösungPrüfen | control | Koordiniert die Prüfung, wertet Ergebnisse aus und zählt gültige Lösungsversuche. |
| :Ausführungsumgebung | boundary | Führt den Code isoliert gegen die Tests aus und meldet Ergebnisse oder Fehler. |
| :Testfall | entity | Stellt die Testfälle der Mission bereit. |
| :Missionsfortschritt | entity | Speichert die Anzahl der Lösungsversuche des Spielers. |

### 2.2 Sequenzdiagramme

Das Diagramm zeigt den Hauptablauf mit den Alternativen 2a, 3a, 3b und 4a sowie den Aufruf von UC-05 bei vollständig bestandenen Tests.

![Sequenzdiagramm UCR-04](../diagrams/ucr/sequences/UCR-04_sequence.pdf)

### 2.3 Ablaufbeschreibung

#### Hauptablauf

1. Der Spieler reicht die Lösung im :CodeEditor ein. Dieser übergibt Code, Spieler und Mission an :LösungPrüfen.
2. :LösungPrüfen liest die Testfälle aus :Testfall und lässt den Code von :Ausführungsumgebung mit einem Zeitlimit von 5 Sekunden prüfen.
3. Nach ausgeführten Tests zählt :LösungPrüfen den Versuch über :Missionsfortschritt und gibt die Ergebnisse an :CodeEditor zurück.
4. :CodeEditor zeigt die Ergebnisse an. Sind alle Tests bestanden, wird UC-05 „Fortschritt speichern“ ausgelöst.

#### Alternativabläufe

- **2a – Backend nicht erreichbar:** :CodeEditor zeigt einen Fehler an und behält den Code. Der Spieler kann erneut einreichen.
- **3a – Compilerfehler:** :CodeEditor zeigt die Compilerfehlermeldung; der Versuch wird nicht gezählt.
- **3b – Zeitlimit überschritten:** Die Ausführung wird abgebrochen und das Zeitlimit gemeldet; der Versuch wird nicht gezählt.
- **4a – Lösung falsch:** :CodeEditor zeigt die bestandenen Tests und die Fehlerdetails an. Der gezählte Versuch bleibt ohne Missionsabschluss.

### 2.4 Zustandsautomat

Nicht zutreffend. Die Prüfung selbst verändert keinen Missionsstatus; der Abschluss wird in UC-05 gespeichert.

### 2.5 Entwurfsklassen

| Analyseobjekt (2.1) | Entwurfsklasse(n) |
| --- | --- |
| :CodeEditor «boundary» | CodeEditorComponent, SubmissionApiService |
| :LösungPrüfen «control» | SubmissionController, SubmissionService |
| :Ausführungsumgebung «boundary» | CodeRunner (Schnittstelle), SandboxRunner |
| :Testfall «entity» | TestCase, TestCaseRepository |
| :Missionsfortschritt «entity» | ProgressRepository |

Die Ergebnisobjekte `RunResult`, `TestResult` und `SubmissionResult` übertragen Prüfergebnisse und Fehlermeldungen.

![Klassendiagramm UCR-04](../diagrams/ucr/classes/UCR-04_classes.pdf)

![Sequenzdiagramm UCR-04, Entwurfsklassen](../diagrams/ucr/sequence_designs/UCR-04_sequence_design.pdf)

## 3. Abgeleitete Anforderungen

- DR-04-01 — Eingereichter Code wird isoliert und mit maximal 5 Sekunden Laufzeit geprüft.
- DR-04-02 — Nur vollständig ausgeführte und ausgewertete Tests zählen als Lösungsversuch; Compilerfehler, Zeitüberschreitungen und Verbindungsfehler zählen nicht.
- DR-04-03 — Bei einem Verbindungsfehler bleibt der Code im Editor erhalten.
- DR-04-04 — Fehlgeschlagene Tests liefern Beschreibung sowie erwartetes und tatsächliches Ergebnis.
