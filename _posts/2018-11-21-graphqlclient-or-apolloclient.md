---
layout: post
title: GraphQLClient or ApolloClient?
tags: [development]
date: 2018/11/20
comments: false
permalink: /blog/2018/11/graphqlclient-or-apolloclient
---
GraphQL is on everyone's mind these days, mine too. Right now working with NestJS and GraphQL where the backen will stitch together several GraphQL schemas and REST APIs. Different systems have responsibility for different part of a type's properties. 
The goal is to have an api which makes it seamless to the user when querying for a type. The user should never need to know which system handles what property.  

# Which GraphQL client?

I am building the backend with [NestJS](https://nestjs.com/) and [GraphQL](https://graphql.org/). The stiching and delegating to different schemas or APIs works fine but I can't decide which GraphQL client to use when calling mutation. Should I use GraphQLClient from [graphql-request](https://github.com/prisma/graphql-request) or should I use [ApolloClient](https://github.com/apollographql/apollo-client)? My local server is provided by @nestjs/graphql (ApolloServer integration)  so it feels like I should use ApolloClient but GraphQLClient feels much easier and simpler.

Which graphql client on backend do you prefer?
