---
layout: landmark
title: Search
permalink: /landmark/search/
---

<h1>Search Landmark Trials</h1>
<input type="text" id="search-input" placeholder="Search by trial name or topic..." class="form-control mb-4">
<ul id="results" class="list-group"></ul>

<script>
  async function fetchData() {
    const res = await fetch('/search.json');
    return await res.json();
  }

  function search(data, query) {
    return data.filter(item => {
      const term = query.toLowerCase();
      return item.title.toLowerCase().includes(term) || item.content.toLowerCase().includes(term);
    });
  }

  function renderResults(results) {
    const list = document.getElementById('results');
    list.innerHTML = '';
    if (results.length === 0) {
      list.innerHTML = '<li class="list-group-item">No results found</li>';
      return;
    }
    results.forEach(result => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      li.innerHTML = `<a href="${result.url}"><strong>${result.title}</strong></a><br><small>${result.content}</small>`;
      list.appendChild(li);
    });
  }

  document.addEventListener('DOMContentLoaded', async () => {
    const data = await fetchData();
    const input = document.getElementById('search-input');

    const params = new URLSearchParams(window.location.search);
    const query = params.get('q');
    if (query) {
      input.value = query;
      const filtered = search(data, query);
      renderResults(filtered);
    }

    input.addEventListener('input', () => {
      const filtered = search(data, input.value);
      renderResults(filtered);
    });
  });
</script>
