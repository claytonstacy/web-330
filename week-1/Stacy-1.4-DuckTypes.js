/*
============================================
Title: Assignment 1.4
Author: Professor Krasso
Date: 16 February 2020
Modified By: Clayton Stacy
Description: Duck Typing
============================================
*/ 
//Start program
//Import header and log to the console
var header = require('../Stacy-header');
console.log(header.display('Clayton', 'Stacy', '1.4 Duck Typing' ));

function Car(model) {
    this.model = model;
}
Car.prototype.start = function() {
    console.log('Car added to the racetrack!');
}
function Truck(model, year) {
    this.model = model;
    this.year = year;
}
Truck.prototype.start = function() {
    console.log('Truck added to the racetrack!');
}
function Jeep (model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
}
Jeep.prototype.start = function() {
    console.log('Jeep added to the racetrack!');
}
const racetrack = [];

function driveIt(vehicle) {
    vehicle.start();
   racetrack.push(vehicle); 
}

var chevy = new Car('Chevy');
var ford = new Truck('Ford', 1976);
var wrangler = new Jeep('Wrangler', 1980, 'Black');

driveIt(chevy);
driveIt(ford);
driveIt(wrangler);

console.log(`-- The following vehicles have been added to the racetrack --
`);

for (let c = 0; c < racetrack.length; c++) {
    console.log(`${racetrack[c].constructor.name} : ${racetrack[c].model}`);
}

