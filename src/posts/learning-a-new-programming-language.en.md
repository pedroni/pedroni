---
title: "Learning a new programming language after 8 years of experience"
date: "2025-08-18"
excerpt: "I've been programming professionaly for over 8 years. I've limited myself to mainly PHP and JavaScript. How could I after all these years learn a new language?"
---

For a few months, maybe years, I started losing my passion for programming. What used to be really exciting had become just a regular job, doing the same tasks over and over. I missed how excited I felt when I first started learning, those times when something finally made sense, or when I would work on a problem for hours but it felt like no time had passed at all. The fun of figuring things out was gone, it now became a repetitive task.

I want to bring back my passion. But how could I do that? I think I need to go back to the start. I need to learn something new. I've been programming professionaly for over 8 years. I've limited myself to mainly PHP and JavaScript. How could I after all these years learn a new language?

## The False Start: When Everything Looks the Same

I looked at some Python code and it felt awful, my eyes hurted. Then I saw Lua, it looked so simple, so beautiful, and there I went to learn Lua. I learned Lua while attempting to setup Neovim (I spent countless hours trying to setup LSPs). Eventually I felt comfortable with Lua, the language was easy.

But I didn't feel like I was learning. _Something felt off_.

I gave Python a another chance, and after a while, I realized. Python and Lua are scripting languages. Why learn a new scripting language when I already know PHP and JavaScript?

Learning a new scripting language felt boring, they were very similar, their syntax and functions were very similar as well. I was on a loop, repeating the same thing that I already knew. **I wasn't learning**.

## Trying Something Different

That was when it hit me. I had to try something different.

Something that can make me passionate again, afterall programming for me is a hobby, a hobby in which I was slowly losing interest into, a hobby that had became a Job.

I even considered finding a new hobby and I didn't want a new hobby. I like programming. I enjoy the comfort of my home and my computer.

But I felt I needed something that could activate my brain. PHP and JavaScript was so automatic to me that I didn't have to think anymore. Any problem or project that I had to do I just did it. I didn't have to think on how anymore, I didn't have to put any thoughts into it. Even when I had a "brilliant" idea and was excited to execute it, after a few hours the excitement was gone, I was just doing the same thing all over again, nothing new just repeating the same code, again and again.

## Enter C++: The Game Changer

I had finally found a language that made me passionate again: **C++**.

There was a game that I really enjoyed playing when I was a kid and the source code was written in C++. With my knowledge I was able to edit the game source and alter some mechanics. But that wasn't enough, because I didn't fully understand what I was changing or what was written in the source files and how those files were communicating with one another. The source files were like 5 different projects each with its own compiled binary to be executed on the server.

*How do these binaries talk with each other?*

### The Google Trap (Again)

I tried learning a few things here and there by looking up on Google, just like I did with Lua, but that wasn't enough with C++. The codebase was huge, and old—it was written in the C++98 standard. Simply looking up on Google how to do certain things wasn't enough. I wanted to truly understand what I was reading.

I want the same level of understanding that I have with PHP and JavaScript, where I could within a few minutes reading the source file I wanted to be able to understand and edit it. I don't want to simply edit a code and hope for the best.

## Finding the Right Learning Path

### The Book That Changed Everything

First I searched on the internet the best resource to learn C++. There were several free resources and videos available scattered across many search results. I started a few, but soon gave up. Watching videos felt too slow because I already knew how to code.

Eventually, I found a book: **"A Tour of C++"** by Bjarne Stroustrup. This was new for me. I never read books to learn. So I thought why not give it a try?

The book "A Tour of C++" was a good choice for me. There was both the challenge to learn a new programming language as well as reading. These two were enough to activate my brain and make me excited about what was coming next.

### Mind-Blowing Concepts

In the book there were several things that I wasn't aware of. The most confusing were the pointers and references, eventually I got the hang of it. It was nice to learn a new concept. Then I learned that we could create our own operators, for example I could write my own implementation for the `++` operator.

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

## The Practice Journey

### LeetCode Reality Check

After getting a good grasp of the language I set myself up to practice. I didn't know exactly how to practice, but I always heard of "Binary Trees" and "LeetCode", but I never went far to see what that was about. But after hearing about these terms for so long I decided to give LeetCode a try.

I was able to solve a few Easy problems, with tons of while loops and if statements. After submitting my solution, I'd look at the other solutions, and oh boy, they were so short! Sure I was missing something, it was a nightmare for me to solve it. Then I started searching on how to solve LeetCode problems more easily because I was stuck, they felt way too complicated.

I saw that the recommendation was to learn **"DSA"**.

### Discovering DSA: The Missing Piece

DSA stands for Data Structures and Algorithms, something that one would have learnt at a college course. I skipped college. So that was one more challenge that I can face: Learning DSA.

I saw that one of the topics was "Binary Trees"—something that I always had heard of but never looked into. I watched a [YouTube video](https://www.youtube.com/watch?v=fAAZixBzIA), Binary Tree Algorithms from freeCodeCamp.org by AlvinTheProgrammer. The video was on JavaScript but it was enough so that I could "translate" it into C++. It was interesting, it was a topic about programming that I didn't know of, and that I would probably not pay attention to if I were in a classroom.

It was good practice. I got my first segfault error.

### The Sweet Taste of Success

Now I'll continue learning more about DSA. [I found this course on Udemy](https://www.udemy.com/course/data-structures-algorithms-python/) by Scott Barrett, the lessons are well presented, with nice smooth animations, the exercises are fun and challenging to do.

At this point I was finally happy and passionate about programming again. Every step of learning C++ was fun. **I got my hobby back.**

Here's the first time I solved a problem on my own after learning the Tortoise and the Hare algorithm. Solving this made my day. The happiness from solving this was truly rewarding.

![Whiteboard Solution for Linked List Find Kth Node From End](https://github.com/pedroni/learning-cpp/blob/main/dsa/linked-list-find-kth-node-from-end.png)
