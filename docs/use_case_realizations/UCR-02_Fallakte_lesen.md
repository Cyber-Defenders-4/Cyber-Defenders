# UCR-02 – Fallakte lesen

| Autor | Realisiert |
| ----- | ---------- |
| Marco D'Aquila | [UC-02 Fallakte lesen](../use_cases/UC-02_fallakte_lesen.md) |

## 1. Einleitung

Diese Use-Case-Realisierung beschreibt, wie das System die Fallakte einer gewählten Mission lädt, anzeigt und den Start der Mission verarbeitet. Sie deckt den Hauptablauf sowie die Alternativabläufe 1a (Fallakte nicht ladbar) und 3a (Mission nicht ladbar) von UC-02 ab.

## 2. Realisierung

### 2.1 Beteiligte Objekte

| Objekt | Stereotyp | Verantwortung |
|---|---|---|
| :Fallaktenansicht | boundary | Zeigt die Fallakte an, nimmt den Start-Befehl entgegen und meldet Ladefehler. |
| :MissionStarten | control | Koordiniert das Laden der Fallakte, der Mission und der Beweisdateien. |
| :Fallakte | entity | Hält das Szenario, die Lernziele und die Nachricht der Vorgesetzten. |
| :Mission | entity | Speichert die grundlegenden Daten der Mission und liefert das Code-Gerüst. |
| :Beweisdatei | entity | Repräsentiert die für die Arbeitsansicht benötigten Beweise. |

### 2.2 Sequenzdiagramme

![Sequenzdiagramm UC-02](https://github.com/Cyber-Defenders-4/Cyber-Defenders/blob/MarcoDaquila-patch-links/docs/diagrams/sequences/UC-02_sequence.png?raw=true)

### 2.3 Ablaufbeschreibung

#### Hauptablauf

1. Der Spieler fordert die Fallakte der gewählten Mission an. Die Boundary :Fallaktenansicht leitet diese Anfrage an die Control :MissionStarten weiter, welche die Daten aus der Entity :Fallakte ausliest und zurückgibt.
2. Klickt der Spieler auf "Mission starten", sendet die Boundary den Ladebefehl. 
3. Die Control ruft nun die :Mission- und :Beweisdatei-Entities ab, um Code-Gerüst, Einsatzbericht und Beweise zu laden. 
4. Die Boundary öffnet anschließend die Arbeitsansicht. 

#### Alternativablauf 1a – Fallakte nicht ladbar

1. Bei Schritt 1 antwortet das Backend nicht.
2. Die Boundary zeigt den Fehler mit der Option "Erneut versuchen" an.

#### Alternativablauf 3a – Mission nicht ladbar

1. Bei Schritt 3 schlägt das Laden der Missionsdaten fehl.
2. Der Spieler wird mit einer Fehlermeldung zur Missionsübersicht (UC-01) zurückgeleitet.

### 2.4 Zustandsautomat

Nicht zutreffend. Die Missions- und Fallaktendaten werden hier lediglich ausgelesen.

### 2.5 Entwurfsklassen

| Analyseobjekt (2.1) | Entwurfsklasse(n) |
|---|---|
| :Fallaktenansicht | CaseFileComponent, WorkspaceComponent, MissionApiService |
| :MissionStarten | MissionController, MissionService |
| :Fallakte | CaseFile |
| :Mission | Mission, MissionRepository |
| :Beweisdatei | EvidenceFile, EvidenceRepository |

![Klassendiagramm UCR-02](../diagrams/UCR-02_classes.png)

![Sequenzdiagramm UCR-02, Entwurfsklassen](../diagrams/UCR-02_sequence_design.png)

## 3. Abgeleitete Anforderungen

- DR-02-01 — Das Frontend muss asynchrone HTTP-Timeouts beim Abrufen der Fallakte und der Missionsdaten selbstständig abfangen und in nutzerfreundliche Fehlermeldungen übersetzen.
- DR-02-02 — Das Laden der Fallakte und der Arbeitsansicht erfolgt über getrennte Ladevorgänge und Request-Zyklen.
