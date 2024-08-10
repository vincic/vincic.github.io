---
layout: post
tags: [Emacs, Configuration]
date: 2024/07/14
title: Recreating my Emacs config
permalink: /blog/2024/07/recreating-emacs-config
---

Thanks to [@aclonegeek](https://github.com/aclonegeek) and his amazing [Emacs configuration](https://github.com/aclonegeek/.emacs.d), I have successfully recreated my entire Emacs setup. Copied with pride, this configuration is incredibly clean and fast with Emacs 31!

One of the most streamlined setups I have come across, it is not just mine but a testament to Randy's impeccable work. If you are looking to enhance your Emacs experience, I highly recommend checking out his [init.el file](https://github.com/aclonegeek/.emacs.d/blob/master/init.el).

From more than 600 rows of unstructured and copy-pasted code, my init file now looks like this:

{% highlight lisp %}
(eval-and-compile
  (defconst emacs-packages-dir (concat
                                user-emacs-directory
                                "packages"))
  (defconst emacs-packages-autoloads (concat
                                      user-emacs-directory
                                      "lisp/package-autoloads.el"))
  (dolist (directory (directory-files
                      emacs-packages-dir
                      t
                      directory-files-no-dot-files-regexp))
    (add-to-list 'load-path directory))
  (add-to-list 'load-path (concat user-emacs-directory "lisp"))
  (load emacs-packages-autoloads nil t))

(require 'core-keybindings)
(require 'core-settings)
(require 'core-ui)
(require 'core-eglot)
(require 'core-flymake)
(require 'core-icomplete)
(require 'core-org)
(require 'core-project)
(require 'core-xref)

(require 'pkg-consult)
(require 'pkg-corfu)
(require 'pkg-magit)
(require 'pkg-org-roam)
(require 'pkg-treesit-auto)

(setq custom-file (concat user-emacs-directory "custom.el"))
{% endhighlight %}

I still haven't figured out what should be in `lisp/package-autoloads.el`, but I am still learning after using Emacs for more than 30 years!

When I spend most of my waking hours in front of the computer, specifically in Emacs, it is important for me that the experience is smooth and fast and in my preferred color of the day. For the past few years, it's been Tron colors.

With this switch, I am testing `project` instead of `projectile` and I realized that my brain is wired for `C-c p` while `project` uses `C-x p`. I should have mapped `C-x p` to `projectile` when I installed it.

Thanks to [this discussion](https://emacs.stackexchange.com/questions/68877/what-is-the-difference-between-c-x-and-c-c-and-the-concept-behind-it) on Emacs Stack Exchange, I refreshed my understanding of the difference between `C-x` and `C-c` keys:

The normal `C-x` keymap is for global bindings expected to do something regardless of the active modes. Conversely:

- Sequences consisting of `C-c` followed by a control character or a digit are reserved for major modes.
- Sequences consisting of `C-c` followed by `{`, `}`, `<`, `>`, `:` or `;` are also reserved for major modes.
- Sequences consisting of `C-c` followed by any other ASCII punctuation or symbol character are allocated for minor modes.

Also:
- Sequences consisting of `C-c` and a letter (either upper or lower case) are reserved for users.

Before this, I used [Purcell's Emacs configuration](https://github.com/purcell/emacs.d) which I ended up cluttering with a lot of copy-pasted code. Despite this, his config remains impressively clean, even though it is much larger than Randy's. I plan to add things as I need them this time.

