---
category: front-end
title: Prevent image reflow
image: main.jpg
tags:
  - html
  - optimization
  - reflow
createdAt: 2021-02-21
---

<v-image :src="path+'/main.jpg'"></v-image>

Lazy loading is often used these days to speed up initial page loading and reduce data consumption. 
This is obviously a way to provide a good user experience, but there is one annoying problem. <!--more-->
That is the reflow of content below or around the image to create space for the newly imported image.
Reflow is an action that blocks a user's request, and you should pay attention because it causes performance problems when they occur.
In this article, we will learn how to prevent image reflow.  
Let's check it out.

## Using padding
This is a trick using the characteristics of padding, and the percentage value of padding is calculated based on width.
Using this characteristic, the height is specified by **padding-top** or **padding-bottom** to prevent layout shift.
Let's look at the code below.
```css
/* 
  well known aspect ratios
  16:9 = 56.25
  9:16 = 177.777777778
  2:3 = 66.666
*/
.image-ratio{
  width: 100%;
  height: 0;
  padding-top: 56.25%;
}
```
This method is excellent.
When used with JavaScript, it is recommended because the ratio can be dynamically applied to the size of the original image.
And there is a css property that is more suitable for setting the ratio. 
It is a property called aspect-ratio, but browser compatibility is not good yet.
I look forward to be supported with many browsers soon.
