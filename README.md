# Diary App

This is a simple diary app that allows you to write and save your thoughts. In its current form it exists in the back end only, but we plan to add front end in the future. It currently allows you to create, read, update, and delete entries. It uses a database to store the entries.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

You will first have to clone the repository to your local machine. You can do this by running the following command in your terminal:

```
git clone ("REPO LINK")
```
Make sure you CD into the directory you cloned the repo into and then run the following command to install all the dependencies:

```
npm install -d
``` 

You now need to set up your own local database to store your entries. Go to ElephantSQL or your choice of DB host and create a new instance. Now go to the project and create a new .env file. Here you will need to input your DB_URL and set it equal to the URL of your new database. Ensure you also set the PORT=3000 as well. Now you will connect the project to your own DB. You can do this by running the following command in your terminal:

```
npm run setup-db
```

You will now be connected to the Database and can start using the app.

## Usage

To start the app, run the following command in your terminal:

```
npm start
```

You can now use the app by going to the following URL in your browser:

```
http://localhost:3000/
```
By accessing the /diary route, you will be able to see all the entries you have made. You can also access the /diary/:id route to see a specific entry. By using something that can make HTTP requests, you can also create, update, and delete entries. You do this using a POST, PUT, and DELETE request respectively.

## Credits

Developed By:

* Jojo
* Farhan
* Haroon
