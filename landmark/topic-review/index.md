---
layout: landmark
title: Topic Reviews
permalink: /landmark/topic-review/
---

## Curated Topic Reviews

Use these rapid-fire topic reviews to refresh high-yield information before exams, rounds, or call.

{% assign reviews = site.topic_reviews | sort: 'title' %}
<div class="card-list">
  {% for review in reviews %}
    <div class="card">
      <h3><a href="{{ review.url | relative_url }}">{{ review.title }}</a></h3>
      <p class="card-meta">{{ review.exam_focus }}{% if review.difficulty %} • {{ review.difficulty }}{% endif %}</p>
      {% if review.high_yield_pearls %}
        <ul>
          {% for pearl in review.high_yield_pearls limit:2 %}
            <li>{{ pearl }}</li>
          {% endfor %}
        </ul>
      {% endif %}
      <a class="card-link" href="{{ review.url | relative_url }}">Read the full review →</a>
    </div>
  {% endfor %}
</div>

<style>
.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.card {
  background: #ffffff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 6px 16px rgba(0,0,0,0.08);
  border: 1px solid rgba(12,44,71,0.08);
}

.card h3 {
  margin-top: 0;
}

.card-meta {
  font-style: italic;
  color: #2D5652;
  font-size: 0.95rem;
}

.card ul {
  padding-left: 1.2rem;
  margin: 0.75rem 0 1rem 0;
}

.card-link {
  font-weight: 600;
}
</style>
