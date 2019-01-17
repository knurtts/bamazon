USE bamazon;

CREATE TABLE departments(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
department_id VARCHAR(60),
department_name VARCHAR (60),
over_head_costs DECIMAL(25,2),
PRIMARY KEY (id)
);

ALTER TABLE products
ADD COLUMN product_sales DECIMAL(25,2) AFTER stock_quantity;

UPDATE products SET product_sales=0;