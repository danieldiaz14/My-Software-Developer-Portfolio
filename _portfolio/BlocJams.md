---
layout: post
title: BlocJams
thumbnail-path: "img/Bloc-Jams.JPG"
short-description: BlocJams is a spotify replica for playing music.

---

{:.center}
![]({{ site.baseurl }}/img/Bloc-Jams.JPG)

[Project Demo!](https://daniel-bloc-jams-angular.herokuapp.com/ "Bloc Jams Angular")

## Explanation

This project was originally written in regular html and css. It used jquery to add the music playing functionality.

## Problem

The goal of this project was to create a website similar to Spotify in which you can listen to music which worked. However, there was an issue with the navigation. Because I created this with a query, if I were to listen to music and then decide to navigate around the website it would stop playing the music.

## Solution

The entire project was refactored in an angular file. Angular is a javascript framework that allows the website to function based on a single html file. Using templates to navigate instead of separate html files, it allows the script or music playing to continue playing as you navigate around.

## Results

> Creating this project in angular allowed the website to work as intended and resolved the issue that was being caused by using jquery in a project like this.

## Conclusion

When creating a web-based project that needs fixed functionality, angular would be a better option than jquery because it uses a single html file.