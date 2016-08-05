var User = require('./../js/user.js').userModule;

$(document).ready(function() {
  $('#username-search').submit(function(event) {
    event.preventDefault();
    var userName = $('#userName').val();
    console.log(userName)
    var currentUser = new User(userName);
    currentUser.getEmail();
  });
});
