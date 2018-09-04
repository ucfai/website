---
title:      UCF Supercomputer Setup for Groups
layout:     setup
permalink:  /setup/supercomputers/
lastUpdate:
    win: Sep 01, 2018
    lnx: Sep 01, 2018
    osx: Sep 01, 2018
---

## On Linux
### Last Updated: {{ page.lastUpdate.lnx }}
1. Run `mkdir -p ~/.ssh/`
1. Import your `sigai.student<N>.zip` file into your `~/Downloads`.
1. **NOTE:** You'll need some `.zip` unarchiver, typically `7z` is a good choice.
1. Run `7z e ~/Downloads/sigai.student<N>.zip o ~/Downloads/sigai.student<N>`
1. Followed by `cp ~/Downloads/sigai.student<N>/sig* ~/.ssh/`
1. Then execute `cat ~/Downloads/sigai.student<N>/config >> ~/.ssh/config`
1. Provided you're on the UCF network, you should now be able to access Newton
using `ssh sigai.newton` and Stokes using `ssh sigai.stokes`.

## On MacOS
### Last Updated: {{ page.lastUpdate.osx }}
1. Run `mkdir -p ~/.ssh/`
1. Import your `sigai.student<N>.zip` file into your `~/Downloads`.
1. Run `unzip ~/Downloads/sigai.student<N>.zip -d ~/Downloads/sigai.student<N>`
1. Followed by `cp ~/Downloads/sigai.student<N>/sig* ~/.ssh/`
1. Then execute `cat ~/Downloads/sigai.student<N>/config >> ~/.ssh/config`
1. Provided you're on the UCF network, you should now be able to access Newton
using `ssh sigai.newton` and Stokes using `ssh sigai.stokes`.

## On Windows
### Last Updated: {{ page.lastUpdate.win }}
**This is a lengthy, tedious, process &ndash; we highly encourage you to try out
Linux, but if Windows has a tight grip on you, then follow these steps.**
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

[putty]: https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html
