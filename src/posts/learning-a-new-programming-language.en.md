---
title: "Learning a New Programming Language After 8 Years of Experience"
date: "2025-08-18"
excerpt: "I've been programming professionaly for over 8 years. I've limited myself to mainly PHP and JavaScript. How could I after all these years learn a new language?"
---

For a few months, maybe years, I started losing my passion for programming. What used to be really exciting had become just a regular job, doing the same tasks over and over. I missed how excited I felt when I first started learning.

I miss those times when something finally made sense, or when I would work on a problem for hours but it felt like no time had passed at all. The fun of figuring things out was gone, it now became a repetitive task.

I want to bring back my passion. But how could I do that? I think I need to go back to the start. I need to learn something new. I've been programming professionaly for over 8 years. I've limited myself to mainly PHP and JavaScript. How could I after all these years learn a new language?

## They all look the same

I looked at some Python code and it felt awful, my eyes hurted. Then I saw Lua, it looked so simple, so beautiful, and there I went to learn Lua. I learned Lua while attempting to setup Neovim (I spent countless hours trying to setup LSPs). Eventually I felt comfortable with Lua, the language was easy.

But I didn't feel like I was learning. All I did was search "How to do X in Lua?" on Google. _Something felt off_.

I decided to give Python another chance, and after a while, I realized. Python and Lua are scripting languages. Why learn a new scripting language when I already know PHP and JavaScript?

Learning a new scripting language felt boring, they were very similar, their syntax and functions were very similar as well. I was on a loop, repeating the same thing that I already knew. **I wasn't learning**.

## Trying something different

That was when it hit me. I had to try something different. Something that could make me passionate again. After all, programming is a hobby for me, a hobby in which I was slowly losing interest into, a hobby that had become a job.

At times I even considered finding a new hobby, a new passion, a hobby that could make me excited. However, I didn't want a new hobby, I like programming.

I felt I needed something that could activate my brain. PHP and JavaScript was so automatic to me that I didn't have to think anymore. Any problem or project that I had to do I just did it. I didn't have to put any thoughts into it. Even when I had a "brilliant" idea and was excited to execute it, after a few hours the excitement was gone, I was just doing the same thing all over again, nothing new. Just repeating the same code, again and again.

## Finding something different

There was a game that I really enjoyed playing when I was a kid, it was called Forsaken World. The servers have been shutdown in Brazil in 2017 and the US/EU servers were shutdown in 2022. The community was left with nothing. The only thing left was private servers.

The game source code was written in C++. With my knowledge I was able to edit the game source and alter some mechanics. At some point I built my own private server with the help of some good friends.

Changing a few lines of code and making it work wasn't enough. I didn't fully understand what I was changing or what was written in the source files. The source code looked like 5 different projects, each with and it's own folder, each folder compiled into a single binary. It looked like a modular monolith. I couldn't wrap my head on how these binaries communicated with each other.

I wanted to understand C++. Understanding it was challenging. I had finally found a language that could make me passionate again: **C++**.

## How could I learn a new language?

I tried learning a few things here and there by looking up on Google, just like I did with Lua, but that wasn't enough with C++. The codebase was huge, and old—it was written in the C++98 standard. Simply looking up on Google how to do certain things wasn't enough. I wanted to truly understand what I was reading.

I want the same level of understanding that I have with PHP and JavaScript, where I could within a few minutes reading the source file I wanted to be able to understand and edit it. I don't want to simply edit a code and hope for the best. How could I learn a new language?

### Finding the right learning path

First I searched on the internet the best resource to learn C++. There were several free resources and videos available scattered across many search results. I started a few, but soon gave up. Watching videos felt too slow because I already knew how to code.

Eventually, I found a book: **"A Tour of C++"** by Bjarne Stroustrup. I never read a book to learn something. So I thought why not give it a try? It was both the challenge to learn a new programming language as well as reading. These two were enough to activate my brain and make me excited about what was coming next.

### Learning new concepts

In the book there were several things that I wasn't aware of. There was a confusing concept about pointers and references, when I finally understood it. It was rewarding to learn a new concept.

I also learned that we could create our own operators, for example I could write my own implementation for the `++` operator.

```cpp
TrafficLight& operator++(TrafficLight& t) {
  switch (t) {
    case TrafficLight::green: return t=TrafficLight::yellow;
    case TrafficLight::yellow: return t=TrafficLight::red;
    case TrafficLight::red: return t=TrafficLight::green;
  }
}

TrafficLight next = ++light; // next becomes TrafficLight::green
```

Simply mind blowing.

## Ok, now what?

After reading the book I was like, ok, now what? I still didn't feel like I fully understood the language. How do I get to a good level of understanding? I need to practice. I didn't know exactly how to practice.

I had the game source to practice. But that was still too difficult. I always heard of LeetCode, but never attempted it. It felt like it would be a good practice.

With tons of while loops and if statements, I was able to solve a few Easy Problems. After submitting my solution, I'd look at other solutions, and oh boy, they were so short! Sure I was missing something! It was a nightmare for me to solve it. Now there was another question: How could I solve LeetCode problems more easily? They felt way too complicated.

### Discovering DSA

DSA stands for Data Structures and Algorithms, something that one would have learnt at a college course. I skipped college. So that was one more challenge that I can face: Learning DSA.

I saw that one of the topics was "Binary Trees", something that I always had heard of but never looked into. I watched a [YouTube video](https://www.youtube.com/watch?v=fAAZixBzIA), Binary Tree Algorithms from freeCodeCamp.org by AlvinTheProgrammer. It was interesting, it was a topic about programming that I didn't know of, and that I would probably not pay attention to if I were in a classroom.

This was good practice. I got my first segfault error.

## Figuring it out

Learning a new programming language takes time. I first needed to find my purpose which was understanding an old codebase written in C++. To learn C++, I needed a fast and comprehensive introduction, the book "A Tour of C++" gave me just that.

Now I need to practice, for DSA [I found this course on Udemy](https://www.udemy.com/course/data-structures-algorithms-cpp/) by Scott Barrett, the lessons are well presented, with nice smooth animations, the exercises are fun and challenging to do. After I get bored with it, I'll start a personal project so that I can build something from 0 to 1. Doing that will certainly put me in a good level of understading of the language.

I'm feeling happy and passionate about programming again. Every step of learning C++ and DSA was fun. **I got my hobby back.**.

Here's the first time I solved a problem on my own after learning the Tortoise and the Hare algorithm. Solving this made my day. The happiness from solving this was truly rewarding.

![Whiteboard Solution for Linked List Find Kth Node From End](https://github.com/pedroni/learning-cpp/blob/main/dsa/linked-list-find-kth-node-from-end.png)
