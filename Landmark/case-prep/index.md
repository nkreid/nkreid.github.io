---
layout: landmark
title: "Case Prep"
permalink: /landmark/case-prep/
hide_page_subtitle: true
---

Compact operative roadmaps that make it easy to prep for cases in under 5 minutes. 

<ul class="surgery-toc">
{% assign surgeries = site.pages | where_exp: "p", "p.path contains 'Landmark/case-prep/surgeries/'" | sort: 'title' %}
{% for surgery in surgeries %}
  <li><a href="{{ surgery.url | relative_url }}">{{ surgery.title }}</a></li>
{% endfor %}
</ul>

<style>
.surgery-toc {
  columns: 2;
  column-gap: 2.5rem;
  list-style: none;
  padding-left: 0;
  margin-top: 2.5rem;
}

.surgery-toc li {
  margin-bottom: 0.75rem;
  break-inside: avoid;
}

.surgery-toc a {
  font-weight: 600;
}
