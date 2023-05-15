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
##### AFter logging into phpMyAdmin for MySQL:
1. Create a database named `dictionary` with a table called `users_login`.
2. The `users_login` table should consist of four columns: `id` (auto-increment), `fullname`, `email` (UNIQUE), and `password`.
