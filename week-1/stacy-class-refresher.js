/*
============================================
Title: Assignment 1.3
Author: Professor Krasso
Date: 16 February 2020
Modified By: Clayton Stacy
Description: Class Refresher
============================================
*/ 
//Start program
//Import header and log to the console
var header = require('../Stacy-header');
console.log(header.display('Clayton', 'Stacy', '1.3 Class Refresher' ));

/*
Create a class function that creates a cellphone object with the following properties:
manufacture, model, color, and price, along with a get details, get price, and get model function
*/
function cellPhone(manufacturer, model, color, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;
    this.getDetails = function() {
        return `-- DISPLAYING CELL PHONE DETAILS --
Manufacturer: ${this.manufacturer}
Model: ${this.model}
Color: ${this.color}
Price: ${this.price}`;
    }
    this.getPrice = function() {
        return this.price;
    }
    this.getModel = function() {
        return this.model;
    }
}

//Use the class function function to create a new cellphone using any default values
var cell = new cellPhone('Samsung', 'Galaxy S10', 'Blue', 999);

//Check the new object by logging the getDetails function to the console
console.log(cell.getDetails());
//End program