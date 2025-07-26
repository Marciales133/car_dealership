import { cars ,findVehicle} from './inventory.js';
import {findSalesman, employeeList} from './employee.js';
import {isPage, searchName, inputShow, keydown, formatDateToText} from "./index.js";


const clientForm = document.getElementById('boughtForm');
//============== MAIN SEARCH ===============//
const inputClients = document.getElementById('searchInputClients');
const resultsBoxClients = document.getElementById('resultsClients');
//=============== SEARCH SALESMAN ==============//
const searchSalesmanAddClient = document.querySelector('.searchSalesman');
const resultsFormSalesmanAddClient = document.querySelector('.resultsFormSalesman');
//================= SEARCH VIHECLE ==================//
const searchInputVehecleAddClient = document.querySelector('.searchInputVehecle');
const resultsFormVehecleAddClient = document.querySelector('.resultsFormVehecle');
//=============== EMPTY OBJECTS ===============//
let foundSalesman = {};
let foundVehicle = {};
let latestMatched = {};
//=============== ADD NEW CLIENT ===============//
const submit = document.getElementById('submitNewClient');
const total = document.querySelectorAll('.showTotal');

//=============== CLIENTS AND SALES RECORDS ===============//
export const container = document.querySelector('.cards-container');
export let salesList = JSON.parse(sessionStorage.getItem('salesList'));
if(!salesList) salesList = {
  "1": {date: normalizedDate("07-25-2025"),client: "Harold Gutierrez",profit: 3100,salesMan: "Marco Reyes",Vehecle: "Toyota Camry 2022 Silver",status: "Completed"},
  "2": {date: normalizedDate("07-25-2025"),client: "Harold Gutierrez",profit: 3100,salesMan: "Marco Reyes",Vehecle: "Toyota Camry 2022 Silver",status: "Completed"},
  "3": {date: normalizedDate("07-23-2025"),client: "Ana Velasco",profit: 3600,salesMan: "Marco Reyes",Vehecle: "Audi A4 2020 Gray",status: "Completed"},
  "4": {date: normalizedDate("07-23-2025"),client: "Ana Velasco",profit: 3600,salesMan: "Marco Reyes",Vehecle: "Audi A4 2020 Gray",status: "Completed"},
  "5": {date: normalizedDate("07-23-2025"),client: "Ana Velasco",profit: 3500,salesMan: "Marco Reyes",Vehecle: "Audi A4 2020 Blue",status: "Completed"},
  "6": {date: normalizedDate("07-22-2025"),client: "Carlo Rivera",profit: 4300,salesMan: "Marco Reyes",Vehecle: "Ford Mustang 2021 Black",status: "Completed"}
};
export let clientList = JSON.parse(sessionStorage.getItem('clientList'));
if(!clientList) clientList = {
  "Carlo Rivera": {client: "Carlo Rivera",status: "Active",numberOfPurchases: 1,clientType: "New",phone: "#63-905-789-4433",email: "carlo.rivera@example.com",date: normalizedDate("07-19-2025"),compareDate: 0,address: "San Jose St., Tagum City"},
  "Ana Velasco": {client: "Ana Velasco",status: "Active",numberOfPurchases: 3,clientType: "Regular",phone: "#63-926-334-7788",email: "ana.velasco@example.com",date: normalizedDate("07-20-2025"),compareDate: 0,address: "Blk 9 Lot 3, Palm Residences, Cebu City"},
  "Harold Gutierrez": {client: "Harold Gutierrez",status: "Active",numberOfPurchases: 2,clientType: "Regular",phone: "#63-917-222-1144",email: "harold.g@example.com",date: normalizedDate("07-24-2025"),compareDate: 0,address: "Unit 302, Eastwood Towers, Quezon City"},
};
export let transactionNumber = JSON.parse(sessionStorage.getItem('transactionNumber'));
if(!transactionNumber) transactionNumber = 8;
export let totalProfit = JSON.parse(sessionStorage.getItem('totalProfit'));
if(!totalProfit) totalProfit = 0;

const form = document.getElementById("form");

let profit = 0;

const clientName = document.getElementById('clientName');
const progressStatus = document.getElementById('clientProcessStatus');
const numberOfPurchases =document.getElementById('numberOfPurchases');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const address = document.getElementById('address');

document.addEventListener("DOMContentLoaded", function () {
    if(isPage("clientPage")){
      
        const salesMan = form.querySelector('.searchSalesman');
        const Vehecle = form.querySelector('.searchInputVehecle');

        const searchInputVehecleAddPurchase = clientForm.querySelector('.searchInputVehecle');
        const resultsFormVehecleAddPurchase = clientForm.querySelector('.resultsFormVehecle');

        const searchSalesmanAddPurchase = clientForm.querySelector('.searchSalesman');
        const resultsFormSalesmanAddPurchase = clientForm.querySelector('.resultsFormSalesman');
      
        oneGoRenderClient(clientList, container)
        inputClients.addEventListener('input',function(){
            inputShow(inputClients, resultsBoxClients, latestMatched, searchName, clientList, oneGoRenderClient, container)
        });
        inputClients.addEventListener("keydown", function(event) {
            keydown(event, inputClients, oneGoRenderClient, clientList, container, latestMatched, searchName, resultsBoxClients)
        });
        searchInputVehecleAddClient.addEventListener('input', ()=>{
          eventlistenerSearchVehecle(searchInputVehecleAddClient, resultsFormVehecleAddClient)
        });
        searchInputVehecleAddPurchase.addEventListener('input', ()=>{
          eventlistenerSearchVehecle(searchInputVehecleAddPurchase, resultsFormVehecleAddPurchase)
        });
        searchSalesmanAddClient.addEventListener('input', ()=>{
          eventlistenerSearchSalesman(searchSalesmanAddClient, resultsFormSalesmanAddClient)
        });
        searchSalesmanAddPurchase.addEventListener('input', ()=>{
          eventlistenerSearchSalesman(searchSalesmanAddPurchase, resultsFormSalesmanAddPurchase)
        });

        submit.addEventListener('click',function(){
            const dateOfTransactions = new Date();
            total.forEach(t=>{
              profit = Number(t.textContent);
              t.textContent = 0;
            });
            addNewClient(
              clientName.value, salesMan.value, Vehecle.value.trim(), progressStatus.textContent,
              Number(numberOfPurchases.value), 'New', phone.value, email.value,
              dateOfTransactions.setHours(0, 0, 0, 0), address.value, profit
            )
            oneGoRenderClient(clientList, container);
            restAfterAddClient(salesMan,Vehecle)
        });
    };
});
function eventlistenerSearchSalesman(s, r){
  s.addEventListener("input", function(){
      const query = s.value.trim();
      if(query.length < 1){
          r.innerHTML = " ";
          return
      };
      foundSalesman = findSalesman(query);
      r.innerHTML = Object.entries(foundSalesman).map(([key,_]) =>  `<div>${key}</div>`).join('');
      r.querySelectorAll('div').forEach(item => {
          item.addEventListener('click',function(){
              s.value = item.textContent;
              r.innerHTML = " ";
          })
      })
  });
}
function eventlistenerSearchVehecle(v, f){
  v.addEventListener("input", function(){
      const query = v.value.trim();
      if(query.length < 1){
          f.innerHTML = " ";
          return
      };
      foundVehicle = findVehicle(query);
      f.innerHTML = Object.entries(foundVehicle).map(([key,_])=>`<div>${key}</div>`).join('');
      f.querySelectorAll('div').forEach(item => {
          item.addEventListener('click',function(){
              v.value = item.textContent;
              total.forEach(t=>{
                t.textContent = cars[v.value].price;
              });
              f.innerHTML = " ";
          });
      });
  });
}
export function addNewClient(clientName,salesMan,Vehecle,progressStatus,numberOfPurchases,clientType,phone,email,dateOfTransactions,address, profit){
  let hadSold = 0;
  transactionNumber += 1;
    console.log('MATCH FOUND!', clientList[clientName]);
    for(let i = 0; i < numberOfPurchases; i++){
      transactionNumber += 1;
      salesList[String(transactionNumber)] = {date : dateOfTransactions,client: clientName,profit,salesMan, Vehecle:`${cars[Vehecle].brand} ${cars[Vehecle].model}`,status : progressStatus};
      console.log('MATCH FOUND!', salesList[String(transactionNumber)]);
      cars[Vehecle].inStock -= 1;
      cars[Vehecle].quantity -= 1;
      cars[Vehecle].sold += 1;
      hadSold++;
      if(cars[Vehecle].inStock < 1){
        window.alert(`WARNING!!! INSOFICIENT QUANTITY OF CARS IN STOCK!\nHAD SOLD : ${hadSold}`)
        break
      }
    }
    clientList[clientName] = {client: clientName,status: 'Active',numberOfPurchases: hadSold,clientType,phone,email,date: dateOfTransactions,address};
    
};
function normalizedDate(str) {
  const date = new Date(str);
  date.setHours(0, 0, 0, 0);
  return date;
}
export function bindClient(data) {
  // Form and input references
  const clientForm = document.getElementById('boughtForm');
  const BackButtons = document.querySelectorAll('.backInfo');
  const addBtn = document.getElementById('sold');
  const salesman = clientForm.querySelector('.searchSalesman');
  const vehicle = clientForm.querySelector('.searchInputVehecle');
  const status = document.getElementById('ClientProcessStatus');
  const numberOfPurchases = document.getElementById('quantityPurchase');
  const total = clientForm.querySelector('.showTotal');
  const change = document.getElementById('Change');
  const clientType = document.getElementById('formClientType');
  const clientStatus = document.getElementById('formStatus');

  let holdTrack = null; // Will store the currently selected client's name/key

  // =============================
  // EVENT DELEGATION FOR CARDS
  // =============================
  container.addEventListener('click', function (e) {
    const card = e.target.closest('.card'); // Check if clicked target is a .card or inside it
    if (!card) return;

    holdTrack = card.dataset.track; // Save which client was clicked
    clientForm.classList.add('show-form'); // Show the client edit form
    clientStatus.textContent = clientList[holdTrack].status;
    clientType.textContent = clientList[holdTrack].clientType;
  });

  // =============================
  // RESET & BIND ADD BUTTON
  // =============================
  const clonedAddBtn = addBtn.cloneNode(true); // Clone to remove old listeners
  addBtn.parentNode.replaceChild(clonedAddBtn, addBtn); // Replace old with fresh clone

  clonedAddBtn.addEventListener('click', () => {
    let hadSold = 0;
    if (!holdTrack) return; // Prevent action if no card was selected

    const purchases = Number(numberOfPurchases.value); // Get number of purchases
    if (isNaN(purchases) || purchases <= 0) return; // Guard against bad input

    // Format today's date (midnight)
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Normalize to midnight
    const formattedDate = formatDateToText(now);

    // =============================
    // UPDATE CLIENT DATA
    // =============================
    clientList[holdTrack].numberOfPurchases += purchases;
    clientList[holdTrack].date = formattedDate;

    // =============================
    // ADD TO SALES RECORDS
    // =============================
    console.log(total.textContent);
    for (let i = 0; i < purchases; i++) {
      transactionNumber++; // Ensure unique transaction ID
      salesList[String(transactionNumber)] = {
        date: formattedDate,
        client: holdTrack,
        profit: Number(total.textContent),
        salesMan: salesman.value,
        Vehecle: `${cars[vehicle.value].brand} ${cars[vehicle.value].model}`, //vehicle.value
        status: status.textContent
      };
      hadSold++;
      cars[vehicle.value].inStock -= 1;
      cars[vehicle.value].quantity -= 1;
      cars[vehicle.value].sold += 1;
      if(cars[vehicle.value].inStock < 1){
        window.alert(`WARNING!!! INSOFICIENT QUANTITY OF CARS IN STOCK!\nHAD SOLD : ${hadSold}`)
        break
      }

      console.log('MATCH FOUND!', salesList[String(transactionNumber)]);
    }

    // =============================
    // RENDER UPDATED CLIENT LIST
    // =============================
    oneGoRenderClient(data, container);

    // =============================
    // FORM RESET AND CLEANUP
    // =============================
    clientForm.classList.remove('show-form');
    holdTrack = null;

    // Clear input values
    salesman.value = '';
    vehicle.value = '';
    status.textContent = '';
    numberOfPurchases.value = '';
    total.textContent = 0;
  });


  const cloneChange = change.cloneNode(true);
  change.parentNode.replaceChild(cloneChange, change);

  cloneChange.addEventListener('click', ()=>{
    if (!holdTrack) return;
    clientList[holdTrack].status = clientStatus.textContent;
    clientList[holdTrack].clientType = clientType.textContent;
    console.log(clientList[holdTrack].status, clientList[holdTrack].clientType);

    clientForm.classList.remove('show-form');
    oneGoRenderClient(data, container);
    holdTrack = null;
  });

  // =============================
  // HANDLE CANCEL (BACK) BUTTON
  // =============================
  BackButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      clientForm.classList.remove('show-form');
      holdTrack = null; // Important to prevent stale tracking
    });
  });
}
export function oneGoRenderClient(data, container){
  const fragment = document.createDocumentFragment();

  Object.entries(data).forEach(([key, value])=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.track = key;

    let color = '';
    if(value.clientType === 'VIP') color = 'client-vip';
    if(value.clientType === 'Regular') color = 'client-regular';
    if(value.clientType === 'New') color = 'client-new';
    if(value.clientType === 'Blacklisted') color = 'client-blacklisted';

    let statusColor = '';
    if (value.status === 'Active') statusColor = 'client-active';
    if (value.status === 'Inactive') statusColor = 'client-inactive';
    if (value.status === 'Banned') statusColor = 'client-banned';

    card.innerHTML = `
    <div class="outer-span1">
      <div class="inner-span">
        <!--Left1-->   <p class="name"><span><i class="fa fa-user"></i> Name:</span> ${value.client}</p>
        <!--Left2-->   <p class="status"><span><i class="fa fa-check-circle"> </i> Status:</span> <span class="${statusColor}">${value.status}</span> </p>
      </div>
      <div class="inner-span">
        <!--Left3-->   <p class="no.-of-purchases"><span><i class="fa fa-shopping-cart"></i> No. of Purchases:</span>${value.numberOfPurchases}</p>
        <!--Left4-->   <p class="client-status"><span><i class="fa fa-users"></i> Client Type:</span> <span class="${color}">${value.clientType}</span> </p>
      </div>
    </div>
    <div class="outer-span2">
      <div class="inner-span">
        <!--right1-->  <p class="phone"><span><i class="fa fa-phone"></i> Phone:</span> #${value.phone}</p>
        <!--right2-->  <p class="email"><span><i class="fa fa-envelope"></i> Email:</span> ${value.email}</p>
      </div>
      <div class="inner-span">
        <!--right3-->  <p class="last-purchase-date"><span><i class="fa fa-calendar-alt"></i> Last Purchase Date:</span> ${formatDateToText(new Date(value.date))}</p>
        <!--right4-->  <p class="address"><span><i class="fa fa-map-marker-alt"></i> Address:</span> ${value.address}</p>
      </div>
    </div>
    `
    fragment.appendChild(card);
  });
  container.innerHTML = '';
  container.appendChild(fragment);
  bindClient(data);
  console.log('Rendered Clients');
}
function restAfterAddClient(salesMan, Vehecle){
  const form = document.getElementById("form");
  const main = document.getElementById("main");
  clientName.value = '';
  salesMan.value = '';
  Vehecle.value  = '';
  progressStatus.textContent = 'PROCESS STATUS';
  numberOfPurchases.value = '';
  phone.value = '';
  email.value = '';
  address.value = '';
  form.classList.remove("show-form");
  main.classList.remove("dis-scroll");
}