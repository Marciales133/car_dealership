import {isPage, searchName, inputShow, keydown} from "./index.js";

//========== VARIABLES,ARRAYS, AND OBJECT ==========//
export let cars = JSON.parse(sessionStorage.getItem('cars'));
if(!cars) cars = {
  // BMW M3 2021
  "BMW M3 2021 Blue":              { type: "Sedan", brand: "BMW", model: "M3", year: 2021, color: "Blue", quantity: 3, price: 3000, inStock: 3, sold: 0, reserved: 0 },
  "BMW M3 2021 Red":               { type: "Sedan", brand: "BMW", model: "M3", year: 2021, color: "Red", quantity: 2, price: 3100, inStock: 2, sold: 0, reserved: 0 },
  // Nissan 370Z 2020
  "Nissan 370Z 2020 White":        { type: "Coupe", brand: "Nissan", model: "370Z", year: 2020, color: "White", quantity: 4, price: 4000, inStock: 4, sold: 0, reserved: 0 },
  "Nissan 370Z 2020 Blue":         { type: "Coupe", brand: "Nissan", model: "370Z", year: 2020, color: "Blue", quantity: 2, price: 4100, inStock: 2, sold: 0, reserved: 0 },
  // Tesla Model-S 2023
  "Tesla Model-S 2023 Black":      { type: "Electric", brand: "Tesla", model: "Model-S", year: 2023, color: "Black", quantity: 5, price: 5000, inStock: 5, sold: 0, reserved: 0 },
  "Tesla Model-S 2023 White":      { type: "Electric", brand: "Tesla", model: "Model-S", year: 2023, color: "White", quantity: 3, price: 5100, inStock: 3, sold: 0, reserved: 0 },
  // Toyota Camry 2022
  "Toyota Camry 2022 Silver":      { type: "Sedan", brand: "Toyota", model: "Camry", year: 2022, color: "Silver", quantity: 2, price: 3200, inStock: 2, sold: 2, reserved: 0 },
  "Toyota Camry 2022 Gray":        { type: "Sedan", brand: "Toyota", model: "Camry", year: 2022, color: "Gray", quantity: 2, price: 3300, inStock: 2, sold: 0, reserved: 0 },
  // Ford Mustang 2021
  "Ford Mustang 2021 Yellow":      { type: "Coupe", brand: "Ford", model: "Mustang", year: 2021, color: "Yellow", quantity: 3, price: 4200, inStock: 3, sold: 0, reserved: 0 },
  "Ford Mustang 2021 Black":       { type: "Coupe", brand: "Ford", model: "Mustang", year: 2021, color: "Black", quantity: 1, price: 4300, inStock: 1, sold: 1, reserved: 0 },
  // Honda Civic 2022
  "Honda Civic 2022 White":        { type: "Sedan", brand: "Honda", model: "Civic", year: 2022, color: "White", quantity: 3, price: 2800, inStock: 3, sold: 0, reserved: 0 },
  "Honda Civic 2022 Red":          { type: "Sedan", brand: "Honda", model: "Civic", year: 2022, color: "Red", quantity: 2, price: 2900, inStock: 2, sold: 0, reserved: 0 },
  // Audi A4 2020
  "Audi A4 2020 Blue":             { type: "Sedan", brand: "Audi", model: "A4", year: 2020, color: "Blue", quantity: 2, price: 3500, inStock: 2, sold: 1, reserved: 0 },
  "Audi A4 2020 Gray":             { type: "Sedan", brand: "Audi", model: "A4", year: 2020, color: "Gray", quantity: 0, price: 3600, inStock: 0, sold: 2, reserved: 0 },
  // Hyundai Ioniq 5 2023
  "Hyundai Ioniq 5 2023 Silver":   { type: "Electric", brand: "Hyundai", model: "Ioniq 5", year: 2023, color: "Silver", quantity: 4, price: 4700, inStock: 4, sold: 0, reserved: 0 },
  "Hyundai Ioniq 5 2023 Blue":     { type: "Electric", brand: "Hyundai", model: "Ioniq 5", year: 2023, color: "Blue", quantity: 2, price: 4600, inStock: 2, sold: 0, reserved: 0 },
  // Chevrolet Corvette 2021
  "Chevrolet Corvette 2021 Red":   { type: "Coupe", brand: "Chevrolet", model: "Corvette", year: 2021, color: "Red", quantity: 2, price: 5500, inStock: 2, sold: 0, reserved: 0 },
  "Chevrolet Corvette 2021 Black": { type: "Coupe", brand: "Chevrolet", model: "Corvette", year: 2021, color: "Black", quantity: 3, price: 5600, inStock: 3, sold: 0, reserved: 0 }
};

const inventoryCardContainer = document.getElementById("inventoryCardContainer");
const inputInventory = document.getElementById('searchInputInventory');
const resultsBoxInventory = document.getElementById('resultsInventory');
const submitNewCar = document.getElementById("submitNewCar");
let latestMatchedCars = {};

const type = document.getElementById("type");
const brand = document.getElementById("brand");
const model = document.getElementById("model");
const year = document.getElementById("year");
const color = document.getElementById("color");
const quantity = document.getElementById("quantity");
const price = document.getElementById("price");

document.addEventListener("DOMContentLoaded", function () {
    if(isPage("inventoryPage")){
        //INITIAL RENDER:
        oneGoRenderInventory(cars, inventoryCardContainer);
        const totals = calculateTotals(cars);
        document.getElementById("totalCars").textContent = totals.total;
        document.getElementById("inStockTotal").textContent = totals.inStock;
        document.getElementById("soldTotal").textContent = totals.sold;
        document.getElementById("reservedTotal").textContent = totals.reserved;

        //LIVE SUGGESTION:
        inputInventory.addEventListener('input', () => {
          inputShow(inputInventory, resultsBoxInventory, latestMatchedCars, searchName, cars, oneGoRenderInventory, inventoryCardContainer)
        });
        //ENTER KEY SEARCH:
        inputInventory.addEventListener("keydown", function(event) {
          keydown(event, inputInventory, oneGoRenderInventory, cars, inventoryCardContainer, latestMatchedCars, searchName, resultsBoxInventory)
        });
        //EVENT LISTENERS FOR FILTER BUTTONS:
        document.querySelector('.filter').addEventListener('click', (e) => {
            if (!e.target.classList.contains('main-btn')) return;

            const classList = e.target.classList;

            let statusKey = '';
            if (classList.contains('instock')) statusKey = 'inStock';
            else if (classList.contains('sold')) statusKey = 'sold';
            else if (classList.contains('reserved')) statusKey = 'reserved';

            const sortedCars = sortCarsByStatus(statusKey, cars);
            oneGoRenderInventory(sortedCars, inventoryCardContainer);
        });
        //ADDING NEW CARS TO THE CARS LIST:
        submitNewCar.addEventListener("click", function () {
            addCar(type.value, brand.value, model.value, year.value, color.value, Number(quantity.value), price.value);
            oneGoRenderInventory(cars, inventoryCardContainer);
            console.log(Object.keys(cars));
            const updatedTotals = calculateTotals(cars);
            document.getElementById("totalCars").textContent = updatedTotals.total;
            document.getElementById("inStockTotal").textContent = updatedTotals.inStock;
            document.getElementById("soldTotal").textContent = updatedTotals.sold;
            document.getElementById("reservedTotal").textContent = updatedTotals.reserved;
            restAfterAddCar()
        });
    }
});
export function findVehicle(query){
  const lowerQuery = query.toLocaleLowerCase();
  const matched = {};

  for(const [key, car] of Object.entries(cars)){
    if(car.inStock > 0 && key.toLocaleLowerCase().includes(lowerQuery)) matched[key] = car;
  };
  return matched;
};
export function bindCars(data){
  const stockForm = document.getElementById('stockForm');
  const cards = document.querySelectorAll('.card');
  const Back = document.querySelector('.backInfo');
  const add = document.getElementById('addToStock');
  const numOfCarsAdded = document.getElementById('carQuantity');

  let holdtrack = null;

  inventoryCardContainer.addEventListener('click', function(e){
    const card = e.target.closest('.card');
    if(!card) return;
    stockForm.classList.add('show-form');
    holdtrack = card.dataset.track;
  })

  // Remove old listeners by cloning the button
  const newAdd = add.cloneNode(true);
  add.parentNode.replaceChild(newAdd, add);

  // Single clean listener
  newAdd.addEventListener('click', () => {
    if (!holdtrack) return;

    const amount = Number(numOfCarsAdded.value);
    if (!isNaN(amount)) {
      cars[holdtrack].inStock += amount;
      (cars[holdtrack].quantity) += amount;
      const updatedTotals = calculateTotals(cars);
      document.getElementById("totalCars").textContent = updatedTotals.total;
      document.getElementById("inStockTotal").textContent = updatedTotals.inStock;
      document.getElementById("soldTotal").textContent = updatedTotals.sold;
      document.getElementById("reservedTotal").textContent = updatedTotals.reserved;
      oneGoRenderInventory(data, inventoryCardContainer);
    }
    stockForm.classList.remove('show-form');
    numOfCarsAdded.value = '';
    holdtrack = null;
  });

  Back.addEventListener('click', ()=> {
    stockForm.classList.remove('show-form');
    numOfCarsAdded.value = '';
    holdtrack = null;
  });
}
function addCar(type, brand, model, year, color, quantity, price) {
    cars[`${brand} ${color}`] = {type,brand,model,year,color,quantity,price: Number(price),inStock: Number(quantity),sold: 0,reserved: 0};
}
function calculateTotals(carsObject) {
    return Object.values(carsObject).reduce((totals, car) => {
            const inStock = Number(car.inStock);
            const sold = Number(car.sold);
            const reserved = Number(car.reserved);

            totals.total += inStock + sold + reserved;
            totals.inStock += inStock;
            totals.sold += sold;
            totals.reserved += reserved;

            return totals;
        },
        { total: 0, inStock: 0, sold: 0, reserved: 0 } // initial value
    );
}
function sortCarsByStatus(statusKey, carsObj) {
    return Object.fromEntries(Object.entries(carsObj).sort(([, a], [, b]) => b[statusKey] - a[statusKey]) /* Descending sort*/);
}
function oneGoRenderInventory(data, container){
  const fragment = document.createDocumentFragment();
  Object.entries(data).forEach(([key,value])=>{
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.track = key;

  card.innerHTML = `
    <div class="outer-span">
      <div class="inner-span">
        <p><span><i class="fa fa-car"></i> Type:</span> ${value.type}</p>
        <p><span><i class="fa fa-tag"></i> Brand:</span> ${value.brand}</p>
      </div>
      <div class="inner-span">
        <p><span><i class="fa fa-id-card"></i> Model:</span> ${value.model}</p>
        <p><span><i class="fa fa-calendar-alt"></i> Year:</span> ${value.year}</p>
      </div>
    </div>
    <div class="outer-span">
      <div class="inner-span">
        <p><span><i class="fa fa-palette"></i> Color:</span> ${value.color}</p>
        <p><span><i class="fa fa-layer-group"></i> Quantity:</span> ${value.quantity}</p>
      </div>
      <div class="inner-span">
        <p><span><i class="fa fa-dollar-sign"></i> Price:</span> $${value.price}</p>
        <p>
          <span><i class="fa fa-check-circle"></i> Status:</span>
          <span class="in-stock-no"><i class="fa fa-check"></i> : ${value.inStock}</span> 
          <span class="sold-no"><i class="fa fa-times-circle"></i> : ${value.sold}</span>
          <span class="reserved-no"><i class="fa fa-clock"></i> : ${value.reserved}</span>
        </p>
      </div>
    </div>
  `
    fragment.appendChild(card)
  });
  container.innerHTML = '';
  container.appendChild(fragment);
  bindCars(data);
  console.log('Rendered Inventory');
}
function restAfterAddCar(){
  const form = document.getElementById("form");
  const main = document.getElementById("main");
  type.value = '';
  brand.value = '';
  model.value = '';
  year.value = '';
  color.value = '';
  quantity.value = '';
  price.value = '';
  form.classList.remove("show-form");
  main.classList.remove("dis-scroll");
}