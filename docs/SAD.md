# Cyber Defenders — Softwarearchitekturdokument

<!--
ANLEITUNG ZUR VERWENDUNG DIESER VORLAGE
- Kopiere diese Datei in den Ordner docs/ deines Repositorys, neben die Datei SRS.md.
- Ersetze jeden [Platzhalter] in eckigen Klammern. Kommentare wie dieser dienen als Anleitung: Sie
  sind auf GitHub unsichtbar und können gelöscht werden, sobald der jeweilige Abschnitt fertig ist.
- Behalte alle Überschriften und ihre Nummerierung bei. Abschnitte, die mit „Vorlesung 7“ oder
  später gekennzeichnet sind, bleiben unverändert, bis die entsprechende Vorlesung stattfindet.
  Falls ein Abschnitt nicht zutrifft, schreibe „Nicht zutreffend“ und begründe dies in einem Satz.
- Gib für jeden von dir verfassten Abschnitt den Autor an: entweder in der Zeile „Autor“ unter der
  Überschrift oder in der Spalte „Autor“ einer Tabelle.
- Lege alle Diagramme im Ordner docs/diagrams/ ab, zusammen mit der jeweiligen Quelldatei.
- Die Struktur folgt der RUP-Vorlage „Software Architecture Document“:
  https://cin.ufpe.br/~if682/RUP/webtmpl/templates/a_and_d/rup_sad.htm
-->

| Team         | Version | Letzte Änderung |
|--------------|---------|-----------------|
| FMLD Studios | 0.1     | 01.11.2026      |

Die Versionshistorie dieser Datei wird durch die Git-Historie abgebildet.

## Inhaltsverzeichnis

1. [Einleitung](#1-einleitung)
2. [Architekturdarstellung](#2-architekturdarstellung)
3. [Architekturziele und Einschränkungen](#3-architekturziele-und-einschränkungen)
4. [Anwendungsfallsicht](#4-anwendungsfallsicht)
5. [Logische Sicht](#5-logische-sicht)
6. [Prozesssicht](#6-prozesssicht)
7. [Verteilungssicht](#7-verteilungssicht)
8. [Implementierungssicht](#8-implementierungssicht)
9. [Datensicht](#9-datensicht)
10. [Umfang und Leistung](#10-umfang-und-leistung)
11. [Qualität](#11-qualität)

## 1 Einleitung

### 1.1 Zweck

*Autor: Marco*

Dieses Dokument beschreibt die Softwarearchitektur des Lernspiels Cyber Defenders: aus welchen Komponenten die Anwendung besteht, wie diese miteinander verbunden sind und wo sie ausgeführt werden. Es dient als zentrale architektonische Referenz für das aktuelle Entwicklerteam, für zukünftige Entwickler, die das Projekt übernehmen, sowie für die Dozenten als Auftraggeber.

### 1.2 Umfang

*Autor: Marco*

Dieses Dokument deckt die Architektur der gesamten Cyber Defenders-Anwendung ab. Dazu gehören die Angular-Web-Oberfläche, die serverseitige Node.js-Spiellogik, die persistente PostgreSQL-Datenspeicherung und die geplante isolierte Sandbox-Ausführungsumgebung. Der funktionale Umfang ist in [SRS 1.2](SRS.md#12-scope) beschrieben.

### 1.3 Definitionen, Akronyme und Abkürzungen

*Autor: Marco*

| Begriff | Bedeutung                                                                                 |
|---------|-------------------------------------------------------------------------------------------|
| SAD     | Softwarearchitekturdokument (Software Architecture Document)                              |
| SRS     | Anforderungsspezifikation (Software Requirements Specification)                           |
| UCR     | Anwendungsfallrealisierung (Use-Case Realization)                                         |
| Sandbox | Isolierte Ausführungsumgebung (Docker) für nicht vertrauenswürdigen Java-Code der Spieler |
| CDN     | Content Delivery Network (Vercel)                                                         |

### 1.4 Referenzen

*Autor: Marco*

| Titel         | Link                                                                                                         |
|---------------|--------------------------------------------------------------------------------------------------------------|
| SRS           | [SRS.md](SRS.md)                                                                                             |
| Domänenmodell | [domain_model.md](domain_model.md)                                                                           |
| Repository    | [https://github.com/Cyber-Defenders-4/Cyber-Defenders](https://github.com/Cyber-Defenders-4/Cyber-Defenders) |
| Projektboard  | [https://github.com/orgs/Cyber-Defenders-4/projects/2](https://github.com/orgs/Cyber-Defenders-4/projects/2) |

### 1.5 Überblick

Abschnitt 2 benennt die in diesem Dokument verwendeten Sichten. Die Abschnitte 3 bis 11 beschreiben die Architektur Sicht für Sicht und folgen dabei der RUP-Vorlage.

## 2 Architekturdarstellung

*Autor: Marco*

| Sicht                 | Welche Frage beantwortet sie?                                  | Diagramm                                             | Abschnitt |
|-----------------------|----------------------------------------------------------------|------------------------------------------------------|-----------|
| Anwendungsfallsicht   | Was macht das System und für wen?                              | Anwendungsfalldiagramm, Anwendungsfallrealisierungen | 4         |
| Logische Sicht        | Welche Klassen gibt es und wie sind sie miteinander verbunden? | Domänenmodell, Design-Klassen                        | 5         |
| Prozesssicht          | Was wird gleichzeitig ausgeführt?                              | Kurzbeschreibung                                     | 6         |
| Verteilungssicht      | Was läuft wo und wie ist es verbunden?                         | Verteilungsdiagramm                                  | 7         |
| Implementierungssicht | Aus welchen Teilen besteht der Code?                           | Komponentendiagramm                                  | 8         |
| Datensicht            | Wie werden persistente Daten gespeichert?                      | Datenbankschema                                      | 9         |

## 3 Architekturziele und Einschränkungen

Abschnitt 3 listet die Anforderungen, die unsere Architektur prägen: unsere Qualitätsziele als
Szenarien, bewertet nach Business Value und Technical Risk, und die Einschränkungen, um die wir
herum entwerfen müssen. Wie die Architektur die einzelnen Szenarien erreicht, folgt in Abschnitt 11.

### 3.1 Qualitätsziele

*Autor: [Vorname]*

| ID    | Qualität   | Verfeinerung            | Szenario, kurz                                                                              | Value | Risk | Autor     |
|-------|------------|-------------------------|---------------------------------------------------------------------------------------------|:-----:|:----:|-----------|
| QS-03 | Security   | Isolation fremden Codes | Spieler-Code greift auf Dateien, Netzwerk oder Datenbank zu → 0 von 5 Zugriffen erfolgreich |   H   |  H   | Leonie    |
| QS-01 | [Qualität] | [Verfeinerung]          | [Stimulus] → [Reaktionsmaß]                                                                 |  [H]  | [L]  | [Vorname] |
| QS-02 | [Qualität] | [Verfeinerung]          | [Stimulus] → [Reaktionsmaß]                                                                 |  [H]  | [M]  | [Vorname] |


[Ein bis zwei Sätze: Welches Szenario kommt zuerst und warum? (H, H) kommt vor allem anderen.]

#### QS-01 [Name]

| QS-01 [Name] | *Autor: [Vorname]* · Verfeinert [NFR-ID] |
|--------------|------------------------------------------|
| Quelle       | [wer oder was löst es aus]               |
| Stimulus     | [was beim System ankommt]                |
| Artefakt     | [welcher Teil des Systems betroffen ist] |
| Umgebung     | [in welchem Zustand das System ist]      |
| Reaktion     | [was das System tut]                     |
| Reaktionsmaß | [die Zahl, an der man den Erfolg misst]  |

Business Value [H/M/L]: [ein Satz Begründung]. Technical Risk [H/M/L]: [ein Satz Begründung].

#### QS-02 [Name]

| QS-02 [Name] | *Autor: [Vorname]* · Verfeinert [NFR-ID] |
|--------------|------------------------------------------|
| Quelle       | [wer oder was löst es aus]               |
| Stimulus     | [was beim System ankommt]                |
| Artefakt     | [welcher Teil des Systems betroffen ist] |
| Umgebung     | [in welchem Zustand das System ist]      |
| Reaktion     | [was das System tut]                     |
| Reaktionsmaß | [die Zahl, an der man den Erfolg misst]  |

Business Value [H/M/L]: [ein Satz Begründung]. Technical Risk [H/M/L]: [ein Satz Begründung].

#### QS-03 Isolation fremden Codes

| QS-03 Isolation fremden Codes | *Autor: Leonie* · Verfeinert NFR-SE-01                                                                                                                                  |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Quelle                        | Spieler, absichtlich oder versehentlich                                                                                                                                 |
| Stimulus                      | Spieler-Code versucht Dateien zu lesen, Netzwerk zu öffnen oder auf die Datenbank zuzugreifen                                                                           |
| Artefakt                      | Ausführungsumgebung                                                                                                                                                     |
| Umgebung                      | Normalbetrieb                                                                                                                                                           |
| Reaktion                      | Zugriff auf Dateien, Netzwerk und Datenbank wird verweigert, eine Fehlermeldung wird in der Konsole ausgegeben und Server sowie Daten anderer Spieler bleiben unberührt |
| Reaktionsmaß                  | 0 erfolgreiche Zugriffe bei 5 definierten Zugriffsversuchen                                                                                                             |

Business Value H: Fehlender Schutz führt zu fatalem Datenverlust, Systemmanipulationen und dem sofortigen Stillstand 
des gesamten Spielbetriebs. 

Technical Risk H: Die Bereitstellung einer isolierten Ausführungsumgebung für fremden Code ist für das Team neu, das 
Hosting der Sandbox ist noch offen und der Erfolg zeigt sich nur durch gezielte Angriffsversuche.

### 3.2 Einschränkungen

*Autor: [Vorname]*

| ID   | Art             | Einschränkung                                                     | Was bedeutet das für unsere Architektur? |
|------|-----------------|-------------------------------------------------------------------|------------------------------------------|
| C-01 | Technisch       | [unser Stack, siehe [SRS 3.6](SRS.md#36-entwurfsrandbedingungen)] | [Konsequenz]                             |
| C-02 | Organisatorisch | [Teamgröße, Zeit]                                                 | [Konsequenz]                             |
| C-03 | [Art]           | [Einschränkung]                                                   | [Konsequenz]                             |


## 4 Use-case view

*Autor: Felix*

Das Use-Case-Diagramm der gesamten Anwendung befindet sich in [SRS 2.2](SRS.md#22-use-case-diagramm). Für die Architektur sind insbesondere UC-04 „Lösung prüfen lassen“, UC-08 „Code ausführen“ und UC-05 „Fortschritt speichern“ relevant. UC-04 und UC-08 sehen die isolierte Ausführung von Java-Code über eine separate Ausführungsumgebung vor, die über die Schnittstelle `CodeRunner` angebunden werden soll. UC-05 benötigt die dauerhafte Speicherung von Missionsfortschritt und Erfahrungspunkten in der Datenbank. Diese Anwendungsfälle sind deshalb besonders wichtig für die Ausführungs- und Persistenzkomponenten (siehe Abschnitte 7 und 8).

### 4.1 Use-case realizations

| Use case                                                                 | Realization                                                          | Author  |
|--------------------------------------------------------------------------|----------------------------------------------------------------------|---------|
| [UC-01 Mission auswählen](use_cases/UC-01_mission-auswaehlen.md)         | [UCR-01](use_case_realizations/UCR-01_mission_auswaehlen.md)         | Dominik |
| [UC-02 Fallakte lesen](use_cases/UC-02_fallakte-lesen.md)                | [UCR-02](use_case_realizations/UCR-02_Fallakte_lesen.md)             | Marco   |
| [UC-03 Lösung im Editor schreiben](use_cases/UC-03_loesung-schreiben.md) | [UCR-03](use_case_realizations/UCR-03_Lösung_im_Editor_schreiben.md) | Marco   |
| [UC-04 Lösung prüfen lassen](use_cases/UC-04_loesung-pruefen.md)         | [UCR-04](use_case_realizations/UCR-04_loesung_pruefen.md)            | Felix   |
| [UC-05 Fortschritt speichern](use_cases/UC-05_fortschritt-speichern.md)  | [UCR-05](use_case_realizations/UCR-05_fortschritt_speichern.md)      | Felix   |
| [UC-06 Fortschritt ansehen](use_cases/UC-06_fortschritt-ansehen.md)      | [UCR-06](use_case_realizations/UCR-06_fortschritt_ansehen.md)        | Leonie  |
| [UC-07 Hinweis anfordern](use_cases/UC-07_hinweis-anfordern.md)          | [UCR-07](use_case_realizations/UCR-07_hinweis_anfordern.md)          | Leonie  |
| [UC-08 Code ausführen](use_cases/UC-08_code-ausfuehren.md)               | [UCR-08](use_case_realizations/UCR-08_code_ausfuehren.md)            | Leonie  |

## 5 Logische Sicht

### 5.1 Überblick

*Autor: Dominik*

<!-- Verlinke euer Domänenmodell aus Aufgabe 5. Falls ihr ein Paketdiagramm habt,
  füge es hier ein: Es zeigt die Pakete eures Codes und ihre Abhängigkeiten,
  die keine Zyklen bilden dürfen. -->

Das Domänenmodell befindet sich in [domain_model.md](domain_model.md). Es zeigt, was die Anwendung speichert: Spieler mit Rang, Missionen mit Fallakte, Beweisdateien, Testfällen und Hinweisen, dazu Missionsfortschritt, Codeentwurf und Erfolge. Ein Paketdiagramm gibt es noch nicht, es folgt, sobald die Ordnerstruktur von Frontend und Backend mit Code gefüllt ist.

### 5.2 Architektonisch relevante Entwurfspakete

*Autor: Dominik*

<!-- Derzeit optional. Verlinke die Entwurfsklassen eurer Anwendungsfallrealisierungen
  (Abschnitt 2.5 der UCR) oder beschreibe eure wichtigsten Pakete jeweils in einem Satz. -->

Die Entwurfsklassen jedes Anwendungsfalls stehen in Abschnitt 2.5 der Realisierung, mit Klassendiagramm und Sequenzdiagramm:

| Realisierung                                                              | Wichtigste Entwurfsklassen                                                      |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [UCR-01](use_case_realizations/UCR-01_mission_auswaehlen.md)              | MissionOverviewComponent, MissionService, MissionRepository, ProgressRepository |
| [UCR-02](use_case_realizations/UCR-02_Fallakte_lesen.md)                  | CaseFileComponent, WorkspaceComponent, MissionService, EvidenceRepository       |
| [UCR-03](use_case_realizations/UCR-03_L%C3%B6sung_im_Editor_schreiben.md) | CodeEditorComponent, DraftService, DraftRepository                              |
| [UCR-04](use_case_realizations/UCR-04_loesung_pruefen.md)                 | SubmissionService, CodeRunner, SandboxRunner, TestCaseRepository                |
| [UCR-05](use_case_realizations/UCR-05_fortschritt_speichern.md)           | CaseSolvedDialogComponent, ProgressService, PlayerRepository, RankRepository    |
| [UCR-06](use_case_realizations/UCR-06_fortschritt_ansehen.md)             | ProgressOverviewComponent, ProgressService, AchievementRepository               |
| [UCR-07](use_case_realizations/UCR-07_hinweis_anfordern.md)               | CodeEditorComponent, HintService, HintRepository                                |
| [UCR-08](use_case_realizations/UCR-08_code_ausfuehren.md)                 | ConsoleComponent, RunService, CodeRunner, SandboxRunner                         |

## 6 Process view

*Autor: Felix*

**Aktuelle Entwicklungsumgebung:** Das Angular-Frontend wird lokal über `ng serve` (Port 4100) bereitgestellt und im Browser ausgeführt, während das Express-Backend als separater Node.js-Prozess (`npm run dev`, Port 3100) läuft; Datenbank und Sandbox sind derzeit noch nicht angebunden.

**Geplanter Betrieb:** Das Frontend kommuniziert über HTTPS und REST/JSON mit dem auf Vercel bereitgestellten Backend, das auf die externe Neon-PostgreSQL-Datenbank zugreift und für UC-04 und UC-08 einen separaten Sandbox-Dienst aufrufen soll; dieser führt den Java-Code des Spielers je Anfrage isoliert und mit einem Ausführungslimit von fünf Sekunden aus.

## 7 Deployment view

*Autor: Leonie*

<!-- Ein UML-Verteilungsdiagramm: Knoten (Geräte, Ausführungsumgebungen), die darauf
  laufenden Artefakte und die Kommunikationsverbindungen einschließlich ihrer Protokolle.
  Stelle die Umgebung dar, die ihr für eure Abschlussdemonstration plant oder aktuell
  verwendet, und gib an, welche Variante gezeigt wird. -->

Das Verteilungsdiagramm zeigt den geplanten Deployment-Betrieb für die Abschlussdemo.

![Verteilungsdiagramm](diagrams/deployment.png)

| Node                                                     | What runs there?                             | Connected to                                                   |
|----------------------------------------------------------|----------------------------------------------|----------------------------------------------------------------|
| Rechner des Spielers (Webbrowser)                        | Angular-App                                  | Vercel CDN: HTTPS; Backend: HTTPS (REST, JSON)                 |
| Vercel (Static Hosting/CDN)                              | Frontend-Build (index.html, JavaScript, CSS) | Browser: HTTPS                                                 |
| Vercel (Node.js-Laufzeit)                                | Backend (Express)                            | Browser: HTTPS; Neon: TCP 5432 (TLS); Ausführungsserver: HTTPS |
| Neon                                                     | PostgreSQL-Datenbank (cyber_defenders)       | Backend: TCP 5432 (TLS)                                        |
| Geplanter Ausführungsserver (Docker, Hosting noch offen) | Java-Sandbox (JDK, Zeitlimit 5 s)            | Backend: HTTPS                                                 |

Frontend und Backend sollen bei Vercel betrieben werden (SRS 3.6, DC-04). 
Die PostgreSQL-Datenbank wird als separater Knoten bei Neon betrieben (DC-03). 
Der Hostingort für die Java-Sandbox ist noch offen. Da die benötigte Docker-Ausführungsumgebung nicht direkt bei Vercel 
betrieben werden kann, ist sie als separater Server dargestellt.

Aktuell läuft die Anwendung lokal auf den Rechnern des Teams: 
Das Frontend wird mit ng serve auf Port 4100 gestartet, 
das Backend mit npm run dev auf Port 3100 (siehe [README](https://github.com/Cyber-Defenders-4/Cyber-Defenders/blob/main/README.md)).
Die Datenbank und die Sandbox sind noch nicht eingerichtet und angebunden.

## 8 Implementierungssicht

### 8.1 Überblick

*Autor: Dominik*

<!-- Ein UML-Komponentendiagramm der gesamten Anwendung: Frontend, Backend, Datenbank,
  externe Dienste und die Schnittstellen zwischen ihnen (Kugel = stellt bereit,
  Buchse = benötigt). Zwei bis fünf Komponenten innerhalb des Backends sind eine
  angemessene Größenordnung. -->

![Komponentendiagramm](diagrams/components.png)

| Komponente          | Verantwortlichkeit                                                | Klassen (Aufgabe 5)                                                                                                                                                     |
|---------------------|-------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Missionen-UI        | Missionsübersicht und Fallakte anzeigen                           | MissionOverviewComponent, CaseFileComponent                                                                                                                             |
| Arbeitsansicht-UI   | Code-Editor, Konsole, Hinweise und Dialog „Fall gelöst“           | WorkspaceComponent, CodeEditorComponent, ConsoleComponent, CaseSolvedDialogComponent                                                                                    |
| Fortschritt-UI      | Fortschritt, Rang und Erfolge anzeigen                            | ProgressOverviewComponent                                                                                                                                               |
| API-Client          | Ruft die REST-API des Backends auf                                | MissionApiService, DraftApiService, SubmissionApiService, RunApiService, HintApiService, ProgressApiService                                                             |
| REST-API            | Nimmt HTTP-Anfragen an und gibt JSON zurück                       | MissionController, DraftController, SubmissionController, RunController, HintController, ProgressController                                                             |
| Spiellogik          | Fachliche Abläufe: Missionsstatus, Prüfung, XP und Rang, Hinweise | MissionService, DraftService, SubmissionService, RunService, HintService, ProgressService                                                                               |
| Persistenz          | Liest und schreibt die Daten in der Datenbank                     | MissionRepository, EvidenceRepository, DraftRepository, TestCaseRepository, HintRepository, ProgressRepository, PlayerRepository, RankRepository, AchievementRepository |
| Ausführungs-Adapter | Schickt Code an die Sandbox und liefert das Ergebnis              | CodeRunner (Schnittstelle), SandboxRunner                                                                                                                               |
| Neon PostgreSQL     | Speichert Missionen, Spieler und Fortschritt                      | — (externer Dienst)                                                                                                                                                     |
| Ausführungsumgebung | Übersetzt und führt Java-Code isoliert aus, höchstens 5 s         | — (externer Dienst)                                                                                                                                                     |

Das Frontend kennt nur die REST-API, das Backend kennt die Datenbank nur über die Persistenz und die Sandbox nur über die Schnittstelle `CodeRunner`. So lässt sich die Sandbox austauschen, ohne die Spiellogik zu ändern.

### 8.2 Schichten

<!-- Vorlesungen 8 und 9. Die Schichten eurer Anwendung und die Regeln für ihre
  Abhängigkeiten. Bis dahin bleibt dieser Abschnitt unverändert. -->

*Wird in Vorlesung 8 und 9 behandelt.*

## 9 Datensicht

<!-- Derzeit optional. Später: das Datenbankschema oder ER-Modell, abgeleitet aus eurem Domänenmodell. -->

*Autor: Leonie*

Das Datenbankschema wurde aus dem Domänenmodell abgeleitet: Jede Klasse wird zu einer Entitätstabelle mit einem 
Primärschlüssel, die Beziehungen werden mittels Fremdschlüssel realisiert. Die Beziehung zwischen dem Spieler und 
seinem Erfolg wird über die Tabelle player_achievement abgebildet. Das Schema ist ein Entwurf und wird bei der 
Anbindung von Neon umgesetzt.

Das Domainmodel liegt sowohl in Min-Max- als auch in Chen-Notation vor, daher gibt es auch das Data-View-Model in 
beiden Notationen. Die Diagramme unterscheiden sich somit lediglich aufgrund ihrer Kardinalitäten.

**Min-Max-Notation**

![Datenbankschema in Min-Max Notaion](diagrams/data_view_model_minmax.png)

**Chen-Notation**

![Datenbankschema in Chen-Notation](diagrams/data_view_model_chen.png)

## 10 Umfang und Leistung

<!-- Vorlesung 7. Kennzahlen, die eure Architektur beeinflussen, beispielsweise die erwartete
  Anzahl von Benutzern und Daten sowie die Leistungsanforderungen aus SRS 3.4.
  Bis dahin bleibt dieser Abschnitt unverändert. -->

*Wird in Vorlesung 7 behandelt.*

## 11 Qualität

<!-- Vorlesungen 7 bis 9. Wie unterstützt eure Architektur die erforderlichen Qualitätsmerkmale,
  beispielsweise Verfügbarkeit, Sicherheit und Wartbarkeit? Bis dahin bleibt dieser
  Abschnitt unverändert. -->

*Wird in Vorlesung 7 bis 9 behandelt.*
