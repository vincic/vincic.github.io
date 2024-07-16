---
comments: true
layout: post
tags: [AI, Coding, Emacs, LLM]
date: 2024/07/16
title: "Exploring selfhosted AI-Augmented coding"
permalink: /blog/2024/07/16/exploring-selfhosted-ai-augmented-coding
---

In my ambitious quest to leverage AI for 80% of my work by year's end, I've been exploring alternatives to GitHub Copilot. This post summarizes my recent discoveries and experiments in the realm of AI-augmented coding.

## Local LLM Setup

At the core of my setup is [Ollama](https://ollama.com), serving as my local Large Language Model (LLM) provider. This approach offers greater control and privacy compared to cloud-based solutions.

## User Interfaces and Integrations

1. **Open WebUI**: Initially, I experimented with [Open WebUI](https://github.com/Open-WebUI) as a frontend for Ollama, providing a user-friendly interface for interactions.

2. **Ellama for Emacs**: The game-changer in my workflow has been integrating [Ellama](https://github.com/s-kostyaev/ellama) into my Emacs configuration. This allows me to access a custom AI assistant directly within Emacs, keeping my hands firmly on the keyboard.

   Here's a snippet of my Ellama configuration:

   {% highlight emacs-lisp %}
   (setopt ellama-providers
           '(("standup" . (make-llm-ollama
                          :chat-model "standup:latest"
                          :embedding-model "nomic-embed-text"
                          :default-chat-non-standard-params '(("num_ctx" . 8192))))))
   {% endhighlight %}

## Additional Tools and Experiments

- **AI Renamer**: I tested [AI Renamer](https://github.com/ozgrozer/ai-renamer), a Node.js CLI tool for AI-assisted file renaming. A potential integration with Emacs' dired mode could be an interesting project. This experiment reminded me of my earlier tests with [LlamaFS](https://github.com/iyaja/llama-fs), an intriguing file system interface for LLMs.

- **Tabby**: My latest addition is [Tabby](https://tabby.tabbyml.com/), a self-hosted alternative to GitHub Copilot. It leverages Ollama or the built-in LLama.cpp. I plan to test it today using [tabby-mode.el](https://github.com/ragnard/tabby-mode) in Emacs.

## Reflections and Future Directions

The sheer number of tools developed by the community is astounding. My current focus is on fine-tuning these tools to respond intuitively, ideally anticipating my needs before I even articulate them or build my own.

This journey into AI-augmented coding is not just about replacing manual work; it's about enhancing creativity, efficiency, and the overall coding experience. As I continue to explore and integrate these tools, I'm excited about the potential for AI to transform not just how we write code, but how we think about programming itself.

Stay tuned for more updates on my AI integration journey, and feel free to share your own experiences or suggestions in the comments below.
