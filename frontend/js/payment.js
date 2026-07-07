async function payNow(){

   const params =
new URLSearchParams(
    window.location.search
);

const bookingId =
params.get(
    "bookingId"
);
    const userId =
    localStorage.getItem(
        "userId"
    );

    const paymentData = {

        userId,

        bookingId,

        amount:50000,

        paymentMethod:
        document.getElementById(
            "paymentMethod"
        ).value
    };

    const response =
    await fetch(
        "http://localhost:5000/api/payments",
        {
            method:"POST",
            headers:{
                "Content-Type":
                "application/json"
            },
            body:JSON.stringify(
                paymentData
            )
        }
    );

    const data =
    await response.json();

    alert(
        data.message
    );

    window.location.href =
    "my-bookings.html";
}