---
layout: landmark
title: "Case Prep"
permalink: /landmark/case-prep/
hide_page_subtitle: true
---

Compact operative roadmaps that make it easy to add new cases—drop a Markdown file in this directory and the page updates automatically.

{% assign cases = site.pages | where_exp: "c", "c.path contains 'Landmark/case-prep/surgeries/'" %}
{% assign grouped = cases | group_by: 'procedure' | sort: 'name' %}

{% for group in grouped %}
<section class="case-section">
  <h2>{{ group.name }}</h2>
  <div class="case-grid">
    {% assign sorted_cases = group.items | sort: 'title' %}
    {% for case in sorted_cases %}
    <article class="case-card">
      <h3><a href="{{ case.url | relative_url }}">{{ case.title }}</a></h3>
      <p class="case-meta">{{ case.exam_focus }}{% if case.difficulty %} • {{ case.difficulty }}{% endif %}</p>
      {% if case.patient_profile %}
      <p class="case-body">{{ case.patient_profile }}</p>
      {% endif %}
      <a class="case-link" href="{{ case.url | relative_url }}">Open prep →</a>
    </article>
    {% endfor %}
  </div>
</section>
{% endfor %}

<style>
.case-section {
  margin-top: 2.5rem;
}

.case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.case-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 1.75rem;
  box-shadow: 0 8px 22px rgba(12,44,71,0.12);
  border: 1px solid rgba(12,44,71,0.08);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.case-card h3 {
  margin: 0;
}

.case-meta {
  font-style: italic;
  color: #2D5652;
}

.case-body {
  margin: 0;
}

.case-link {
  font-weight: 600;
}
</style>
