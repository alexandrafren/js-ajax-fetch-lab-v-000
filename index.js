function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '49910721e4afe7ffbbbea0cb782d7f21c1eb6f58';
}

function forkRepo() {
  const token = getToken();
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
}).then(res => res.json()).then(json => showResults(json))
}

https://github.com/AAM77/js-ajax-hitting-apis-lab-v-000/blob/master/js/index.js
function showResults(json) {
  //use this function to display the results from forking via the API
  $("#results").append(`<a href="${json.html_url}">${json.name}</a>`)
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
