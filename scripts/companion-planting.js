var plantsList = document.getElementById('plantsList');
var plantsArray = [];

const loadPlants = async () => {
    try {
        const res = await fetch('https://shanicezaccardirichey.github.io/GardenGuide/json/companion-plants.json');
        plantsList = await res.json();
        displayPlants(plantsList);
    } catch (err) {
        console.error(err);
    }
};

const displayPlants = (plants) => {
    const htmlString = plants
        .map((plant) => {
            return `
            <li class="plant">
                <h2>${plant.name}</h2>
            </li>
		`;
        })
        .join('');
    plantsList.innerHTML = htmlString;
};

loadPlants();