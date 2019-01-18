#!/usr/bin/env node
const fetch = require('node-fetch');

/*
    1) GO TO: https://www.realtor.ca
    2) Open your Chrome dev tools network panel
    3) on Realtor.ca, make your search
    4) In the network panel, filter by PropertySearch_Post
    5) Right click on result and select Copy > Copy as fetch
    6) Paste the results below
    7) Format the document  (Windows: Shift + Alt + F  or    Mac: Shift + Option + F)
    8) Remove the last semicolon from the fetch method


    TO GET THE MOST LISTINGS POSSIBLE
    Search for RecordsPerPage=12
    Replace with RecordsPerPage=200
*/


/* ==================== REPLACE BELOW ======================== */
fetch("https://api2.realtor.ca/Listing.svc/PropertySearch_Post", {
  credentials: "omit",
  headers: {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    pragma: "no-cache"
  },
  referrer: "https://www.realtor.ca/map",
  referrerPolicy: "no-referrer-when-downgrade",
  body:
    "ZoomLevel=10&LatitudeMax=51.3591147&LongitudeMax=-113.4247125&LatitudeMin=50.7366534&LongitudeMin=-114.7169793&CurrentPage=1&PropertyTypeGroupID=1&PropertySearchTypeId=1&TransactionTypeId=2&PriceMin=0&PriceMax=0&BedRange=0-0&BathRange=0-0&RecordsPerPage=200&ApplicationId=1&CultureId=1&Version=7.0",
  method: "POST",
  mode: "cors"
}) // REMOVE ;
/* ========================= STOP ======================== */



/*
    Do Not remove anything below here!
*/
.then(res => res.json())
.then(json => {
    //console.log(json)
    let count = 0;
    for (let results of json.Results) {
        //count++;
        console.log(results.Property.Address.AddressText);
    }
});