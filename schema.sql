DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(60),
department_name VARCHAR (60),
price DECIMAL(25,2),
stock_quantity INTEGER(30),
PRIMARY KEY (id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("The Infinity Gauntlet", "Legendary Items", 150000, 1);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Mjolnir", "Legendary Items", 90000, 1);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("The One Ring", "Legendary Items", 10000000, 1);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Mentos", "Food", 3, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Skittles", "Food", 1.50, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Olive Oil", "Food", 9.99, 65);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Dishwasher", "Apliances", 500, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Microwave", "Apliances", 89.99, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Amazon Alexa", "Wiretap", 29.99, 75);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Google Home", "Wiretap", 24.99, 100);