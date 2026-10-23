# UCR-06 – Fortschritt ansehen

| Autor | Realisiert |
| ----- | ---------- |
| Leonie | [UC-06 Fortschritt ansehen](../use_cases/UC-06_fortschritt-ansehen.md) |

## 1. Einleitung

Diese Use-Case-Realisierung beschreibt, wie ein angemeldeter Spieler seinen gespeicherten Spielfortschritt und seine Erfolge ansehen kann. Sie deckt den Hauptablauf und die Alternativabläufe 2a (noch keine Mission gelöst), 2b (Fortschritt nicht ladbar) und 6a (noch kein Erfolg erhalten) von UC-06 ab.

Die Fortschrittsübersicht zeigt den Status jeder Mission, den Rang mit XP und den Stand bis zum nächsten Rang. Anschließend kann der Spieler seine erhaltenen und noch offenen Erfolge ansehen. Das Speichern des Fortschritts gehört zu UC-05 und ist hier nicht enthalten.

Die Realisierung orientiert sich an den Figma-Mockups M2 „Missionsauswahl“ und M5 „Fall gelöst“.

## 2. Realisierung

### 2.1 Beteiligte Objekte

| Objekt | Stereotyp | Verantwortung |
|---|---|---|
| :Fortschrittsübersicht | boundary | Nimmt das Öffnen der Übersicht und der Erfolge entgegen und zeigt Missionsstatus, Rang mit XP, Erfolge und Fehlermeldungen an. |
| :FortschrittAnzeigen | control | Koordiniert das Laden von Missionsfortschritt, XP, Rang und Erfolgen und liefert bei fehlendem Fortschritt den Standardfortschritt. |
| :Missionsfortschritt | entity | Speichert den Status jeder Mission für einen Spieler (gesperrt, offen oder gelöst). |
| :Spieler | entity | Speichert die gesammelten XP eines Spielers. |
| :Rang | entity | Kennt die Ränge mit ihren XP-Schwellen und liefert zu einer XP-Zahl den Rang und den nächsten Rang. |
| :Erfolg | entity | Speichert die Erfolge und ihren Status (erhalten oder offen) je Spieler. |

### 2.2 Sequenzdiagramme

Das Diagramm zeigt den Hauptablauf und die Alternativabläufe 2a und 2b als Fragmente. Der Alternativablauf 6a steht in der Beschriftung der letzten Nachricht.

![Sequenzdiagramm UCR-06](../diagrams/UCR-06_sequence.png)

### 2.3 Ablaufbeschreibung

#### Hauptablauf

1. Der Spieler öffnet die Fortschrittsübersicht (`öffnen()` an :Fortschrittsübersicht). Die Boundary fordert bei :FortschrittAnzeigen den Fortschritt des Spielers an (`fortschrittLaden`).
2. :FortschrittAnzeigen liest den Status der Missionen aus :Missionsfortschritt, die XP aus :Spieler und zu diesen XP den Rang und den nächsten Rang aus :Rang.
3. Ist mindestens eine Mission gelöst, gibt :FortschrittAnzeigen Missionsstatus, Rang, XP und den Stand bis zum nächsten Rang an die Boundary zurück.
4. :Fortschrittsübersicht zeigt den Status jeder Mission, den Rang mit XP und den Stand bis zum nächsten Rang an.
5. Der Spieler öffnet seine Erfolge (`erfolgeÖffnen()`). Die Boundary fordert sie bei :FortschrittAnzeigen an (`erfolgeLaden`).
6. :FortschrittAnzeigen liest alle Erfolge mit Status aus :Erfolg und gibt sie zurück. :Fortschrittsübersicht zeigt jeden Erfolg mit seinem Status an.

#### Alternativablauf 2a – Noch keine Mission gelöst

1. Bei Schritt 3 ist noch keine Mission gelöst.
2. :FortschrittAnzeigen liefert die erste Mission als offen, den Startrang und 0 XP.
3. :Fortschrittsübersicht zeigt einen Hinweis auf die erste Mission an.
4. Der Ablauf geht bei Schritt 5 weiter.

#### Alternativablauf 2b – Fortschritt nicht ladbar

1. Bei Schritt 1 meldet :FortschrittAnzeigen einen Fehler.
2. :Fortschrittsübersicht zeigt eine Fehlermeldung mit der Möglichkeit „Erneut versuchen“ an.
3. Der Ablauf geht bei Schritt 1 weiter.

#### Alternativablauf 6a – Noch kein Erfolg erhalten

1. Bei Schritt 6 hat der Spieler noch keinen Erfolg erhalten.
2. :Fortschrittsübersicht zeigt alle Erfolge als offen an.

### 2.4 Zustandsautomat

Nicht zutreffend. Der Missionsstatus (gesperrt, offen, gelöst) wird in diesem Use Case nur gelesen. Seine Übergänge gehören zu UC-05.

### 2.5 Entwurfsklassen

| Analyseobjekt (2.1) | Entwurfsklasse(n) |
|---|---|
| :Fortschrittsübersicht «boundary» | ProgressOverviewComponent, ProgressApiService |
| :FortschrittAnzeigen «control» | ProgressController, ProgressService |
| :Missionsfortschritt «entity» | MissionProgress, ProgressRepository |
| :Spieler «entity» | Player, PlayerRepository |
| :Rang «entity» | Rank, RankRepository |
| :Erfolg «entity» | AchievementStatus, AchievementRepository |

Zusätzlich bündeln ProgressOverview und MissionOverviewItem die Daten der Übersicht für die Antwort an das Frontend.

![Klassendiagramm UCR-06](../diagrams/UCR-06_classes.png)

![Sequenzdiagramm UCR-06, Entwurfsklassen](../diagrams/UCR-06_sequence_design.png)

## 3. Abgeleitete Anforderungen

- DR-06-01 — Das Ansehen des Fortschritts ist rein lesend (HTTP GET) und verändert den gespeicherten Fortschritt nicht.
- DR-06-02 — Rang und nächster Rang werden aus den XP des Spielers und den Rangschwellen ermittelt und nicht beim Spieler gespeichert.
- DR-06-03 — Die Erfolge werden erst geladen, wenn der Spieler die Erfolge öffnet (eigene Anfrage `/api/progress/achievements`).
- DR-06-04 — Hat der Spieler noch keine Mission gelöst, zeigt das System die erste Mission als offen, den Startrang mit 0 XP und einen Hinweis auf die erste Mission.
- DR-06-05 — Lässt sich der Fortschritt nicht laden, zeigt die Oberfläche eine Fehlermeldung mit „Erneut versuchen“.
- DR-06-06 — Solange kein Erfolg erhalten wurde, werden alle Erfolge als offen angezeigt.