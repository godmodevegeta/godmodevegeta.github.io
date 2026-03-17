---
title: "Farewell to REST"
subtitle: "Moving completely to tRPC and GraphQL in 2022."
date: "Jan 14, 2022"
isPopular: true
---

I've been building REST APIs for over a decade. It's been the default choice for so long that we rarely stop to question it. But over the last year, I've moved my side projects and new team initiatives completely over to heavily typed alternatives.

### The Problem with REST
The defining issue with REST in modern web development is the disconnect between the client and the server. You are constantly guessing the shape of your data, leading to over-fetching, under-fetching, and the inevitable \`Cannot read properties of undefined\` errors.

### Enter tRPC
Using tRPC for Next.js applications has been a complete paradigm shift. The ability to share types directly between the server and the React client without any code generation step is incredible. It brings the safety of a monolith to a distributed setup.

I don't think I'll be writing another REST endpoint anytime soon.
