---
layout: landmark
title: "Paper Review"
permalink: /landmark/paper-review/
hide_page_subtitle: true
---

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

{% comment %}
  Catch-all for any paper whose landmark_category isn't in the
  ordered list above (including papers missing the frontmatter
  field entirely). New categories show up here automatically;
  promote them into the ordered list when you're ready.
{% endcomment %}
{% assign other_papers = "" | split: "" %}
{% for paper in papers %}
  {% assign cat = paper.landmark_category | default: "Uncategorized" %}
  {% unless ordered_categories contains cat %}
    {% assign other_papers = other_papers | push: paper %}
  {% endunless %}
{% endfor %}

{% if other_papers.size > 0 %}
<section class="paper-section">
  <h2>Other</h2>
  <ul>
  {% assign sorted_other = other_papers | sort: "title" %}
  {% for paper in sorted_other %}
    <li><a href="{{ paper.url | relative_url }}">{{ paper.title | default: paper.slug }}</a>{% if paper.landmark_category %} <span style="color:#888;font-size:0.9em;">— {{ paper.landmark_category }}</span>{% endif %}</li>
  {% endfor %}
  </ul>
</section>
{% endif %}

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
