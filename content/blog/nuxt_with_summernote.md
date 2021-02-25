---
category: front-end
title: Use Summernote with Nuxt.js 
image: blog/use_summernote_with_nuxt/main.jpg
tags: ['yarn','jquery','summernote']
createdAt: 2021-02-25T00:30:00.000Z
---

<v-image src="blog/use_summernote_with_nuxt/main.jpg"></v-image>

Personally, I avoid using jQuery because the bundle capacity increases.
Nevertheless, Summernote is light and easy to use, so it is well worth using.
Usually, Tiptap usage rate is high in Vue,
but Summernote is used when i want to work comfortably because you have to set up many parts,
such as design settings and function settings, one by one.
Let's find out how to use Summernote on Nuxt together.
<!--more-->

## Install jQuery & Summernote
```shell
yarn add jquery summernote
```
## Summernote component
Lets make summernote component follow below code.
```vue
<template>
  <div class="editor"></div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'VEditor',
  model: {          // Event customizing
    prop: 'content',
    event: 'change',
  },
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  mounted() {
    const summernote = $('.editor')
    require('summernote/dist/summernote-lite')
    require('summernote/dist/summernote-lite.css')

    summernote.summernote({
      width: '100%',
      callbacks: {
        onInit: () => {
          summernote.summernote('code', this.content)
        },
        onChange: (content) => {
          this.$emit('change', content)
        },
      },
    })
  },
}
</script>
```
The part you should pay attention to is the customized Vue event part
and the part where you import the library from the `mounted hook`.

## Why event customizing needed?
This is to easily bind data using the v-model directory.
It is helpful to refer to the following link:
https://kr.vuejs.org/v2/guide/components-custom-events.html

## Why get library inside from mounted() hook?
This code block uses 'windows' object, but problems arise
because it does not know the windows object from the server side.
Thus, the code is the such as above because the library must be
imported from the mounted hook, which is used only on the client side.
