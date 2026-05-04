---
layout: landmark
title: "Case Prep"
permalink: /case-prep/
hide_page_subtitle: true
---

{% assign cases = site.pages | where_exp: "p", "p.path contains 'Landmark/case-prep/surgeries/'" | sort: 'title' %}

<ul class="case-list">
{% for case in cases %}
  <li><a href="{{ case.url | relative_url }}">{{ case.title | default: case.slug }}</a></li>
{% endfor %}
</ul>

---

## About Case Prep

Operative prep briefs for the cases you're most likely to see on service — indications, step-by-step workflow, critical anatomy, informed-consent highlights, and rapid-fire questions worth having rehearsed the night before. Each page follows the canonical section order established in `mals` so you always know where to find what you need.

<style>
.case-list {
  columns: 2;
  column-gap: 2.5rem;
  list-style: none;
  padding-left: 0;
  margin: 1.25rem 0 0 0;
}

.case-list li {
  break-inside: avoid;
  margin-bottom: 0.75rem;
}

.case-list a {
  font-weight: 600;
}

@media (max-width: 768px) {
  .case-list {
    columns: 1;
  }
}
</style>
