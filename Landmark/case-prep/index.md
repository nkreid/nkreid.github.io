---
layout: landmark
title: "Case Prep"
permalink: /landmark/case-prep/
hide_page_subtitle: true
---

Compact operative roadmaps that make it easy to prep for cases in under 5 minutes. 

{% assign topics = site.pages | where_exp: "p", "p.path contains 'Landmark/case-prep/surgeries/'" | sort: 'title' %} {% for topic in topics %}
{{ topic.title }}
{% endfor %}
<style> .topic-toc { columns: 2; column-gap: 2.5rem; list-style: none; padding-left: 0; margin-top: 2.5rem; } .topic-toc li { margin-bottom: 0.75rem; break-inside: avoid; } .topic-toc a { font-weight: 600; } @media (max-width: 768px) { .topic-toc { columns: 1; } } </style>
