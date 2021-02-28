---
category: front-end
title: Using svg icon on Vue.js 2.x
image: main.jpg
tags: ['vue2', 'svg']
createdAt: 2021-02-24T00:30:00.000Z
---

<v-image :src="path+'/main.jpg'"></v-image>

When front-end development, if the icon library you are using does not have the icon you want,
so you can draw it yourself or take it over from the designer.
This article, organize how they can be used effectively.
<!--more-->

## SVG TEMPLATE
First, we analyze the forms from SVG images to extract common parts,
which can be simplified into namespace, width, height, and viewBox.
We'll make this common part into a template and make it into a component for reuse.
Let's look at the code together.
```vue[VSvg.vue]
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    class="svg--inline"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  name: 'VSvg',
  props: {
    viewBox: { type: String, default: '0 0 24 24' },
    width: { type: [Number, String], default: '1em' },
    height: { type: [Number, String], default: '1em' },
  },
}
</script>

<style>
.svg--inline{
  display: inline-block;
  font-size: inherit;
  overflow: visible;
  vertical-align: -.125em;
}
</style>
```
We added a class called .svg--inline to allow it to be placed like text and handle
size properties at the same time.
Since the svg icon is typically imported and be used by https://icomoon.io/,
the default value for props is set to the most popular value for the site.

## Get SVG icon (with icomoon)
Let's get icon from https://icomoon.io/app/#/select.

<v-image :src="path+'/select_icon.jpg'" caption>Select jQuery icon</v-image>

<v-image :src="path+'/get_code.jpg'" caption>Copy SVG code</v-image>

In the Create SVG menu, click the Get Code button for the selected icon. Then you can see the screen like above.
Select it like the image above and make it a component. If you look at the line above the selected line, remember the size of the viewBox.

```vue[IconJquery.vue]
<template>
  <path
    fill="currentColor"
    d="M2.045 7.832c-2.831 4.067-2.48 9.356-0.316 13.675 0.049 0.105 0.104 0.205 0.157 0.305 0.031 0.069 0.065 0.133 0.103 0.199 0.017 0.037 0.041 0.076 0.063 0.111 0.035 0.069 0.072 0.136 0.108 0.203l0.209 0.353c0.039 0.065 0.076 0.129 0.12 0.195 0.073 0.125 0.16 0.249 0.236 0.375 0.035 0.052 0.067 0.104 0.105 0.156 0.148 0.232 0.284 0.425 0.428 0.612l-0.015-0.020c0.104 0.143 0.208 0.281 0.32 0.42 0.036 0.051 0.076 0.101 0.113 0.152l0.295 0.359c0.036 0.041 0.072 0.089 0.111 0.132 0.131 0.157 0.269 0.311 0.408 0.465 0 0.003 0.004 0.005 0.007 0.009 0.172 0.217 0.358 0.409 0.56 0.582l0.006 0.005c0.107 0.109 0.213 0.219 0.327 0.325l0.135 0.129c0.148 0.139 0.296 0.277 0.452 0.411 0.003 0 0.004 0.003 0.007 0.004l0.076 0.067c0.136 0.119 0.273 0.237 0.413 0.347l0.167 0.14c0.113 0.091 0.231 0.177 0.347 0.267l0.181 0.139c0.124 0.093 0.256 0.185 0.383 0.276 0.047 0.033 0.093 0.067 0.141 0.097l0.039 0.031 0.375 0.247 0.16 0.107c0.196 0.125 0.391 0.244 0.584 0.361 0.056 0.028 0.112 0.059 0.164 0.091 0.144 0.083 0.293 0.167 0.439 0.244 0.080 0.045 0.163 0.084 0.245 0.125 0.1 0.056 0.204 0.111 0.311 0.167 0.029 0.009 0.054 0.019 0.077 0.032l-0.002-0.001c0.044 0.020 0.085 0.041 0.128 0.063 0.16 0.080 0.327 0.156 0.5 0.232 0.032 0.013 0.067 0.027 0.101 0.045 0.192 0.084 0.384 0.164 0.583 0.243 0.045 0.013 0.093 0.036 0.14 0.053 0.18 0.068 0.365 0.137 0.548 0.203l0.067 0.024c0.204 0.069 0.405 0.136 0.612 0.2 0.048 0.013 0.097 0.031 0.148 0.044 0.212 0.064 0.417 0.14 0.631 0.181 13.68 2.493 17.656-8.225 17.656-8.225-3.34 4.349-9.267 5.496-14.88 4.22-0.208-0.048-0.416-0.115-0.625-0.176-0.382-0.11-0.633-0.192-0.882-0.28l0.126 0.039-0.083-0.032c-0.181-0.061-0.356-0.129-0.533-0.197-0.034-0.015-0.082-0.033-0.132-0.050l-0.015-0.004c-0.196-0.079-0.387-0.16-0.576-0.244-0.041-0.013-0.076-0.032-0.117-0.048-0.35-0.155-0.508-0.231-0.665-0.308l0.184 0.081c-0.049-0.021-0.093-0.044-0.141-0.069-0.125-0.059-0.251-0.125-0.373-0.189-0.114-0.054-0.196-0.097-0.276-0.142l0.027 0.014c-0.151-0.080-0.301-0.167-0.452-0.249-0.045-0.032-0.097-0.059-0.149-0.088-0.289-0.169-0.479-0.288-0.668-0.409l0.084 0.050c-0.064-0.040-0.115-0.075-0.165-0.111l0.008 0.006c-0.172-0.106-0.308-0.197-0.44-0.291l0.024 0.017c-0.047-0.031-0.089-0.064-0.137-0.097-0.17-0.118-0.298-0.211-0.424-0.306l0.032 0.023c-0.056-0.045-0.116-0.088-0.176-0.133-0.117-0.092-0.236-0.18-0.353-0.277l-0.157-0.125c-0.174-0.14-0.319-0.263-0.461-0.388l0.016 0.013c-0.015-0.014-0.031-0.028-0.048-0.039l-0.001-0.001-0.463-0.421-0.133-0.125c-0.109-0.111-0.221-0.217-0.333-0.327l-0.129-0.133c-0.138-0.137-0.273-0.278-0.404-0.421l-0.008-0.009-0.020-0.021c-0.141-0.155-0.279-0.312-0.417-0.472-0.036-0.041-0.069-0.085-0.107-0.129l-0.301-0.369c-0.105-0.131-0.254-0.326-0.4-0.522l-0.054-0.075c-3.113-4.251-4.24-10.117-1.748-14.929zM10.828 4.407c-2.052 2.945-1.936 6.884-0.339 9.999 0.296 0.584 0.596 1.078 0.928 1.547l-0.025-0.038c0.307 0.44 0.645 0.96 1.056 1.315 0.143 0.163 0.297 0.32 0.459 0.479l0.12 0.12c0.152 0.147 0.308 0.291 0.467 0.433l0.020 0.017c0.16 0.141 0.34 0.29 0.524 0.435l0.028 0.021c0.045 0.031 0.084 0.067 0.128 0.097 0.187 0.144 0.375 0.283 0.569 0.42l0.020 0.012c0.083 0.060 0.171 0.115 0.264 0.173 0.037 0.024 0.080 0.056 0.12 0.080 0.141 0.091 0.28 0.176 0.423 0.263 0.023 0.009 0.043 0.021 0.064 0.031 0.12 0.073 0.251 0.144 0.376 0.209 0.044 0.027 0.087 0.047 0.132 0.072 0.089 0.044 0.177 0.091 0.263 0.136l0.043 0.019c0.18 0.088 0.364 0.171 0.544 0.253 0.045 0.017 0.084 0.032 0.123 0.051 0.148 0.064 0.299 0.125 0.447 0.183 0.067 0.023 0.129 0.049 0.192 0.069 0.136 0.051 0.279 0.097 0.413 0.144l0.187 0.060c0.195 0.060 0.392 0.139 0.597 0.172 10.56 1.751 13.005-6.383 13.005-6.383-2.201 3.168-6.461 4.677-11.001 3.499-0.277-0.071-0.476-0.13-0.673-0.195l0.076 0.022c-0.064-0.017-0.12-0.037-0.181-0.056-0.139-0.048-0.281-0.095-0.416-0.145l-0.192-0.072c-0.149-0.060-0.301-0.116-0.447-0.18-0.045-0.020-0.087-0.033-0.121-0.053-0.187-0.084-0.375-0.167-0.556-0.256l-0.275-0.143-0.159-0.080c-0.123-0.064-0.236-0.131-0.353-0.2-0.033-0.016-0.060-0.031-0.086-0.047l0.003 0.002c-0.141-0.088-0.288-0.173-0.423-0.264-0.045-0.025-0.087-0.056-0.129-0.083l-0.277-0.181c-0.192-0.133-0.38-0.277-0.569-0.416-0.043-0.039-0.084-0.071-0.125-0.105-1.996-1.569-3.571-3.715-4.317-6.144-0.787-2.525-0.613-5.357 0.745-7.656zM18.213 1.845c-1.211 1.776-1.327 3.981-0.493 5.94 0.885 2.080 2.696 3.713 4.805 4.487 0.087 0.033 0.171 0.061 0.26 0.093l0.117 0.036c0.123 0.039 0.247 0.084 0.373 0.112 5.835 1.125 7.413-2.996 7.839-3.601-1.389 1.995-3.719 2.473-6.576 1.779-0.279-0.070-0.509-0.143-0.732-0.228l0.044 0.015c-0.337-0.119-0.609-0.233-0.873-0.361l0.050 0.022c-0.55-0.269-1.022-0.562-1.462-0.896l0.021 0.016c-2.56-1.939-4.145-5.64-2.476-8.655z"
  ></path>
</template>

<script>
export default {
  name: 'IconJquery',
}
</script>
```
We made the component under the name IconJquery. Now ready to use.

## Use SVG component
```vue[SomeComponent.vue]
<v-svg view-box="0 0 32 32" width="1em" height="1em">
  <icon-jquery />
</v-svg>
```

Applying such as above, you can get the result.

<v-image :src="path+'/result.jpg'" caption>result</v-image>

## Appendix 😋
In the case of SVG code having multiple paths, it is grouped with g tag which means Group.
```vue[IconHibernate.vue]
<template>
  <g>
    <path d="M0 0h2500v2500H0z" fill="currentColor" />
    <path
      d="M1417.5 1969.9v-787.4s51.2-188.4-630.9 77.1c-1.2 3.4-1.2-728.2-1.2-728.2l222.9-1.4v468.7s624-245.8 624 186.4v784.8zm127-1156.2h-236.4c85.1-104 162.1-282.3 162.1-282.3h244.4c.1 0-41.8 116.2-170.1 282.3zM789.4 1968.6v-448.4l224.2 224.2z"
      fill="#0e1a2a"
    />
  </g>
</template>

<script>
export default {
  name: 'IconHibernate',
}
</script>
```