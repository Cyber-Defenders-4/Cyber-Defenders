# ADR-01 Client-Server-Architektur

| Status     | Datum      | Autor |
| ---------- | ---------- | ----- |
| akzeptiert | 12.11.2026 | Marco |

## Kontext
Unser vierköpfiges Team entwickelt die Lernplattform "Cyber Defenders" in einem begrenzten Zeitrahmen über zwei Semester. Wir benötigen eine Architektur, die eine parallele Entwicklung ermöglicht, ohne ständige Merge-Konflikte in einer einzigen Codebasis zu verursachen. Das Repository ist strukturell bereits in ein separates Frontend und ein TypeScript/Node.js-Backend unterteilt.

## In Betracht gezogene Optionen
1. **Client-Server-Architektur:** Ein entkoppeltes Frontend, das über eine REST-API mit dem separaten TypeScript/Node.js-Backend kommuniziert.
2. **Modularer Monolith:** Eine einzelne Full-Stack-Anwendung in einem Deployment, bei der das Backend die Views direkt rendert und ausliefert.

## Entscheidung
Wir entscheiden uns für Option 1 (Client-Server-Architektur), da sie eine saubere Trennung der Zuständigkeiten bietet. Dies ermöglicht es uns, gleichzeitig und unabhängig voneinander an Frontend- und Backend-Komponenten zu arbeiten, ohne sich gegenseitig im Code zu blockieren.

## Konsequenzen
- Gut: Frontend und Backend können völlig unabhängig voneinander entwickelt, getestet und skaliert werden. Die REST-API bildet einen festen Vertrag zwischen beiden Schichten, und Technologien können auf einer Seite ausgetauscht werden, ohne die andere zwingend zu beeinflussen.
- Schlecht: Das lokale Setup ist aufwendiger, da zwei separate Entwicklungsserver gestartet werden müssen. Zudem müssen CORS-Richtlinien für die API-Kommunikation konfiguriert werden und das Deployment besteht aus zwei getrennten Pipelines bzw. Zielen statt nur einem.
