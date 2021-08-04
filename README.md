# ecommerce_back_end


## About this challenge

- In this challenge it is to build a back end for an e-commerce site. Its to take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.

- Internet retail, also known as e-commerce, is the largest sector of the electronics industry, having generated an estimated US$29 trillion in 2017 (Source: United Nations Conference on Trade and Development). E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.



## User Story

- As a manager at an internet retail company the user want a back end for my e-commerce website that uses the latest technologies, so that the company can compete with other e-commerce companies.



## Criteria

- GIVEN a functional Express.js API

- When database name is added, MySQL username, and MySQL password to an environment variable file, then the user able to connect to a database using Sequelize.

- When schema and seed commands are entered, then a development database is created and is seeded with test data.

- When the command to invoke the application is entered, then the server is started and the Sequelize models are synced to the MySQL database.

- When API GET routes in Insomnia Core for categories are opened, products, or tags
then the data for each of these routes is displayed in a formatted JSON.

- When API POST, PUT, and DELETE routes are tested in Insomnia Core, then user able to successfully create, update, and delete data in my database.


## The Program Guidelines

 Its needed to use the 
* MySQL2
* Sequelize
* packages to connect your Express.js API to a MySQL database and 
* the dotenv package, to use environment variables to store sensitive data, like your MySQL username, password, and database name.

* The schema.sql file in the db folder to create your database using MySQL shell commands. 
* The environment variables used to store sensitive data, like  MySQL username, password, and database name.

Seed the Database
* After creating the models and routes, run npm run seed to seed data to your database so that you can test your routes.

Sync Sequelize to the Database on Server Start
* Create the code needed in server.js to sync the Sequelize models to the MySQL database on server start.


## The recording of the working program

###  Catogories GET, GET/id, POST, PUT, DELETE
<img src="./assets/categories.gif" alt="refresh page" height = 600 width= 600 />

###  Products GET, GET/id, POST, PUT, DELETE
<img src="./assets/products.gif" alt="refresh page" height = 600 width= 600 />

###  Tags GET, GET/id, POST, PUT, DELETE
<img src="./assets/tags.gif" alt="refresh page" height = 600 width= 600 />

## Github Repository URL
https://github.com/sindhu-sp/ecommerce_back_end

## Database Models

The database contain the following four models, including the requirements listed for each model:
### Category
* id
(Integer, Doesn't allow null values, Set as primary key ,Uses auto increment)

* category_name
(String, Doesn't allow null values)

### Product
* id    (Integer, Doesn't allow null values, Set as primary key, Uses auto increment)
* product_name
(String, Doesn't allow null values
* price
(Decimal, Doesn't allow null values, Validates that the value is a decimal)
* stock
(Integer, Doesn't allow null values, Set a default value of 10, Validates that the value is numeric)
* category_id
(Integer, References the category model's id )

### Tag
* id
(Integer, Doesn't allow null values, Set as primary key, Uses auto increment)
* tag_name
(String)

### ProductTag
* id
(Integer, Doesn't allow null values, Set as primary key, Uses auto increment)
* product_id
(Integer, References the product model's id)
* tag_id
(Integer, References the tag model's id)

## Associations
* There is a need to execute association methods on the  Sequelize models to create the following relationships between them:
* Product belongs to Category, as a category can have multiple products but a product can only belong to one category.
* Category has many Product models.
* Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products.
* Tag belongs to many Product models.

## Technologies Used:
- MySQL
- Sequelize
- Express.js

## Contributor
* Sindhu Pillai