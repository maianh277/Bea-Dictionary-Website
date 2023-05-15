# Dictionary Website

## Table of content
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is an online resource that provides definitions and other information about words in various languages. This type of website can be useful for anyone who wants to learn more about a particular word or for people who need to look up the meaning of words they come across while reading or writing.
	
## Technologies
Project is created with:
* Frontend: ReactJS + TailwindCSS
* Backend: ExpressJS
* Database: MySQL
	
## Setup
* For running frontend: 
`cd client`
`npm start`
* For running backend:
`cd server`
`npm start`
* Database: Using XAMPP to run MySQL 
After into phpAdmin, 
1. Create `dictionay` database with a row called `users_login`.
2. `users_login` row has 4 column `id` (auto incresment), `fullname`, `email` (UNIQUE), `password`.
