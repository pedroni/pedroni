---
title: 'Socket in C++: Building a chat application in the terminal'
date: '2026-01-21'
excerpt: "Learning C++ through building toy projects. This time I'm building a chat application in the terminal to learn sockets in C++"
category: 'Learning'
tags: ['terminal', 'C++', 'sockets', 'networking', 'learning', 'programming']
keywords: ['terminal', 'C++', 'sockets', 'networking', 'learning', 'programming']
---

My journey into learning C++ is slowly building into something tangible. [Last time](/blog/learning-how-to-make-games) I was studying I went through several game tutorials. Despite the small problems I had, they  showed me how pleasurable it was to game programming. But I needed to do something on my own rather than just follow a recipe. That's how I got into building a chat application in the terminal from scratch.

![My chat app](!https://res.cloudinary.com/dzlxk32wz/video/upload/v1769041862/f_gif,e_loop,w_700/Screen_Recording_2026-01-21_at_21.28.39_uhwfai.mov
)

You can check the source code at: [pedroni/cpp-chat](https://github.com/pedroni/cpp-chat). It is by no means perfect. One can find a bug in less than 5 minutes.

This is far from perfect. The goal was to learn networking, with `socket`, but to get to the point practice networking on a chat application I had to learn different concepts that I was not aware off. I had to learn how tu use `std::thread` (this was not so difficult in fact), `cmake`, `vcpkg`, `ncurses` (not so easy) and also `fmt`.

## CMake and vcpkg

I see CMake like vite/webpack, and vcpkg like npm/yarn, not sure they're 1:1 but that's how I mapped them into my head. To learn CMake (not sure I learned it) I followed [this tutorial](https://cmake.org/cmake/help/latest/guide/tutorial/Getting%20Started%20with%20CMake.html). I don't think I can repeat what I did without consulting the documentation again. But it was pretty interesting.

I had four CMake files, that at the end were 3 projects.

- Server: receives messages that that then were forwarded to all clients, it worked like a "broadcaster". Server receives a message, and send it over everyone who was connected to it.
- Client: sends messages to the server, and receives messages from other clients through the server.
- Common: utilities that were present both in the server and the client.

I only used `vcpkg` to install `fmt`. I only used the `fmt::sprintf` function, I'm already familiar with `sprintf` from `php`. Though that wasn't the smartest move, I can see it now that I'm writing this post. `C` already provides `sprintf` I don't know why I didn't try that. 🙃

I didn't know what `vcpkg` was. Neither did I know about `fmt` I found out about it because I wanted to use `printf`, but I wanted in away that I could `push` it to a `vector<string>`.

Pretty dumb from me. Oh well, thats actually the nice part of doing someting your way and finding your path through problems. That is how you'll have to use creativity, which is not always the most optimized way, but ends up teaching a lot through practice. You have to come up with your own solution to your own problems.

## Using ncurses as a renderer

Rendering things on the terminal purely with `printf` or `std::cout` were not enough because there was no way to clear the screen or previous messages. This was important to exit a room, or to clear the chat. Also whenever I did `std::cin` to get input the screen would freeze and I would no longer see the incoming messages, this happens because `std::cin` blocks the process. The screen had to do multiple things at the same time. It has to render new messages and also to read from my input.

This is how I found out about `ncurses`. `ncurses` works in a similar way as `SDL` or `Raylib` does in a way. I had to create a "game loop" to render the contents and every cycle I'd clear the screen and render all again, just like in a game! It was fun because I got to use the knowledge I had built on the top of the tutorials.

Here's a portion of the of my `main.cpp` file


```cpp
// https://github.com/pedroni/cpp-chat/blob/develop/client/main.cpp
int main() {
  // clears the screen and presents a virtual screen
  initscr();

  // hides the keys that are pressed
  noecho();

  Chat chat;

  thread input{readInput, ref(chat)};
  thread listener{subscribe, ref(chat)};
  thread renderer{renderChat, ref(chat)};

  // join in threads works in similar fashion as an await in javascript
  input.join();
  listener.join();
  renderer.join();

  endwin();

  return 0;
}
```

## threads

To read input and reader at the same time I had to use `std::threads`, each thread had it's own "game loop".

- input: handles the keyboard
- listener: waits for incoming messages
- renderer: renders the screen, renders the input and the received messages

### input

`ncurses` provided a way to get each keystroke that was pressed, I had to take each of the keystrokes and build the message string. It also meant that keys like `backspace` and `option-backspace` did not work. Neither did arrow keys. All of these I had to process individually and write code for every single thing that they should do, for example when handling `backspace` I'd do `pop_back` on my `std::string`.

```cpp
rawCh = getch();

// ...
case 127:
  chat.input.pop_back();
break;
// ...
```

I couldn't have imagined myself handling each keystroke. That was shocking. I was like "Are you for real? There's no abstraction that will handle the keystrokes for me". I'm so used to `<input />` having all the functionality built-in...

### listener

Here it is. My main goal: networking. By this point I already had read Beej's Guide To Networking Programming in which would give me the knowledge to get this chat application working. Now I needed to put into practice.

![Beej's Guide To Networking Programming](https://res.cloudinary.com/dzlxk32wz/image/upload/v1769044962/IMG_6310_Large_vheogz.jpg)

The main goal, yet, the least interesting part. It's so verbose to stabilish a connection, I'll probably never remember how to write this code again. The good thing here is that now when I look back at the code understand each piece of what the code is doing. That's was the most valuable thing I got from here, to read and to understand. I'm pretty sure this is something you abstract once and never look at it again, because that's what I did.

Example code:

```cpp
  // ...
  struct addrinfo hints, *servinfo, *p;
  memset(&hints, 0, sizeof hints);
  hints.ai_family = AF_INET; // AF_INET means that we want IPv4
  hints.ai_socktype = SOCK_STREAM; // This meands that we want TDP
  // ...
```

The listener is responsible to reconnect to the server and to receives the messages that have been broadcasted by the server. Once the message is received I push it to a `std::vector` and then render it on the screen. To be honest, calling `recv` was very fun. When I did that it was like magic.

The fun thing is that the majority of my work as a web developer is making `http` calls, and when I learned about `WebSockets` (created in 2011) with JavaScript it felt like magic, because of the async way of life is `WebSockets` it was something out of this world. One word for it: Technologia! And well here I'm doing `sockets` in `C++` something that was created in the 70s? And it already worked just like `WebSockets` that I found revolutionary when I learned it. Now I see that things are cyclical, they reinvent themselves. The `sockets` created in the 70s are async, they're real time communication between two services. The concept already existed a long time ago.

### renderer

I already talked about it.


## thats it

That was my first toy project, it's far from perfect. There are bugs, and there are a lot of missing features. That was not the goal though. I didn't want to build a product, I wanted to build knowledge. I wanted to learn. I feel like I learned a lot of different subjects with this toy project. I recommend everyone to do the same. Experiment, have fun, do something small, that only you care about. Don't worry about it being perfect, just do it.
