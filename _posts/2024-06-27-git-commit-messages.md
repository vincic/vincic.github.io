---
layout: post
tags: [code, productivity]
date: 2024/06/27 07:10:00
title: 'Mastering git commit message: the "why"'
comments: true
permalink: /blog/2024/06/mastering-git-commit-message
---

Git is more than just a tool for version control; it's a narrative device that tells the story of your code's evolution. When used effectively, Git commits can capture the context and reasoning behind changes, making it easier for future developers to understand the history and decisions embedded in the code. This becomes particularly crucial for long-term maintenance and collaboration. Inspired by Andy Hunt’s _The Pragmatic Programmer_ and further guided by Chris Beams' [insights on Git commit messages](https://cbea.ms/git-commit/), I set out to learn how to write commit messages that focus on the **why** of changes, not just the **what**.

## The importance of the "why"

While the `git diff` command shows us what has changed between commits, it doesn't explain the reasoning behind those changes. The **why** encompasses the decisions and considerations that led to the code modification. It includes:

1. **Contextual Background**: Why was this change necessary? What problem or feature was being addressed?
2. **Decision-Making Process**: What options were considered? Why was this particular solution chosen?
3. **Implications and Considerations**: What are the potential impacts or limitations of this change? Were there any trade-offs?

By documenting these aspects in commit messages, we create a valuable resource for anyone who interacts with the codebase in the future without rely on having a linked ticket to an external system.

## Crafting effective commit messages

### Use imperative mood

When writing the summary of a commit message, use the imperative mood. This style is direct and action-oriented, making it clear what the commit does. For example:

- "Fix the login bug on the user dashboard"
- "Add new feature to handle user authentication"
- "Refactor database connection handling"

A commit summary should fit the phrase, "When this commit is applied, it will ...". This approach aligns with common practice and tools like GitHub, which treat commit messages as commands or tasks to be executed.

### Structure of a good commit message

A well-structured commit message typically consists of a concise summary followed by a detailed explanation. The summary should capture the essence of the change, while the detailed explanation should provide insights into the **why**, including context, decisions made, and potential impacts.

## Examples of well-written commit messages

### Example 1: Why renaming a function

```plaintext
Rename vulnerabilityList to listVulnerabilities 😢

Conceded to the team's preference for readability over prefix patterns. 
Accepting the naming convention shift with a tear :) and renaming the 
function for better clarity and consistency across the codebase.
```

### Example 2: Why changing build configuration

```plaintext
Fix code scanning for third-party libraries

We need the ability to dive into the source of third-party libraries to
identify potential vulnerabilities and ensure secure integration. Adding 
the --sourceMaps flag resolves this by allowing our security tool to map back
to the original source code instead of minified production code.

Running the following command ensures that the package rebuilds continuously, 
keeping our scans accurate and up-to-date.

``'bash
cd ./packages/securityScanner
npm run build:watch
``'
```

## Reading the Git Log

Reading the Git log should quickly give you a sense of why and what changes are in each commit. Here's how a well-maintained Git log looks in a magit one-line format:

```plaintext
* 72ab3e7 - Rename vulnerabilityList to listVulnerabilities 😢
* 16f8c3d - Fix code scanning for third-party libraries
* 3f7e9da - Refactor alert module for better performance
* 9d1f3cb - Fix role assignment during user account creation
* a1b2c3d - Update documentation for recent changes
```

![Git commit history log](/images/git-commit-history-log.webp)

## The commit message for this post

Almost as long as the post itself, good commit messages may be detailed, but they should always be concise and to the point, clearly answering why the diff is being committed. I see commits as my code journal.

```plaintext
Publish blog post on writing meaningful Git commit messages

Inspired by Andy Hunt’s _The Pragmatic Programmer_ and Chris Beams' insights on 
Git commit messages, this post aims to educate developers on the importance of 
focusing on the **why** behind their commits. By understanding and documenting 
the rationale and context for each change, developers can create a valuable 
historical record that enhances long-term project maintenance and collaboration.

The decision to write this post stemmed from the realization that many developers 
often overlook the significance of explaining why changes were made. While it’s 
common to describe what has changed, capturing the reasons behind these changes 
is crucial for understanding the evolution of a codebase. The post includes 
practical examples from a security tool context to illustrate how to write 
effective commit messages that go beyond just the technical details.

By sharing these insights, the post encourages developers to adopt a more 
thoughtful and descriptive approach to documenting their work. This practice not 
only improves the quality of commit messages but also facilitates better 
collaboration and understanding among development teams. As a result, future 
debugging and code maintenance become more manageable, and the overall health of 
the project is enhanced.
```

---

Feel free to explore more on Git and share your thoughts in the comments below.
