const usersTable =
document.getElementById(
    "usersTable"
);

async function loadUsers() {

    const response =
    await fetch(
        "https://carhub-backend-kkwd.onrender.com/api/admin/users"
    );

    const users =
    await response.json();

    usersTable.innerHTML =
    users.map(user => `

        <tr>

            <td>${user.name}</td>

            <td>${user.email}</td>

            <td>

                <button
                onclick="deleteUser('${user._id}')">

                    Delete

                </button>

            </td>

        </tr>

    `).join("");
}

async function deleteUser(id){

    const confirmDelete =
    confirm(
        "Delete this user?"
    );

    if(!confirmDelete){
        return;
    }

    await fetch(
        `https://carhub-backend-kkwd.onrender.com/api/admin/users/${id}`,
        {
            method:"DELETE"
        }
    );

    loadUsers();
}

loadUsers();