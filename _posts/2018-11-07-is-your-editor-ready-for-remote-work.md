---
layout: post
title: Is your code editor ready for remote work?
tags: [code, remote work]
date: 2018/11/07
comments: false
permalink: /blog/2018/11/is-your-ide-remote-safe
---
Most of the developer use a laptop like a MacBook Pro as their primary development machine. They have all their email, documents, photos and code on it. The environment is correctly set up with *git*, *Visual Code* or *Emacs*. (yeah there are other editors but these I use :) This at least how I worked when I had one computer. These days I use multiple computers every day.

<img src="/images/emacs-world.jpg" width="100%">

# Emacs and TRAMP mode
As soon as you start working remotely where you have to connect to remote computers to use their services or access your code on the remote machine, it gets tricky. This year I tried to use Visual Code (I still use it more and more, still learning) but I always tend to switch back to Emacs which has been my main editor since 1993. The main reason is the shortcuts are in my genes now but also when I try to navigate the remote code.

Recently I learned about [TRAMP](https://www.emacswiki.org/emacs/TrampMode) (Transparent Remote Access, Multiple Protocols) in Emacs. I have used it a few times without knowing about it, and it is really powerful. With TRAMP in Emacs, you work with remote files the same way you would with local ones. If you have ssh configuration with your hosts and ssh keys, you can even get autocompletion on the hostnames in emacs. So to open a connection to my.hostname I do `C-x C-f /my.hostname:` and emacs ssh into my.hostname and shows me the file directory. From there I can open any file, I can use *magit mode* or even open a shell and run commands on the remote machine.  

Before I found this, I usually used sshfs which is editor independent and works with Visual Code, but with TRAMP I do not need to change the way I use Emacs. So again I have found another reason to stay with Emacs.
