const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');
const Sequelize = require('Sequelize');
const app = express();
const router = express.Router();

app.use(bodyParser.json())


const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: '/Users/dshambrook/Desktop/chinook-database-master/ChinookDatabase/DataSources/Chinook_Sqlite_AutoIncrementPKs.sqlite'
  });

    const Artist = sequelize.define('Artist', {
      ArtistId: {
        type: Sequelize.INTEGER, 
        autoincrement: true,
        primaryKey: true
      },
      Name: Sequelize.STRING
    },
    {
      freezeTableName: true,
      timestamps: false
    })

    app.listen(3000)
    
