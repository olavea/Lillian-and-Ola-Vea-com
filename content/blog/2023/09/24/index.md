---
title: What is the Tech Stack of Unleash?
author: "@OlaHolstVea"
date: 2023-09-26
---

## The Unleash Tech Stack

Before we get into your experience with data modeling for Unleash, could you quickly run through your tech stack? Says [Captain Ola](https://twitter.com/OlaHolstVea).


Yes, so Unleash is mostly written in TypeScript- the API, the frontend is written in React.

We use a UI tool called Material UI to build our components, UI components. For, but then that's the Unleash service itself and then to really use feature flagging in your system and in your application, we also build SDKs for all the major programming languages. And these SDKs would obviously be written in Python, in Ruby and Java in dot net, whatever.

And also obviously for the front end, like Android, iOS, Swift, of course, and also JavaScript, pure JavaScript and React wrappers on top of that and yada, yada, yada. So we do a lot of programming languages at Unleash. Says [Ivar](https://twitter.com/ivarconr).

You said the application was a React application, but for the front end and what's the back end, what kind of database and that kind of thing is? Says [Queen Raae](https://twitter.com/raae).

 Yeah, sure, TypeScript, we use Express for simplicity, and we use Postgres. To connect to Postgres we use a very easy kind of... mapping layer called Kinect. So it's not an ORM or anything like that, but it just simplifies building your queries basically. Says [Ivar](https://twitter.com/ivarconr).

Here is the video it's not released yet, because it's not DONE yet:
[https://share.descript.com/view/ma4Vcg2VaOo](https://share.descript.com/view/ma4Vcg2VaOo)

 ​






























Check out this clip from our Data in the Wild Podcast where CTO [@ivarconr](https://twitter.com/ivarconr) tells you:

[https://youtube.com/clip/📺](https://youtube.com/clip/UgkxIwSqTSbq2YCiHPeQ49EDfxI_yQ0AzTRc?si=1YwjCsxSxMkdTM49)

Unleash, The Open-Source Feature Toggle Service
https://github.com/uleash

Data in the Wild, a podcast brought to you by Xata 🦋 The serverless database built for modern development 🦋