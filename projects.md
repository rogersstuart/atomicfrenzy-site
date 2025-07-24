---
layout: default
title: projects
permalink: /projects/
---

# Projects

<div class="project-grid">
  {% assign sorted_projects = site.projects | sort: 'order' %}
  {% for project in sorted_projects %}
    <div class="project-card">
      <a href="{{ project.url }}">
        <img src="{{ project.image }}" alt="{{ project.title }}">
        <h3>{{ project.title | truncate: 50 }}</h3>
      </a>
    </div>
  {% endfor %}
</div>
