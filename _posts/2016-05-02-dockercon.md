---
layout: post
title: DockerCon 2016
tags: [docker]
date: 2016/05/02
comments: true
permalink: /blog/2016/05/dockercon
---
This year I am going to DockerCon thanks to two sponsors, [Cenito Software](http://www.cenito.se/en/) my employeer and [Crate.io](http://crate.io) for the DockerCon ticket, super thanks!

My experience with Docker has mainly been in development environments where developers are on different platforms, OSX/Linux/Windows and were the backends were made up of several systems. One other problems I have used Docker to solve is to let Designers that I work with get easy access to a complex system so they can code the HTML/CSS without having to learn and setup everything. Pushing a new image to them has been as easy as pushing new code.

At the Snowsprint this year I tried to setup a docker swarm with 1001 nodes but had to little experience then and Azure was dead slow, at least the way I used it. Crate.IO managed later this year to finalize the cluster and had [1001 Docker Hosts and Crate containers](https://crate.io/a/1001-node-crate-cluster-with-microsoft-azure/) running in a huge cluster. Really cool to see. Working with Azure is much better today then it was 2015 but still it feels little bit slow compared to alternatives. Today [Docker Machine works great with Azure](/blog/2016/04/docker-on-azure) and I use it more or less daily. It is quite nice to have a Docker Host in the cloud that you can reboot with more power when needed and not have to listen to the fan in my MacBook Air all day.

In a month I hope to see you in Seattle, 10 years since I was there last time! AirBnb in West Seattle, this year!

![DockerCon 2016](/images/dockercon2016.png)
