var request = require('request');

var GITHUB_USER = "zephyrsin";
var GITHUB_TOKEN = "527676dda5bd7ff3fc8fe35eb21789b64bb40028";
var repoOwner = "jquery";
var repoName = "jquery";

console.log('Welcome to the GitHub Avatar Downloader!');

var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

console.log(requestURL);

//function getRepoContributors(repoOwner, repoName, cb) {
  // ...
//}

//getRepoContributors("jquery", "jquery", function(err, result) {
//  console.log("Errors:", err);
 // console.log("Result:", result);
//});
