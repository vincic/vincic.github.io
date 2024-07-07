---
layout: post
tags: [git, version control]
date: 2024/07/07
title: "git rerere: Streamline conflict resolution"
permalink: /blog/2024/07/git-rerere-streamline-conflict-resolution
---

Conflict resolution in Git can be a repetitive and time-consuming process. Fortunately, Git offers a feature called `rerere` ([reuse recorded resolution](https://git-scm.com/docs/git-rerere)) that can save you time by remembering how you resolved conflicts and applying the same resolution in the future. In this post, we'll explore how to use `rerere` to streamline your conflict resolution process.

I learned about `rerere` from the YouTube video [So You Think You Know Git - FOSDEM 2024 by Scott Chacon](https://youtu.be/aolI_Rz0ZqY?si=dLv2DsOyAoZzVyHz), an insightful video about Git that recently reached 1 million views!

## What is `rerere`?

`rerere` is a Git feature that records how you resolve a merge conflict and reuses that resolution the next time it encounters the same conflict. This can be particularly useful when you're rebasing a branch or cherry-picking commits.

### Enable rerere

To enable `rerere`, run:

{% highlight bash %}
git config --global rerere.enabled true
{% endhighlight %}

### How It Works

When you encounter a conflict and resolve it, Git records the resolution. If you face the same conflict again, Git will automatically apply the recorded resolution. 

### Example Workflow

1. **Encounter a Conflict**: During a rebase or merge, a conflict occurs.
2. **Resolve the Conflict**: Manually resolve the conflict.
3. **Git Records the Resolution**: Git saves the conflict resolution.
4. **Reapply the Resolution**: If the same conflict appears in the future, Git applies the saved resolution automatically.

## Benefits of using `rerere`

- **Time-saving**: You don't have to resolve the same conflicts repeatedly.
- **Consistency**: Ensures that conflicts are resolved in the same way each time.
- **Reduced errors**: Minimizes the chance of introducing errors when resolving conflicts manually.

By enabling `rerere`, you can significantly reduce the effort required to handle recurring conflicts. This feature is particularly useful in long-running feature branches or when working with frequently changing codebases. Give `rerere` a try in your next Git project and experience smoother, more efficient conflict resolutions.

Stay tuned for more [Git tips](/tags#git) and tricks in our upcoming posts!
