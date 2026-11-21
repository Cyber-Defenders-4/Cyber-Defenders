# Risikoliste (RMMM)

*Projekt: Cyber Defenders · Team: Dominik, Felix, Leonie, Marco*

RMMM steht für Risk Mitigation, Monitoring and Management (Risikominderung,
Überwachung und Management). Diese Liste ist ein lebendes Dokument: Wir
schauen bei jedem Sprintwechsel darauf und ändern das Datum jeder Zeile, die
wir anfassen.

## Unsere Skala

| Wert | Wahrscheinlichkeit          | Auswirkung                       |
| :--: | --------------------------- | -------------------------------- |
|  1   | fast nie                    | eine Stunde verloren             |
|  2   | unwahrscheinlich            | einer von uns verliert einen Tag |
|  3   | möglich, schon davon gehört | ein Sprintziel verfehlt          |
|  4   | wahrscheinlich              | ein UseCase fehlt in der Demo    |
|  5   | fast sicher                 | keine Demo oder Datenverlust     |

Score = Wahrscheinlichkeit × Auswirkung.

**Unsere Schwellenwerte:** ab 15: sofort handeln · zwischen 5 und 14: planen · darunter: beobachten

## Risiken

| ID   | Risiko, kurz     | Art       | W | A | Score | Verantwortlich | Status | Aktualisiert |
| ---- | ---------------- | --------- | - | - | ----- | -------------- | ------ | ------------ |
| R-01 | [ein paar Worte] | technical |   |   |       | [Name]         | open   | [TT.MM.JJJJ] |
| R-02 | Umfang zu groß   | project   | 4 | 4 | 16    | Marco          | open   | 19.11.2026   |
| R-03 | [ein paar Worte] | technical |   |   |       | [Name]         | open   | [TT.MM.JJJJ] |

<!-- Ein Risiko mit Auswirkung 5, das ihr nicht vollständig ausschreibt: hier ein
     Satz, was ihr tun würdet, wenn es eintritt. -->

<!-- Kopiert den folgenden Block einmal für jedes Risiko, das ihr vollständig
     ausschreibt. -->

### R-01 [Risiko, kurz]

*Verantwortlich: [Name]*

**Risiko.** Weil [Ursache – was heute schon wahr ist], könnte [Ereignis – was
passieren kann], sodass [Wirkung – was es uns kosten würde].

**Bewertung.** Wahrscheinlichkeit [Wert] × Auswirkung [Wert] = [Score]. [Ein Satz:
warum diese Zahlen.]

**Mitigation.** [Was wir tun, bevor es eintritt, damit es unwahrscheinlicher oder
weniger schlimm wird. Oder: akzeptiert, weil …]

**Indikator.** [Das Warnzeichen, auf das wir achten.]

**Contingency.** [Unser Plan B: was wir tun, wenn es trotzdem eingetreten ist.]

### R-02 Umfang zu groß

*Verantwortlich: Marco*

**Risiko.** Weil wir acht Use Cases (UC-01 bis UC-08) sowie Nutzerverwaltung und
Desktop-Shell geplant haben, Frontend und Backend aktuell aber erst als
Grundgerüst mit ersten Frontend-Komponenten existieren und im 4. Semester
zusätzlich CI/CD-Pipeline, Tests, Refactoring, Metriken und Security Check
anstehen, könnte unsere verfügbare Entwicklungszeit bis zum Projektende nicht
ausreichen, sodass geplante Use Cases bis zur benoteten Final-Demo nicht
fertiggestellt werden.

**Bewertung.** Wahrscheinlichkeit 4 × Auswirkung 4 = 16. Im Repository steht
aktuell erst das Grundgerüst mit ersten Frontend-Komponenten, und im aktuellen
Sprint (13 Tickets, 14,5 SP Estimate) liegt noch kein Implementierungs-Ticket für
die acht Use Cases oder das Backend, während erste Aufgaben bereits deutlich
über dem Estimate liegen (z. B. #37 mit 7 h Aufwand bei 2 SP Estimate). Bei
diesem Stand im Vergleich zum ausstehenden Umfang (acht Use Cases plus geplante
Semester-4-Anforderungen) ist ein zeitlicher Engpass wahrscheinlich (4). Ein
fehlender Use Case in der Final-Demo entspricht direkt Stufe 4 unserer Skala.

**Mitigation.** Konkretes Board-Item „Alle offenen Tickets im Prioritized
backlog in Must-Have (P0/P1) und Optional (P2) aufteilen“ (fällig vor Sprintwechsel 5 
am `30.11.2026`): Alle offenen Issues auf dem
GitHub-Board werden verbindlich priorisiert in Must-Have (Kern-Workflow:
Anmeldung, UC-01 bis UC-05, UC-08) und Optional (UC-06 Fortschritt ansehen,
UC-07 Hinweis anfordern, Profilverwaltung). Neue Sprints werden erst mit
Optional-Tickets gefüllt, wenn keine offenen Must-Have-Tickets mehr vorliegen.

**Indikator.** Das Burndown-Chart liegt an zwei aufeinanderfolgenden
Sprintwechseln über der Ideallinie, oder vier Wochen vor der Final-Demo steht
noch mindestens ein Must-Have-Use-Case nicht mindestens auf „In Progress“.

**Contingency.** Sobald der Indikator anschlägt, wird der Funktionsumfang wie
folgt gekürzt:
- **Entscheidung (Wer & Wann):** Marco meldet das Auslösen des Indikators direkt
  im Team-Chat. Felix entscheidet als Product Owner spätestens beim unmittelbar
  nächsten Sprintwechsel (bei weniger als vier Wochen bis zur Final-Demo
  innerhalb von 48 Stunden in einem kurzen Meeting), welche Features
  gestrichen werden.
- **Umsetzung auf dem Board:** Die gestrichenen Optional-Tickets (P2) werden in
  fester Reihenfolge (1. Profilverwaltung, 2. UC-07 Hinweis anfordern, 3. UC-06
  Fortschritt ansehen) mit dem Label `deferred` markiert und im Backlog belassen.
- **Feature-Freeze:** Es werden keine neuen Features mehr in den laufenden
  Sprint aufgenommen. Die verbleibende Zeit fließt ausschließlich in den
  lauffähigen Kern-Workflow sowie die geplanten Semester-4-Anforderungen
  (CI-Pipeline, Tests, Refactoring, Metriken).
- **Dokumentation:** Die bewusste Scope-Reduktion wird in den Projektdokumenten
  festgehalten und in der Final-Präsentation transparent begründet.
