var fs = require("fs");
var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

if(!fs.existsSync("greetings.txt")) {
  console.log("File not found");
  rl.close();
}

else {
	var greetingsFile = fs.readFileSync("greetings.txt");
	var greetings_string = greetingsFile.toString();
    var greetings = greetings_string.split("\r\n");
    var count=0;
	var index=[];
    rl.question("What is your name? ", function(name) {
       for(var i = 0; count < greetings.length; i++) {
            var n=Math.floor(Math.random() * greetings.length);
			var check=index.includes(n);
			if(!check)
			{
				index.push(n);
				var temp=greetings[n]+", "+name;
				console.log(temp);
				count=count+1;
			}
        }
		
        rl.close();
});
}