# Risikoliste (RMMM)

*Projekt: [Projektname] · Team: [Namen]*

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
| R-03 | Abhängigkeit von der Neon-DB | technical | 2 | 5 | 10    | Leonie         | open   | 18.11.2026   |

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

**Risiko.** Weil die Persistenz vollständig von dem Anbieter Neon und dessen kostenlosem Plan abhängt, 
könnte Neon am Demo-Tag nicht erreichbar sein, ein Limit überschritten werden oder Nutzungsbedingungen ändern, 
sodass der Spielerfortschritt nicht gespeichert wird und ein Anbieterwechsel zusätzlichen Migrationsaufwand verursacht.

**Bewertung.** Wahrscheinlichkeit 2 × Auswirkung 5 = 10. Ein Ausfall oder eine Limit-Überschreitung kurz vor dem Final
eher unwahrscheinlich, da bisher noch keine Verbindungsprobleme oder Warnungen auftraten. Wir hänger aber von den Nutzungsbedingungen 
des kostenlosen Plans ab. Deshalb der Wert 2. Die Auswirkung betrifft mindestens einen UseCase, im schlimmsten Fall fällt jedoch 
die Demo aufgrund verlorener Daten aus. Daher der Wert 5.

**Mitigation.** Wir nutzen ausschließlich Standardfunktionen von PostgreSQL und kapseln den Datenbankzugriff, 
damit bei einem Wechsel nur die Konfiguration davon betroffen ist. 
Dominik erstellt außerdem mindestens einmal pro Sprint eine Backup-Datei und legt sie im privaten 
Discord Server im Kanal Backup ab. Mit dieser Datei testen wir einmal einen Restore. 
Zudem erstellen wir eine lokale PostgreSQL-Instanz, mit der wir die Setup-Schritte aus der README testen. 

**Indikator.** Wir greifen direkt ein, wenn Neon Warnmeldungen zum kostenlosen Plan oder zu geänderten Nutzungsbedingungen sendet, wenn mindestens fünf 
Verbindungsfehler auftreten oder das letzte Backup älter als ein Sprint ist. Dann erstellen wir direkt ein neues Backup und testen den Restore.

**Contingency.** Es werden zwei Fälle unterschieden: Entweder ist Neon ausgefallen, aber es bleibt noch Zeit, das letzte vorhandene 
Backup in einer alternativen PostgreSQL-Datenbank einzuspielen oder der Ausfall tritt erst am Demo-Tag ein und wir benötigen 
eine lokale PostgreSQL-Instanz.
Die Schritte stehen in der README, jedes Teammitglied kann sie befolgen:
- Die Backup-Datei im privaten Discord-Kanal Backup abrufen
- Backup in einer alternativen PostgreSQL-Datenbank wiederherstellen
- alle notwendigen Verbindungsdaten in den Umgebungsvariablen anpassen
- das Backend wie in der README beschrieben neu starten 
- die neue Datenbankverbindung testen
