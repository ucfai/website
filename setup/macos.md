---
title:      MacOS Setup for Groups &amp; Course
layout:     setup
permalink:  /setup/macos/
lastUpdate:
    docker: Aug 03, 2018
    github: Aug 03, 2018
    newton: Sep 06, 2018
---

<div class="alert alert-light" markdown="1">
<div class="d-lg-flex flex-lg-row py-2">
    <h2 class="col-12 col-lg-8 text-center text-lg-left m-lg-0"> Connecting to the Supercomputer (Newton &amp; Stokes) </h2>
    <div class="col-12 col-lg-4 d-flex align-items-center">
        <p class="m-auto" style="white-space: nowrap;">Last Updated: <span class="badge badge-primary">{{ page.lastUpdate.newton }} </span></p>
    </div>
</div>

1. Run `mkdir -p ~/.ssh/`
1. Import your `sigai.student<N>.zip` file into your `~/Downloads`.
1. Run `unzip ~/Downloads/sigai.student<N>.zip -d ~/Downloads/sigai.student<N>`
1. Followed by `cp ~/Downloads/sigai.student<N>/sig* ~/.ssh/`
1. Then execute `cat ~/Downloads/sigai.student<N>/config >> ~/.ssh/config`
1. Provided you're on the UCF network, you should now be able to access Newton
using `ssh sigai.newton` and Stokes using `ssh sigai.stokes`.
</div>

<div class="alert alert-light" markdown="1">
<div class="d-lg-flex flex-lg-row py-2">
    <h2 class="col-12 col-lg-8 text-center text-lg-left m-lg-0"> GitHub Installation </h2>
    <div class="col-12 col-lg-4 d-flex align-items-center">
        <p class="m-auto" style="white-space: nowrap;">Last Updated: <span class="badge badge-primary">{{ page.lastUpdate.github }} </span></p>
    </div>
</div>

1. Open Terminal.app
1. Run the following commands to get a copy of a `<group>` repository:
```bash
$  which git # Unless you get "git not found", Git is on your machine! :D
$  cd /where/you/store/sigai/stuff
$  git clone https://github.com/ucfsigai/<group> <group>
```
1. You've now cloned the repository for your `<group>` meetings!
1. **NOTE:** Before every meeting, you should `git pull` to grab the latest changes.
</div>

<div class="alert alert-light" markdown="1">
<div class="d-lg-flex flex-lg-row py-2">
    <h2 class="col-12 col-lg-8 text-center text-lg-left m-lg-0"> Docker Installation </h2>
    <div class="col-12 col-lg-4 d-flex align-items-center">
        <p class="m-auto" style="white-space: nowrap;">Last Updated: <span class="badge badge-primary">{{ page.lastUpdate.docker }} </span></p>
    </div>
</div>

1. Go to the [Docker Store][docker-mac] and download Docker.
1. Proceed through the installation process. You'll be prompted to reboot a few 
    times.
1. You shouldn't encounter any errors &ndash; provided your MacBook was built in 2011 or later. :smile:
1. Open up a Terminal.app and grab the Docker image by typing 
    `docker pull ucfsigai/<group>:latest-cpu` (this should grab **this 
    semester's** image). `<group>` is either `data-science` or `intelligence`.
</div>

[docker-mac]: https://store.docker.com/editions/community/docker-ce-desktop-mac
[github-dsk]: https://desktop.github.com/