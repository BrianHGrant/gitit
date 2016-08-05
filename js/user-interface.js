var User = require('./../js/user.js').userModule;


var displaySearchResult = function(totalCount, avatarURL, login, pageLink, j) {
  $('#gallery-row0').append('<div class="col-sm-2 user-boxes" id="gallery-user' + j +'"><img src="" alt="'+ login +'" class = "img-circle img-responsive user-image" id="user-avatar' + j +'"><a href="' + pageLink +'"><p class="name"id ="user-title' + j +'"></p></a></div>')
  $('#showCount').text('Search Returned: ' + totalCount + ' Results');
  $('#user-avatar' + j).attr('src', avatarURL);
  $('#user-title' + j).text(login);
};

var displayUser = function(avatar_url, login, bio, created_at, location, hireable) {
  $('#user-gallery').hide();
  $('#gallery-header').hide();
  $('#user-space').show();
  $('#single-user-img').attr("src", avatar_url);
  $('#single-user-title').text(login);
  $('#single-user-bio').text(bio);
  $('#single-user-created-at').text(created_at);
  $('#single-user-location').text(location);
  $('#single-user-hireable').text(hireable);
}

var displayRepos = function(totalCount) {
  $('#single-user-repo-totalCount').text(totalCount);
}

var displayLanguages = function(languageList) {
  languageList.forEach(function(language) {
    $('#single-user-repo-languages').append('<li>'+ language +'</li>');
  })
}

var runSearch = function(searchInput, pageNumber){
  searchInput.searchName(pageNumber, displaySearchResult, displayUser, displayRepos, displayLanguages);
}

$(document).ready(function() {
  var pageNumber = 1;
  $('#username-search').submit(function(event) {
    $('#user-space').hide();
    $('#gallery-row0').html("");
    $('#user-gallery').show();
    $('#gallery-header').show();
    event.preventDefault();
    var userName = $('#userName').val();
    var currentUser = new User(userName);
    runSearch(currentUser, pageNumber);
    $('#next-page').submit(function(event) {
      $('#gallery-row0').html("");
      event.preventDefault();
      pageNumber = pageNumber + 1;
      runSearch(currentUser, pageNumber);
    });
    $('#prev-page').submit(function(event) {
      $('#gallery-row0').html("");
      event.preventDefault();
      if (pageNumber > 1) {
        pageNumber = pageNumber - 1;
      }
      runSearch(currentUser, pageNumber);
    });
    $('#user-back').click(function() {
      $('#user-back').hide();
      $('#user-space').hide();
      $('#user-gallery').show();
      $('#gallery-header').show();
    })
  });
});
