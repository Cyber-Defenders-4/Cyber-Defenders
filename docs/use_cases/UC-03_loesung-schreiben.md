# UC-03 Lösung im Editor schreiben

| Author | Estimate | User stories |
| ------ | -------- | ------------ |
| [@MarcoDaquila](https://github.com/MarcoDaquila) | 8 | [#22](https://github.com/Cyber-Defenders-4/Cyber-Defenders/issues/22), [#23](https://github.com/Cyber-Defenders-4/Cyber-Defenders/issues/23), [#74](https://github.com/Cyber-Defenders-4/Cyber-Defenders/issues/74) |

## 1 Brief description

Der Spieler schreibt oder ändert Java-Code in einem Code-Editor, um die Aufgabe der Mission zu lösen. Der Editor startet mit einem vorgegebenen Code-Gerüst und zeigt Zeilennummern und Syntaxhervorhebung. Der Entwurf wird automatisch zwischengespeichert, damit nichts verloren geht, und der Spieler kann ihn auf das Gerüst zurücksetzen.

## 2 Actors

- **Primary:** Spieler
- **Secondary:** keine

## 3 Mockup

![Mockup UC-03](../mockups/UC-03_loesung_schreiben.png)

## 4 Flow of events

### 4.1 Basic flow

1. Der Spieler arbeitet im Editor der gestarteten Mission.
2. Das System zeigt das Code-Gerüst der Mission oder den zuletzt gespeicherten Entwurf.
3. Der Spieler schreibt oder ändert den Code.
4. Das System speichert den Entwurf zwischen.

### 4.2 Alternative flows

**3a · Hinweis benötigt.** Bei Schritt 3 kommt der Spieler nicht weiter. Extension point: Hinweis anfordern (UC-07). Der Ablauf geht bei Schritt 3 weiter.

**3b · Code ausprobieren.** Bei Schritt 3 möchte der Spieler seinen Code testen. Extension point: Code ausführen (UC-08). Der Ablauf geht bei Schritt 3 weiter.

**3c · Code zurücksetzen.** Bei Schritt 3 setzt der Spieler den Code zurück. Das System ersetzt den Entwurf durch das Code-Gerüst der Mission. Der Ablauf geht bei Schritt 3 weiter.

**4a · Entwurf nicht speicherbar.** Bei Schritt 4 antwortet das Backend nicht. Das System zeigt einen Hinweis, der Code bleibt im Editor erhalten. Der Ablauf geht bei Schritt 3 weiter.

### 4.3 Sequence diagram

![Sequence diagram UC-03](../diagrams/UC-03_sequence.png)

## 5 Special requirements

NFR-UC03-01: Eingaben im Editor erscheinen bei 95 % der Tastenanschläge innerhalb von 100 ms.

## 6 Preconditions

- Der Spieler ist angemeldet.
- Die Mission ist gestartet (UC-02).

## 7 Postconditions

- Der aktuelle Code-Entwurf ist gespeichert.