# UCR-[NN] [Verb Objekt] — Use-Case-Realisierung

<!--
ANLEITUNG ZUR VERWENDUNG DIESER VORLAGE
- Kopiere diese Datei für jede Realisierung und benenne sie UCR-[NN]_[name].md.
  Verwende dabei die Nummer des zugehörigen Use Cases: UCR-02_book_a_room.md realisiert UC-02.
- Ersetze alle [Platzhalter] in eckigen Klammern.
- Bleibe auf der Analyseebene aus Vorlesung 4: Boundary-, Control- und Entity-Objekte,
  noch keine Framework-Klassen. In Aufgabe 5 werden diese durch Designklassen ersetzt.
- Entferne diese Kommentare, sobald die Realisierung abgeschlossen ist.
- Die Struktur basiert auf der RUP-Vorlage „Use-Case Realization Specification“:
  https://cin.ufpe.br/~if682/RUP/webtmpl/templates/a_and_d/rup_ucrs.htm
- Abschnitt 2 entspricht dem RUP-Abschnitt „Flow of Events — Design“ (Ablauf der Ereignisse — Entwurf).
-->

| Autor | Realisiert |
| ------ | ---------- |
| [Vorname] | [UC-NN Verb Objekt](../use_cases/UC-[NN]_[name].md) — und verlinke diese Datei von dort |

## 1 Einleitung

<!-- Zwei oder drei Sätze: Welchen Use Case realisiert diese Spezifikation, welche seiner
     Abläufe deckt sie ab und was bleibt unberücksichtigt? Fachbegriffe gehören in die SRS,
     nicht hier. -->

[…]

## 2 Ablauf der Ereignisse — Entwurf

### 2.1 Beteiligte Objekte

<!-- Jedes Objekt aus deinen Sequenzdiagrammen, jeweils mit genau einer Verantwortlichkeit.
     Boundary: Schnittstelle zwischen einem Akteur und dem System — eines pro Akteur und
              Use Case; auch auf externe Systeme wird über ein Boundary-Objekt zugegriffen.
     Control:  koordiniert diesen Use Case — normalerweise eines.
     Entity:   Informationen, die gespeichert werden müssen. -->

| Objekt | Stereotyp | Verantwortlichkeit |
| ------ | --------- | ------------------ |
| [:BookingForm] | boundary | [Erfasst Raum und Zeitfenster des Studierenden und zeigt das Ergebnis an] |
| [:BookRoom] | control | [Prüft das Zeitfenster, erstellt die Buchung und startet die Benachrichtigung] |
| [:Booking] | entity | [Speichert, wer welchen Raum für welches Zeitfenster gebucht hat] |

### 2.2 Sequenzdiagramme

<!-- Der Basisablauf und die alternativen Abläufe: alt, wenn ein Ablauf wieder zusammengeführt
     wird; break, wenn er den Use Case beendet; opt für einen optionalen Schritt; loop für eine
     Wiederholung; ref für einen eingebundenen Use Case.
     Ein Diagramm genügt, solange es übersichtlich bleibt; andernfalls erstelle eines pro Ablauf.
     Lege die Quelldatei neben dem Bild ab. -->

![Sequenzdiagramm UCR-[NN]](../diagrams/UCR-[NN]_sequence.png)

### 2.3 Ablaufbeschreibung

<!-- Beschreibe die Diagramme in wenigen Sätzen: Welches Objekt tut was und in welcher
     Reihenfolge? Erkläre, wie die Diagramme zusammenhängen. Verweise auf die Schritte des
     Use Cases (1, 2, 4a …). -->

[…]

### 2.4 Zustandsautomat

<!-- Optional. Nur erforderlich, wenn eine Entität dieser Realisierung einen Status mit Regeln
     besitzt, z. B. eine Buchung, die bestätigt, storniert oder abgelaufen sein kann.
     Andernfalls schreibe „Nicht zutreffend“. -->

[Nicht zutreffend]

### 2.5 Designklassen

<!-- Die Designklassen des Use Cases. Quelldateien der Diagramme
     zusammen mit den Bildern versionieren. -->

| Analyseobjekt (2.1) | Designklasse(n) |
| ------------------- | ---------------- |
| [:BoundaryObject «boundary»] | [Page, Controller] |
| [:ControlObject «control»] | [Service] |
| [:EntityObject «entity»] | [Model, Repository] |

![Klassesdiagramm UCR-[NN]](../diagrams/UCR-[NN]_classes.png)

![Sequenzdiagramm UCR-[NN], Designklasses](../diagrams/UCR-[NN]_sequence_design.png)

## 3 Abgeleitete Anforderungen

<!-- Anforderungen, die sich aus dem Entwurf ergeben und bei der Implementierung berücksichtigt
     werden müssen. Jede Anforderung benötigt eine ID, die in der gesamten SRS eindeutig ist,
     z. B.:
     DR-02-01 — Die Prüfung des Zeitfensters und das Einfügen der Buchung erfolgen innerhalb
                einer Transaktion.
     DR-02-02 — E-Mails werden asynchron versendet; ein fehlgeschlagener Versand wird dreimal
                erneut versucht.
     Schreibe „Keine“, wenn es keine abgeleiteten Anforderungen gibt. -->

- [DR-NN-01 — …]
