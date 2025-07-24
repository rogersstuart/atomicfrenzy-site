---
layout: default
title: products
permalink: /products/
---

# Products

<div class="product-grid">
  {% for product in site.products %}
    <div class="product-card">
      <a href="{{ product.url }}">
        <img src="{{ product.image }}" alt="{{ product.title }}">
        <h3>{{ product.title | truncate: 50 }}</h3>
        <p class="price">{{ product.price }}</p>
      </a>
    </div>
  {% endfor %}
</div>
