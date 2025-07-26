import {employeeList} from './employee.js';
import { cars } from './inventory.js';
import {isPage, currentDate} from "./index.js";
import {salesList, clientList} from "./client.js";

const activeClients = document.getElementById('activeClients');
const newClientTbody = document.getElementById('newClientTbody');
const lowStockTbody = document.getElementById('lowStockTbody');
const totalRevenue = document.getElementById('totalRevenue');
const monthlySales = document.getElementById('monthlySales');
const carsInInventoryValue = document.getElementById('carsInInventoryValue');
const top3CarsContainer = document.querySelector('.top-3-cars-container');

const addtask = document.getElementById('newTask');
 
export let tasks = JSON.parse(sessionStorage.getItem('tasks'));
if(!tasks) tasks = [
    'Follow up with John Doe','Follow up with John Doe',
    'Schedule service appointment','Secure new cars and stockpile low stocks',
    'Secure new cars and stockpile low stocks'
];
const tableBody = document.querySelector('.table-body');

const bar1 = document.getElementById('salesTrend1th');
const bar2 = document.getElementById('salesTrend2th');
const bar3 = document.getElementById('salesTrend3th');
const bar4 = document.getElementById('salesTrend4th');
const bar5 = document.getElementById('salesTrend5th');

let thisMonthProfit = getTotalRevenue(salesList);
let digit = 0;
let num = 0;
let latestMatched = {};


document.addEventListener("DOMContentLoaded", function () {
    if(isPage("dashboardPage")){
        activeClients.textContent = getTotal(employeeList);
        monthlySales.textContent = getTotal(salesList);
        carsInInventoryValue.textContent = getTotalCarsInInventory(cars);
        totalRevenue.textContent = getTotalRevenue(salesList);

        bar2.style.height = '43%';
        bar3.style.height = '40%';
        bar4.style.height = '36%';
        bar5.style.height = '27%';

        digit = (thisMonthProfit / 500000)*100;
        console.log(digit);
        bar1.style.height = `${digit}%`;

        latestMatched = sortNewClients(clientList, currentDate);
        renderNewClients(latestMatched, newClientTbody)

        latestMatched = sortLowStock(cars, currentDate);
        renderLowStock(latestMatched, lowStockTbody)
        
        latestMatched = top3Cars(cars);
        renderTop3Cars(latestMatched, top3CarsContainer)

        renderTasks(tasks, tableBody)
        addListener()
        addtask.addEventListener('keydown',(event)=>{
            if(event.key === 'Enter' && addtask.value.trim() !== ''){
                tasks.push(addtask.value.trim())
                console.log("enter");
                tableBody.innerHTML = '';
                addtask.value = '';
                renderTasks(tasks, tableBody)
                addListener()
            }
        })
    }
});
function getTotal(data){
    let total = 0;
    for(const [key,_] of Object.entries(data)){
        total += 1;
    }
    return total
};
function getTotalCarsInInventory(data){
    let total = 0;
    for(const [_,value] of Object.entries(data)){
        total += Number(value.inStock);
    }
    return total
};
function getTotalRevenue(data){
    let total = 0;
    for(const [_,value] of Object.entries(data)){
        total += Number(value.profit);
    }
    return total
};
function sortNewClients(data, currentDate){
    let matched = {};
    for(const [key, value] of Object.entries(data)){
        if(value.clientType === 'New') matched[key] = value;
    }
    for(const [_, value] of Object.entries(matched)){
        const difInDays = Math.floor((value.date - currentDate)/(1000*60*60*24));
        value.compareDate = difInDays;
    }
    matched = Object.fromEntries(Object.entries(matched).sort(([, a], [, b]) => a.compareDate - b.compareDate).slice(0,5) /* Descending sort*/);
    return matched
}
function sortLowStock(data){
    let matched = {};
    for(const [key, value] of Object.entries(data)){
        if(value.inStock <= 1) matched[key] = value;
    }
    matched = Object.fromEntries(Object.entries(matched).sort(([,a],[,b])=> b.sold - a.sold).slice(0,4))
    return matched
}
function renderLowStock(data, container){
    container.innerHTML = Object.entries(data).map(([_,value])=>{
        const {brand, model, year, color, inStock} = value;
        return `
        <tr>
            <td class="fit-td">${inStock}</td>
            <td><span class="brand">${brand}</span> ${model} <span class="year">${year}</span> <span class="color">${color}</span></td>
        </tr>
        `
    }).join('');
}
function renderNewClients(data, container){
    container.innerHTML = Object.entries(data).map(([key,_])=>{
        return `
        <tr>
            <td>${key}</td>
        </tr>
        `
    }).join('');
}
function top3Cars(data){
    return Object.fromEntries(Object.entries(data).sort(([,a],[,b]) => b.sold - a.sold ).slice(0,3))
}
function renderTop3Cars(data, container){
    container.innerHTML = Object.entries(data).map(([,value])=>{
        const {model, sold} = value;
        return `
        <div id="top1" class="top-3-cars">
            <img src="./entities/image/mustang.png" alt="" class="top-3-cars-img">
            <div class="texts-on-the-side">
                <h6 class="top-3-cars-title">${model}</h6>
                <p class="top-3-cars-text">Sold ${sold}</p>
            </div>
        </div>
        `
    }).join('');
}
function renderTasks(data, container){
    data.forEach(i => {
        container.innerHTML += `
        <p>${i}</p>
        `
    });
}
function addListener(){
    const paragraphs = tableBody.querySelectorAll('p');
    paragraphs.forEach(i =>{
        i.addEventListener('click', function(){
            console.log(i.textContent);
            const j = tasks.indexOf(i.textContent);
            if(j !== -1) tasks.splice(j,1);
            tableBody.innerHTML = '';
            renderTasks(tasks, tableBody)
            addListener()
        });
    });
}