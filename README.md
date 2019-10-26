# Go Outdoor
Die App "Go Outdoor" vernetzt Menschen über ihren Interessenbereich, z.B. Wandern oder Joggen. Dabei kann jeder Nutzer eigene Quests - also Aufgaben erstellen - und sich mit anderen Leuten verabreden.
Neben zahlreichen Sportarten, bis hin zu Spielen, wie eine Art RPG oder Geocaching können über die App erstellt und realisiert werden.

In diesem Repository finden Sie alle Infos zur technischen Umsetzung und zur bisherigen Realisierung des Frontends.
Dabei haben wir uns für eine Webanwendung (WebApp) entschieden, da diese plattformunabhängig ist und wir einfach (z.B. mit Cordova) in eine native Android und iOS App umwandeln können.

Die bisherige Programmierung haben wir als Node.js App unter diesem Link deployed: https://hackathon.lorenzhohmann.de/filter

## Backend
Das Backend wird über eine Node.js Anwendung realisiert. Aktuell ist die Webanwendung lediglich für den Aufruf der Frontend Dateien zuständig. In der weiteren Entwicklung sollen hier die Routen der RestAPI mit Anbindung an die Datenbank realisiert werden.

## Frontend
Für das Frontend haben wir uns für das JavaScript Framework Vue.js (Vue CLI) entschieden. Damit können wir HTTP Anfragen an die Node.js RestAPI senden, um Daten abzufragen und zu senden.
Vue.js ermöglicht uns es, dynamsiche und schnelle Oberflächen zu bauen, die gerade für den Erstellprozess und die Filterung von großem Vorteil sind.
Da wir viel wert auf die intuitive Bedienung legen, haben wir bereits die Filter- und Detailseite beispielhaft angelegt.

## Datenspeicherung
Die Daten sollen in einer MySQL Datenbank gespeichert werden. Eine grober Entwurf haben wir bereits im ER-Modell dargestellt, um einen Überblick über die benötigten Tabellen zu bekommen. 

![ER Modell](https://hackathon.lorenzhohmann.de/erd.png)
