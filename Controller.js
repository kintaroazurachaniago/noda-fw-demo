/* File name : Controller.js */

const { DB } = require('noda-fw') /* require db */

/* Setting db */
var App, User /* Deklarasi database dan table */
setTimeout(async _ => { /* Menggunakan asyncronus programming serta timeout */
	App = await DB.createDatabase('app') /* Menginisialisasi database */
	User = await App.createTable('users') /* Menginisialisasi table */
})

const Controller = {
	home : {
		index : (req, res) => {
			res.view('home.spa', { title : 'Home page' })
		},
		about : (req, res) => {
			res.view('about.spa', { title : 'About page' })
		},
		contact : (req, res) => {
			res.view('contact.spa', { title : 'Contact page' })
		}
	}
}

module.exports = Controller