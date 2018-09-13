'use strict';
const fs = require('fs');
let jsonData = require('./package.json');
var v = jsonData.version;
var splitted = v.split('.');
var nVersionArr = increaseVersion(splitted, splitted.length - 1, 1);
var nVersion = nVersionArr.join('.');
jsonData.version = nVersion;

fs.writeFile('./package.json', JSON.stringify(jsonData, null, 4), (err) => {
    if (err) throw err;
    console.log('Version Updated :' + v + " => " + nVersion);
});

function increaseVersion(arr, i, v) {
    var t = Number(arr[i]);
    var b = 0;
    t = t + v;
    if (t >= 10) {
        t = t - 10;
        b++;
    }
    arr[i] = t.toString();
    if (i == 0)
        return arr;
    else
        return increaseVersion(arr, i - 1, b);
}