# UC-[NN] [Verb Objekt]

<!--
SO NUTZT DU DIESE VORLAGE
- Kopiere diese Datei pro Use Case und nenne sie UC-01_[name].md, UC-02_[name].md, ...
- Ersetze jeden [Platzhalter] in eckigen Klammern.
- Name: Verb plus Objekt, ein Ziel, das in einer Sitzung erreicht wird
  ("Raum buchen", nicht "Speichern klicken").
- Beschreibe, was Akteur und System austauschen, nicht welcher Button geklickt wird.
  Den Bildschirm zeigt der Mockup.
- Lösche diese Kommentare, sobald der Use Case fertig ist.
- Aufbau nach der RUP-Vorlage "Use-Case Specification":
  https://cin.ufpe.br/~if682/RUP/webtmpl/templates/req/rup_ucspec.htm
-->

| Autor | Estimate | User Stories |
| ------ | -------- | ------------ |
| [Vorname] | [Story Points] | [#12, #13, und schreibe "Implements UC-NN" in jedes dieser Issues] |

## 1 Kurzbeschreibung

<!-- Ein Absatz: Zweck des Use Cases und Nutzen für den Akteur. -->

[...]

## 2 Akteure

- **Primär:** [Rolle, die den Use Case startet]
- **Sekundär:** [System oder Rolle, die der Use Case braucht, oder "keine"]

## 3 Mockup

<!-- Ein Wireframe reicht. Zeige den Kernschritt dieses Use Cases. -->

![Mockup UC-[NN]](../mockups/UC-[NN]_[name].png)

## 4 Ablauf (Flow of events)

### 4.1 Basisablauf

<!-- Der Erfolgsfall, 3 bis 9 nummerierte Schritte (Cockburn). Akteur und System wechseln sich ab. -->

1. Der [Akteur] [...].
2. Das System [...].
3. Der [Akteur] [...].
4. Das System [...].

### 4.2 Alternativabläufe

<!-- Nenne den Schritt, an dem jeder Ablauf abzweigt, und wo er weitergeht oder endet.
     Fehler, Abbrüche und Konflikte zwischen Nutzern gehören hierher.
     Wenn dein Diagramm einen anderen Use Case zeigt, der diesen erweitert («extend»),
     nenne den Schritt, an dem er starten kann: "Erweiterungspunkt: ...".
     Wenn dieser Use Case immer einen anderen verwendet («include»), schreibe es in den
     Schritt: "(beinhaltet UC-07)". -->

**[N]a · [Kurzname].** Bei Schritt [N], [Bedingung]. Das System [...]. Der Ablauf geht bei
Schritt [M] weiter / Der Use Case endet.

### 4.3 Sequenzdiagramm

<!-- Der obige Ablauf über die Zeit: Akteur, Frontend, Backend, Datenbank.
     Zeige einen Alternativablauf als alt-Fragment, wo er wichtig ist.
     Committe die Quelldatei (PlantUML, draw.io, ...) neben dem Bild. -->

![Sequenzdiagramm UC-[NN]](../diagrams/UC-[NN]_sequence.png)

## 5 Besondere Anforderungen

<!-- Qualitätsanforderungen nur für diesen Use Case, jeweils mit einer ID, die in der
     ganzen SRS eindeutig ist, z. B.
     NFR-P-02: Die Bestätigung erscheint bei 95 % der Buchungen innerhalb von 1 s.
     Systemweite Anforderungen gehören in die SRS-Abschnitte