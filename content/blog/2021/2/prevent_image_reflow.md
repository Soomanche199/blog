---
category: front-end
title: Prevent image reflow
image: main.jpg
tags: ['html','optimization','reflow']
createdAt: 2021-02-21
---

<v-image :src="path+'/main.jpg'"></v-image>

Nowadays, a lot of Lazy loading is used to speed up initial page loading and reduce data consumption. This is obviously
a way to provide a good user experience, but there is one annoying problem. <!--more--> The problem is the reflow of
content below or around the image to create space for the newly imported image. Since reflow is a task that blocks a
user's request, it becomes a performance issue when it occurs. Since Chrome Developer Tools calls it **Layout Shift**,
it will be called Layout Shift from now on.

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
