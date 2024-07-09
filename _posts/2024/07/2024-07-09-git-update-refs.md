---
layout: post
title: "git rebase --update-refs: A game-changer for stacked branches"
tags: [git, rebase, version control]
date: 2024/07/09
comments: true
permalink: /blog/2024/07/git-rebase-update-refs
---

Hej! Today I want to talk about a cool Git feature I recently started using: `git rebase --update-refs --interactive`. It's really helpful when working with stacked branches.

## What are stacked branches?

Stacked branches is when you have many branches that depend on each other. It's good for breaking big features into smaller parts. But it can be tricky to keep all branches updated.

## The problem with rebasing stacked branches

Before, if you needed to change something in the first branch, you had to rebase all the other branches one by one. It was very time-consuming and boring!

## Enter git rebase --update-refs

Now, with `git rebase --update-refs --interactive`, you can quickly move commits between your branches and keep all of them updated with just one command. It's so much faster!

Here's how I use it:

1. Make changes in my first branch
2. Run `git rebase --update-refs --interactive` on the last branch in my stack
3. Git automatically updates all the branches in between!

## Keep it short-lived

Even though this makes working with stacked branches easier, it's still good to keep your branches short-lived. Long-living branches with open pull requests can cause headaches.

## Conclusion

`git rebase --update-refs --interactive` has made my work with stacked branches much easier. It saves time and reduces frustration. If you work with stacked branches, you should definitely try it!

