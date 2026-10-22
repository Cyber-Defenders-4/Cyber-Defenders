# UCR-08 – Code ausführen

## 1. Einleitung

Diese Use-Case-Realisierung beschreibt, wie ein angemeldeter Spieler während einer Mission den aktuellen Java-Code aus 
dem Editor zu Testzwecken ausführen kann.

Das Frontend übermittelt den aktuellen Code an das Backend. Das Backend veranlasst die Übersetzung und Ausführung in 
einer isolierten Ausführungsumgebung. Anschließend zeigt das Frontend die Programmausgabe oder eine Fehlermeldung in 
der Konsole an.

Die Realisierung orientiert sich am Figma-Mockup M3 „Mission 01“ und an den UI-Komponenten `CodeEditor` und `Console`.

Die automatische Lösungsprüfung aus UC-04 ist von diesem Use Case getrennt. Ein Probelauf dient dem Testen des Codes 
und ist kein Lösungsversuch.

## 2. Realisierung

### 2.1 Beteiligte Objekte

| Objekt | Typ | Verantwortung |
|---|---|---|
| Spieler | Actor | Startet die Ausführung des aktuellen Codes. |
| Frontend (Angular) | Boundary | Sendet den Code und zeigt die Ausgabe oder Fehlermeldung an. |
| Backend (Express) | Control – auf Komponentenebene | Entgegennahme des Codes, Koordination der Ausführung und Rückgabe des Ergebnisses. |
| Ausführungsumgebung | Control / externe Laufzeitkomponente | Übersetzt und führt den Java-Code isoliert aus und begrenzt die Ausführungszeit. |
| `CodeEditor` | Boundary | Stellt den aktuellen Code für die Ausführung bereit. |
| `Console` | Boundary | Zeigt Programmausgabe, Compilerfehler, Laufzeitfehler und Zeitüberschreitungen an. |
| `ExecutionController` | Control – vorgeschlagen | Verarbeitet die Anfrage zur Codeausführung. |
| `ExecutionService` | Control – vorgeschlagen | Koordiniert die Ausführung und bereitet das Ergebnis auf. |

Hinweis: `ExecutionController` und `ExecutionService` sind vorgeschlagene Entwurfsnamen. Die konkrete Implementierung 
der isolierten Java-Ausführung muss noch festgelegt werden.

### 2.2 Verfeinertes Sequenzdiagramm

![Sequenzdiagramm UCR-08](../diagrams/UCR-08_sequence.png)

Das Diagramm übernimmt die Architektur aus deinem bisherigen PlantUML-Diagramm und ergänzt beim Timeout den 
ausdrücklichen Abbruch der Ausführung.

### 2.3 Ablaufbeschreibung

#### Hauptablauf

1. Der Spieler hat eine Mission gestartet und den Code-Editor geöffnet.
2. Der Spieler startet die Codeausführung.
3. Das Frontend übermittelt den aktuellen Code an das Backend.
4. Das Backend übergibt den Code an die isolierte Ausführungsumgebung.
5. Die Ausführungsumgebung übersetzt und führt den Code innerhalb des erlaubten Zeitlimits aus.
6. Bei erfolgreicher Ausführung liefert die Ausführungsumgebung die Programmausgabe an das Backend zurück.
7. Das Backend übermittelt die Ausgabe an das Frontend.
8. Das Frontend zeigt die Ausgabe in der Konsole an.

#### Alternativablauf A1 – Backend nicht erreichbar

1. Das Backend kann die Anfrage nicht erfolgreich bearbeiten.
2. Das Frontend zeigt eine Fehlermeldung an.
3. Der eingegebene Code bleibt im Editor erhalten.
4. Der Spieler kann die Ausführung erneut starten.

#### Alternativablauf A2 – Compiler- oder Laufzeitfehler

1. Die Ausführungsumgebung stellt einen Compiler- oder Laufzeitfehler fest.
2. Sie übermittelt die Fehlerinformationen an das Backend.
3. Das Backend gibt die Fehlermeldung an das Frontend zurück.
4. Das Frontend zeigt den Fehler in der Konsole an.
5. Der Spieler kann den Code korrigieren und erneut ausführen.

#### Alternativablauf A3 – Zeitlimit überschritten

1. Die Ausführung überschreitet das festgelegte Zeitlimit.
2. Die Ausführungsumgebung bricht die laufende Ausführung ab.
3. Das Backend erhält die Information über die Zeitüberschreitung.
4. Das Frontend zeigt „Zeitlimit überschritten“ in der Konsole an.
5. Der Spieler kann den Code überarbeiten und erneut ausführen.

### 2.4 Zustandsautomat (optional)

Ein separater Zustandsautomat ist optional. Der Ablauf lässt sich durch das Sequenzdiagramm ausreichend beschreiben.

### 2.5 Designklassen (für Task 05)

| Analyseobjekt / Komponente | Mögliche Designklasse oder Komponente |
|---|---|
| Frontend | Angular-Komponente für den Editor und die Ausführungsaktion |
| `CodeEditor` | Editor-Komponente, die den aktuellen Code bereitstellt |
| `Console` | UI-Komponente zur Anzeige von Ausgabe und Fehlern |
| Backend | Express-Route und Controller |
| Ausführungslogik | `ExecutionService` |
| Ausführungsumgebung | Isolierter Java-Ausführungsprozess bzw. Sandbox |
| Ausführungsergebnis | Datenmodell für Ausgabe, Fehler und Timeout |

Die konkreten Klassen und Schnittstellen sind Entwurfsvorschläge. Sie müssen bei der Implementierung an die 
tatsächliche Codebasis angepasst werden.

### 3. Abgeleitete Anforderungen

- Der aktuelle Code aus dem Editor wird zur Ausführung übermittelt.
- Der Code wird in einer isolierten Ausführungsumgebung ausgeführt.
- Die maximale Ausführungszeit beträgt fünf Sekunden.
- Bei erfolgreicher Ausführung wird die Programmausgabe in der Konsole angezeigt.
- Compiler- und Laufzeitfehler werden in der Konsole dargestellt.
- Bei Überschreitung des Zeitlimits wird die Ausführung beendet und eine Fehlermeldung angezeigt.
- Bei einem Backend-Fehler bleibt der Code im Editor erhalten.
- Ein Probelauf ist kein Lösungsversuch und verändert den gespeicherten Spielfortschritt nicht.
- Falls die Leistungsanforderung aus der Use-Case-Spezifikation gilt, sollen 95 % der Ausführungen ohne Timeout ihre 
  Ausgabe innerhalb von drei Sekunden liefern.