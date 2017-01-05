---
title:  "Meetups: Archive"
layout: page
---

{% assign sems = site.array %}

{% for post in site.posts %}

  {% unless
    sems contains post.categories[1] or
    post.categories[1] == site.sem %}

    {% assign sems = sems | push: post.categories[1] %}

  {% endunless %}

{% endfor %}

{% include __modules__/article.html type="meetups" iter=sems %}
