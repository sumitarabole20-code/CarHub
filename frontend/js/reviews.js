const reviewParams = new URLSearchParams(window.location.search);
const reviewCarId = reviewParams.get("id");

async function submitReview(){
  
     
      console.log("Submit button clicked");
     

    const token =
    localStorage.getItem("token");

    if(!token){

        alert(
            "Please login first."
        );

        window.location.href =
        "login.html";

        return;
    }

    const reviewData = {

        userId:
        localStorage.getItem(
            "userId"
        ),

        carId:
        reviewCarId,

        rating:
        document.getElementById(
            "rating"
        ).value,

        comment:
        document.getElementById(
            "comment"
        ).value
    };

    const response =
    await fetch(
        "http://localhost:5000/api/reviews",
        {
            method:"POST",
            headers:{
                "Content-Type":
                "application/json"
            },
            body:JSON.stringify(
                reviewData
            )
        }
    );

    const data =
    await response.json();

    alert(data.message);

    location.reload();
}
async function loadReviews(){

    const response =
    await fetch(
`http://localhost:5000/api/reviews/${reviewCarId}`
    );

    const reviews =
    await response.json();

    const container =
    document.getElementById(
        "reviewsContainer"
    );

    container.innerHTML =
    reviews.map(review => `

        <div class="review-card">

            <h4>
                ${review.userId.name}
            </h4>

            <p>
                Rating:
                ${review.rating} ⭐
            </p>

            <p>
                ${review.comment}
            </p>

        </div>

    `).join("");
}

loadReviews();
window.submitReview = submitReview;
