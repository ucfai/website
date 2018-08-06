---
title:      MacOS Setup for Groups &amp; Course
layout:     setup
permalink:  /setup/macos/
lastUpdate:
    docker: Aug 03, 2018
    github: Aug 03, 2018
---

## Docker Installation
### Last Updated: {{ page.lastUpdate.docker }}
1. Go to the [Docker Store][docker-win] and download Docker.
1. Proceed through the installation process. You'll be prompted to reboot a few 
    times.
1. You shouldn't encounter any errors &ndash; provided your MacBook was built in 2011 or later. :smile:
1. Open up a Terminal.app and grab the Docker image by typing 
    `docker pull ucfsigai/<group>:latest-cpu` (this should grab **this 
    semester's** image). `<group>` is either `data-science` or `intelligence`.

<br>

## GitHub Installation
### Last Updated: {{ page.lastUpdate.github }}
1. Open Terminal.app
1. Run the following commands to get a copy of a `<group>` repository:
```bash
$  which git # Unless you get "git not found", Git is on your machine! :D
$  cd /where/you/store/sigai/stuff
$  git clone https://github.com/ucfsigai/<group> <group>
```
1. You've now cloned the repository for your `<group>` meetings!
1. **NOTE:** Before every meeting, you should `git pull` to grab the latest changes.

[docker-win]: https://store.docker.com/editions/community/docker-ce-desktop-mac
[github-dsk]: https://desktop.github.com/