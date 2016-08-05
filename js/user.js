var apiKey = require('./../.env').apiKey;

function User(userName) {
  this.name = userName;
}

User.prototype.getEmail = function() {
  $.get("https://api.github.com/users/" + this.name + "?access_token=" + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
