---
category: front-end
title: Using Postcss with Nuxt.js 
image: main.jpg
tags: ['yarn', 'postcss','nuxt']
createdAt: 2021-02-26T00:30:00.000Z
---

<v-image :src="path+'/main.jpg'"></v-image>

I am programming mainly on backend development, but I am very interested in UI/UX.
So I tried using the several CSS framework, and in the end, it was thought that best to deal with CSS directly.
<!--more-->
because, the Css framework is designed to be used in a variety of cases, so it has a large bundle capacity and is quite troublesome when customizing.
For this reason, when I used Css myself, the degree of freedom was high, but the amount of code became too high.
So while I was looking into it again, I thought about Scss and Postcss until the end and finally decided to use Postcss and I am still using it now.

## What is Postcss?
The Postcss official site describes it as a tool for converting Css into Javascript.
To be more specific, a number of features are provided in plug-in form around the specification Postcss.
The plugins are explaining on the [official Postcss github](https://github.com/postcss/postcss/blob/main/docs/plugins.md).
It may be added or deprecated based on the Css formula specification.
Furthermore, because it is based on Javascript, 
front-end developers can easily create plug-ins compared to other Css extension languages.

## Preparing development environment
When creating a project with the create nuxt app command, 
if you do not select the UI framework as shown in the picture below,
Postcss is used as the default, so you can use it immediately.

<v-image :src="path+'/no_select.jpg'"></v-image>

It's enough to use the default setting, but let's change the setting to use the 
[nesting rule](https://preset-env.cssdb.org/features#nesting-rules) to better productivity.
To configure the Postcss-preset-env that embedded on Nuxt, write as follows. 

```js
// nuxt.config.js
build: {
    postcss: {
      plugins: {
        'postcss-normalize': {},
      },
      preset: {
        features: {
          'nesting-rules': true,
        },
      },
    }
  }
```
You may be curious about the fact that the code block called 'stage: 1' was commentized.
Css future features are categorized into six stages, from stage 0 to stage 4 and include the reject stage.

Postcss-preset-env, which is built into Nuxt, is set to use stage2 by default.
The nesting rules we want to use are included in stage1, which can be used by activating stage1,
and can be added selectively as desired functionality.
Since stage1 does not fully understand what functionality it has,
it prefers to use it selectively to avoid unwanted consequences. Read more at https://preset-env.cssdb.org/.

## Install postcss-normalize(normalize.css)
Although there are several css initialization codes, i am prefer normalize.css 
because it is relatively short and standardizes only a few different parts of each browser.
With postcss-normalize, the normalize code is inserted according to the type of browser. Let's install it.

```shell
yarn add -D postcss-normalize
```

The method of use is simple. You only need to declare `@import-normalize` in the css file to be used.
We will make a global css file and insert the code. Create main.css inside the assets directory.

```css
/* main.css */
@import-normalize
```

## Using global Css
Now let's link the main.css file we will use to the nuxt.
```js
// nuxt.config.js
css: ['assets/styles/main.pcss'],
```

<v-image :src="path+'/normalize.jpg'" caption>applied normalize.css</v-image>

## Extract the css variable
Let's extract variables like scss and make them into a file.
This is because frequently used values, such as color values, shadow values, and breakpoint values,
can be extracted as variables, making them easier to modify later.
Create assets/variables.css and type the code below.
```css
/* variables.css */
:root {
  --sea-pink: #de98ab;
  --corn-flower-blue: #6495ed;
}
```
`:root` means html element and is used to declare global variables. Modify nuxt.config.js to use variables.css in nuxt.
Then try using the variable in the index.vue file.
```js
// nuxt.config.js
css: ['assets/styles/variables.pcss', 'assets/styles/main.pcss'],
```
```html
<!--index.vue-->
<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">test_app</h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
  color: var(--sea-pink);

  @media (min-width: 960px) {
    color: var(--corn-flower-blue);
  }
}
</style>
```

## Result
<v-image :src="path+'/result.gif'" caption>result</v-image>
