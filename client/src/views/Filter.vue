<template>
	<div>
		<h1>Wähle Deine Aktivität</h1>
		<div class="filter-section box-shadow">
			<h2 @click="filterOpened = !filterOpened">Filter</h2>
			<div
				class="toggle-arrow"
				:class="{ opened: filterOpened }"
				@click="filterOpened = !filterOpened"
			></div>
			<div class="filter-entries" v-if="filterOpened">
				<div class="input-row">
					<label>Radius (in km)</label>
					<div class="double-row">
						<input
							placeholder="von"
							@change="changeFilter"
							v-model="minRadius"
							type="number"
							min="0"
							max="500"
						/>
						<input
							placeholder="bis"
							@change="changeFilter"
							v-model="maxRadius"
							type="number"
							min="0"
							max="500"
						/>
					</div>
				</div>
				<div class="input-row">
					<label>Altersgruppe</label>
					<div class="double-row">
						<input
							v-model="minAge"
							@change="changeFilter"
							placeholder="von"
							type="number"
							min="14"
							max="99"
						/>
						<input
							v-model="maxAge"
							@change="changeFilter"
							placeholder="bis"
							type="number"
							min="14"
							max="99"
						/>
					</div>
				</div>
				<div class="input-row">
					<label>Dauer (in Stunden)</label>
					<div class="double-row">
						<input
							v-model="minDuration"
							@change="changeFilter"
							placeholder="von"
							type="number"
							min="0"
							max="48"
						/>
						<input
							v-model="maxDuration"
							@change="changeFilter"
							placeholder="bis"
							type="number"
							min="0"
							max="48"
						/>
					</div>
				</div>
				<div class="input-row">
					<label for="activity">Aktivität</label>
					<select
						id="activity"
						v-model="activeActivity"
						@change="changeFilter"
					>
						<option
							v-for="activity in activities"
							:value="activity.id"
							:key="activity.id"
						>
							{{ activity.label }}
						</option>
					</select>
				</div>
			</div>
		</div>
		<div class="result-section">
			<h2>Verfügbare Quests</h2>
			<p v-if="filteredQuests.length == 0">
				Für diesen Filter sind keine Quests verfügbar!
			</p>
			<div class="quest" v-for="quest in filteredQuests" :key="quest.id">
				<h3>
					<router-link to="/detail/1">{{ quest.title }}</router-link>
				</h3>
				<p><b>Ort: </b>{{ quest.place }}</p>
				<p><b>Datum: </b>{{ quest.date }}</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			radiuses: [
				{ id: 0, label: "5" },
				{ id: 1, label: "10" },
				{ id: 2, label: "15" },
				{ id: 3, label: "30" },
				{ id: 4, label: "50" },
				{ id: 5, label: "100" }
			],
			ages: [
				{ id: 0, label: "14-18" },
				{ id: 1, label: "18-25" },
				{ id: 2, label: "26-35" },
				{ id: 3, label: "36-45" },
				{ id: 4, label: "46-60" },
				{ id: 5, label: "60+" }
			],
			activities: [
				{ id: -1, label: "bitte wählen" },
				{ id: 0, label: "Wandern" },
				{ id: 1, label: "Joggen" },
				{ id: 2, label: "Rad fahren" },
				{ id: 3, label: "Schwimmen" },
				{ id: 4, label: "Meditation" },
				{ id: 5, label: "Fotografie" },
				{ id: 6, label: "Parcour" },
				{ id: 7, label: "Kulinarisches" },
				{ id: 8, label: "Pilze sammeln" }
			],
			filteredQuests: [],
			availableQuests: [
				{
					id: 0,
					title: "Wanderung I",
					activity: 0,
					radius: 16,
					age: 60,
					place: "Anderer Ort",
					date: "02.11.2019",
					duration: 2.5
				},
				{
					id: 1,
					title: "Wanderung II",
					activity: 0,
					radius: 7,
					age: 17,
					place: "Anderer Ort",
					date: "03.11.2020",
					duration: 2.5
				},
				{
					id: 2,
					title: "Jogging III",
					activity: 1,
					radius: 101,
					age: 25,
					place: "Anderer Ort",
					date: "24.10.2019",
					duration: 3
				},
				{
					id: 3,
					title: "Jogging I",
					activity: 1,
					radius: 7,
					age: 17,
					place: "Anderer Ort",
					date: "22.10.2019",
					duration: 3
				},
				{
					id: 4,
					title: "Meditation I",
					activity: 4,
					radius: 23,
					age: 40,
					place: "Anderer Ort",
					date: "23.10.2019",
					duration: 1
				},
				{
					id: 5,
					title: "Vermisste Person",
					activity: 0,
					radius: 2,
					age: 16,
					place: "Hochschule Fulda, Halle 8",
					date: "27.10.2019",
					duration: 2
				}
			],
			minAge: 0,
			maxAge: 100,
			minRadius: 0,
			maxRadius: 100,
			minDuration: 0,
			maxDuration: 2,
			activeActivity: -1,
			filterOpened: false
		};
	},
	created() {
		this.changeFilter();
	},
	methods: {
		changeFilter() {
			this.filteredQuests = this.availableQuests.filter(quest => {
				if (
					quest.activity == this.activeActivity &&
					quest.age >= this.minAge &&
					quest.age <= this.maxAge &&
					quest.radius >= this.minRadius &&
					quest.radius <= this.maxRadius &&
					quest.duration >= this.minDuration &&
					quest.duration <= this.maxDuration
				) {
					return quest;
				}
				return false;
			});
		}
	}
};
</script>
<style lang="scss" scoped>
.filter-section {
	background-color: var(--light-grey);
	padding: 0.5rem;
	margin-bottom: 1rem;
	position: relative;

	h2 {
		margin: 0;
	}

	.input-row {
		width: 100%;
		margin: 0.5rem 0;

		label {
			width: 100%;
			margin-bottom: 0.2rem;
			display: block;
		}
	}
}
.quest {
	margin: 1rem 0;
	border-bottom: 1px solid var(--grey);
	padding: 1rem 0;
}
.toggle-arrow {
	background-image: url(../assets/img/arrow.svg);
	width: 14px;
	height: 14px;
	background-position: center;
	background-size: cover;
	position: absolute;
	top: 14px;
	right: 12px;
	transform: rotate(90deg);

	&.opened {
		transform: rotate(-90deg);
	}
}
</style>
