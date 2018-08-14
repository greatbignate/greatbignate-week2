'use strict';

// Define initial variables, arrays, and functions.

var hours = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm','placeholder']
var genRandom = function (a,b) {
    return Math.ceil((b-a)*Math.random())+a;
}
var cookieArr = function(a,b,c){

    for (var i=0 ; i < hours.length ; i++) {
        if (i === 0) {
            var custInHour = [genRandom(a,b)];
            var cookieInHour = [Math.ceil(custInHour[i]*c)];
            var totalCookie = cookieInHour[i];
        } else {
            custInHour.push(genRandom(a,b));
            cookieInHour.push(Math.ceil(custInHour[i]*c));
            totalCookie = totalCookie + cookieInHour[i];
        }
        //console.log('i is ' +i+ ', cookieInHour is ' +cookieInHour[i]+ ' totalCookie is ' +totalCookie); 
    }
return [cookieInHour, totalCookie];

}

var pike = {
    // Define Constants
    name: 'Pats Salmon Cookies - First and Pike',
    minCust: 23 ,
    maxCust: 65 ,
    avgCookieCust: 6.3 ,
    //cookieData: cookieArr (23,65,6.3),
    //cookieData: cookieArr(this.minCust,this.maxCust,this.avgCookieCust),  
    }
    pike.cookieData = cookieArr(pike.minCust,pike.maxCust,pike.avgCookieCust);

// Input data to HTML 
pike.render = function(){

    var pikeUlEl = document.getElementById('firstandpike');
    for (var i=0 ; i <= hours.length ; i++) {

        if (i<hours.length){
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] +': ' +pike.cookieData[0][i]+ ' cookies.';
            pikeUlEl.appendChild(liEl);
    } else if (i === hours.length) {
        liEl.textContent = 'TOTAL: ' +pike.cookieData[1]+ ' cookies.';
        pikeUlEl.appendChild(liEl);
    }else{
        console.log ('You done messed up Pike');
        break;
    }
    }     
}

var seaTac = {
    // Define Constants
    name: 'Pats Salmon Cookies - Seattle-Tacoma Airport',
    minCust: 3,
    maxCust: 24,
    avgCookieCust: 1.2,
    //cookieData: cookieArr (3,24,1.2),
    //cookieData: cookieArr(this.minCust,this.maxCust,this.avgCookieCust),  
    }
    seaTac.cookieData = cookieArr(seaTac.minCust,seaTac.maxCust,seaTac.avgCookieCust);

// Input data to HTML 
seaTac.render = function(){

    var seaTacUlEl = document.getElementById('seatac');
    for (var i=0 ; i <= hours.length ; i++) {

        if (i<hours.length){
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] +': ' +seaTac.cookieData[0][i]+ ' cookies.';
            seaTacUlEl.appendChild(liEl);
    } else if (i === hours.length) {
        liEl.textContent = 'TOTAL: ' +seaTac.cookieData[1]+ ' cookies.';
        seaTacUlEl.appendChild(liEl);
    }else{
        console.log ('You done messed up Seatac');
        break;
    }
    }     
}
var seaCent = {
    // Define Constants
    name: 'Pats Salmon Cookies - Seattle Center',
    minCust: 11,
    maxCust: 38,
    avgCookieCust: 3.7,
    }
    seaCent.cookieData = cookieArr(seaCent.minCust,seaCent.maxCust,seaCent.avgCookieCust);

// Input data to HTML 
seaCent.render = function(){

    var seaCentUlEl = document.getElementById('seacent');
    for (var i=0 ; i <= hours.length ; i++) {

        if (i<hours.length){
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] +': ' +seaCent.cookieData[0][i]+ ' cookies.';
            seaCentUlEl.appendChild(liEl);
    } else if (i === hours.length) {
        liEl.textContent = 'TOTAL: ' +seaCent.cookieData[1]+ ' cookies.';
        seaCentUlEl.appendChild(liEl);
    }else{
        console.log ('You done messed up Seattle Center');
        break;
    }
    }     
}

var capHill = {
    // Define Constants
    name: 'Pats Salmon Cookies - Capitol Hill',
    minCust: 20,
    maxCust: 38,
    avgCookieCust: 2.3,
    }
    capHill.cookieData = cookieArr(capHill.minCust,capHill.maxCust,capHill.avgCookieCust);

// Input data to HTML 
capHill.render = function(){

    var capHillUlEl = document.getElementById('caphill');
    for (var i=0 ; i <= hours.length ; i++) {

        if (i<hours.length){
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] +': ' +capHill.cookieData[0][i]+ ' cookies.';
            capHillUlEl.appendChild(liEl);
    } else if (i === hours.length) {
        liEl.textContent = 'TOTAL: ' +capHill.cookieData[1]+ ' cookies.';
        capHillUlEl.appendChild(liEl);
    }else{
        console.log ('You done messed up Cap Hill');
        break;
    }
    }     
}

var alki = {
    // Define Constants
    name: 'Pats Salmon Cookies - Alki',
    minCust: 2,
    maxCust: 11,
    avgCookieCust: 4.6,
    }
    alki.cookieData = cookieArr(alki.minCust,alki.maxCust,alki.avgCookieCust);

// Input data to HTML 
alki.render = function(){

    var alkiUlEl = document.getElementById('alki');
    for (var i=0 ; i <= hours.length ; i++) {

        if (i<hours.length){
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] +': ' +alki.cookieData[0][i]+ ' cookies.';
            alkiUlEl.appendChild(liEl);
    } else if (i === hours.length) {
        liEl.textContent = 'TOTAL: ' +alki.cookieData[1]+ ' cookies.';
        alkiUlEl.appendChild(liEl);
    }else{
        console.log ('You done messed up Seatac');
        break;
    }
    }     
}

// Now let's print this bad boy.
var locations = [pike,seaTac,seaCent,capHill,alki];
for (var i=0; i<locations.length; i++) {
    locations[i].render();
}