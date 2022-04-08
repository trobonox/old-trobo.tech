---
title: The fascinating world of Linux and Tiling Window Managers
description: 'My experience after switching to Arch Linux with the bspwm Tiling WM as my main OS.'
---

Around a month ago, I have made the decision to dual-boot Arch Linux alongside my old Windows 10 installation. Despite being a big fan of Linux, I was never able to fully commit to it on my Desktop. Previously having tried Fedora, I always felt a little dissatisfied, so a completely different direction was needed. That's where tiling window managers excel: being a little dauting at first, and taking more time to set up initially, but in the end providing you your dream setup.
My choice in this case was bspwm, and I am very happy with it.


## Day one - The Installation
Installing the base Arch Linux system was a breeze, because I have installed it many times before in VMs. I followed a mini guide I had written for myself before, and the base was done in 20 minutes.
Now bspwm was something different: Because I was not familiar with concepts of X, like the xinitrc, it was quite a challenge to figure everything out. But here comes our lord and saviour, the Arch wiki! Using one of the best resources for anything Linux, with some complementary YouTube tutorials, figuring all of this out took an additional 20-30 minutes,

But of course, it wouldn't be the true Tiling WM experience without ricing, so here's some of my choices:

## The ricing
My goal was to create a setup which was very functional, while also looking good. So my instant thought was small windows gaps for aesthetics, a lot of blur and a thin statusbar with everything I need. So that's just what I did!
Using picom and bswpm, making the windows look nice was done fast. As a statusbar, I went with Polybar because of the big community behind it.
Big community or not, getting some fonts/glyphs to work was still a nightmare. After experimenting around a lot, I just resorted to someone else's dotfiles, edited them a little, and called it a day. Phew!

So that was it - I now had a good looking but still very functional desktop.

## Gaming
I do not play a lot of games, so it was not hard for me to make the switch.
The games that worked fine out of the box, using tools like Steam with Proton, Wine, Lutris or Heroic Games launcher were:
- Osu!
- Rocket League
- Minecraft (although I did encounter some problems with the Mod Client LabyMod and it's voice chat functionality)
- Among Us

A game that I used to play a lot, but does not work at all because of kernel-level anti-cheat is Valorant, but I stopped playing that, so problem solved there :).

## Experience after 3 weeks
I am still using Linux as my main Operating Sytem, and my experience in general has been great. Unfortunately though, I can't say the experience was 100% seamless, and you certainly encounter some problems when using Linux, especially on a rolling release distro like Arch.

I have had some updates break things like sound output, so make sure to always keep backups around! With good software like Timeshift, and a reasonable backup strategy (like once a month automatically, or manually after a bigger update like a new kernel or systemd), you can easily revert to the last working state and not worry about anything!

Other things you have to keep in mind is that Linux is not Windows. You need to get into it with a different mindset, or you will be dissatisfied.
Another last caveat you have to consider is software compatibility, especially when it comes to Gaming (mentioned above). That's why dual-booting like I did, or keeping a Windows virtual machine around, certainly have their advantages until Linux receives more native software.

So that was it. I hope you enjoyed reading about my Linux experience, and if you have any more questions, make sure to hit me up on any of my socials!




**Here's a screenshot of my setup:**
![Screenshot](https://cdn.discordapp.com/attachments/762389860995563546/952947907907178536/unknown.png)