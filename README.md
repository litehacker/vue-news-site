# Vue3 project setup

This is basic setup for vue 3, with typescript and express as development server. I prefer to configure webpack from scratch to have more control over my project. However, online resources and tutorials are more concentrated on using cli and auto generating tools, so setting up vue from scratch may be quite challenging for new developers.

### Features

-   Vue.js 3
-   Vuex 4
-   TypeScript
-   Webpack 5
-   Express.js

## Carousel Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-interval=""`.

| Name       | Type   | Default | Description                                                                                                           |
| ---------- | ------ | ------- | --------------------------------------------------------------------------------------------------------------------- |
| `interval` | number | `5000`  | The amount of time to delay between automatically cycling an item. If `false`, carousel will not automatically cycle. |

You can create a carousel instance with the carousel constructor, for example, to initialize with additional options and start cycling through items:

```
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})
```
