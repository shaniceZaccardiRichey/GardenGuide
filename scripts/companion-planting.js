var plantsList = document.getElementById('plantsList');
const searchBar = document.getElementById('searchBar');
var plantsArray = [];

searchBar.addEventListener('keyUp', (e) => {
	const searchString = e.target.value.toLocaleLowerCase();
	
	const filteredPlants = plantsArray.filter(plant => {
		return(
			plant.name.toLowerCase().includes(searchString)
		);
	});
	displayCharacters(filteredPlants);
});

const loadPlants = async () => {
    try {
        const res = await fetch('https://shanicezaccardirichey.github.io/GardenGuide/json/companion-plants.json');
        plantsArray = await res.json();
        displayPlants(plantsArray);
    } catch (err) {
        console.error(err);
    }
};

const displayPlants = (plants) => {
    const htmlString = plants
        .map((plant) => {
            const companions = plant.companions.map(companion => `<li>${companion}`);
            const notes = plant.notes.map(note => `<li>${note}`);

            return `
            <li class="plant">
                <h2>${plant.name}</h2>
                <h3>Companion Plants</h3>
                <ul>${companions.join('')}</ul>
                <h3>Notes</h3>
                <ul>${notes.join('')}</ul>
            </li>
        `;
        })
        .join('');
    plantsList.innerHTML = htmlString;
};
loadPlants();