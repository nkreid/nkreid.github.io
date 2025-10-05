---
layout: landmark
title: "Paper Review"
permalink: /landmark/paper-review/
---

# Paper Review

Landmark trials organized by service line so you can move directly into the data that matters for your next call shift, journal club, or oral boards session.

{% assign papers = site.pages | where_exp: "p", "p.path contains 'Landmark/paper-review/papers/'" %}
{% assign ordered_categories = "Emergency General Surgery|Trauma|Colorectal|Breast|Vascular" | split: "|" %}
{% assign grouped = papers | group_by: "landmark_category" %}

{% for category in ordered_categories %}
  {% assign bucket = grouped | where: "name", category | first %}
  {% if bucket %}
  <section class="paper-section">
    <h2>{{ category }}</h2>
    <ul>
    {% assign sorted = bucket.items | sort: "title" %}
    {% for paper in sorted %}
      <li><a href="{{ paper.url | relative_url }}">{{ paper.title | default: paper.slug }}</a></li>
    {% endfor %}
    </ul>
  </section>
  {% endif %}
{% endfor %}

<style>
.paper-section {
  margin-top: 2.5rem;
}

.paper-section ul {
  columns: 2;
  column-gap: 2.5rem;
  list-style: none;
  padding-left: 0;
  margin: 1.25rem 0 0 0;
}

.paper-section li {
  break-inside: avoid;
  margin-bottom: 0.75rem;
}

.paper-section a {
  font-weight: 600;
}

@media (max-width: 768px) {
  .paper-section ul {
    columns: 1;
  }
}
</style>
