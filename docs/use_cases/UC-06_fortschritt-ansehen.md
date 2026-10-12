# UC-06 Fortschritt ansehen

| Author | Estimate | User stories |
| ------ | -------- | ------------ |
| Leonie | 3 | noch keine Story, Issue anlegen |

## 1 Brief description

Der Spieler sieht, welche Missionen er gelöst hat, welche offen sind und wie weit er insgesamt ist. So behält er den Überblick und weiß, womit er weitermachen kann.

## 2 Actors

- **Primary:** Spieler
- **Secondary:** keine

## 3 Mockup

<!-- Vorlage im Design System: Missionsübersicht mit Fortschrittsanzeige (Design System, Mockup 2, muss ergänzt werden). Als PNG exportieren und unter docs/mockups/ ablegen. -->

![Mockup UC-06](../mockups/UC-06_fortschritt-ansehen.png)

## 4 Flow of events

### 4.1 Basic flow

1. Der Spieler öffnet die Fortschrittsübersicht.
2. Das System lädt den gespeicherten Fortschritt.
3. Das System zeigt gelöste und offene Missionen sowie den Gesamtfortschritt an.

### 4.2 Alternative flows

**2a · Noch kein Fortschritt.** Bei Schritt 2 hat der Spieler noch keine Mission gelöst. Das System zeigt eine leere Übersicht mit Hinweis auf die erste Mission. Der Use Case endet.

**2b · Fortschritt nicht ladbar.** Bei Schritt 2 antwortet das Backend nicht. Das System zeigt eine Fehlermeldung mit der Möglichkeit, es erneut zu versuchen. Der Ablauf geht bei Schritt 1 weiter.

### 4.3 Sequence diagram

![Sequence diagram UC-06](../diagrams/UC-06_sequence.png)

## 5 Special requirements

Keine.

## 6 Preconditions

- Der Spieler ist angemeldet.

## 7 Postconditions

- Der Spieler kennt seinen Fortschritt.
