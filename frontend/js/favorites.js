const favoritesContainer =
    document.getElementById("favoritesContainer");

const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

function loadFavorites() {

    if (favorites.length === 0) {

        favoritesContainer.innerHTML = `
            <h2>No favorite cars added yet.</h2>
        `;

        return;
    }

    favoritesContainer.innerHTML =
        favorites.map(car => `
        <div class="car-card">

            <img src="../images/${car.image}" alt="${car.name}">

            <div class="car-info">

                <h2>${car.name}</h2>

                <p>${car.brand}</p>

                <p>${car.type}</p>

                <div class="price">
                    ₹${car.price.toLocaleString()}
                </div>

                <button
                    onclick="removeFavorite('${car._id}')"
                    class="fav-btn"
                >
                    Remove ❤️
                </button>

            </div>

        </div>
    `).join("");
}

function removeFavorite(id){

    const updatedFavorites =
        favorites.filter(car => car._id !== id);

    localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
    );

    location.reload();
}

loadFavorites();