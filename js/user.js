var apiKey = require('./../.env').apiKey;

function User(userName) {
  this.name = userName;
}

getUser = function(user, displayFunction) {
  $.get('https://api.github.com/users/'+ user +'?access_token=' + apiKey).then(function(response){
    displayFunction(response.avatar_url, response.login, response.bio, response.created_at, response.location, response.hireable);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

getRepos = function(user, displayFunction) {
  $.get('https://api.github.com/users/' + this.name + '&access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

User.prototype.searchName = function(pageNumber, displaySearchResult, displayUser, displayRepos) {
  $.get('https://api.github.com/search/users?q=' + this.name + '&access_token=' + apiKey + '&page=' + pageNumber).then(function(response){
    console.log(pageNumber);
    var total = response.items.length;
    for(j=0; j<total; j++) {
      displaySearchResult(response.total_count, response.items[j].avatar_url, response.items[j].login, response.items[j].html_url, j);
    }
  }).then(function(response){
    $('.user-image').click(function(event) {
      var searchUser = this.alt;
      getUser(searchUser, displayUser);
      getRepos(searchUser, displayRepos);
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
