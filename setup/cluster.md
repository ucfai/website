---
title:      Accessing the Clusters
layout:     setup
permalink:  /setup/cluster/
lastUpdate:
    lnx: Oct 14, 2018
    osx: Oct 14, 2018
    win: Oct 14, 2018
---

{% for cluster in site.data.setup.cluster %}
<div class="alert alert-light" markdown="1" id="{{ cluster.name | lower }}">
<div class="d-lg-flex flex-lg-row py-2">
<h2 class="col-12 col-lg-8 text-center text-lg-left m-lg-0"> On {{ cluster.name }}</h2>
<div class="col-12 col-lg-4 d-flex align-items-center">
    <p class="m-auto" style="white-space: nowrap;">Last Updated:
    <span class="badge badge-primary">{{ cluster.lastUpdate}} </span></p>
</div>
</div>

{% unless cluster.notes == nil %}
<div class="alert alert-warning">
<p class="mb-0" markdown="1">{{ cluster.notes }}</p>
</div>
{% endunless %}

{% for step in cluster.steps %}
- {{ step }}{% endfor %}

</div>  
{% endfor %} 

