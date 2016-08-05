var apiKey = require('./../.env').apiKey;

function User(userName) {
  this.name = userName;
}

User.prototype.searchName = function(pageNumber, displaySearchResult) {
  $.get('https://api.github.com/search/users?q=' + this.name + '&access_token=' + apiKey + '&page=' + pageNumber).then(function(response){
    console.log(pageNumber);
    var total = response.items.length;
    for(j=0; j<total; j++) {
      displaySearchResult(response.total_count, response.items[j].avatar_url, response.items[j].login, response.items[j].html_url, j);
      console.log(response.items[j].login);
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
