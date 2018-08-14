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
    cookieData: cookieArr (23,65,6.3),
    //cookieData: cookieArr(this.minCust,this.maxCust,this.avgCookieCust),  
    }

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
pike.render();
seaTac.render();

// var seaCent = {
    //     name: 'Pats Salmon Cookies - Seattle Center',
    // }
