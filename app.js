/* eslint-disable indent */
'use strict';

const storeValues = [];
const SALES_TABLE = document.getElementById('table-body');
const HEAD_TABLE = document.getElementById('table-head');
const FOOTER_TABLE = document.getElementById('table-footer');
let formElement = document.getElementById('stand-form');

function CookieStand(location, minCust, maxCust, avgCookie, sales) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.sales = sales;
}

CookieStand.prototype.calculateSales = function () {
    let hours = 14;
    for (let i = 0; i < storeValues.length; i++) {
        let currentLocation = storeValues[i];
        let dailyTotal = 0;
        for (let j = 0; j < hours; j++) {
            let cookies = Math.floor(currentLocation.random() * currentLocation.avgCookie);
            currentLocation.sales.push(cookies);
            dailyTotal += cookies;
        }
            currentLocation.sales.push(dailyTotal);
    }
};

CookieStand.prototype.random = function () {
    return (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
};

CookieStand.prototype.hours = [' ', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Location Total'];


CookieStand.prototype.render = function () {
    let rowElement = document.createElement('tr');
    createHTML('th', this.location, rowElement);
    for (let i = 0; i < this.sales.length; i++) {
        createHTML('td', this.sales[i], rowElement);
    }
    SALES_TABLE.appendChild(rowElement);
  };

  function calculateHourlyTotals() {
    const hourlyTotals = [];
    for (let hour = 0; hour < CookieStand.prototype.hours.length - 1; hour++) {
        let totalSales = 0;
        for (let i = 0; i < storeValues.length; i++) {
            totalSales += storeValues[i].sales[hour];
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

storeValues.push(Seattle, Tokyo, Dubai, Paris, Lima);

CookieStand.prototype.calculateSales();

for (let i = 0; i < storeValues.length; i++) {
    storeValues[i].render();
}

let headerRow = document.createElement('tr');
for (let i = 0; i < CookieStand.prototype.hours.length; i++) {
    createHTML('th', CookieStand.prototype.hours[i], headerRow);
}
HEAD_TABLE.appendChild(headerRow);

const hourlyTotals = calculateHourlyTotals();

let footerRow = document.createElement('tr');
for (let i = 0; i <= hourlyTotals.length - 1; i++) {
    if (i === 0) {
    createHTML('th', 'Totals', footerRow);
    }
    createHTML('td', hourlyTotals[i], footerRow);
}
FOOTER_TABLE.appendChild(footerRow);

function createHTML(elementToCreate, contentToAdd, elementToAddTo) {
    let element = document.createElement(elementToCreate);
    element.textContent += contentToAdd;
    elementToAddTo.appendChild(element);
}

function handleSubmit(event) {
    event.preventDefault();

    console.log(event.target.location.value);
    console.log(event.target.minCust.value);
    console.log(event.target.maxCust.value);
    console.log(event.target.avgCookie.value);

    let location = event.target.location.value;
    let minCust = parseInt(event.target.minCust.value);
    let maxCust = parseInt(event.target.maxCust.value);
    let avgCookie = parseInt(event.target.avgCookie.value);
    let sales = [];
    let stand = new CookieStand(location, minCust, maxCust, avgCookie, sales);
    storeValues.push(stand);
    stand.calculateSales();

    const hourlyTotals = calculateHourlyTotals();
    FOOTER_TABLE.innerHTML = '';
    let footerRow = document.createElement('tr');
    for (let i = 0; i <= hourlyTotals.length - 1; i++) {
        if (i === 0) {
            createHTML('th', 'Totals', footerRow);
        }
        createHTML('td', hourlyTotals[i], footerRow);
    }
    FOOTER_TABLE.appendChild(footerRow);

    // Clear the form inputs after submission
    event.target.reset();

    stand.render();
    console.log(storeValues);

  }
formElement.addEventListener('submit', handleSubmit);
console.log(storeValues);
