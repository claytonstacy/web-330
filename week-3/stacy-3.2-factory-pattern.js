/*
============================================
Title: Assignment 3.2
Author: Professor Krasso
Date: 16 February 2020
Modified By: Clayton Stacy
Description: The Factory Pattern
===========================================
*/ 
//Start program
//Import header and log to the console
var header = require('../Stacy-header');
console.log(header.display('Clayton', 'Stacy', '3.2 The Factory Pattern' ));

function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
};

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7;
};

/*Create two (2) new Database classes, Oracle and Informix.
The Oracle classes constructor will take one argument (properties array)
The Oracle class should have four (4) properties, username, password, server, and version
*/
function Oracle(properties) {
    this.username = properties.username || "o-admin";
    this.password = properties.password || "o-secret";
    this.server = properties.server || "localhost:3000";
    this.version = properties.version || 11.7;
};

/*The Informix classes constructor will take one argument (properties array)
The Informix class should have three (3) properties, username, password, and server
*/
function Informix(properties) {
    this.username = properties.username || "i-admin";
    this.password = properties.password || "i-secret";
    this.server = properties.server || "localhost:5000";
}

function DatabaseFactory () {};

//Update the createDatabase functions if…else block to handle the two newly created classes
DatabaseFactory.prototype.createDatabase = function(properties) {
    if(properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    }
    if (properties.databaseType === "Oracle"){
        this.databaseClass = Oracle;

    }
    if (properties.databaseType === "Informix") {
        this.databaseClass = Informix;
    } 
    if (properties.databaseType === "MySql") {
        this.databaseClass = MySql;
    }
    return new this.databaseClass(properties);
};


var oracleFactory = new DatabaseFactory();
var informixFactory = new DatabaseFactory();

//Create a new oracleFactory and call the createDatabase prototype function (supply your own default values)
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "clayton",
    password: "sortOfSecret",
    version: "12.2"
});

// Create a new informixFactory and call the createDatabase prototype function (supply your own default values)
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "stacy",
    password: "notSecret"
});


// Output the results
console.log(oracle instanceof Oracle);
console.log(oracle);

console.log(informix instanceof Informix);
console.log(informix);