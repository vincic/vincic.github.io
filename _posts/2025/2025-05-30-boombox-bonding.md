---
layout: post
tags: [learning, code, problem-solving]
date: 2025/05/30
title: "Boombox bonding: Building with my son and ChatGPT"
permalink: /blog/2025/05/boombox-bonding
---

My son and I share a love for the same music and movies - something that makes me want to revisit all my old favorites with him. But, as life goes, those moments are rare. Yesterday I asked, *"Wanna watch a movie?"* He replied, *"No, but let's build something together."*

Turns out, he's been chatting with ChatGPT about how to wire up an old 2x20 character display with an Arduino or Raspberry Pi - one I bought ages ago and just recently got the right cables for. So, we decided to make it happen.

**The Mission:** Display the currently playing song and artist from Spotify on that tiny screen - a piece of our future DIY boombox.

We kicked things off by digging into the specs: display datasheet, I2C adapter guide, and Raspberry Pi GPIO pinouts. While I dusted off Google like a true Gen X techie, he stuck with his new sidekick - ChatGPT. I printed things out like it was 1999.

We began prototyping with Arduino, but quickly switched gears to Raspberry Pi 4. When we ran into issues editing Python code remotely via VS Code’s SSH extension, I pulled out an old trick: *"Ever heard of vi?"* I grinned as he struggled to quit. Welcome to the club, kid. (For the record, I use Emacs - *the* editor.)

Spotify integration was another puzzle. The Spotipy library we used wanted a browser login, but our Pi was headless. A few workarounds and some code wrangling later, we got it running in a tmux session. Smooth.

![Rpi Spotipy](/images/rpi-spotipy.png)

Next step? *"Let’s 3D print a case for all this,"* he said, eyes already on Fusion360. It’s going into the boombox.

So many high-fives and big smiles. It brought me right back to my own youth - tinkering with wires, soldering, and building stuff that felt like magic. Only now, I get to do it with my son. And with ChatGPT in the mix, we’re unstoppable.

---
