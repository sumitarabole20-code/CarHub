const tableBody =
document.getElementById(
    "bookingsTableBody"
);

async function loadBookings(){

    const response =
    await fetch(
        "http://localhost:5000/api/admin/bookings"
    );

    const bookings =
    await response.json();

    tableBody.innerHTML =
    bookings.map(booking => `

        <tr>

            <td>
                ${booking.userId?.name || "-"}
            </td>

            <td>
                ${booking.carId?.name || "-"}
            </td>

            <td>
                ${booking.userId?.email || "-"}
            </td>

           <td>

    <span class="
        status-badge
        ${booking.status.toLowerCase()}
    ">
        ${booking.status}
    </span>

    ${
        booking.status === "Pending"
        ?
        `
        <br><br>

        <button
            class="approve-btn"
            onclick="
            approveBooking(
                '${booking._id}'
            )
            ">
            Approve
        </button>
        `
        :
        ""
    }

</td>
            <td>
                ${new Date(
                    booking.createdAt
                ).toLocaleDateString()}
            </td>

        </tr>

    `).join("");
}

loadBookings();
async function approveBooking(id){

    try{

        const response =
        await fetch(
            `http://localhost:5000/api/admin/bookings/${id}/approve`,
            {
                method:"PUT"
            }
        );

        const data =
        await response.json();

        alert(data.message);

        loadBookings();

    }
    catch(error){

        console.log(error);

    }
}