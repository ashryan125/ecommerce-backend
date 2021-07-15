# E-commerce Back End 

## Description
An application that can be used to track and manage a company's employees

## Table of Contents

* [Built With](#built-with)
* [Installation](#installation)
* [Usage](#usage)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Video of App in Action](#video)

## Built With
* JavaScript
* Node.js
* MySQL
* Inquirer

## Installation
Clone the Github repo.
```https://github.com/ashryan125/employee-tracker.git```

Once in the properly cloned folder, run ```npm install``` to install the following dependencies:
 * Inquirer:  ```npm i inquirer``` to use inquirer.js for question generation
 * MySQL2: ```npm i mysql2``` to use mysql2 for database queries
 * Console Table ```npm i console.table``` for an easy to read console log
 * Alernatively, you can run all at once with ```npm install inquirer mysql2 console.table```


## Usuage
 #### **LOCAL USAGE:** 
 Enter ```npm start``` in your command line and press ```ENTER```.  
 Open Insomnia Core and run ```CRUD``` operations - ``` GET POST PUT DELETE```
## User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
  
## Acceptance Criteria
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Video
![E-Commerce Back End App gif](./sequelize-walkthrough.gif)

[Fullsize video can be found here!](https://drive.google.com/file/d/1uAqn2c1seDkD-F3YFm-N3mc0QXxxcSug/view)