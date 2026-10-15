# Cyber Defenders — Software Requirements Specification


<!--
SO NUTZT IHR DIESE VORLAGE
- Kopiert den ganzen docs/-Ordner in euer Repository.
- Ersetzt jeden [Platzhalter] in eckigen Klammern. Kommentare wie dieser sind Hinweise: Sie
  sind auf GitHub unsichtbar und können gelöscht werden, sobald ein Abschnitt fertig ist.
- Behaltet jede Überschrift und ihre Nummer. Wenn ein Abschnitt nicht zutrifft, schreibt
  "Nicht zutreffend" und einen Satz mit der Begründung.
- Jeder Abschnitt, den ihr schreibt, nennt seinen Autor: in der Zeile "Autor" unter der
  Überschrift oder in der Spalte "Autor" einer Tabelle. Vorausgefüllte Abschnitte brauchen
  keinen Autor.
- Aufbau nach der RUP-Vorlage "Software Requirements Specification":
  https://cin.ufpe.br/~if682/RUP/webtmpl/templates/req/rup_srs.htm
-->

| Team | Version | Letzte Änderung |
| ---- | ------- | --------------- |
| FMLD-Studios | 0.3 | 15.10.2026 |

| Autor | GitHub |
| ----- | ------ |
| Felix Hagino | [@FelixHagino](https://github.com/FelixHagino) |
| Marco Daquila | [@MarcoDaquila](https://github.com/MarcoDaquila) |
| Leonie Röse | [@webdesign19](https://github.com/webdesign19) |
| Dominik Stengele | [@keckamreck](https://github.com/keckamreck) |

Die Git-Historie dieser Datei ist die Änderungshistorie.

## Inhaltsverzeichnis

1. [Einleitung](#1-einleitung)
2. [Allgemeine Beschreibung](#2-allgemeine-beschreibung)
3. [Spezifische Anforderungen](#3-spezifische-anforderungen)
4. [Ergänzende Informationen](#4-ergänzende-informationen)

## 1 Einleitung

### 1.1 Zweck

*Autor: Leonie*

<!-- Ein Absatz: Was beschreibt dieses Dokument, und wer liest es
     (euer Team, der Dozent als Investor, die Person, die das Projekt übernimmt)? -->

Dieses Dokument spezifiziert die Anforderungen an Cyber Defenders, ein Lernspiel für Java und IT-Sicherheit. Es richtet sich an unser Team, an den Dozenten in der Rolle des Investors und an alle, die das Projekt später weiterentwickeln.

### 1.2 Umfang (Scope)

*Autor: Leonie*

<!-- Was die Software tut und für wen, in zwei bis drei Sätzen.
     Danach eine ausdrückliche Trennung in "im Umfang" und "nicht im Umfang", jeweils mit
     Begründung. Nicht im Umfang = euer MoSCoW-"Won't have this time". Spätere Änderungen
     dokumentiert ihr hier. -->

Cyber Defenders ist ein webbasiertes Lernspiel für Studierende und Einsteiger. Spieler wählen eine Mission, lösen darin Rätsel zu Java und IT-Sicherheit in einem Code-Editor und sehen ihren Fortschritt. Der Fortschritt wird dauerhaft gespeichert.

| Im Umfang | Begründung |
| --------- | ---------- |
| Missionen anzeigen, auswählen und starten (Fallakte mit Schwierigkeitsgrad, Auftrag und Lernzielen) | Mindestumfang aus unserer Vision: mindestens eine spielbare Mission |
| Java-Code-Editor mit automatischer Prüfung der Lösung | Teil des Mindestumfangs aus Task 1 [Umfang nach der Entscheidung zum Feedback zu Task 1 anpassen] |
| Fortschritt, Level und Punkte speichern und einsehen | Mindestumfang aus unserer Vision, die Anwendung muss Daten dauerhaft speichern |
| Missionen und Rätsel verwalten (neue Missionen anlegen) | In Task 1 als Use Case genannt, wird in späteren Sprints spezifiziert |

| Nicht im Umfang | Begründung |
| --------------- | ---------- |
| Rolle auswählen (Cyber-Defender oder White-Hat-Hacker) | Nice-to-have um IT-Sicherheit aus zwei Blickwinkeln lernen, jedoch nicht entscheiden für den allgemeinen Spielablauf |
| [Funktion, z. B. echte Ausführung von Nutzer-Code im Backend, noch zu entscheiden] | [Grund, z. B. Aufwand und Sicherheit (abgesicherte Ausführung)] |

### 1.3 Definitionen, Akronyme und Abkürzungen

*Autor: Leonie*

| Begriff | Bedeutung |
| ------- | --------- |
| SRS | Software Requirements Specification (Software-Anforderungsspezifikation) |
| UC | Use Case (Anwendungsfall) |
| NFR | Nicht-funktionale Anforderung (Qualitätsanforderung oder Randbedingung) |
| MVP | Minimum Viable Product, die kleinste spielbare Version |
| Mission | Ein einzelner Spielabschnitt, zum Beispiel „Gehackter Serverraum“, mit Fallakte und Rätseln |
| Fallakte | Beschreibung einer Mission mit Schwierigkeitsgrad, Auftrag und Lernzielen |
| Cyber-Defender, (White-Hat-Hacker) | Die beiden wählbaren Rollen, aus deren Sicht der Spieler IT-Sicherheit lernt |
| Agent | Bezeichnung für den Spieler in unseren User Stories |

### 1.4 Referenzen

*Autor: Leonie*

| Titel | Link |
| ----- | ---- |
| Blog | https://github.com/Cyber-Defenders-4/Cyber-Defenders/discussions |
| Board | https://github.com/orgs/Cyber-Defenders-4/projects/2/views/1 |
| Repository | https://github.com/Cyber-Defenders-4/Cyber-Defenders |

### 1.5 Überblick

Abschnitt 2 beschreibt das Produkt als Ganzes: Vision und Use-Case-Diagramm. Abschnitt 3 listet die spezifischen Anforderungen auf: die Use Cases (3.1) sowie die Qualitätsanforderungen und Randbedingungen (3.2 bis 3.12).

## 2 Allgemeine Beschreibung

### 2.1 Vision

*Autor: Leonie*

<!-- Unsere Vision aus Task 1: Problem, Zielgruppe und Stakeholder,
     der Nutzen und die Abgrenzung zu Alternativen. Der Investor soll sie in zwei Minuten
     verstehen. -->

Cyber Defenders ist ein Lernspiel, das einen virtuellen Escape Room mit einem Detektiv- und Rätselspiel verbindet. In einzelnen Missionen, zum Beispiel in einem gehackten Serverraum oder einem Firmennetzwerk, lernen Spieler spielerisch fortgeschrittene Java-Programmierung und grundlegende Prinzipien der IT-Sicherheit. Vor dem Start wählen sie eine Rolle (Cyber-Defender oder White-Hat-Hacker) und lernen IT-Sicherheit so aus zwei Blickwinkeln. Die Oberfläche folgt einem Retro-PC-Design mit eigenem Maskottchen.

- **Zielgruppe:** Studierende, Schüler und Einsteiger, die Java und IT-Sicherheit lernen wollen.
- **Stakeholder:** Spieler (Lernende), unser Entwicklungsteam, der Dozent als Investor.
- **Nutzen:** Spielerisches Lernen von Java und IT-Sicherheit anhand praktischer Aufgaben.
- **Abgrenzung zu Alternativen:** [ergänzen, z. B. gegenüber reinen Lernplattformen oder Capture-the-Flag-Angeboten]

### 2.2 Use-Case-Diagramm

*Autor: Dominik*

<!-- Ein UML-Use-Case-Diagramm für die gesamte Anwendung mit mindestens fünf übergeordneten
     Use Cases; Anmeldung und Registrierung zählen nicht. Legt die Quelldatei neben das Bild. -->

![Use-Case-Diagramm](diagrams/use-case-diagram.png)

### 2.3 Annahmen und Abhängigkeiten

*Autor: Dominik*

<!-- Optional: Was ihr annehmt (z. B. Nutzer haben ein DHBW-Konto) und wovon ihr abhängt
     (z. B. eine externe API). Löscht den Kommentar und schreibt "Keine", falls es nichts gibt. -->

Wir nutzen Neon (PostgreSQL) als gehostete Datenbank und sind damit von diesem Dienst abhängig. [Weitere Annahmen und Abhängigkeiten ergänzen.]

## 3 Spezifische Anforderungen

### 3.1 Funktionalität

<!-- Ein Unterabschnitt pro Use Case. Die Spezifikation liegt in einer eigenen Datei in
     use_cases/, erstellt aus UC-00_template.md. Hier: Name, Autor, ein Satz, Link.
     Task 3: mindestens ein spezifizierter Use Case pro Teammitglied (vier Einträge mit Link).
     Listet jeden Use Case eures Diagramms auf; markiert noch nicht spezifizierte als "geplant". -->

#### 3.1.1 UC-01 Mission auswählen

*Autor: Dominik* · Der Spieler sieht alle Missionen mit ihrem Status (freigeschaltet, gesperrt, gelöst) und wählt eine freigeschaltete Mission aus. · Stories: #12, #13, #15 · [Spezifikation](use_cases/UC-01_mission-auswaehlen.md)

#### 3.1.2 UC-02 Fallakte lesen

*Autor: Marco* · Der Spieler liest die Fallakte der gewählten Mission und startet sie, danach öffnet sich die Arbeitsansicht. · Stories: #14, #17, #19, #20, #73 · [Spezifikation](use_cases/UC-02_fallakte-lesen.md)

#### 3.1.3 UC-03 Lösung im Editor schreiben

*Autor: Marco* · Der Spieler schreibt Java-Code im Editor mit vorgegebenem Gerüst, der Entwurf wird automatisch zwischengespeichert. · Stories: #22, #23, #74 · [Spezifikation](use_cases/UC-03_loesung-schreiben.md)

#### 3.1.4 UC-04 Lösung prüfen lassen

*Autor: Felix* · Der Spieler reicht seinen Code ein, das System prüft ihn gegen die Tests der Mission und gibt pro Test eine Rückmeldung. · Stories: #26, #27, #28, #29, Epic #71 · [Spezifikation](use_cases/UC-04_loesung-pruefen.md)

#### 3.1.5 UC-05 Fortschritt speichern

*Autor: Felix* · Nach einer korrekten Lösung berechnet das System XP und Rang, speichert den Fortschritt und schaltet die nächste Mission frei. · Stories: #30, #57, #61, #72, #75 · [Spezifikation](use_cases/UC-05_fortschritt-speichern.md)

#### 3.1.6 UC-06 Fortschritt ansehen

*Autor: Leonie* · Der Spieler sieht den Status jeder Mission, seinen Rang mit den gesammelten XP und seine Erfolge. · Stories: #58, #59, #62 · [Spezifikation](use_cases/UC-06_fortschritt-ansehen.md)

#### 3.1.7 UC-07 Hinweis anfordern

*Autor: Leonie* · Kommt der Spieler nicht weiter, fordert er einen von drei Hinweisen pro Mission an, ohne dass die Lösung verraten wird. · Stories: #18, #63 · [Spezifikation](use_cases/UC-07_hinweis-anfordern.md)

#### 3.1.8 UC-08 Code ausführen

*Autor: Leonie* · Der Spieler führt seinen Code zur Probe aus und sieht Ausgabe oder Fehlermeldungen in der Konsole, ohne Bewertung. · Stories: #24, Epic #71 · [Spezifikation](use_cases/UC-08_code-ausfuehren.md)

<!-- QUALITÄTSANFORDERUNGEN (3.2 bis 3.5)
     Mindestens eine pro Abschnitt. Jede mit ID, einem Satz mit "soll", einer Zahl, die man
     testen kann, und wenn möglich Stimulus, Reaktion und Messgröße. IDs sind im gesamten SRS
     eindeutig, auch gegenüber den besonderen Anforderungen eurer Use Cases.
     Beispiel: NFR-P-01 — Wenn 50 Nutzer gleichzeitig suchen, listet die App freie Termine
     bei 95 % der Anfragen innerhalb von 1 s auf. -->

### 3.2 Benutzbarkeit (Usability)

| ID | Anforderung | Autor |
| -- | ----------- | ----- |
| NFR-U-01 | [messbare Anforderung] | [Vorname] |

### 3.3 Zuverlässigkeit (Reliability)

| ID | Anforderung | Autor |
| -- | ----------- | ----- |
| NFR-R-01 | [messbare Anforderung] | [Vorname] |

### 3.4 Leistung (Performance)

| ID | Anforderung | Autor |
| -- | ----------- | ----- |
| NFR-P-01 | [messbare Anforderung] | [Vorname] |

### 3.5 Wartbarkeit und Erweiterbarkeit ()

| ID | Anforderung | Autor |
| -- | ----------- | ----- |
| NFR-S-01 | [messbare Anforderung] | [Vorname] |

### 3.6 Entwurfsrandbedingungen

*Autor: Leonie*

<!-- Feststehende Entscheidungen, nicht pro Funktion gewählt: euer Stack. -->

| ID | Randbedingung |
| -- | ------------- |
| DC-01 | Frontend: TypeScript mit Angular und Tailwind CSS |
| DC-02 | Backend: TypeScript mit Express |
| DC-03 | Datenbank: Neon (PostgreSQL) |
| DC-04 | Bereitstellung: Vercel |

### 3.7 Anforderungen an Online-Benutzerdokumentation und Hilfesystem

Nicht zutreffend. [Begründung, oder durch Anforderungen ersetzen.]

### 3.8 Zugekaufte Komponenten

Nicht zutreffend. [Begründung, oder die Komponenten auflisten.]

### 3.9 Schnittstellen

*Autor: Leonie*

#### 3.9.1 Benutzerschnittstellen

<!-- Verlinkt die Mockups eurer Use Cases oder beschreibt die Hauptansichten in je einer Zeile. -->

Alle Ansichten folgen dem Retro-PC-Design. Die Mockups liegen in `mockups/`.

- **Anmeldung und Kontoerstellung:** [Anmeldung](mockups/anmeldung.png), [Kontoerstellung](mockups/kontoerstellung.png)
- **Dashboard und Profil:** [Dashboard](mockups/dashboard.png), [Profilverwaltung](mockups/profilverwaltung.png)
- **Missionsübersicht:** Liste der Missionen mit Status (freigeschaltet, gesperrt, gelöst). [Mockup UC-01](mockups/UC-01_mission_auswaehlen.png)
- **Fallakte:** Schwierigkeitsgrad, Auftrag und Lernziele der gewählten Mission mit dem Button „Mission starten“. [Mockup UC-02](mockups/UC-02_fallakte_lesen.png)
- **Arbeitsansicht:** Fenster für Beweise (z. B. `server_log.txt`), Einsatzbericht, Java-Code-Editor und Konsole. [Mockup UC-03](mockups/UC-03_loesung_schreiben.png), [Mockup UC-04](mockups/UC-04_loesung_pruefen.png), [Mockup UC-07](mockups/UC-07_hinweis_anfordern.png)
- **Fortschritt:** Dialog „Fall gelöst“ mit XP und Rang, Übersicht über Missionen und Erfolge. [Mockup UC-05](mockups/UC-05_fortschritt_speichern.png), [Mockup UC-06](mockups/UC-06_fortschritt_ansehen.png)

#### 3.9.2 Hardwareschnittstellen

Nicht zutreffend. Die Anwendung läuft im Webbrowser und nutzt keine eigene Hardwareschnittstelle.

#### 3.9.3 Softwareschnittstellen

<!-- Externe Dienste und APIs, die ihr nutzt, z. B. ein E-Mail-Dienst. -->

Das Backend (Express) greift auf die Datenbank bei Neon (PostgreSQL) zu. [Weitere externe Dienste ergänzen, falls vorhanden.]

#### 3.9.4 Kommunikationsschnittstellen

<!-- Z. B. HTTPS zwischen Frontend und Backend. -->

Das Frontend (Angular) kommuniziert mit dem Backend (Express) über HTTP(S). Lokal laufen das Frontend auf Port 4100 und das Backend auf Port 3100. [Format der Schnittstelle bestätigen, z. B. REST mit JSON]

### 3.10 Lizenzanforderungen

*Autor: [Vorname]*

<!-- Die Lizenz eures Projekts und die von Bibliotheken, die Bedingungen stellen. -->

[…]

### 3.11 Rechtliche Hinweise, Urheberrecht und sonstige Vermerke

*Autor: [Vorname]*

<!-- Z. B. Datenschutz (DSGVO), wenn ihr personenbezogene Daten speichert. -->

[…]

### 3.12 Anwendbare Standards

*Autor: [Vorname]*

<!-- Z. B. WCAG 2.2 Stufe AA, ein Coding-Standard. -->

[…]

## 4 Ergänzende Informationen

<!-- Optional: Anhänge, Erweiterungen des Glossars, Interviewnotizen. -->

Keine.