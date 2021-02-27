---
category: front-end
title: Prevent image reflow(Draft)
image: main.jpg
tags: ['html','optimization','reflow']
createdAt: 2021-02-21T00:30:00.000Z
---

<v-image :src="path+'/main.jpg'"></v-image>

Nowadays, a lot of Lazy loading is used to speed up initial page loading and reduce data consumption. This is obviously
a way to provide a good user experience, but there is one annoying problem. <!--more--> The problem is the reflow of
content below or around the image to create space for the newly imported image. Since reflow is a task that blocks a
user's request, it becomes a performance issue when it occurs. Since Chrome Developer Tools calls it **Layout Shift**,
it will be called Layout Shift from now on.

## What's the solution?
There are two ways I can suggest. One is a commonly known solution, and the other is the one I use that is now applied to this site.

### Commonly known solution
```css
.target img{
  max-width: 100%;
  height: 0;
}
```

```js
/* 
  well known aspect ratios
  16:9 = 56.25
  9:16 = 177.777777778
  2:3 = 66.666
*/
// ... when image is ready
const image = document.querySelector('.target img')
image.style.paddingBottom = `${aspectRatio}px`
image.style.height = 'auto' // your image aspect ratio
```
The important part is the part where the padding value is used to make it occupy the height in advance. You might wonder why the height is 0 and not used, but the src property.
Because there is no value, the browser will display an error. This indication interferes with the user experience, so the height is set to zero and the height is made to the padding value.

This method is excellent. However, this method was also annoying. When the image is loaded through lazy loading, the
padding value disappears just before rendering, which also caused layout shift. So I started to find another way.

<!--
### Using aspect ratio
css 속성 중, aspect ratio가 있다. 비율을 지정하는 속성인데, Lazy loading을 할때 동적으로 높이와 너비를 가져와서 해당 속성으로 넣어주면
-->
