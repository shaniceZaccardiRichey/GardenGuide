var plantsList = document.getElementById('plantsList');
var plantsArray = [];

const loadPlants = async () => {
    try {
        const res = await fetch('https://json.extendsclass.com/bin/2df840d9b5ab');
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