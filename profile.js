//Problem: We need a simple way to look at a user's badge count and Javascript points
//Solution: Use Node.js to connect to Treehouse's API to get profile info to print out

var https = require("https");
var printer = require("./printer");

function get(username) {
	//Connect to API URL (https://teamtreehouse.com/username.json)
	var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response){
		var body = "";
		//Read the data
		response.on("data", function(chunk){
			body += chunk;
		});
		
		response.on("end", function() {
			if (response.statusCode === 200) {
				try {
					//Parse the data
					var profile = JSON.parse(body);
					//Print the data
					printer.print(username, profile.badges.length, profile.points.JavaScript);
				} catch(err) {
					//Parse Error
					printer.printError(err);
				}
			} else {
				//Status Code Error
				printer.printError({message: "There was an error getting the profile for " + username + 
					". [" + response.statusCode + "]"});
			}
		});
	}).on("error", printer.printError);
}


module.exports.get = get;












