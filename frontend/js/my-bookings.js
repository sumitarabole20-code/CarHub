const bookingsContainer =
document.getElementById(
    "bookingsContainer"
);

const userId =
localStorage.getItem("userId");

async function loadBookings() {

    if (!userId) {

        alert(
            "Please login first."
        );

        window.location.href =
        "login.html";

        return;
    }

    const response =
    await fetch(
`http://localhost:5000/api/bookings/user/${userId}`
    );

    const bookings =
    await response.json();

    if(bookings.length === 0){

        bookingsContainer.innerHTML = `
            <h2>
            No bookings found
            </h2>
        `;

        return;
    }

    bookingsContainer.innerHTML =
    bookings.map(booking => `

        <div class="car-card">

            <img src="../images/${booking.carId.image}">

            <div class="car-info">

                <h2>
                    ${booking.carId.name}
                </h2>

                <p>
                    ${booking.carId.brand}
                </p>

                <p>
                    Status:
                    ${booking.status}
                </p>

               <p>
    Booking Date:
    ${new Date(
        booking.bookingDate
    ).toLocaleDateString()}
</p>

<a
    href="payment.html?bookingId=${booking._id}"
    class="details-btn"
>
    Pay Now
</a>

            </div>    
        </div>

    `).join("");
}

loadBookings();
