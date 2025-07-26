import {isPage, keydown, formatDateToText, inputShowSale} from "./index.js";
import {salesList} from "./client.js";
import {AllSalesmanList} from './employee.js';

const allSalesman = document.getElementById('salespersonOption');

export const salesContainer = document.querySelector('.records');
const inputSales = document.getElementById('searchInputSales');
const resultsBoxSales = document.getElementById('resultsSales');
let latestMatched = {};
document.addEventListener("DOMContentLoaded", function () {
    if(isPage('salesPage')){
        const optionsOfAllSalesman = allSalesman.querySelector('.custom-option-body');
        let matchedSalesman = {};
        matchedSalesman = AllSalesmanList();
        optionsOfAllSalesman.innerHTML  = Object.entries(matchedSalesman).map(([key,_])=>`<p>${key}</p>`).join('');
        oneGoRenderSales(salesList, salesContainer)
        inputSales.addEventListener('input',function(){
            inputShowSale(inputSales, resultsBoxSales, latestMatched, searchClientName, salesList, oneGoRenderSales, salesContainer)
        });
        inputSales.addEventListener("keydown", function(event) {
            keydown(event, inputSales, oneGoRenderSales, salesList, salesContainer, latestMatched, searchClientName, resultsBoxSales)
        });
    }
});
function searchClientName(data,query){
    const lowerQuery = query.toLocaleLowerCase();
    const matched = {};
    let alreadyMatched = [];

    for(const [key, value] of Object.entries(data)){
        if(value.client.toLocaleLowerCase().includes(lowerQuery)) matched[key] = value;
    }
    return matched;
}
export function oneGoRenderSales(data, container){
    const fragment = document.createDocumentFragment();

    Object.entries(data).forEach(([key, value])=>{
        const card = document.createElement('div');
        card.className = 'record boxes';

        let color = '';
        if(value.status === 'Completed') color = 'color-complete';
        if(value.status === 'Canceled') color = 'color-cancelled';
        if(value.status === 'In-Progress') color = 'color-inprogress';

        card.innerHTML = `
            <p><i class="fa fa-calendar-alt"></i><span>Date:</span> ${formatDateToText(new Date(value.date))}</p>
            <p><i class="fa fa-user-tie"></i><span>Salesman:</span> ${value.salesMan}</p>
            <p><i class="fa fa-user"></i><span>Client:</span> ${value.client}</p>
            <p><i class="fa fa-car"></i><span>Vehicle:</span> ${value.Vehecle}</p>
            <p><i class="fa fa-dollar-sign"></i><span>Profit:</span>$${value.profit}</p>
            <p><i class="fa fa-check-circle"></i><span>Status:</span> <span class="${color}">${value.status}</span></p>
        `
        fragment.appendChild(card);
    });
    container.innerHTML = '';
    container.appendChild(fragment);
    console.log('Rendered Sales');
}