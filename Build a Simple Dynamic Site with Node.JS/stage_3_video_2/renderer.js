var fs = require("fs");

function mergeValues(values, content) {
	//Cycle over the keys
	for (var key in values) {
		//Replace all {{key}} with the value from the values object
		values.avatarUrl === values["avatarUrl"]
		content = content.replace("{{}}", values [key]};
}
	//return merged content
	return content;
}

function view(templateName, values, response) {
	//Read from the template files
	var fileContents = fs.readFileSync('./views/' + templateName + ".html", {encoding: "utf8"});
	//Insert values into the content
	fileContents = mergeValues(values, fileContents);
	//Write out the contents to the response
	response.write(fileContents);
}
 
module.exports.view = view;

