/* eslint-disable indent */
'use strict';

const storeLocation = [];

function randomCust(max, min) {
    let randomCustNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randomCustNum;
}

const Seattle = {
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    random: function() {
        return randomCust(this.maxCust, this.minCust);
    },
    location: []
};

const Tokyo = {
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    random: function() {
        return randomCust(this.maxCust, this.minCust);
    },
    location: []
};

const Dubai = {
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    random: function() {
        return randomCust(this.maxCust, this.minCust);
    },
    location: []
};

const Paris = {
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    random: function() {
        return randomCust(this.maxCust, this.minCust);
    },
    location: []
};

const Lima = {
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    random: function() {
        return randomCust(this.maxCust, this.minCust);
    },
    location: []
};

storeLocation.push(Seattle);
storeLocation.push(Tokyo);
storeLocation.push(Dubai);
storeLocation.push(Paris);
storeLocation.push(Lima);

console.log(storeLocation);

for (let i = 0; i < storeLocation.length; i++) {
    let currentLocation = storeLocation[i];
    let amHours = 11;
    let pmHours = 7;
    let sum = 0;
    for (let j = 6; j <= amHours; j++) {
        let cookies = Math.round(currentLocation.random() * currentLocation.avgCookie);
        currentLocation.location.push( j + 'am: ' + cookies + ' cookies');
        sum += cookies;
    }
    for (let j = 12; j === 12; j++) {
        let cookies = Math.round(currentLocation.random() * currentLocation.avgCookie);
        currentLocation.location.push( j + 'pm: ' + cookies + ' cookies');
        sum += cookies;
    }
    for (let j = 1; j <= pmHours; j++) {
        let cookies = Math.round(currentLocation.random() * currentLocation.avgCookie);
        currentLocation.location.push( j + 'pm: ' + cookies + ' cookies');
        sum += cookies;
    }
    currentLocation.location.push('Total: ' + sum + ' cookies');
}


console.log(storeLocation);
