---
layout: page
title: About
permalink: /about/
---

<div class="row">
  <div class="col-12 col-lg-8">
    <h1> {{ page.title }} <span class="sigai-brand"></span></h1>
  </div>
  <div class="col-12 col-lg-4">
    <p><a href="/data-science/">Data Science Group</a>: every Mon at 6:00pm.</p>
    <p><a href="/intelligence/">Intelligence Group</a>: every other Wed at 6:00pm.</p>
  </div>
</div>

<div class="row">
  <div class="col-12 col-lg-8">
    <h2 class="h2"> Leadership </h2>
    <div class="row mb-5">
      {% for lead in site.data.coordinators[site.sem] %}
        <div class="col-12 mt-3 mb-3 d-flex">
          {% include modules/card-coordinator.html lead=lead %}
        </div>
      {% endfor %}
    </div>
    <h2 class="h2"> Sponsorship </h2>
    <div class="row">
      {% for sponsor in site.data.sponsors %}
      <div class="col-lg-6 col-md-6 col-12 mt-3 mb-3 d-flex">
        <a class="card p-3 border-0 d-flex bg-transparent" style="flex: 1; box-sizing: border-box; max-height: 200px; vertical-align: middle;" href="{{ sponsor.link }}">
          <img class="card-img-top" src="{{ sponsor.img | prepend: '/assets/images/sponsors/' }}" alt="{{ sponsor.name }}" style="max-height: calc(200px - 2rem);">
        </a>
      </div>
      {% endfor %}
    </div>
  </div>
  <div class="col-12 col-lg-4">
  
  </div>
</div>