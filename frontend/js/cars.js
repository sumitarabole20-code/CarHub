const carsContainer = document.getElementById("carsContainer");
const searchInput = document.getElementById("searchInput");
const filterType = document.getElementById("filterType");

let allCars = [];

async function loadCars() {

    const response = await fetch(
        "https://carhub-backend-kkwd.onrender.com/api/cars"
    );

    allCars = await response.json();

    displayCars(allCars);
}

function displayCars(cars){

    carsContainer.innerHTML = cars.map(car => `
        <div class="car-card">

            <img src="../images/${car.image}" alt="${car.name}">

            <div class="car-info">

                <h2>${car.name}</h2>

                <p>${car.brand}</p>

                <p>${car.type}</p>

                <p>${car.fuelType}</p>

                <div class="price">
    ₹${car.price.toLocaleString()}
</div>
<button
    class="fav-btn"
    onclick='addToFavorites(${JSON.stringify(car)})'
>
    ❤️ Add to Favorites
</button>
<a href="details.html?id=${car._id}" class="details-btn">
    View More
</a>

            </div>

        </div>
    `).join("");
}

searchInput.addEventListener("input", filterCars);
filterType.addEventListener("change", filterCars);

function filterCars(){

    const searchText =
        searchInput.value.toLowerCase();

    const type =
        filterType.value;

    const filteredCars = allCars.filter(car => {

        const matchesSearch =
            car.name.toLowerCase().includes(searchText);

        const matchesType =
            type === "All" ||
            car.type === type;

        return matchesSearch && matchesType;
    });

    displayCars(filteredCars);
}

loadCars();
function addToFavorites(car){

    let favorites =
        JSON.parse(
            localStorage.getItem("favorites")
        ) || [];

    const exists =
        favorites.find(
            item => item._id === car._id
        );

    if(exists){
        alert("Car already added to favorites.");
        return;
    }

    favorites.push(car);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    alert("Added to favorites ❤️");
}