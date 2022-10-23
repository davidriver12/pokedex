var searchBar = document.querySelector(".search-bar-input");
var searchBtn = document.querySelector(".search-bar-button");
searchBtn.onclick = function() {
    location.assign('http://localhost:3000/pokemon/' + (searchBar.value));
}