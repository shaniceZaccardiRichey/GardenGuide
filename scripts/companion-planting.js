var plantsList = document.getElementById('plantsList');
var plantsArray = [];

const loadPlants = async () => {
    try {
        const res = await fetch('https://github.com/shaniceZaccardiRichey/GardenGuide/blob/b840d1803fdd4d42d3a076e0b513d11e2e5f7c01/json/companion-plants.json');
        plantsList = await res.json();
        displayPlants(plantsList);
    } catch (err) {
        console.error(err);
    }
};

const displayPLants = (plants) => {
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