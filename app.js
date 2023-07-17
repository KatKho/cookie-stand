/* eslint-disable indent */
'user strict';

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
    Seattle: []
};

const Tokyo = {
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    random: function() {
        return randomCust(this.maxCust, this.minCust);
      },
    Tokyo: []
};

const Dubai = {
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    random: function() {
        return randomCust(this.maxCust, this.minCust);
      },
    Dubai: []
};

const Paris = {
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    random: function() {
        return randomCust(this.maxCust, this.minCust);
      },
    Paris: []
};

const Lima = {
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    random: function() {
        return randomCust(this.maxCust, this.minCust);
      },
    Lima: []
};

// console.log(Seattle,Dubai);
// console.log(Dubai.random()); 
