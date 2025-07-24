---
layout: default
title: projects
permalink: /projects/
---

# Projects

<div class="project-grid">
  {% for project in site.projects %}
    <div class="project-card">
      <a href="{{ project.url }}">
        <img src="{{ project.image }}" alt="{{ project.title }}">
        <h3>{{ project.title | truncate: 50 }}</h3>
      </a>
    </div>
  {% endfor %}
</div>
