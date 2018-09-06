---
layout: base
---

<div class="row py-5">
  <div class="col-12 col-lg-10 mx-auto">
    <h1 class="text-center">{{ page.title }}</h1>
    <div class="alert alert-primary">
      <p class="mb-0">
          This should take you though all the steps you need for the workflow 
          that we use to run lectures and workshops. If none of these steps 
          work, please ping the coordinators in Slack.
      </p>
    </div>
    <div class="alert alert-danger">
      <p class="mb-0"> <strong>NOTE:</strong> We're currently (Fall 2018), only, 
        supporting the use of the Supercomputers (Newton / Stokes), this means 
        that you only need to proceed through the <strong>Connecting to the 
        Supercomputer</strong> steps! </p>
    </div>

    <div class="nav nav-fill nav-pills">
        <a href="/setup/windows" class="nav-item nav-link{% if page.url contains 'windows' %} active{% endif %}"> <i class="fab fa-windows"></i> Setup for Windows </a>
        <a href="/setup/macos" class="nav-item nav-link{% if page.url contains 'macos' %} active{% endif %}"> <i class="fab fa-apple"></i> Setup for Apple </a>
        <a href="/setup/linux" class="nav-item nav-link{% if page.url contains 'linux' %} active{% endif %}"> <i class="fab fa-linux"></i> Setup for Linux </a>
    </div>
  </div>
  <!-- <div class="col-12 col-lg-4 d-flex"> -->
    <!-- <ul class="fa-ul m-auto">
      <li><h3><i class="fab fa-windows"></i> Windows </li></h3>
      <li><h3><i class="fab fa-apple"></i> Apple </li></h3>
      <li><h3><i class="fab fa-linux"></i> Linux </li></h3>
    </ul> -->
  <!-- </div> -->
</div>

<div class="row">
  <div class="col-12 col-lg-10 mx-auto">
    {{ content }}
  </div>
  <!-- <div class="col-12 col-lg-4">
    {{ page.excerpt | remove: "<p>" | remove: "</p>" }}
  </div> -->
</div>