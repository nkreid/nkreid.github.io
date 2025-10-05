---
layout: landmark
title: Case Prep Library
permalink: /landmark/case-prep/
---

## Case Prep Playbook

Plan your operative run-throughs with structured case prep guides tailored to the Landmark curriculum.

{% assign cases = site.case_preps | sort: 'title' %}
<div class="card-list">
  {% for case in cases %}
    <div class="card">
      <h3><a href="{{ case.url | relative_url }}">{{ case.title }}</a></h3>
      <p class="card-meta">{{ case.exam_focus }}{% if case.difficulty %} • {{ case.difficulty }}{% endif %}</p>
      {% if case.patient_profile %}
        <p class="card-body">{{ case.patient_profile }}</p>
      {% endif %}
      {% if case.workflow_steps %}
        <ol>
          {% for step in case.workflow_steps limit:3 %}
            <li>{{ step }}</li>
          {% endfor %}
        </ol>
      {% endif %}
      <a class="card-link" href="{{ case.url | relative_url }}">Open the case prep →</a>
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

.card-body {
  margin: 0.5rem 0 0.75rem 0;
}

.card ol {
  padding-left: 1.2rem;
  margin: 0.75rem 0 1rem 0;
}

.card-link {
  font-weight: 600;
}
</style>
