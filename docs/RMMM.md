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

| Wert | Wahrscheinlichkeit | Auswirkung |
| :--: | ------------------ | ---------- |
|  1   | [Worte]            | [Worte]    |
|  2   | [Worte]            | [Worte]    |
|  3   | [Worte]            | [Worte]    |
|  4   | [Worte]            | [Worte]    |
|  5   | [Worte]            | [Worte]    |

Score = Wahrscheinlichkeit × Auswirkung.

**Unsere Schwellenwerte:** ab [Score]: sofort handeln · ab [Score]: planen · darunter: beobachten

## Risiken

<!-- Eine Zeile pro Risiko, nach Score sortiert, höchster zuerst. Art: Projekt,
     technisch oder geschäftlich (project, technical, business). Status: open,
     occurred oder closed. Aktualisiert: Datum der letzten Änderung. -->

| ID   | Risiko, kurz      | Art       | W | A | Score | Verantwortlich | Status | Aktualisiert |
| ---- | ----------------- | --------- | - | - | ----- | -------------- | ------ | ------------ |
| R-01 | [ein paar Worte]  | technical |   |   |       | [Name]         | open   | [TT.MM.JJ]   |
| R-02 | [ein paar Worte]  |           |   |   |       | [Name]         | open   | [TT.MM.JJ]   |
| R-03 | [ein paar Worte]  |           |   |   |       | [Name]         | open   | [TT.MM.JJ]   |

<!-- Ein Risiko mit Auswirkung 5, das ihr nicht vollständig ausschreibt: hier ein
     Satz, was ihr tun würdet, wenn es eintritt. -->

<!-- Kopiert den folgenden Block einmal für jedes Risiko, das ihr vollständig
     ausschreibt. -->

### R-01 Judge0-Hosting

*Verantwortlich: Dominik*

**Risiko.** Weil Judge0 einen eigenen Linux-Server mit privilegierten Containern braucht und nicht
auf Vercel läuft, könnten wir keinen dauerhaften, kostenlosen Server dafür finden, sodass die
Code-Prüfung (UC-04, UC-08) und damit der Kern des Spiels in der Final-Demo fehlt.

**Bewertung.** Wahrscheinlichkeit 4 × Auswirkung 5 = 20. Wir haben kein Budget (C-03) und das
Guthaben von Azure for Students ist begrenzt. Ohne Code-Prüfung ist keine Mission spielbar.

**Mitigation.** Das Hosting ist bisher nur geplant. Sobald wir in Semester 4 mit dem Programmieren
beginnen, setzen wir als erstes Item im ersten Sprint Judge0 auf einer Azure-for-Students-VM auf und
prüfen es mit einem Java-Beispiel. Die VM stoppen wir zwischen den Tests, damit das Guthaben bis zur
Final-Demo reicht. Die Spiellogik ruft Judge0 nur über die Schnittstelle `CodeRunner` auf, damit wir
den Anbieter austauschen können.

**Indikator.** Am Ende des ersten Sprints in Semester 4 beantwortet noch keine Judge0-Instanz eine
Test-Abgabe, oder das Azure-Guthaben sinkt schneller als ein Viertel pro Monat.

**Contingency.** Wir wechseln vorübergehend auf die gehostete Judge0-Variante mit Gratis-Kontingent
und tragen deren Adresse und Token im Backend als Umgebungsvariablen ein. Reicht das Kontingent
nicht, vergleichen wir andere Hosting-Angebote und wählen das günstigste, auf dem Judge0 läuft.
Die Spiellogik bleibt dabei gleich, weil sie Judge0 nur über `CodeRunner` anspricht.