# UCR-07 – Hinweis anfordern

## 1. Einleitung

Diese Use-Case-Realisierung beschreibt, wie ein angemeldeter Spieler während einer Mission einen Hinweis anfordern kann.

Das Frontend sendet die Anfrage an das Backend. Das Backend prüft, ob für die aktuelle Mission noch Hinweise verfügbar 
sind, lädt den nächsten Hinweis und speichert dessen Verwendung. Anschließend zeigt das Frontend den Hinweis und die 
verbleibende Anzahl an.

Die Realisierung orientiert sich am Figma-Mockup M3 „Mission 01“ und an der vorhandenen Komponente `Assistant`, über 
die Hinweise beispielsweise durch Floppy vermittelt werden können.

Die konkrete Aufteilung der Backend-Logik in Controller und Service ist ein Entwurf und muss später mit dem 
tatsächlichen Code abgeglichen werden.

## 2. Realisierung

### 2.1 Beteiligte Objekte

| Objekt | Typ | Verantwortung |
|---|---|---|
| Spieler | Actor | Fordert einen Hinweis an. |
| Frontend (Angular) | Boundary | Sendet die Anfrage und zeigt den Hinweis sowie die verbleibende Anzahl an. |
| Backend (Express) | Control – auf Komponentenebene | Prüft die Verfügbarkeit und koordiniert Laden und Speichern des Hinweises. |
| Datenbank (Neon) | Entity-Zugriff – auf Komponentenebene | Stellt Hinweise und deren Nutzungsstatus bereit. |
| `HintController` | Control – vorgeschlagen | Verarbeitet die Anfrage nach einem Hinweis. |
| `HintService` | Control – vorgeschlagen | Ermittelt den nächsten verfügbaren Hinweis und die verbleibende Anzahl. |
| `HintRepository` | Datenzugriff – vorgeschlagen | Liest Hinweise und speichert deren Verwendung. |
| `CodeEditor` | Boundary | Ermöglicht den Aufruf der Hinweisfunktion im Editor. |
| `Assistant` | Boundary | Präsentiert den Hinweis für den Spieler. |

Hinweis: `HintController`, `HintService` und `HintRepository` sind vorgeschlagene Entwurfsnamen und noch keine 
bestätigten Implementierungsklassen.

### 2.2 Verfeinertes Sequenzdiagramm

![Sequenzdiagramm UCR-07](../diagrams/UCR-07_sequence.png)

**Hinweis:** Der Ablauf setzt voraus, dass die Verwendung eines Hinweises erst nach erfolgreicher Speicherung als 
verbraucht gilt. Bei einem Speicherfehler muss die Implementierung sicherstellen, dass der Hinweis nicht als erfolgreich 
verwendet gemeldet wird. Bei parallelen Anfragen sollte verhindert werden, dass die Anzahl verfügbarer Hinweise 
unterschritten wird.

### 2.3 Ablaufbeschreibung

#### Hauptablauf

1. Der Spieler befindet sich in einer gestarteten Mission und hat den Editor geöffnet.
2. Der Spieler fordert einen Hinweis an.
3. Das Frontend sendet eine Anfrage für den nächsten Hinweis der aktuellen Mission an das Backend.
4. Das Backend liest die bereits verwendeten Hinweise und den nächsten verfügbaren Hinweis aus der Datenbank.
5. Die Datenbank liefert den Hinweis oder meldet, dass keiner mehr verfügbar ist.
6. Wenn ein Hinweis verfügbar ist, veranlasst das Backend das Speichern seiner Verwendung.
7. Nach erfolgreicher Speicherung liefert das Backend den Hinweis und die verbleibende Anzahl an das Frontend zurück.
8. Das Frontend zeigt den Hinweis an und aktualisiert die Anzahl der verbleibenden Hinweise.

#### Alternativablauf A1 – Keine Hinweise mehr verfügbar

1. Das Backend stellt fest, dass für die aktuelle Mission keine Hinweise mehr verfügbar sind.
2. Das Frontend zeigt die Meldung „Keine weiteren Hinweise“ an.
3. Es wird kein weiterer Hinweis als verwendet gespeichert.

#### Alternativablauf A2 – Backend nicht erreichbar

1. Das Backend kann die Anfrage nicht erfolgreich beantworten.
2. Das Frontend zeigt eine Fehlermeldung an.
3. Der Hinweis wird nicht als erfolgreich verwendet gezählt.
4. Der Spieler kann es erneut versuchen oder zur vorherigen Ansicht zurückkehren.

#### Alternativablauf A3 – Hinweis oder Speicherung kann nicht geladen bzw. abgeschlossen werden

1. Beim Laden des Hinweises oder beim Speichern seiner Verwendung tritt ein Fehler auf.
2. Das Backend meldet den Fehler an das Frontend.
3. Das Frontend zeigt eine Fehlermeldung an.
4. Die Verwendung darf nicht als erfolgreich abgeschlossen behandelt werden, solange die Speicherung nicht erfolgreich 
   bestätigt wurde.
5. Der Spieler kann es erneut versuchen.

### 2.4 Zustandsautomat (optional)

Ein eigener Zustandsautomat ist optional. Der Ablauf wird durch das Sequenzdiagramm ausreichend beschrieben.

### 2.5 Designklassen (für Task 05)

| Analyseobjekt / Komponente | Mögliche Designklasse oder Komponente |
|---|---|
| Frontend | Angular-Komponente für Editor und Hinweisaktion |
| `CodeEditor` | Vorhandene bzw. geplante Editor-Komponente |
| `Assistant` | UI-Komponente zur Anzeige des Hinweises |
| Backend | Express-Route und Controller |
| Hinweislogik | `HintService` |
| Datenbankzugriff | Repository bzw. Datenzugriffsschicht |
| Hinweis und Nutzung | Datenmodelle für Hinweise und ihre Verwendung |

Die konkreten Namen sind vorläufig und werden nach der Implementierung an den Code angepasst.

### 3. Abgeleitete Anforderungen

- Pro Mission stehen dem Spieler maximal drei Hinweise zur Verfügung.
- Das System zeigt den Hinweis und die verbleibende Anzahl an.
- Die Nutzung eines Hinweises wird gespeichert.
- Bei ausgeschöpftem Kontingent wird kein weiterer Hinweis ausgegeben.
- Bei einem Lade- oder Speicherfehler wird eine Fehlermeldung angezeigt.
- Ein nicht erfolgreich abgeschlossener Vorgang darf nicht als erfolgreich genutzter Hinweis behandelt werden.
- Die Hinweisfunktion verändert den Missionsfortschritt nicht unmittelbar.