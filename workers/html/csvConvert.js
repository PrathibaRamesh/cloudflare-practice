const CSVToJSON = require('csvtojson');
var domainData = [];

CSVToJSON().fromFile('../src/rawData/top-domain.csv')
    .then(users => {
        domainData = users;
        console.log(domainData);
        module.exports = { domainData };
    }).catch(err => {
        console.log(err);
    });
