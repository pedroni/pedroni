---
title: 'Learning How to Make Games'
date: '2025-11-30'
excerpt: '...'
---

When I started programming I remember telling myself that I'd learn how to make games by the time I was 25. Now I'm 28."

I still don't know how to make games. I already know some basic C++ from learning DSA and doing some Leetcode. So I decided to search on how to make games.

## First window, first frustration

The first tutorial I did was from [Let's Make Games Youtube channel, it was a tutorial by Carl Birch "How To Make A Game In C++ & SDL2 From Scratch!"](https://www.youtube.com/watch?v=QQzAHcojEKg&list=PLhfAbcv9cehhkG7ZQK0nfIGJC_C-wSLrx) this was a fun first introduction. It gave me an idea of how entertaining programming games is. Using SDL2 I created my first window with C++ and rendered a character on the screen that moved from left to right, with a white background. I remember showing it to my partner, Bruna, with a familiar feeling of when I was a kid eager to get a praise from their parents!

![Here's a more polished version, no longer a white background https://github.com/pedroni/learning-cpp-sdl/](https://res.cloudinary.com/dzlxk32wz/video/upload/f_gif,w_500,fps_10,fl_lossy/game_demo_rn4pba.gif)

However, things weren't as fun when I reached the [#7 video "Entity Component System (ECS)"](https://www.youtube.com/watch?v=XsvI8Sng6dk). This was shocking, to say the least. It was more like watching someone just coding than an actual tutorial. We went from a few lines of code to hundreds with barely any explanation of what an ECS was or why we needed it. Basically, It went from 0 to 100 too fast.

The nice thing about this is that I faced my first memory leak bug! It was when I was handling textures with SDL2, they return pointers. I was coding random stuff outside the scope of the tutorial, and I kept creating resources in the game loop.

## Game Programming Patterns

I already had a notion now of how games worked. At least how 2D games worked. We take an image a png and render it on the screen. Turn into a spritesheet and you have animations. Move their X and Y coordinates, make it collide with something and you have interactivity.

As I mentioned earlier I had a bad experience with the software architeture part. Building an ECS without context or explanation made me frustrated. So I had to search for different resources. That's when I found about [Game Programming Patterns by Robert Nystrom](https://gameprogrammingpatterns.com/) this gave me a much deeper understanding into how game architeture should be.

With this I was able to internalize and understand what a game loop is, not only that it gave me the foundation I needed to build games. I read it simultaneously while doing tutorials. So I was always reading about something I was seeing in the tutorials.

This book has great code snippets/examples and drawings that makes it a bliss to read. The book is inviting, and engaging. I'm no expert. But I'd say it's a must read, even if you're already an expert and just want to criticize it.

From what I've seen from Robert Nystrom, I can say that he's a great person and professional. He has a [magnificent blog](https://journal.stuffwithstuff.com/) which now is an inspiration to me.

## Raylib and smaller wins

While reading the book I kept looking for more tutorials, the first one from [Let's Make Games](https://www.youtube.com/@CarlBirch) didn't make fulfilled. The series ends with an incomplete game.

### Udemy

So the next step I took was searching for something on Udemy. I found [C++ Fundamentals: Game Programming For Beginners by GameDev.tv Team](https://www.udemy.com/course/cpp-fundamentals/) this was good, it was nice paced, the videos were short and to the point.

I made 2 small games with it. This was when I properly got a good start at understanding physics specially to make the character jump. It taught me how velocity, acceleration and speed works, and how they are different. My math is not strong, but it was fun to see how they worked. I almost took a left turn and started learning math. I even bought a math for games course. I haven't started it. It's been 2 months now. It's probably going to sit and catch dust with all the other courses in Udemy.

These tutorials used Raylib and not SDL2, Raylib is much easier than SDL2, and less error prone, you don't have to manage pointers, though if I only had learnt Raylib I wouldn't have faced a genuine memory leak bug. Which was the thing I remember the most when I think about the Let's Make Games tutorials.

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

That said I didn't learn much from here. I had already seem all the concepts presented by Constref in the previous tutorials that I had done. Even though, it was the one that gave me the most satisfaction when completing. I had made some changes in the code and assets, which was honestly the best thing I could do because I saw myself writing code and coming with solutions instead of just copying a code that was on a video. I was practicing.

!["Shooter Platformer", see the source code at: https://github.com/pedroni/gamedev](https://res.cloudinary.com/dzlxk32wz/video/upload/f_gif,w_700/04-shooter-platformer_jiyegx.gif)

## Tutorial Hell

After doing all these small tutorials I noticed that I was in a familiar place. I'm in tutorial hell, I was no longer satisfied with making simple demo games from tutorials, all of them were introducing the same thing. Now I don't know where to go from here. Should I learn `CMake`? I blindly trusted AI to deal with that, because that wasn't my goal, my goal currently is to learn C++ and that I did not delegate to AI. I hate using build tools such as vite, webpack and now cmake. They're great tools don't get me wrong, however, I can't see the value of learning them, specially now with AI. But if I keep thinking like that then eventually I won't see the value in learning anything, AI will do everything.

> From future me: I eventually started reading the CMake tutorials, it took me too long to write about learning games, I started learning in September 2025, now is December 2025, and I wrote that paragraph in November 2025. And I studied CMake about it last week, today is Dec. 14th 2025.

After reaching tutorial hell, I took a break of about a month without doing any proper study session.

## Where to go from here?

I probably won't try to build a game engine by myself. It seems to complex and time consuming, if I go that route I can see my self in rabbit hole. I think I'd rather build game systems like inventory management, RNG to upgrade gears, skills, combat mechanics, in a production ready engine such as Godot.

Before I jump into a game engine I want to understand an ECS. I don't need to build it, but I want to get a good grasp of the theory, and internalize it. The same way I have internalized how the game loop and velocity works.

## Practicing, practicing, practicing

To fully learn something, you need to practice. Tutorial hell happens to who is learning because we passively consume content.

I was on a break from studying, after reaching tutorial hell, and now I want to get back. I need to practice. I can't go back to a tutorial.

To practice I needed an idea, a personal project. Something motivating. Something that makes me look forward to it. Something that will make me learn new things.

I was talking to a friend and he mentioned that I should try to make a multiplayer game, but I thought that was way too big of a jump, so during the talk I had the idea of building a [terminal chat application](https://github.com/pedroni/cpp-chat) with networking, which will give me the basics of networking communication between client and server in C++.

Now I'm trying to build something on my own, [a chat in the terminal](https://github.com/pedroni/cpp-chat), instead of following a recipe like a tutorial. This makes me in a much more active role, instead of just passively copying code from a video tutorial. I'll have to search for specific functions, code, libraries and whatnot to be able to build it.

I'll have to find the solution and learn how to implement the solution.
