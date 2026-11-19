# Risikoliste (RMMM)

*Projekt: Cyber Defenders · Team: Dominik, Felix, Leonie, Marco*

RMMM steht für Risk Mitigation, Monitoring and Management (Risikominderung,
Überwachung und Management). Diese Liste ist ein lebendes Dokument: Wir
schauen bei jedem Sprintwechsel darauf und ändern das Datum jeder Zeile, die
wir anfassen.

## Unsere Skala

<!-- Eure Skala, eure Worte. Vorlesung 10, Folie 18 zeigt ein Beispiel, von dem
     ihr ausgehen könnt – ändert die Worte, bis ihr alle dasselbe unter jeder
     Zahl versteht. Fünf Stufen sind üblich; drei funktionieren auch. -->

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

<!-- Eine Zeile pro Risiko, nach Score sortiert, höchster zuerst. Art: Projekt,
     technisch oder geschäftlich (project, technical, business). Status: open,
     occurred oder closed. Aktualisiert: Datum der letzten Änderung. -->

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
Grundgerüst existieren und im 4. Semester zusätzlich CI/CD-Pipeline, Tests,
Refactoring, Metriken und Security Check anstehen, könnte unsere verfügbare
Entwicklungszeit bis zum Projektende nicht ausreichen, sodass geplante Use Cases
bis zur benoteten Final-Demo nicht fertiggestellt werden.

**Bewertung.** Wahrscheinlichkeit 4 × Auswirkung 4 = 16. Der geplante
Funktionsumfang ist neben Klausuren und den geplanten Semester-4-Anforderungen
realistisch schwer vollständig zu schaffen (wahrscheinlich = 4), und fehlende
Features in der Final-Demo entsprechen direkt Stufe 4 unserer Skala.

**Mitigation.** Wir teilen bis zum nächsten Sprintwechsel alle offenen Tickets
auf dem GitHub-Board verbindlich in Must-Have (Kern-Workflow: Anmeldung sowie
UC-01 bis UC-05 und UC-08) und Optional (UC-06 Fortschritt ansehen, UC-07 Hinweis
anfordern, Profilverwaltung) ein, bearbeiten zuerst ausschließlich
Must-Have-Tickets und prüfen das Burndown-Chart bei jedem Sprintwechsel.

**Indikator.** Das Burndown-Chart liegt an zwei aufeinanderfolgenden
Sprintwechseln über der Ideallinie, oder vier Wochen vor der Final-Demo steht
noch mindestens ein Must-Have-Use-Case nicht mindestens auf „In Progress“.

**Contingency.** Jedes Teammitglied kann den Plan B direkt auf dem Board umsetzen:
- Alle noch nicht begonnenen Optional-Tickets (UC-07 Hinweis anfordern, UC-06
  Fortschritt ansehen, Profilverwaltung) zurück ins Backlog schieben und als
  verschoben markieren
- Keine neuen Features mehr in den laufenden Sprint aufnehmen; Fokus strikt auf
  den durchgängigen Kern-Workflow (Anmeldung, UC-01 bis UC-05, UC-08) sowie die
  geplanten Semester-4-Anforderungen (CI-Pipeline, Tests, Refactoring, Metriken)
- Die bewusste Scope-Reduktion in der Dokumentation festhalten und in der
  Final-Präsentation transparent begründen
