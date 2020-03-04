/*
============================================
Title: Assignment 3.3
Author: Professor Krasso
Date: 16 February 2020
Modified By: Clayton Stacy
Description: The Singleton Pattern
===========================================
*/ 
//Start program
//Import header and log to the console
var header = require('../Stacy-header');
console.log(header.display('Clayton', 'Stacy', '3.3 The Singleton Pattern' ));

var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
        var postgresDatabase = new Object('Database instance initialized!');
        return postgresDatabase;
    }
    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

function databaseInit() {
    var databaseInstance1 = DatabaseSingleton.getInstance();
    var databaseInstance2 = DatabaseSingleton.getInstance();
    console.log('One database instance ' + (databaseInstance1 === databaseInstance2));
}

databaseInit();

// Create a new function and name it databaseSingletonTest()
function databaseSingletonTest() {
    // Create two new database instances
    var databaseInstance3 = DatabaseSingleton.getInstance();
    var databaseInstance4 = DatabaseSingleton.getInstance();
    // Call the console.log() function and output whether the two instances match
    console.log(`Is there one instance here? ${databaseInstance3 === databaseInstance4}`)
}

// Call the databaseSingletonTest() function
databaseSingletonTest();