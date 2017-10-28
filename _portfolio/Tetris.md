---
layout: post
title: Tetris clone
thumbnail-path: "img/Tetris.png"
short-description: Hacked together Tetris clone written in JS

---

{:.center}
![]({{ site.baseurl }}/img/Tetris.png)

## Project Details

This was a side project I created to see if I could do it and just for fun. It was created using mainly vanilla javascript as well as manipulating the DOM. I found it very interesting I did a bunch of research of how to represent the pieces and the board, what I found was ultimately creating a matrix to represent the pieces with extra room. Creating extra room in the matrix solved the issue what would arise when rotating the pieces. I created a canvas to draw the board and draw the pieces and manipulated it. To keep track of the state of the game I wrote an update function, this function would redraw the image and thus maintaining the state of the board. Overall I think I did a good job and I have a lot of fun playing it.
