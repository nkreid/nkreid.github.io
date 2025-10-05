---
layout: landmark
title: "Topic Review"
permalink: /landmark/topic-review/
hide_page_subtitle: true
---

BTK ABSITE review notes transcribed below with edits and additions from BUMC education conferences. Pick a topic below to open a clean, continuous page without the old PDF artifacts.

<ul class="topic-toc">
{% assign topics = site.pages | where_exp: "p", "p.path contains 'Landmark/topic-review/topics/'" | sort: 'title' %}
{% for topic in topics %}
  <li><a href="{{ topic.url | relative_url }}">{{ topic.title }}</a></li>
{% endfor %}
</ul>

<style>
.topic-toc {
  columns: 2;
  column-gap: 2.5rem;
  list-style: none;
  padding-left: 0;
  margin-top: 2.5rem;
}

.topic-toc li {
  margin-bottom: 0.75rem;
  break-inside: avoid;
}

.topic-toc a {
  font-weight: 600;
}

@media (max-width: 768px) {
  .topic-toc {
    columns: 1;
  }
}
</style>
