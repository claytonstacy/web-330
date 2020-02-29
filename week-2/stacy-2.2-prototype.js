/*
============================================
Title: Assignment 2.2
Author: Professor Krasso
Date: 16 February 2020
Modified By: Clayton Stacy
Description: Prototypes
============================================
*/ 
//Start program
//Import header and log to the console
var header = require('../Stacy-header');
console.log(header.display('Clayton', 'Stacy', '2.2 Prototypes' ));

var person = {
    getAge: function () {
        return this.age
    }
}
var clayton = Object.create(person, {
    "age": { "value": "43"}, "fullname":{"value":"Clayton Stacy"}
});

console.log(clayton.fullname);
console.log(clayton.getAge());