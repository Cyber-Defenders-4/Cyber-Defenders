# UC-02 Fallakte lesen

| Author | Estimate | User stories |
| ------ | -------- | ------------ |
| Marco | 2 | [#17](https://github.com/MarcoDaquila/Cyber-Defenders/issues/17), [#19](https://github.com/MarcoDaquila/Cyber-Defenders/issues/19), [#20](https://github.com/MarcoDaquila/Cyber-Defenders/issues/20) |

## 1 Brief description

Der Spieler liest die Fallakte der gewählten Mission. Sie beschreibt das Szenario (zum Beispiel einen gehackten Serverraum), das Ziel und die Beweisstücke. Damit weiß der Spieler, was er im Editor lösen soll.

## 2 Actors

- **Primary:** Spieler
- **Secondary:** keine

## 3 Mockup

<!-- Vorlage im Design System: Mission 01 "Gehackter Serverraum", Bereich Fallakte (Design System, Mockup 3). Als PNG exportieren und unter docs/mockups/ ablegen. -->

![Mockup UC-02](../mockups/UC-02_fallakte-lesen.png)

## 4 Flow of events

### 4.1 Basic flow

1. Der Spieler öffnet die Fallakte der gewählten Mission.
2. Das System zeigt Szenario, Ziel und Beweisstücke der Mission an.
3. Der Spieler liest die Fallakte und wechselt zum Editor.

### 4.2 Alternative flows

**2a · Fallakte nicht ladbar.** Bei Schritt 2 antwortet das Backend nicht. Das System zeigt eine Fehlermeldung mit der Möglichkeit, es erneut zu versuchen. Der Ablauf geht bei Schritt 1 weiter.

### 4.3 Sequence diagram

![Sequence diagram UC-02](../diagrams/UC-02_sequence.png)

## 5 Special requirements

Keine.

## 6 Preconditions

- Der Spieler ist angemeldet.
- Eine Mission ist gewählt (UC-01).

## 7 Postconditions

- Der Spieler kennt Szenario und Ziel der Mission.
