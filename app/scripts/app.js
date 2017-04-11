var firebase = require('firebase')
var React = require('react')
var ReactDOM = require('react-dom')
var Routes = require('./routes')

var config = {
    apiKey: "AIzaSyDEBBtKbuskOpR3xdLfi_J5c6evnoaQP6s",
    authDomain: "react-fb-dd518.firebaseapp.com",
    databaseURL: "https://react-fb-dd518.firebaseio.com"
}

firebase.initializeApp(config)

var mountNode = document.getElementById('app')

ReactDOM.render(Routes, mountNode)