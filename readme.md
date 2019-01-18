# Realtor.ca Scraper


> ### Configuration
    1) GO TO: https://www.realtor.ca
    2) Open your Chrome dev tools network panel
    3) on Realtor.ca, make your search
    4) In the network panel, filter by PropertySearch_Post
    5) Right click on result and select Copy > Copy as fetch
    6) Paste the results in index.js
    7) Format the document  (Windows: Shift + Alt + F  or    Mac: Shift + Option + F)
    8) Remove the last semicolon from the fetch method

> **Optional**

TO GET THE MOST LISTINGS POSSIBLE

Search for RecordsPerPage=<br />
Replace with RecordsPerPage=200

> ### Installation
```sh
$ npm install
$ npm run parser
```

