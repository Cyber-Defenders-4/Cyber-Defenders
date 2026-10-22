# UCR-06 – Fortschritt ansehen

## 1. Einleitung

Diese Use-Case-Realisierung beschreibt, wie ein angemeldeter Spieler seinen gespeicherten Spielfortschritt und seine 
Erfolge ansehen kann.

Das System lädt den Fortschritt aus der Datenbank und zeigt die Missionsstatus, den aktuellen Rang, die gesammelten XP 
und den Fortschritt bis zum nächsten Rang an. Zusätzlich kann der Spieler seine erreichten und noch offenen Erfolge 
ansehen.

Die Realisierung orientiert sich an den Figma-Mockups M2 „Missionsauswahl“ und M5 „Fall gelöst“. Die dargestellten 
Steuerungsobjekte sind Entwurfsvorschläge und werden bei der Implementierung an die tatsächliche Architektur angepasst.

## 2. Realisierung
### 2.1 Beteiligte Objekte

| Objekt | Typ | Verantwortung |
|---|---|---|
| Spieler | Actor | Fordert die Fortschrittsübersicht an und kann die Erfolge öffnen. |
| Frontend (Angular) | Boundary | Nimmt Benutzeraktionen entgegen und zeigt die Fortschrittsdaten an. |
| Backend (Express) | Control – auf Komponentenebene | Verarbeitet die Anfragen des Frontends und koordiniert das Laden der Daten. |
| Datenbank (Neon) | Entity-Zugriff – auf Komponentenebene | Stellt die gespeicherten Fortschritts- und Erfolgsdaten bereit. |
| `ProgressController` | Control – vorgeschlagen | Steuert das Laden der Fortschrittsdaten. |
| `ProgressService` | Control – vorgeschlagen | Bereitet Missionsstatus, Rang, XP und Rangfortschritt auf. |
| `AchievementController` | Control – vorgeschlagen | Steuert das Laden der Erfolge. |
| `AchievementList` | Boundary – vorgeschlagen | Stellt erreichte und offene Erfolge dar. Die konkrete Oberfläche muss noch festgelegt werden. |

Hinweis: Frontend, Backend und Datenbank sind die Komponenten aus dem vorhandenen Sequenzdiagramm. Die zusätzlichen 
Objekte sind eine mögliche spätere Verfeinerung, keine Behauptung, dass diese Klassen bereits implementiert sind.

### 2.2 Verfeinertes Sequenzdiagramm

Das folgende Diagramm basiert auf dem vorhandenen Architekturdiagramm. Die Erfolge werden optional geladen. Ein 
Backend-Fehler ermöglicht einen erneuten Versuch.

![Sequenzdiagramm UCR-06](../diagrams/UCR-06_sequence.png)

**Hinweis zum Diagramm:** Für eine endgültige Version sollte der Ablauf des erneuten Versuchs genauso detailliert 
modelliert werden wie der reguläre Ablauf. Die Datenbankantwort sollte außerdem nur einmal pro Ladevorgang dargestellt 
werden. Die exakte Fehlerbehandlung hängt von der späteren Implementierung ab.

### 2.3 Ablaufbeschreibung

#### Hauptablauf

1. Der Spieler öffnet die Fortschrittsübersicht.
2. Das Frontend fordert den gespeicherten Spielfortschritt beim Backend an.
3. Das Backend liest die Missionsstatus, den Rang und die XP aus der Datenbank.
4. Die Datenbank liefert die gespeicherten Daten zurück.
5. Das Backend übermittelt die Daten an das Frontend.
6. Das Frontend zeigt den Status jeder Mission (gesperrt, offen oder gelöst), den Rang, die XP und den Fortschritt 
   bis zum nächsten Rang an.
7. Optional öffnet der Spieler die Erfolge-Ansicht.
8. Das Backend lädt die Erfolge und deren Status aus der Datenbank.
9. Das Frontend zeigt die erreichten und noch offenen Erfolge an.

#### Alternativablauf A1 – Noch kein gespeicherter Fortschritt

1. Es ist noch kein Spielfortschritt gespeichert.
2. Das System stellt einen Standardfortschritt bereit.
3. Die erste Mission wird als offen angezeigt; der Spieler beginnt mit Rang 0 und 0 XP.
4. Das Frontend zeigt einen Hinweis auf die erste Mission an.

#### Alternativablauf A2 – Backend nicht erreichbar

1. Das Backend kann die Anfrage nicht beantworten.
2. Das Frontend zeigt eine Fehlermeldung mit der Möglichkeit eines erneuten Versuchs.
3. Der Spieler kann die Anfrage wiederholen oder zur Startansicht zurückkehren.

#### Alternativablauf A3 – Keine Erfolge erreicht

1. Der Spieler öffnet die Erfolge-Ansicht.
2. Das System lädt die Erfolge und deren Status.
3. Es wurden noch keine Erfolge erreicht.
4. Das Frontend zeigt alle Erfolge als offen an.

### 2.4 Zustandsautomat (optional)

Ein separater Zustandsautomat ist optional. Der Ablauf lässt sich durch das Sequenzdiagramm ausreichend beschreiben.

### 2.5 Designklassen (für Task 05)

Die folgenden Zuordnungen sind Entwurfsvorschläge und müssen später mit der tatsächlichen Implementierung abgeglichen 
werden.

| Analyseobjekt / Komponente | Mögliche Designklasse oder Komponente |
|---|---|
| Frontend | Angular-Komponente für die Fortschrittsübersicht |
| Backend | Express-Route und zugehöriger Controller |
| Fortschrittslogik | `ProgressService` |
| Erfolgslogik | `AchievementController` oder entsprechender Service |
| Datenbankzugriff | Repository bzw. Datenzugriffsschicht |
| Missionsstatus und Rang | Datenmodelle für Spielfortschritt und Missionen |
| Erfolge-Ansicht | Noch zu konkretisierende Angular-Komponente |

### 3. Abgeleitete Anforderungen

- Die Fortschrittsübersicht soll bei 95 % der Aufrufe innerhalb von zwei Sekunden erscheinen.
- Der gespeicherte Spielfortschritt darf durch das reine Ansehen nicht verändert werden.
- Ohne gespeicherten Fortschritt wird die erste Mission als offen angezeigt und der Spieler startet mit Rang 0 und 0 XP.
- Bei einem Ladefehler wird eine Fehlermeldung angezeigt und ein erneuter Versuch ermöglicht.
- Die Erfolge-Ansicht zeigt erreichte und offene Erfolge an.