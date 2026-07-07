
let editingId = null;
let cars = [];

const form = document.getElementById("carForm");
const carsTable =
document.getElementById("carsTable");
const nameInput = document.getElementById("name");
const brandInput = document.getElementById("brand");
const priceInput = document.getElementById("price");
const typeInput = document.getElementById("type");
const fuelTypeInput = document.getElementById("fuelType");
const transmissionInput = document.getElementById("transmission");
const imageFileInput = document.getElementById("imageFile");
const descriptionInput = document.getElementById("description");

function openForm() {
    editingId = null;
    form.reset();
    nameInput.focus();
}

function getImageSrc(image) {
    if (!image) return "../images/bmw-m4.jpg";

    if (image.startsWith("data:image") || image.startsWith("http")) {
        return image;
    }

    return `../images/${image}`;
}

function readSelectedImage() {
    const file = imageFileInput.files[0];

    if (!file) return Promise.resolve("");

    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// async function loadCars() {

//     const response =
//     await fetch(
//         "http://localhost:5000/api/cars"
//     );

//     const cars =
//     await response.json();

//     carsTable.innerHTML =
//     cars.map(car => `

//         <tr>

//             <td>
//                 <img
//                     src="../images/${car.image}"
//                     width="120"
//                 >
//             </td>

//             <td>${car.name}</td>

//             <td>${car.brand}</td>

//             <td>
//                 ₹${car.price.toLocaleString()}
//             </td>

//             <td>

//                 <button
//                     class="delete-btn"
//                     onclick="deleteCar('${car._id}')"
//                 >
//                     Delete
//                 </button>

//             </td>

//         </tr>

//     `).join("");
// }
async function loadCars() {

    const response = await fetch(
        "https://carhub-backend-kkwd.onrender.com/api/admin/cars"
    );

    const cars = await response.json();

    const carsTable = document.getElementById("carsTable");

    carsTable.innerHTML = "";

    cars.forEach(car => {

        carsTable.innerHTML += `

            <tr>

                <td>
                    <img
                        src="../images/${car.image}"
                        width="120">
                </td>

                <td>${car.name}</td>

                <td>${car.brand}</td>

                <td>₹${Number(car.price).toLocaleString()}</td>

                <td>${car.type}</td>

                <td>

                    <button
                        class="edit-btn"
                        onclick="editCar('${car._id}')">

                        Edit

                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteCar('${car._id}')">

                        Delete

                    </button>

                </td>

            </tr>

        `;

    });

}

async function deleteCar(id) {

    const confirmDelete =
    confirm(
        "Delete this car?"
    );

    if(!confirmDelete) return;

    const response =
    await fetch(
        `https://carhub-backend-kkwd.onrender.com/api/cars/${id}`,
        {
            method:"DELETE"
        }
    );

    const data =
    await response.json();

    alert(data.message);

    loadCars();
}
async function loadCars() {

const response = await fetch(

"https://carhub-backend-kkwd.onrender.com/api/admin/cars"

);

cars = await response.json();

document.getElementById(

"carsTable"

).innerHTML = cars.map(car => `

<tr>

<td>

<img
src="${getImageSrc(car.image)}"
width="80">

</td>

<td>
${car.name}
<br>Type: ${car.type || ""}
<br>Fuel: ${car.fuelType || ""}
<br>Transmission: ${car.transmission || ""}
<br>Description: ${car.description || ""}
</td>

<td>${car.brand}</td>

<td>₹${car.price}</td>

<td>

<button

onclick="editCar('${car._id}')">

Edit

</button>

<button

onclick="deleteCar('${car._id}')">

Delete

</button>

</td>

</tr>

`).join("");

}
function editCar(id) {

const car = cars.find(item => item._id === id);

if(!car){

alert("Car not found");

return;

}

editingId = id;

nameInput.value = car.name || "";

brandInput.value = car.brand || "";

priceInput.value = car.price || "";

typeInput.value = car.type || "";

fuelTypeInput.value = car.fuelType || "";

transmissionInput.value = car.transmission || "";

descriptionInput.value = car.description || "";

nameInput.focus();

}
form.addEventListener(

"submit",

async(e)=>{

e.preventDefault();

const currentCar = cars.find(car => car._id === editingId);
const selectedImage = await readSelectedImage();

const car={

name:nameInput.value,

brand:brandInput.value,

price:priceInput.value,

type:typeInput.value,

fuelType:fuelTypeInput.value,

transmission:transmissionInput.value,

image:selectedImage || currentCar?.image || "bmw-m4.jpg",

description:descriptionInput.value

};

if(editingId){

await fetch(

`https://carhub-backend-kkwd.onrender.com/api/admin/cars/${editingId}`,

{

method:"PUT",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(car)

}

);

editingId=null;

}

else{

await fetch(

"https://carhub-backend-kkwd.onrender.com/api/admin/cars",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(car)

}

);

}

form.reset();

loadCars();

});
async function deleteCar(id){

if(confirm(

"Delete this car?"

)){

await fetch(

`https://carhub-backend-kkwd.onrender.com/api/admin/cars/${id}`,

{

method:"DELETE"

}

);

loadCars();

}

}


loadCars();
