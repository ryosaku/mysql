//var express = require('express')

var mysql = require ('mysql')

var pool    = mysql.createPool({
	host: '127.0.0.1',
	port: 3306,
	user: 'root',
	password: '',
	database: 'coffee_shop',
	connectionLimit: 100
})

pool.query("select * from staff", showData)

function showData(error, data) {
    console.log(data)
    process.exit()
}
