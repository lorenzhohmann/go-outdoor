<template>
	<div>
		<h1>Vermisste Person</h1>
		<p class="small">
			Aktuelle Teilnehmer: 3
		</p>
		<div class="info-section">
			<div class="row">
				<div>
					<div class="detail-img box-shadow"></div>
				</div>
				<div>
					<h2>Beschreibung</h2>
					<p>
						Eine Person ist im Wald unter ungeklärten Umständen
						verschwunden. Uns liegen lediglich die letzten drei
						übermittelten GPS-Koordinaten vor. Weitere Informationen
						erhälst Du am letzten Standort.
					</p>
					<p>
						Deine Aufgabe ist nun, den Verbleib der Person zu
						ermitteln. Viel Erfolg..!
					</p>
				</div>
			</div>
		</div>
		<div class="info-detail-section">
			<h2>Weitere Informationen</h2>
			<ul>
				<li><b>Aktivität: </b>Wandern</li>
				<li><b>Ort: </b>Hochschule Fulda, Halle 8</li>
				<li><b>Datum: </b>27.10.2019 13:30 Uhr</li>
				<li><b>Dauer: </b>ca. 2 Stunden</li>
				<li><b>Maximale Teilnehmeranzahl: </b>8</li>
			</ul>
		</div>
		<div class="location-section">
			<h2>Routen-Vorschau</h2>
			<img class="map" src="../assets/img/map.png" />
		</div>
		<div class="target-section">
			<h2>Ziel</h2>
			<p>Erreiche das Ziel vor dem anderen Team.</p>
		</div>
		<div class="action-section">
			<a href="/filter">&larr; zurück</a>
			<a href="" class="btn btn-primary">Ich möchte teilnehmen</a>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.detail-img {
	background-image: url(../assets/img/demstiefel.png);
	background-size: cover;
	background-position: center;
	width: 100%;
	background-repeat: no-repeat;
	height: 45vh;
}
.info-detail-section {
	margin: 2rem 0;
}
.action-section {
	margin-top: 3rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.map {
	width: 100%;
	margin-bottom: 2rem;
}
</style>
