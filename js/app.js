'use strict';

// Define initial variables, arrays, and functions.
var allLocs = [];
var cookieTable = document.getElementById('cookies');
var tosserTable = document.getElementById('employees');
var hours = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm'];

var genRandom = function (a,b) {
    return Math.ceil((b-a)*Math.random())+a;
}

// Establish Contstructor Loc for locations
function Loc(name, minCust, maxCust, avgCookieCust) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieCust = avgCookieCust;
    
    this.cookieArr = function (){
        for (var i=0 ; i < hours.length ; i++) {
            if (i === 0) {
                var custInHour = [genRandom(this.minCust,this.maxCust)];
                var cookieInHour = [Math.ceil(custInHour[i]*this.avgCookieCust)];
                var totalCookie = cookieInHour[i];
                if ((cookieInHour[i]/20) < 2){
                    var cookieTosser = [2];
                }else{
                    var cookieTosser = [Math.ceil(cookieInHour[i]/20)];
                }
            } else {
                custInHour.push(genRandom(this.minCust,this.maxCust));
                cookieInHour.push(Math.ceil(custInHour[i]*this.avgCookieCust));
                totalCookie = totalCookie + cookieInHour[i];
                if ((cookieInHour[i]/20) < 2){
                    cookieTosser.push(2);
                }else{
                    cookieTosser.push(Math.ceil(cookieInHour[i]/20));
                }
            }
        }
        return [cookieInHour, totalCookie, cookieTosser];
    }
    allLocs.push(this);
}

// Create loc instances and Input data for locations
new Loc('First and Pike', 23, 65, 6.3);
new Loc('SeaTac', 3, 24, 1.2);
new Loc('Seattle Center', 11, 38, 3.7);
new Loc('Capitol Hill', 20, 38, 2.3);
new Loc('Alki', 2, 11, 4.6);

//Header table entries
function makeHeaderRowCookie() {
    var trEl = document.createElement('tr');
    // First entry should say "Locaton"
    var thEl = document.createElement('th');
    thEl.textContent = 'Location';
    trEl.appendChild(thEl);
    // Now display hours open
    for (var i=0; i<hours.length; i++) {
        thEl = document.createElement('th');
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);
    }
    // Final colum should be headered "total"
    thEl = document.createElement('th');
    thEl.textContent = 'TOTAL';
    trEl.appendChild(thEl);
    // Append to the cookies table
    cookieTable.appendChild(trEl);
}

// Starting work on the table elements for locations
Loc.prototype.renderCookie = function (){
    //Start Table
    var trEl = document.createElement('tr');
   
    //First entry needs to be location name
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);

    //Now do the rest of the info
    for (var i=0; i<hours.length; i++) {
        tdEl = document.createElement('td');
        tdEl.textContent = this.cookieArr()[0][i];
        //tdEl.textContent = cookieArr(this.minCust,this.maxCust,this.avgCookieCust)[0][i];
        trEl.appendChild(tdEl);
    }

    //Final entry should be total
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookieArr()[1];
    //tdEl.textContent = cookieArr(this.minCust,this.maxCust,this.avgCookieCust)[1];
    trEl.appendChild(tdEl);

    //Apprehend to table
    cookieTable.appendChild(trEl);
}

function makeFooterRowCookie() {
    var trEl = document.createElement('tr');

    // First entry should say "Total"
    var tdEl = document.createElement('td');
    tdEl.textContent = 'TOTALS';
    tdEl.appendChild(trEl);

    // Now for the rest of the entries
    for (var i=0; i<hours.length; i++) {
        tdEl = document.createElement('td');
        for (var n=0; n<allLocs.length; n++){
            if (n === 0){
                var cookieHourTotal = this.cookieArr()[0][i];
            } else {
                cookieHourTotal = cookieHourTotal + this.cookieArr()[0][i];
            }
        }
        tdEl.textContent = cookieHourTotal;
        trEl.appendChild(tdEl);
    }
    // Final entry needs to total the total
    tdEl = document.createElement('td');
    for (var n=0; n<allLocs.length; n++){
        if (n === 0){
            var cookieTotalTotal = cookieArr(this.minCust,this.maxCust,this.avgCookieCust)[1];
        } else {
            cookieTotalTotal = cookieTotalTotal + cookieArr(this.minCust,this.maxCust,this.avgCookieCust)[1];
        }
    }
    tdEl.textContent = cookieTotaltotal;
    trEl.appendChild(tdEl);
    cookieTable.appendChild(trEl);    
}

// Tell it to render
makeHeaderRowCookie();
allLocs[0].renderCookie();
allLocs[1].renderCookie();
allLocs[2].renderCookie();
allLocs[3].renderCookie();
allLocs[4].renderCookie();
//makeFooterRowCookie(); footer row edited out for now

//Start on Employee table
//Header table entries
function makeHeaderRowTosser() {
    var trEl = document.createElement('tr');
    // First entry should say "Locaton"
    var thEl = document.createElement('th');
    thEl.textContent = 'Location';
    trEl.appendChild(thEl);
    // Now display hours open
    for (var i=0; i<hours.length; i++) {
        thEl = document.createElement('th');
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);
    }
    tosserTable.appendChild(trEl);
}

// Starting work on the table elements for locations
Loc.prototype.renderToss = function (){
    //Start Table
    var trEl = document.createElement('tr');
   
    //First entry needs to be location name
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);

    //Now do the rest of the info
    for (var i=0; i<hours.length; i++) {
        tdEl = document.createElement('td');
        tdEl.textContent = this.cookieArr()[2][i];
        //tdEl.textContent = cookieArr(this.minCust,this.maxCust,this.avgCookieCust)[2][i];
        trEl.appendChild(tdEl);
    }
    //Apprehend to table
    tosserTable.appendChild(trEl);
}
// Tell it to render
makeHeaderRowTosser();
allLocs[0].renderToss();
allLocs[1].renderToss();
allLocs[2].renderToss();
allLocs[3].renderToss();
allLocs[4].renderToss();