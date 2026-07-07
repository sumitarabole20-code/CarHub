async function loadDashboard() {

    const response =
    await fetch(
        "http://localhost:5000/api/admin/dashboard"
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