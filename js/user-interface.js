var User = require('./../js/user.js').userModule;


var displaySearchResult = function(totalCount, avatarURL, login, pageLink, j) {
  $('#gallery-row0').append('<div class="col-sm-2" id="gallery-user' + j +'"><img src="" alt="user avatar" class = "img-circle img-responsive" id="user-avatar' + j +'"><p class="name"id ="user-title' + j +'"></p></div>')
  $('#showCount').text('Search Returned: ' + totalCount + ' Results');
  $('#user-avatar' + j).attr('src', avatarURL);
  $('#user-title' + j).text(login);
};
$(document).ready(function() {
  var pageNumber = 0;
  $('#username-search').submit(function(event) {
    event.preventDefault();
    var userName = $('#userName').val();
    console.log(userName);
    var currentUser = new User(userName);
    currentUser.searchName(pageNumber, displaySearchResult);
    $('#next-page').submit(function(event) {
      $('#gallery-row0').html("");
      event.preventDefault();
      pageNumber = pageNumber + 1;
      console.log(pageNumber);
      currentUser.searchName(pageNumber, displaySearchResult);
    })
  });
});
