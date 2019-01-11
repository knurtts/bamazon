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
        placeOrder(answer.prodId, answer.count);
    });
};

function placeOrder(id, count) {

    connection.query("SELECT * FROM products WHERE ?",
    {
        id: id
    }, 
    function(err, res) {
        var quantity = res[0].stock_quantity;
        var name = res[0].product_name;
        var price = res[0].price * count;
        if (quantity < count) {
            console.log("We only have "+quantity+" "+name+" in stock.")
            console.log("Please try again.");
            start();
        } else {
            var newNum = quantity-count;
            connection.query("UPDATE products SET ? WHERE ?",
            [{
                stock_quantity: newNum
            },
            {
                id: id
            }],
            function(err, res) {
                console.log("Order placed for "+count+" "+name+"!");
                console.log("Total: $"+price);
            });
        }
        connection.end();
    });
};

start();
