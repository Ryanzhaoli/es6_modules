import  WishList  from "./wishlist.js";

console.log("index.js start");

// TODO
// Select elements
const form = document.getElementById("submitForm");
const makeInput = document.getElementById("makeInput");
const modelInput = document.getElementById("modelInput");
const yearInput = document.getElementById("yearInput");

const makeP = document.getElementById("car-make");
const modelP = document.getElementById("car-model");
const yearP = document.getElementById("car-year");

const removeBtn = document.getElementById("removeBtn");
const submitBtn = document.getElementById("submitBtn");

removeBtn.addEventListener("click", removeCar, false);
submitBtn.addEventListener("click", addCar, false);

const listEle = document.getElementsByTagName("ul")[0];


// create new instance for WishList
let wishList = new WishList();

function showCarDetails (car) {
    makeP.textContent = car.make;
    modelP.textContent = car.model;
    yearP.textContent = car.year;

    // enable remove button
    removeBtn.disabled = false;
    removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList () {
    // clear contents of 'ul'
    listEle.innerHTML = "";

    // iterate over each car in wishlist.list
    wishList.list.forEach((car) => {
        // create a new 'li' that displays the car's make and model
        const li = document.createElement("li");
        li.textContent = `${car.make} ${car.model}`;

        // add a click event listener to the 'li'
        li.addEventListener("click", () => showCarDetails(car));

        // append each 'li' to the 'ul'
        listEle.appendChild(li);
    });

}

function addCar (event) {
    event.preventDefault();
    if ((makeInput.value != "") && (modelInput.value != "") && (yearInput.value != "")) {
        console.log("Passing the " + makeInput.value);
        wishList.add(makeInput.value, modelInput.value, yearInput.value);
        updateDOMList();

        // QOL, clear the input fields
        makeInput.value = "";
        modelInput.value = "";
        yearInput.value = "";

    }

    else {
        console.log("Input cannot be blank");
    }
}


function removeCar () {
    let carId = Number(removeBtn.getAttribute("data-carId"));
    wishList.remove(carId);
    updateDOMList();
    makeP.textContent = "";
    modelP.textContent = "";
    yearP.textContent = "";
    removeBtn.disabled = true;
}