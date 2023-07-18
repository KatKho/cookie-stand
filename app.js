/* eslint-disable indent */
'use strict';

const storeLocation = [];
const SALES_TABLE = document.getElementById('table-body');
const HEAD_TABLE = document.getElementById('table-head');
const FOOTER_TABLE = document.getElementById('table-footer');

// function randomCust() {
//     return (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
// }

function CookieStand(name, minCust, maxCust, avgCookie, sales) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.sales = sales;
    // this.totals = totals;
}

CookieStand.prototype.random = function () {
    return (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
};

CookieStand.prototype.hours = [' ', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Location Total'];


CookieStand.prototype.render = function () {
    let rowElement = document.createElement('tr');
    let nameElement = document.createElement('td');
    nameElement.textContent = this.name;
    rowElement.appendChild(nameElement);
    for (let i = 0; i < this.sales.length; i++) {
        let salesElement = document.createElement('td');
        salesElement.textContent = this.sales[i];
        rowElement.appendChild(salesElement);
    }
    SALES_TABLE.appendChild(rowElement);
  };

  function calculateHourlyTotals() {
    const hourlyTotals = [];
    for (let hour = 0; hour < CookieStand.prototype.hours.length - 1; hour++) {
        let totalSales = 0;
        for (let i = 0; i < storeLocation.length; i++) {
            totalSales += storeLocation[i].sales[hour];
        }
        hourlyTotals.push(totalSales);
    }
    return hourlyTotals;
}

let Seattle = new CookieStand('Seattle', 23, 65, 6.3, []);
let Tokyo = new CookieStand('Tokyo', 3, 24, 1.2, []);
let Dubai = new CookieStand('Dubai', 11, 38, 3.7, []);
let Paris = new CookieStand('Paris', 20, 38, 2.3, []);
let Lima = new CookieStand('Lima', 2, 16, 4.6, []);



// const Seattle = {
//     name: 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgCookie: 6.3,
//     random: randomCust,
//     sales: []
// };

// const Tokyo = {
//     name: 'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgCookie: 1.2,
//     random: randomCust,
//     sales: []
// };

// const Dubai = {
//     name: 'Dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgCookie: 3.7,
//     random: randomCust,
//     sales: []
// };

// const Paris = {
//     name: 'Paris',
//     minCust: 20,
//     maxCust: 38,
//     avgCookie: 2.3,
//     random: randomCust,
//     sales: []
// };

// const Lima = {
//     name: 'Lima',
//     minCust: 2,
//     maxCust: 16,
//     avgCookie: 4.6,
//     random: randomCust,
//     sales: []
// };

storeLocation.push(Seattle, Tokyo, Dubai, Paris, Lima);


// for (let i = 0; i < storeLocation.length; i++) {
//     let currentLocation = storeLocation[i];
//     let amHours = 11;
//     let pmHours = 7;
//     let sum = 0;
//     for (let j = 6; j <= amHours; j++) {
//         let cookies = Math.round(currentLocation.random() * currentLocation.avgCookie);
//         currentLocation.sales.push( j + 'am: ' + cookies + ' cookies');
//         sum += cookies;
//     }
//     for (let j = 12; j === 12; j++) {
//         let cookies = Math.round(currentLocation.random() * currentLocation.avgCookie);
//         currentLocation.sales.push( j + 'pm: ' + cookies + ' cookies');
//         sum += cookies;
//     }
//     for (let j = 1; j <= pmHours; j++) {
//         let cookies = Math.round(currentLocation.random() * currentLocation.avgCookie);
//         currentLocation.sales.push( j + 'pm: ' + cookies + ' cookies');
//         sum += cookies;
//     }
//     currentLocation.sales.push('Total: ' + sum + ' cookies');
// }
let hours = 14;
for (let i = 0; i < storeLocation.length; i++) {
    let currentLocation = storeLocation[i];
    let dailyTotal = 0;
    for (let j = 0; j < hours; j++) {
        let cookies = Math.round(currentLocation.random() * currentLocation.avgCookie);
        currentLocation.sales.push(cookies);
        dailyTotal += cookies;
    }
    currentLocation.sales.push(dailyTotal);
}

let headerRow = document.createElement('tr');
for (let i = 0; i < CookieStand.prototype.hours.length; i++) {
    let headerCell = document.createElement('th');
    headerCell.textContent = CookieStand.prototype.hours[i];
    headerRow.appendChild(headerCell);
}
HEAD_TABLE.appendChild(headerRow);

for (let i = 0; i < storeLocation.length; i++) {
    storeLocation[i].render();
  }

const hourlyTotals = calculateHourlyTotals();
console.log(hourlyTotals);

let footerRow = document.createElement('tr');
for (let i = 0; i <= hourlyTotals.length; i++) {
    if (i === 0) {
    let nameElement = document.createElement('td');
    nameElement.textContent = 'Totals';
    footerRow.appendChild(nameElement);
    }
    let footerCell = document.createElement('td');
    footerCell.textContent = hourlyTotals[i];
    footerRow.appendChild(footerCell);
}
FOOTER_TABLE.appendChild(footerRow);

// function createHTML(elementToCreate, contentToAdd, elementToAddTo) {
//     let element = document.createElement(elementToCreate);
//     element.textContent += contentToAdd;
//     elementToAddTo.appendChild(element);
//   }

// const sectionElement = document.createElement('section');
// document.body.appendChild(sectionElement);

// for (let i = 0; i < storeLocation.length; i++) {
//     let currentLocation = storeLocation[i];
//     createHTML('h3', currentLocation.name, sectionElement);
//     const unListElement = document.createElement('ul');
//     sectionElement.appendChild(unListElement);

//     for (let j = 0; j < currentLocation.sales.length; j++) {
//         createHTML('li', currentLocation.sales[j], unListElement);
//     }
// }
