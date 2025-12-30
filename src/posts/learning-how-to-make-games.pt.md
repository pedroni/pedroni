---
title: 'Learning How to Make Games'
date: '2025-12-21'
excerpt: 'The late beginning of my journey into game development with C++.'
category: 'Learning'
tags: ['gamedev', 'C++', 'SDL', 'Raylib', 'learning', 'tutorial-hell', 'programming']
keywords: ['game development', 'C++ game programming', 'learning gamedev', 'SDL2 tutorial', 'tutorial hell', 'beginner game dev']
---

A white window. A character walking from left to right. Happiness, excitement, joy, that's what I felt when I rendered my first character on the screen. I ran to my partner, Bruna, to share what I had just built. I showed it with pride, with a familiar feeling of when I was a kid, eager to get a praise from my parents. She saw it, looked at me and smilled without fully understanding what I had just accomplished.

![My first white window](https://res.cloudinary.com/dzlxk32wz/video/upload/f_gif,e_loop,w_700/Screen_Recording_2025-12-21_at_17.50.52_yqbcuu.gif)

When I first started programming I had set an imaginary deadline. I remember telling my friends, and colleagues about it: "When I turn 25 I'll learn how to make games". I'm 28 now. Three years late. But that white window was the start.

## First window

I got my first window watching [Let's Make Games Youtube channel, it was a tutorial by Carl Birch "How To Make A Game In C++ & SDL2 From Scratch"](https://www.youtube.com/watch?v=QQzAHcojEKg&list=PLhfAbcv9cehhkG7ZQK0nfIGJC_C-wSLrx) this was a nice first introduction. It gave me an idea of how fun programming games could be. Drawing an image on a window that wasn't a browser, was so fun that I had forgotten I've been writing `<img />` tags for several years now. I had achieved that in less than 30 minutes!

However, things weren't as fun when I reached the [#7 video "Entity Component System (ECS)"](https://www.youtube.com/watch?v=XsvI8Sng6dk). We went from a few lines of code to hundreds with barely any explanation of what an ECS was or why we needed it. It went from 0 to 100 too fast. It was overcomplicated, I didn't know what the hell an ECS and why we even needed an ECS. I was happy to see that I was not alone, there were many frustrated comments in this particular video.

Anyways. I was exposed to a lot of C++ features that I wasn't aware of such as: inline functions, template functions, static variables inside template functions, argument forwarding, and many more. And for that I'm grateful.

The nice thing about this is that I faced my first memory leak bug! I was happily playing with sprites and rendering different things on the screen (outside the scope of the tutorials) and that was when it happened. I kept creating resources in the game loop! Looking at the Activity Monitor I saw a spike of over `20GB` of RAM!

## Game Programming Patterns

I already had a notion now of how games worked. At least how 2D games worked. We take an image a png and render it on the screen. Turn into a spritesheet and you have animations. Move their X and Y coordinates, make it collide with something and you have interactivity.

As I mentioned earlier I had a bad experience with the software architecture part. Building an ECS without context or explanation made me frustrated. So I had to search for different resources. That's when I found about [Game Programming Patterns by Robert Nystrom](https://gameprogrammingpatterns.com/) this gave me a much deeper understanding into how game architecture should be.

With this I was able to internalize and understand what a game loop is, not only that it gave me the foundation I needed to build games. I read it simultaneously while doing tutorials. So I was always reading about something I was seeing in the tutorials.

This book has great code snippets/examples and drawings that makes it a bliss to read. The book is inviting, and engaging. I'm no expert. But I'd say it's a must read, even if you're already an expert and just want to criticize it.

From what I've seen from Robert Nystrom, I can say that he's a great person and professional. He has a [magnificent blog](https://journal.stuffwithstuff.com/) which now is an inspiration to me.

## More tutorials

While reading the book I kept looking for more tutorials, the first one from [Let's Make Games](https://www.youtube.com/@CarlBirch) didn't fulfull me. The series ends with an incomplete game. And lack explanations.

### Udemy

So the next step I took was searching for something on Udemy. I found [C++ Fundamentals: Game Programming For Beginners by GameDev.tv Team](https://www.udemy.com/course/cpp-fundamentals/) this was good, it was nice paced, the videos were short and to the point.

I made 2 small games with it. This was when I properly got a good start at understanding physics to make the character jump. It taught me how velocity, acceleration and speed works, and how they are different. My math is not strong, but it was fun to see how they worked. I almost took a left turn and started learning math. I even bought a math for games course! I haven't started it. It's been 2 months now. It's probably going to sit and catch dust with all the other courses in Udemy.

These tutorials used Raylib and not SDL, Raylib is much easier than SDL2, and less error prone, you don't have to manage pointers, though if I only had learnt Raylib I wouldn't have faced a genuine memory leak bug. Which was the thing I remember the most when I think about the Let's Make Games tutorials.

These are the two games I made with C++ Fundamentals on Udemy:

#### Axe

Basic collision understanding and moving pixels on the screen using Raylib.

![Axe, see the source code at: https://github.com/pedroni/gamedev](https://res.cloudinary.com/dzlxk32wz/image/upload/01-axe_zq9cdz.gif)

#### Dapper Dasher

Collision and basic physics for jumping, using velocity, acceleration and speed.

![Dapper Dasher, see the source code at: https://github.com/pedroni/gamedev](https://res.cloudinary.com/dzlxk32wz/image/upload/output_qqtolh.gif)

### Youtube

After finishing these two games on Udemy, I went back to Youtube because I still wanted to learn how to make games.

I found this one that really struck me when I saw the final result: [Making a game from scratch with C/C++, CMake, SDL3, SDL_image, SDL_mixer, by Constref](https://www.youtube.com/watch?v=Wu2g-N5Z78Y) it looked like a real game, you could shoot, jump, move around, the character slided, it had cool assets, and the tutorial was well edited!

That said I didn't learn much from here. I had already seen all the concepts presented by Constref in the previous tutorials that I had done. However, it was the one that got me the closets to a real game after completing it. I made some changes in the code and assets, which was honestly the best thing I could do because I saw myself writing code and coming with solutions instead of just copying a code that was on a video. I was practicing.

!["Shooter Platformer", see the source code at: https://github.com/pedroni/gamedev](https://res.cloudinary.com/dzlxk32wz/video/upload/f_gif,e_loop,w_700/04-shooter-platformer_jiyegx.gif)

## Tutorial Hell

After doing all these small tutorials I noticed that I was in a familiar place. I'm in tutorial hell. I was no longer satisfied with making simple demo games from tutorials, all of them were showing me the same thing.

This is a point that everyone learning something reaches, and it's difficult to leave. It's a moment that you can get so frustrated that you quit entirely and never come back. This is scary a moment, psychologically scary. You get bored. Saturated. You lose momentum. You don't know where to go. Most give up at this point.

After reaching tutorial hell, I took a break of about a month without doing any proper study session.

## Where to go from here?

I probably won't try to build an entire game engine by myself. It seems too complex and time consuming, if I go that route I can see myself in a rabbit hole. I think I'd rather build game systems like inventory management, RNG to upgrade gears, skills, combat mechanics, in a production ready engine such as Godot.

Before I jump into a game engine though, I really want to understand what an ECS is. I don't need to build it, but I do want to get a good grasp of the concepts and theory behind it, and have it internalized. The same way I have internalized how the game loop and velocity works.

To fully learn something, you need to practice. Tutorial hell happens because we passively consume content. I needed an idea, a personal project. Something motivating. Something that makes me look forward to it.

I was talking to a friend and he mentioned that I should try to make a multiplayer game, but I thought that was way too big of a jump. During our talk I had the idea of building a [terminal chat application](https://github.com/pedroni/cpp-chat) with networking, which will give me the basics of client-server communication in C++.

Now I'm building something on my own instead of following a recipe. This puts me in a much more active role. I'll have to search for specific functions, libraries, and solutions. So far I've already seen that I need to learn multithreading for non-blocking input and sockets for communication.

I can already see my neurons getting activated!
