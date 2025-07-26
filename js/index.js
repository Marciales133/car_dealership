import { cars } from './inventory.js';
import { tasks } from './dashboard.js';
import {oneGoRenderSales, salesContainer} from './sales.js';
import {container, salesList, clientList, bindClient, oneGoRenderClient,transactionNumber,totalProfit} from './client.js';
import {oneGoRenderingEmployeeList, employeeList, bindEmployeeButtons,employeeNumber} from './employee.js';



//==================== VARIABLE DECLARATION AREA ====================//
//============================== MENU 1 =============================//
const main = document.getElementById("main");
const menu1 = document.querySelector("#menu1");
const menuBar = document.querySelector("#menu-bar");
let onState = 0;
//============================== MENU 2 ==============================//
const menu2 = document.querySelector("#menu2");
const sideBar = document.querySelector("#side-bar");
let onState2 = 0;
//============================= DROPDOWN =============================//
const employeeContainer = document.querySelector(".show-employees");
let latestMatched = {};
const toggles = document.querySelectorAll(".custom-select");
//====================================================================//
let date = '';
export const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);
//============================ ACTION AREA ===========================//
const navBtns = document.querySelectorAll('.nav-button');

const navContent = document.querySelector(".nav-contents");

let isSearching = false;
let hadRun = false;

const scrollTopBtn = document.getElementById("scrollTopBtn");

document.addEventListener("DOMContentLoaded", function () {
  menu1.addEventListener("click", function () {
    if (onState === 0) {
      onState = 1;
      menuBar.classList.add("show-nav");
    } else {
      onState = 0;
      menuBar.classList.remove("show-nav");
    }
    console.log("clicked");
  });
  menu2.addEventListener("click", function () {
    if (onState2 === 0) {
      onState2 = 1;
      sideBar.classList.add("show-article");
    } else {
      onState2 = 0;
      sideBar.classList.remove("show-article");
    }
    console.log("clicked");
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 2500) {
      document.querySelector("article")?.classList.remove("show-article");
    }
  });
  toggles.forEach(toggle => {
    const toggleTitle = toggle.querySelector(".dropbarTitle");
    const arrow = toggle.querySelector(".left");
    const closeClass = toggle.dataset.show;
    const getOptions = toggle.nextElementSibling;
    const thisOptionP = getOptions.querySelectorAll("p");
    
    const input = navContent.querySelector("input");
    const results = navContent.querySelector(".autocomplete-results");
    thisOptionP.forEach(p => {
      p.addEventListener("click", function(){
      toggleTitle.textContent = p.textContent;
      getOptions.classList.toggle(closeClass);
      arrow.classList.remove("down");
      });
    });
    toggle.addEventListener("click", function() {
      isSearching = false;
      input.value = '';
      results.innerHTML = '';
      const arrow = this.querySelector(".left");
      const thisOption = this.nextElementSibling;
      const showClass = this.dataset.show;
      toggles.forEach(other => {
        const otherArrow = other.querySelector(".left");
        const otherOption = other.nextElementSibling;
        const otherShow = other.dataset.show;
        if (other !== this) {
          otherOption.classList.remove(otherShow);
          otherArrow.classList.remove("down");
        }
      });
      thisOption.classList.toggle(showClass);
      arrow.classList.toggle("down");
    });
  });
  if (isPage("salesPage") || isPage("clientPage") || isPage("employeePage")) {
    const customSelect = navContent.querySelectorAll(".custom-select");

    //1.Save default values
    const defaultTitles = new Map();
    // 🔁 First, save each dropdown's default title (same as before)
    customSelect.forEach(select => {
      const dropdownTitle = select.querySelector(".dropbarTitle");
      defaultTitles.set(select, dropdownTitle.textContent.trim());
    });

    // ✅ Create ONE interval that watches all dropdowns
    let resetInterval = setInterval(() => {
      if (isSearching) {
        console.log("Dropdown reset triggered");

        // 🔁 Loop through all dropdowns and reset them
        customSelect.forEach(select => {
          const resetTitle = select.querySelector(".dropbarTitle");
          const shutSibling = select.nextElementSibling;
          const shutLeft = select.querySelector(".left");
          const showClass = select.dataset.show;

          resetTitle.textContent = defaultTitles.get(select);  // Reset title
          shutSibling.classList.remove(showClass);             // Close dropdown list
          shutLeft.classList.remove("down");                   // Reset arrow icon
        });

        isSearching = false; // ✅ Reset search flag
      }
    }, 1000);

    //2.Setup listener
    customSelect.forEach(select => {
      const dropdownTitle = select.querySelector(".dropbarTitle");
      const sibling = select.nextElementSibling;
      const siblingP = sibling.querySelectorAll("p");

      siblingP.forEach(p => {
        p.addEventListener("click", function () {
          // Update this dropdown’s title
          dropdownTitle.textContent = p.textContent;
          isSearching ?console.log( 'true'): console.log('fasle')
          isSearching = false;

          // Run page-specific actions
          if (isPage("salesPage")) {
            if(dropdownTitle.textContent === 'All Times'){
              oneGoRenderSales(salesList, salesContainer);
            }
            else if(dropdownTitle.textContent === 'This Day'){
              latestMatched = today(currentDate, salesList);
              oneGoRenderSales(latestMatched, salesContainer);
            }
            else if(dropdownTitle.textContent === 'This Week'){
              latestMatched = thisWeek(currentDate, salesList);
              oneGoRenderSales(latestMatched, salesContainer);
            }
            else if(dropdownTitle.textContent === 'This Month'){
              latestMatched = thisMonth(currentDate, salesList);
              oneGoRenderSales(latestMatched, salesContainer);
            }
            else if(dropdownTitle.textContent === 'This Year'){
              latestMatched = thisYear(currentDate, salesList);
              oneGoRenderSales(latestMatched, salesContainer);
            }
            else{
              latestMatched = DropdownSearch(salesList, p.textContent);
              oneGoRenderSales(latestMatched, salesContainer);
            }
          }
          if (isPage("clientPage")) {
            if(dropdownTitle.textContent === 'All Times'){
              oneGoRenderClient(clientList, container);
              bindClient()
            }
            else if(dropdownTitle.textContent === 'This Day'){
              latestMatched = today(currentDate, clientList);
              oneGoRenderClient(latestMatched, container);
              bindClient()
            }
            else if(dropdownTitle.textContent === 'This Week'){
              latestMatched = thisWeek(currentDate, clientList);
              oneGoRenderClient(latestMatched, container);
              bindClient()
            }
            else if(dropdownTitle.textContent === 'This Month'){
              latestMatched = thisMonth(currentDate, clientList);
              oneGoRenderClient(latestMatched, container);
              bindClient()
            }
            else if(dropdownTitle.textContent === 'This Year'){
              latestMatched = thisYear(currentDate, clientList);
              oneGoRenderClient(latestMatched, container);
              bindClient()
            }
            else{
              latestMatched = DropdownSearch(clientList, p.textContent);
              oneGoRenderClient(latestMatched, container);
              bindClient()
            }
          }
          if (isPage("employeePage")) {
            if(!isSearching){
              latestMatched = DropdownSearch(employeeList, p.textContent);
              oneGoRenderingEmployeeList(latestMatched, employeeContainer);
              bindEmployeeButtons()
            }
          }
          //3.Reset all other dropdowns to their default
          customSelect.forEach(other => {
            if (other !== select) {
              const otherTitle = other.querySelector(".dropbarTitle");
              otherTitle.textContent = defaultTitles.get(other);
            }
          });
        });
      });
    });
  }
  if(isPage("inventoryPage") || isPage("clientPage") || isPage("employeePage")){
    const add = document.getElementById("add");
    const form = document.getElementById("form");
    const back = document.querySelector(".back");
    add.addEventListener("click", function(){
        form.classList.toggle("show-form");
        main.classList.toggle("dis-scroll");
    });
    back.addEventListener("click", function(){ 
        form.classList.remove("show-form");
        main.classList.remove("dis-scroll");
    });
  };
  main.addEventListener("scroll", () => {
      if (main.scrollTop > 30) {
          scrollTopBtn.style.display = "flex";
      } else {
          scrollTopBtn.style.display = "none";
      }
  });
  scrollTopBtn.addEventListener("click", () => {
    main.scrollTo({ top: 0, behavior: "smooth" });
  });
  navBtns.forEach(btn =>{
    btn.addEventListener('click',()=>{
      saveDatas()
    });
  });
});
export function isPage(id){
  return document.body.id === id;
}
export function searchName(data, query){
    const lowerQuery = query.toLocaleLowerCase();
    const matched = {};
    for(const [key, value] of Object.entries(data)){
        if(key.toLocaleLowerCase().includes(lowerQuery)) matched[key] = value;
    }
    return matched;
}
function DropdownSearch(data,query){
    const lowerQuery = query.toLocaleLowerCase();
    const matched = {};
    for(const [key, value] of Object.entries(data)){
        const values = Object.values(value).map(v => String(v).toLocaleLowerCase());
        const hasMatched = values.some(value => value.includes(lowerQuery))
        if(hasMatched) matched[key] = value;
    }
    return matched;
}
export function inputShow(input, resultbox, latestMatched, search, data, render, container){
  isSearching = true;
  isSearching ?console.log( 'true'): console.log('false')
  const query = input.value.trim();
  if(query.length < 1){
      resultbox.innerHTML = '';
      return
  }
  latestMatched = search(data,query);
  render(latestMatched, container)
  resultbox.innerHTML = Object.entries(latestMatched).map(([key,_])=>`<div>${key}</div>`).join('');
  resultbox.querySelectorAll('div').forEach(item =>{
      item.addEventListener('click', function(){
          input.value = item.textContent;
          resultbox.innerHTML = '';
          latestMatched = search(data,input.value);
          render(latestMatched, container)
      });
  });
}
export function inputShowSale(input, resultbox, latestMatched, search, data, render, container){
  isSearching = true;
  isSearching ?console.log( 'true'): console.log('false')
  let alreadyMatched = [];
  const query = input.value.trim();
  if(query.length < 1){
      resultbox.innerHTML = '';
      render(data, container)
      return
  }
  latestMatched = search(data,query);
  render(latestMatched, container)
  for(const [key, value] of Object.entries(latestMatched)){
    if(!alreadyMatched.includes(value.client)) alreadyMatched.push(value.client);
  }
  resultbox.innerHTML = alreadyMatched.map(client=>`<div>${client}</div>`).join('');
  resultbox.querySelectorAll('div').forEach(item =>{
      item.addEventListener('click', function(){
          input.value = item.textContent;
          resultbox.innerHTML = '';
          latestMatched = search(data,input.value);
          render(latestMatched, container)
      });
  });
}
export function keydown(event, input, render, data, container, latestMatched, search, resultbox){
  if (event.key === "Enter") {
    isSearching = true;
    isSearching ?console.log( 'true'): console.log('false')
    const keyword = input.value.trim();
    if (keyword.length < 1) {
        render(data, container)
        return;
    }
    latestMatched = search(data, keyword);
    render(latestMatched, container);
    resultbox.innerHTML = '';
  } 
}
export function formatDateToText(date) {
  const mm = String(date.getMonth() + 1).padStart(2, '0'); // getMonth is 0-indexed
  const dd = String(date.getDate()).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${mm}-${dd}-${yyyy}`;
}
function today(currentDate, data){
  const matched = {};
  for(const [key, value] of Object.entries(data)){
    const pastDate = value.date;
    const diffInMs = currentDate - pastDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    if (diffInDays === 0) matched[key] = value;
  };
  return matched;
}
function thisWeek(currentDate, data){
  const matched = {};
  for(const [key, value] of Object.entries(data)){
    const pastDate = value.date;
    const diffInMs = currentDate - pastDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    if (diffInDays >= 0 && diffInDays < 7) matched[key] = value;
  };
  return matched;
}
function thisMonth(currentDate, data){
  const matched = {};
  for(const [key, value] of Object.entries(data)){
    const pastDate = value.date;
    const diffInMs = currentDate - pastDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    if (diffInDays >= 0 && diffInDays < 31) matched[key] = value;
  };
  return matched;
}
function thisYear(currentDate, data){
  const matched = {};
  for(const [key, value] of Object.entries(data)){
    const pastDate = value.date;
    const diffInMs = currentDate - pastDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    if (diffInDays >= 0 && diffInDays < 366) matched[key] = value;
  };
  return matched;
}
function saveDatas(){
  sessionStorage.setItem('cars',JSON.stringify(cars));
  sessionStorage.setItem('tasks',JSON.stringify(tasks));
  sessionStorage.setItem('transactionNumber',JSON.stringify(transactionNumber));
  sessionStorage.setItem('totalProfit',JSON.stringify(totalProfit));
  sessionStorage.setItem('employeeNumber',JSON.stringify(employeeNumber));
  sessionStorage.setItem('salesList',JSON.stringify(salesList));
  sessionStorage.setItem('clientList',JSON.stringify(clientList));
  sessionStorage.setItem('employeeList',JSON.stringify(employeeList));
  console.log('saved datas');
}
console.log("hello")

//===================================//
//-------FOR-FUTURE-REFERENCE--------//
//===================================//

/*
//=============================================FIRST RENDER LOGIC DEVELOPED=============================================//

export function renderSales(data, container){
    container.innerHTML = Object.entries(data).map(([key,value])=>{
        const {date, client, profit, salesMan, Vehecle, status} = value;
        let color = '';
        if(status === 'Completed') color = 'color-complete';
        if(status === 'Canceled') color = 'color-cancelled';
        if(status === 'In-Progress') color = 'color-inprogress';
        return `
        <div class="record boxes">
          <p><i class="fa fa-calendar-alt"></i><span>Date:</span> ${formatDateToText(new Date(date))}</p>
          <p><i class="fa fa-user-tie"></i><span>Salesman:</span> ${salesMan}</p>
          <p><i class="fa fa-user"></i><span>Client:</span> ${client}</p>
          <p><i class="fa fa-car"></i><span>Vehicle:</span> ${Vehecle}</p>
          <p><i class="fa fa-dollar-sign"></i><span>Profit:</span>$${profit}</p>
          <p><i class="fa fa-check-circle"></i><span>Status:</span> <span class="${color}">${status}</span></p>
        </div>
        `;
    }).join('');
}


*/
isSearching ?console.log( 'true'): console.log('false')