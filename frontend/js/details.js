const carDetails = document.getElementById("carDetails");

const params = new URLSearchParams(window.location.search);
const carId = params.get("id");

async function loadCarDetails() {

    try {

        const response = await fetch(
            `https://carhub-backend-kkwd.onrender.com/api/cars/${carId}`
        );

        const car = await response.json();

        carDetails.innerHTML = `
            <div class="details-card">

                <img src="../images/${car.image}" class="details-image">

                <div class="details-info">

                    <h1>${car.name}</h1>

                    <h2>${car.brand}</h2>

                    <p>${car.description}</p>

                    <h3>Specifications</h3>

                    <ul>
                        <li><strong>Type:</strong> ${car.type}</li>
                        <li><strong>Fuel Type:</strong> ${car.fuelType}</li>
                        <li><strong>Transmission:</strong> ${car.transmission}</li>
                        <li><strong>Price:</strong> ₹${car.price.toLocaleString()}</li>
                    </ul>
                 <button
                 
               <button
class="details-btn"
onclick="bookCar('${car._id}')">
Book Now
</button>

<h3>Write Review</h3>

<select id="rating">
    <option value="5">⭐⭐⭐⭐⭐</option>
    <option value="4">⭐⭐⭐⭐</option>
    <option value="3">⭐⭐⭐</option>
    <option value="2">⭐⭐</option>
    <option value="1">⭐</option>
</select>

<textarea
id="comment"
placeholder="Write review..."
></textarea>

<button
onclick="submitReview()"
class="details-btn">
Submit Review
</button>

<div id="reviewsContainer"></div>

</div>
</div>



            </div>
        `;

    } catch(error){
        console.log(error);
    }
}

loadCarDetails();
function bookCar(carId) {

    const token = localStorage.getItem("token");

    if (!token) {

        alert("Please login first to book a car.");

        window.location.href = "login.html";

        return;
    }

    window.location.href =
        `booking.html?id=${carId}`;
}
