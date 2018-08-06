---
title:      Linux Setup for Groups &amp; Course
layout:     setup
permalink:  /setup/linux/
lastUpdate:
    docker: Aug 03, 2018
    github: Aug 03, 2018
---

## Docker Installation
### Last Updated: {{ page.lastUpdate.docker }}
1. Open a Terminal window
1. Install Docker through your package manager, `sudo apt-get install docker` 
    on Debian-based Linux, for instance.
1. You shouldn't encounter any errors :smile:
1. In the same Terminal window... grab the Docker image by typing 
    `docker pull ucfsigai/<group>:latest-cpu` (this should grab **this 
    semester's** image). `<group>` is either `data-science` or `intelligence`.

<br>

## GitHub Installation
### Last Updated: {{ page.lastUpdate.github }}
1. Open Terminal
1. Run the following commands to get a copy of a `<group>` repository:
```bash
$  which git # Unless you get "git not found", Git is on your machine! :D
$  cd /where/you/store/sigai/stuff
$  git clone https://github.com/ucfsigai/<group> <group>
```
1. You've now cloned the repository for your `<group>` meetings!
1. **NOTE:** Before every meeting, you should `git pull` to grab the latest changes