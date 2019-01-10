const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host:"127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});


function start() {
    inquirer.prompt([
        {
            type: "input",
            name: "prodId",
            message: "What is the ID of the product you would like to buy?"
        },
        {
            type: "input",
            name: "count",
            message: "How many would you like?"
        }
    ]).then(function(answer) {
        placeOrder(answer);
    });
};

function placeOrder(arg) {
        //check product quantity
        //if db has too few log "We don't have that many"
            //log "We don't have that many"
            //end connection
            //go back to begining of prompt
        //else if db has enough, fill the order
            //subtract count from the quantity
            //take price * count store in var total
            //display total
            //end connection
        console.log("Success!");        
};

start();
