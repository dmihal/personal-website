window.onpopstate = setPage;

function setPage() {
  var pageClass = location.pathname.split('/').join(' ').trim();
  document.body.className = pageClass.length > 0 ? 'content ' + pageClass : '';
}

function handleLinkClick(e) {
  e.preventDefault();
  var url = e.currentTarget.href.replace(/^\//, "");
  history.pushState(null, e.currentTarget.textContent, url);
  setPage();
}
Array.from(document.querySelectorAll('header a')).forEach(function(link) {
  link.addEventListener('click', handleLinkClick);
});

setPage();
