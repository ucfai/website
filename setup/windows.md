---
title:      Windows Setup for Groups &amp; Course
layout:     setup
permalink:  /setup/windows/
lastUpdate:
    hyperv: Aug 03, 2018
    docker: Aug 03, 2018
    github: Aug 03, 2018
    newton: Sep 06, 2018
---

<div class="alert alert-light" markdown="1" id="lnx">
<div class="d-lg-flex flex-lg-row py-2">
    <h2 class="col-12 col-lg-8 text-center text-lg-left m-lg-0"> On Linux </h2>
    <div class="col-12 col-lg-4 d-flex align-items-center">
        <p class="m-auto" style="white-space: nowrap;">Last Updated: <span class="badge badge-primary">{{ page.lastUpdate.newton }} </span></p>
    </div>
</div>

1. Run `sudo apt-get install -y unzip xclip` (replace `apt-get install` with your package manager's lingo if need be).
1. Run `mkdir -p ~/.ssh/`
1. Import your `sigai.student<N>.zip` file into your `~/Downloads`.
1. Run `unzip ~/Downloads/sigai.student<N>.zip -d ~/Downloads/sigai.student<N>`
1. Followed by `cp ~/Downloads/sigai.student<N>/sigai* ~/.ssh/`
1. Then execute `cat ~/Downloads/sigai.student<N>/config >> ~/.ssh/config`
1. Provided you're on the UCF network, you should now be able to access Newton
using `ssh sigai.newton` and Stokes using `ssh sigai.stokes`.
</div>

<div class="alert alert-light" markdown="1" id="osx">
<div class="d-lg-flex flex-lg-row py-2">
    <h2 class="col-12 col-lg-8 text-center text-lg-left m-lg-0"> Connecting to the Supercomputer (Newton &amp; Stokes) </h2>
    <div class="col-12 col-lg-4 d-flex align-items-center">
        <p class="m-auto" style="white-space: nowrap;">Last Updated: <span class="badge badge-primary">{{ page.lastUpdate.newton }} </span></p>
    </div>
</div>

**This is a lengthy, tedious, process &ndash; we highly encourage you to try out
Linux (even in a Virtual Machine), but if Windows has a tight grip on you, then 
follow these steps.**
1. Press `Win` (<i class="fab fa-windows"></i>) and search "Turn Windows 
   features on or off"
1. Scroll all the way down, look for "Windows Subsystem for Linux" and activate 
   the checkbox.
1. You'll be prompted to restart, do so.
1. Navigate to the Windows Store and download the latest version of Ubuntu (as 
   of this writing, it's 18.04).
1. Launch "Ubuntu 18.04" &ndash; it'll say it's installing, let it do so.
1. Eventually, you'll be prompted for a `UNIX username` and `UNIX password`. 
   **NOTE:** `UNIX password`s don't show typing, so it's not lag if you don't 
   see anything!
1. Within this window, execute: `mkdir .ssh`.
1. Then execute `cd .ssh`, followed by 
   `touch sigai.student<N>.pem sigai.student<N>.pem.pub config`.
1. Now press `Win + R` (<i class="fab fa-windows"></i> + R) and type: 
   `%LOCALAPPDATA%\Packages`, now find a folder beginning with 
   "CanonicalGroupLimited" &ndash; click it.
1. Now navigate to `LocalState > rootfs > home > <UNIX username>`, 
   `<UNIX username>` is whatever you chose when setting up Ubuntu, earlier.
1. You should see a `.ssh` directory – if not, hop back up to those steps and 
   repeat the commands.
1. If you open `.ssh`, you should also see at least 3 files, named what you 
   `touch`ed. (Keep this window open, you'll need it in a moment!)
1. Open a new File Explorer window and import your `sigai.student<N>.zip` file 
   into your `~/Downloads`.
1. Unzip `sigai.student<N>.zip` using File Explorer.
1. Now select all the files matching the `touch` command from earlier, and drag 
   them into the other window with your `.ssh` directory.
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
</div>

<div id="activating-hyperv" class="alert alert-light" markdown="1">
<div class="d-lg-flex flex-lg-row py-2">
    <h2 class="col-12 col-lg-8 text-center text-lg-left m-lg-0"> Activating Hyper-V </h2>
    <div class="col-12 col-lg-4 d-flex align-items-center">
        <p class="m-auto" style="white-space: nowrap;">Last Updated: <span class="badge badge-primary">{{ page.lastUpdate.hyperv }} </span></p>
    </div>
</div>

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
</div>

<div class="alert alert-light" markdown="1">
<div class="d-lg-flex flex-lg-row py-2">
    <h2 class="col-12 col-lg-8 text-center text-lg-left m-lg-0"> Docker Installation </h2>
    <div class="col-12 col-lg-4 d-flex align-items-center">
        <p class="m-auto" style="white-space: nowrap;">Last Updated: <span class="badge badge-primary">{{ page.lastUpdate.docker }} </span></p>
    </div>
</div>

1. Ensure that [**Activiting Hyper-V**][#activiting-hyperv] has been completed.
1. Go to the [Docker Store][docker-win] and download Docker.
1. Proceed through the installation process. You'll be prompted to reboot a few 
    times.
1. You shouldn't encounter any errors &ndash; as you made sure you had Hyper-V 
    first. :smile:
1. Open up Powershell and grab the Docker image by typing 
    `docker pull ucfsigai/<group>:latest-cpu` (this should grab **this 
    semester's** image). `<group>` is either `data-science` or `intelligence`.
</div>

[docker-win]: https://store.docker.com/editions/community/docker-ce-desktop-windows
[github-dsk]: https://desktop.github.com/