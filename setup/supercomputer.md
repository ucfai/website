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
1. Download [PuTTy][putty].
1. Import your `sigai.student<N>.zip` file into your `~/Downloads`.
1. Unzip `sigai.student<N>.zip` using File Explorer.
1. Double-click the `sigai.student<N>.ppk`.
1. You'll be prompted for a passphrase &ndash; this is in your
  `sigai.student<N>_pass.txt` file, copy and paste it.
1. Within PuTTy, you'll see a screen which asks for a server name (we suggest
  saving this profile)... In it, put `newton.ist.ucf.edu`
1. You'll be prompted to enter a username through PuTTy's shell, it should be
  `sigai.student<N>`.
1. Provided you're on the UCF network, you should now be able to access Newton
using `ssh sigai.newton` and Stokes using `ssh sigai.stokes`.

[putty]: https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html
