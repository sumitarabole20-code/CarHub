async function loadDashboard() {

    const response =
    await fetch(
        "https://carhub-backend-kkwd.onrender.com/api/admin/dashboard"
    );

    const data =
    await response.json();

    document.getElementById(
        "users"
    ).innerText = data.users;

    document.getElementById(
        "cars"
    ).innerText = data.cars;

    document.getElementById(
        "bookings"
    ).innerText = data.bookings;
}

loadDashboard();