// search.js
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('search-results');

let idx = null;
let pagesIndex = [];

fetch('/landmark/search.json')
  .then(response => response.json())
  .then(data => {
    pagesIndex = data;
    idx = lunr(function () {
      this.ref('url');
      this.field('title');
      this.field('content');

      pagesIndex.forEach(function (doc) {
        this.add(doc);
      }, this);
    });
  });

searchInput.addEventListener('input', function () {
  const query = this.value.trim();
  resultsContainer.innerHTML = '';

  if (query.length < 2) return;

  const results = idx.search(query);
  if (results.length === 0) {
    resultsContainer.innerHTML = '<p>No results found</p>';
    return;
  }

  results.forEach(result => {
    const page = pagesIndex.find(p => p.url === result.ref);
    const div = document.createElement('div');
    div.innerHTML = `<a href="${page.url}"><strong>${page.title}</strong></a>`;
    resultsContainer.appendChild(div);
  });
});
