const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        const response = await fetch(
            "http://localhost:5000/api/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                    "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        if(response.ok){

            localStorage.setItem("token", data.token);
localStorage.setItem("userId", data.userId);
localStorage.setItem("userName", data.userName);
localStorage.setItem("email", data.email);
            alert("Login Successful");

            window.location.href =
                "home.html";
        }
        else{
            alert(data.message);
        }

    });

}