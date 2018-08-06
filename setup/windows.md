---
title:      Windows Setup for Groups &amp; Course
layout:     setup
permalink:  /setup/windows/
lastUpdate:
    hyperv: Aug 03, 2018
    docker: Aug 03, 2018
    github: Aug 03, 2018
---

## Hyper-V Installation
### Last Updated: {{ page.lastUpdate.hyperv }}
1. Go to UCF DreamSpark.
1. "Sign In" if you have an account, or "Register" if you don't
1. Click on "Students" > "Microsoft Imagine Premium" > "Operating Systems"
1. Click on "Windows 10" > "Windows 10 (Multiple Editions)"
1. Grab the non-UK version by clicking "Add to Cart" and checkout
1. Make note (by copying &ndash; Ctrl + C) of the "Product Key," it should be 
    something like... `XXXXX-XXXXX-XXXXX-XXXXX-XXXXX` (5x 5-character string)
1. Open up "Settings" and search "Product Key," then paste (Ctrl + V) in the 
    pop-up window
1. You'll be prompted to let Windows restart and perform some updates. Do so.
1. Once you've been upgraded to an eligible Windows, open up the start menu 
    (<i class="fab fa-windows"></i>) and search "Turn Windows features on"
1. Scroll down to Hyper-V and click the checkbox. You'll be taken through some 
    more boot loops. After which, you should have Hyper-V installed
1. Verify Hyper-V is installed by again opening the start menu 
    (<i class="fab fa-windows"></i>) and searching "Hyper-V", you should see 
    a program come up. (Don't open it.)

<br>

## Docker Installation
### Last Updated: {{ page.lastUpdate.docker }}
1. Go to the [Docker Store][docker-win] and download Docker.
1. Proceed through the installation process. You'll be prompted to reboot a few 
    times.
1. You shouldn't encounter any errors &ndash; as you made sure you had Hyper-V 
    first. :smile:
1. Open up Powershell and grab the Docker image by typing 
    `docker pull ucfsigai/<group>:latest-cpu` (this should grab **this 
    semester's** image). `<group>` is either `data-science` or `intelligence`.

<br>

## GitHub Installation
### Last Updated: {{ page.lastUpdate.github }}
1. Go to [GitHub Desktop][github-dsk] and download GitHub Desktop.
1. Run the installer.
1. Search (<i class="fab fa-windows"></i>) for "Git Bash" and open it.
1. Run the following commands to get a copy of a `<group>` repository:
```bash
$  which git # Unless you get "git not found", Git is on your machine! :D
$  cd /where/you/store/sigai/stuff
$  git clone https://github.com/ucfsigai/<group> <group>
```
1. You've now cloned the repository for your `<group>` meetings!
1. **NOTE:** Before every meeting, you should `git pull` to grab the latest changes.

[docker-win]: https://store.docker.com/editions/community/docker-ce-desktop-windows
[github-dsk]: https://desktop.github.com/