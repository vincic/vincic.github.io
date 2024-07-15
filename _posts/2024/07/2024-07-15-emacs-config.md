---
layout: post
title: "Emacs, PATH, and window managers"
tags: [Emacs, Configuration, i3, rofi, eglot]
date: 2024/07/15
permalink: /blog/2024/07/emacs-config-clean-path-adventure
---

Can your window manager choices affect your Emacs setup?
Is adding another package always the right solution?
What if the cleanest config is the one that solves root issues?

I recently [revamped my Emacs](/blog/2024/07/recreating-emacs-config) setup. One package I hadn't added yet was:

{% highlight emacs-lisp %}
(use-package exec-path-from-shell
  :config (exec-path-from-shell-initialize))
{% endhighlight %}

But something interesting happened. Sometimes `eglot` would find the language server without this package, and sometimes it wouldn't. The culprit? My window manager setup.

Starting Emacs from `rofi` in my `i3` window manager didn't work consistently because `i3` uses `/bin/sh` and its PATH, while I use `bash`. This PATH discrepancy was the root of my problems.

I tried various solutions:

1. A simple `rofi` script:
{% highlight bash %}
#!/bin/bash
rofi -theme ~/.config/rofi/onedark.rasi -show run 
{% endhighlight %}

2. Directly in `i3` config:
{% highlight bash %}
bindsym $mod+d			exec bash -c "rofi -theme ~/.config/rofi/onedark.rasi -show run"
{% endhighlight %}

3. Sourcing `.bashrc`:
{% highlight bash %}
#!/bin/bash
. ~/.bashrc
rofi -theme ~/.config/rofi/onedark.rasi -show run 
{% endhighlight %}

Even changing `#!/bin/bash` to `#!/usr/bin/env bash` didn't help.

## The Solution

Finally, this script cracked the code:

{% highlight bash %}
#!/usr/bin/env bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
rofi -theme ~/.config/rofi/onedark.rasi -show run 
{% endhighlight %}

Suddenly, `eglot` could find the language server consistently.

This adventure taught me a valuable lesson: Emacs packages, like npm packages, can often be workarounds for underlying issues. The cleanest config isn't always the one with the most packages, but the one that addresses root causes.

As I continue to refine my setup, I'm committed to only adding what's necessary. It's not just about a leaner config - it's about understanding and optimizing my entire development environment.

However, the mystery isn't fully solved. I still need to figure out why the other solutions didn't work. Otherwise, I might end up adding PATH changes to this file each time Emacs needs them - a solution that feels more like a bandaid than a cure.

Are you solving problems in your editor, or just hiding them behind packages? Is your Emacs truly configured, or just patched?

Stay tuned as I continue to unravel this PATH puzzle and optimize my Emacs workflow!