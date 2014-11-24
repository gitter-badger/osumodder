/*
	getModdingSessions(): Return the locally saved Modding Sessions
	saveModdingSessions(): Locally save the current Modding Sessions
	loadModdingSessions(): Load the locally saved Modding Sessions into the DOM
	clearModdingSessions(): Clear the locally saved Modding Sessions

	getUserData(): Return the locally saved User Data
	saveUserData(): Locally save the current User Data
	loadUserData(): Load the locally saved User Data into the DOM
	clearUserData(): Clear the locally saved User Data
*/

Storage.prototype.setObject = function(key, value) {

	this.setItem(key, JSON.stringify(value));

}


Storage.prototype.getObject = function(key) {

	var value = this.getItem(key);

	return value && JSON.parse(value);

}


var getModdingSessions = function() {

	return localStorage.getObject("Beyurn");

}


var saveModdingSessions = function() {

	localStorage.setObject("Beyurn", moddingSessions);

}


var loadModdingSessions = function() {

	var selfBeyurn = localStorage.getObject("Beyurn") || undefined;
	if(!selfBeyurn) return;

	window.moddingSessions = selfBeyurn;

}


var clearModdingSessions = function() {

	localStorage.setObject("Beyurn", null);
	window.moddingSessions = [];

}


var getUserData = function() {

	return localStorage.getObject("Modder");

}


var saveUserData = function() {

	localStorage.setObject("Modder", userData);

}


var loadUserData = function() {

	var selfModder = localStorage.getObject("Modder") || undefined;
	if(!selfModder) return;

	window.userData = selfModder;

}


var clearUserData = function() {

	localStorage.setObject("Modder", null);
	window.userData = {};

}



