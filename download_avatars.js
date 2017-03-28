var request = require('request');
var fs = require('fs');

var GITHUB_USER = "zephyrsin";
var GITHUB_TOKEN = "527676dda5bd7ff3fc8fe35eb21789b64bb40028";

var user_input = process.argv.slice(2);
var repoName = user_input[1];
var repoOwner = user_input[0];

console.log('Welcome to the GitHub Avatar Downloader!');

	var requestURL = {
		url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + 
repoOwner + '/' + repoName + '/contributors',
		headers: {
		      'User-Agent': 'Github Avator Downloader'
		}
	};

function getRepoContributors(repoOwner, repoName, cb) {

	request(requestURL, function(err, response, body) {
	if (err) throw err;
  	console.log('Response Status Code:', response.statusCode);
	var parse = JSON.parse(body);
	for (attribute in parse) {
		var filepath = "C:\\Users\\YangLu\\workspace\\github-avatar-downloader\\avatars\\";
		filepath += parse[attribute].login+".jpeg";
		//console.log(parse[attribute].avatar_url);
		downloadImageByURL(parse[attribute].avatar_url,filepath);
	}
	});
}

function downloadImageByURL(url, filePath) {
  // ...
  request(url, function(err,response,body) {
  if (err) throw err;
  }).pipe(fs.createWriteStream(filePath));
  }
	
getRepoContributors(repoOwner, repoName, function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

