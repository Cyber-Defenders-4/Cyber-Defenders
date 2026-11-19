# Risikoliste (RMMM)

*Projekt: Cyber Defenders · Team: FMLD-Studios (Felix Hagino, Marco D'Aquila, Leonie Röse, Dominik Stengele)*

RMMM steht für Risk Mitigation, Monitoring and Management (Risikominderung,
Überwachung und Management). Diese Liste ist ein lebendes Dokument: Wir
schauen bei jedem Sprintwechsel darauf und ändern das Datum jeder Zeile, die
wir anfassen.

## Unsere Skala

<!-- Eure Skala, eure Worte. Vorlesung 10, Folie 18 zeigt ein Beispiel, von dem
     ihr ausgehen könnt – ändert die Worte, bis ihr alle dasselbe unter jeder
     Zahl versteht. Fünf Stufen sind üblich; drei funktionieren auch. -->

| Wert | Wahrscheinlichkeit          | Auswirkung                       |
|:----:|-----------------------------|----------------------------------|
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

| ID   | Risiko, kurz                 | Art       | W | A | Score | Verantwortlich | Status | Aktualisiert |
|------|------------------------------|-----------|---|---|-------|----------------|--------|--------------|
| R-01 | [ein paar Worte]             | technical |   |   |       | [Name]         | open   | [TT.MM.JJ]   |
| R-02 | [ein paar Worte]             |           |   |   |       | [Name]         | open   | [TT.MM.JJ]   |
| R-03 | Abhängigkeit von der Neon-DB | technical | 2 | 5 | 10    | Leonie         | open   | 18.11.26     |

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

### R-03 Abhängigkeit von Neon-DB

*Verantwortlich: Leonie*

**Risiko.** Weil die Persistenz von dem Anbieter Neon und dessen kostenlosem Plan abhängt, 
könnte Neon am Demo-Tag nicht erreichbar sein, ein Limit überschritten werden oder Nutzungsbedingungen ändern sich, 
sodass der Spielerfortschritt nicht gespeichert wird, der UseCase nicht persistent demonstriert werden kann. Die Demo 
kann damit gefährdet werden und durch den benötigten Anbieterwechsel zusätzlicher Migrationsaufwand verursacht werden.

**Bewertung.** Wahrscheinlichkeit 2 × Auswirkung 5 = 10. Die Demo ist nur für wenige Nutzer ausgelegt und macht
eine Limit-Überschreitung kurz vor dem Final eher unwahrscheinlich. Jedoch besteht eine gewisse Unsicherheit, da die 
Datenbank bisher noch nicht eingerichtet und getestet wurde. Deshalb der Wert 2, welchen wir neu bewerten, sobald die 
Datenbank läuft. Die Auswirkung betrifft mindestens einen UseCase, im schlimmsten Fall fällt jedoch die Demo 
aufgrund verlorener Daten aus. Daher der Wert 5.

**Mitigation.** Wir werden ausschließlich Standardfunktionen von PostgreSQL nutzen und kapseln den Datenbankzugriff, 
damit bei einem Wechsel nur die Konfiguration davon betroffen ist. 
Dominik wird nach der Einrichtung der Datenbank außerdem mindestens einmal pro Sprint eine Backup-Datei
erstellen und diese im privaten Discord Server im Kanal Backup ablegen. Mit dieser Datei wird einmalig ein Restore getestet. 
Die Datenbank wird bis Anfang des vierten Semesters eingerichtet, das erste Backup erstellt und damit der Restore getestet. 
Zudem richten wir eine lokale PostgreSQL-Instanz ein und testen damit den Notfallbetrieb anhand der Setup-Schritte in der README. 

**Indikator.** Wir greifen direkt ein, wenn Neon Warnmeldungen zu Limits oder Änderungen des kostenlosen Plans sendet, 
wenn mindestens fünf Verbindungsfehler innerhalb von 10 Minuten auftreten oder das letzte Backup älter als ein Sprint ist. 

**Contingency.** Es werden zwei Fälle unterschieden: Entweder ist Neon ausgefallen, aber es bleibt noch Zeit, das letzte vorhandene 
Backup in einer alternativen PostgreSQL-Datenbank einzuspielen oder der Ausfall tritt erst am Demo-Tag ein und wir benötigen 
eine lokale PostgreSQL-Instanz.
Die Schritte stehen in der README, jedes Teammitglied kann sie befolgen:
- Die Backup-Datei im privaten Discord-Kanal Backup abrufen
- Backup in einer alternativen PostgreSQL-Datenbank (lokal) wiederherstellen
- alle notwendigen Verbindungsdaten in den Umgebungsvariablen anpassen
- das Backend wie in der README beschrieben neu starten 
- die neue Datenbankverbindung testen
- das Laden von Spielerfortschritten überprüfen
