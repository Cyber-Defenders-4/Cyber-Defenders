# UC-05 Fortschritt speichern

| Author | Estimate | User stories |
| ------ | -------- | ------------ |
| Felix | 3 | [#30](https://github.com/MarcoDaquila/Cyber-Defenders/issues/30) |

## 1 Brief description

Wurde eine Lösung als korrekt bewertet, speichert das System den Fortschritt des Spielers. Die Mission gilt als gelöst und die nächste Mission wird freigeschaltet. Beim nächsten Login ist der Stand wieder da.

## 2 Actors

- **Primary:** Spieler
- **Secondary:** keine

## 3 Mockup

<!-- Vorlage im Design System: Mission 01, Fall gelöst mit gespeichertem Fortschritt (Design System, Mockup 5). Als PNG exportieren und unter docs/mockups/ ablegen. -->

![Mockup UC-05](../mockups/UC-05_fortschritt-speichern.png)

## 4 Flow of events

### 4.1 Basic flow

1. Das System erkennt, dass die Lösung korrekt ist (Erweiterung von UC-04).
2. Das System speichert die Mission als gelöst mit dem Zeitpunkt.
3. Das System schaltet die nächste Mission frei.
4. Das System zeigt dem Spieler die Bestätigung "Fall gelöst" mit dem gespeicherten Fortschritt.

### 4.2 Alternative flows

**2a · Speichern fehlgeschlagen.** Bei Schritt 2 antwortet die Datenbank nicht. Das System meldet den Fehler und versucht es erneut. Der Ablauf geht bei Schritt 2 weiter.

### 4.3 Sequence diagram

![Sequence diagram UC-05](../diagrams/UC-05_sequence.png)

## 5 Special requirements

NFR-UC05-01: Ein gespeicherter Fortschritt geht auch bei einem Neustart des Systems nicht verloren.

## 6 Preconditions

- Der Spieler ist angemeldet.
- Die Lösung wurde als korrekt bewertet (UC-04).

## 7 Postconditions

- Die Mission ist als gelöst gespeichert.
- Die nächste Mission ist freigeschaltet.
