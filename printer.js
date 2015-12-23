//Print out message
function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badge(s) and " + points
	 + " points in Javascript";
	console.log(message);
}

//Print out error messages
function printError (e) {
	console.error(e.message);
}

module.exports.print = printMessage;
module.exports.printError = printError;