# UCR-05 – Fortschritt speichern

| Autor | Realisiert |
| ----- | ---------- |
| Felix | [UC-05 – Fortschritt speichern](../use_cases/UC-05_fortschritt-speichern.md) |

## 1. Einleitung

Diese Use-Case-Realisierung beschreibt, wie nach einer korrekten Lösung aus UC-04 die XP berechnet und der Missionsfortschritt gespeichert werden. Sie umfasst den Hauptablauf sowie die Alternativabläufe 2a (Rangaufstieg), 3a (Speichern fehlgeschlagen) und 4a (letzte Mission gelöst). Die Codeprüfung gehört zu UC-04.

## 2. Realisierung

### 2.1 Beteiligte Objekte

| Objekt | Stereotyp | Verantwortung |
| --- | --- | --- |
| :FallGelöstDialog | boundary | Zeigt den Missionsabschluss oder einen Speicherfehler an und ermöglicht die Navigation. |
| :LösungPrüfen | control | Übergibt die erfolgreich geprüfte Lösung aus UC-04. |
| :FortschrittSpeichern | control | Berechnet XP und Rang und koordiniert das Speichern und Freischalten. |
| :Spieler | entity | Speichert die Gesamt-XP des Spielers. |
| :Rang | entity | Enthält die Ränge und ihre XP-Schwellen. |
| :Missionsfortschritt | entity | Speichert Missionsstatus, Zeit, Versuche, Hinweise und erhaltene XP. |
| :Mission | entity | Stellt die Reihenfolge der Missionen bereit. |

### 2.2 Sequenzdiagramme

Das Diagramm zeigt die XP-Berechnung, die Speicherwiederholung (`loop`) sowie die Alternativabläufe mit `opt` und `alt`.

![Sequenzdiagramm UCR-05](../diagrams/ucr/sequences/UCR-05_sequence.pdf)

### 2.3 Ablaufbeschreibung

#### Hauptablauf

1. Nach einer korrekten Lösung ruft :LösungPrüfen die Funktion von :FortschrittSpeichern auf.
2. :FortschrittSpeichern berechnet die XP aus Mission, Zeit, Versuchen und Hinweisen. Der Rang wird aus den Gesamt-XP und den Rangschwellen ermittelt.
3. :Missionsfortschritt speichert den Abschluss; :Spieler erhält die zusätzlichen XP. **Der Rang selbst wird nicht gespeichert.**
4. Eine vorhandene Folgemission wird freigeschaltet. :FallGelöstDialog zeigt die Ergebnisse an; der Spieler kehrt zum Desktop zurück oder öffnet die nächste Mission.

#### Alternativabläufe

- **2a – Rangaufstieg:** Überschreiten die neuen Gesamt-XP eine Rangschwelle, wird der Rangaufstieg erkannt und im Abschlussdialog angezeigt.
- **3a – Speichern fehlgeschlagen:** Das System versucht das Speichern höchstens dreimal insgesamt. Danach zeigt es eine Fehlermeldung; ein späterer erneuter Versuch bleibt möglich.
- **4a – Letzte Mission gelöst:** Ist keine weitere Mission vorhanden, entfällt die Freischaltung. Der Abschlussdialog wird trotzdem angezeigt.

### 2.4 Zustandsautomat

Nicht separat modelliert. Die Zustände des Missionsfortschritts werden use-case-übergreifend betrachtet.

### 2.5 Entwurfsklassen

| Analyseobjekt (2.1) | Entwurfsklasse(n) |
| --- | --- |
| :FallGelöstDialog «boundary» | CaseSolvedDialogComponent |
| :LösungPrüfen «control» | SubmissionService (UC-04) |
| :FortschrittSpeichern «control» | ProgressService |
| :Spieler «entity» | Player, PlayerRepository |
| :Rang «entity» | Rank, RankRepository |
| :Missionsfortschritt «entity» | MissionProgress, ProgressRepository |
| :Mission «entity» | Mission, MissionRepository |

`MissionCompletedResult` enthält die Daten des Abschlussdialogs, einschließlich des berechneten Rangs.

![Klassendiagramm UCR-05](../diagrams/ucr/classes/UCR-05_classes.pdf)

![Sequenzdiagramm UCR-05, Entwurfsklassen](../diagrams/ucr/sequence_designs/UCR-05_sequence_design.pdf)

## 3. Abgeleitete Anforderungen

- DR-05-01 — Die Gesamt-XP werden gespeichert. Der Rang wird aus den Gesamt-XP und den Rangschwellen ermittelt und nicht separat gespeichert.
- DR-05-02 — Das Speichern wird bei Fehlern höchstens dreimal insgesamt versucht.
- DR-05-03 — Wiederholte Speicheraufrufe dürfen nicht zu einer doppelten Vergabe von XP führen.
- DR-05-04 — Eine Folgemission wird nur freigeschaltet, wenn sie vorhanden ist.
