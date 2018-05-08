![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FModusCreateOrg%2Fstop-watch-box.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FModusCreateOrg%2Fstop-watch-box?ref=badge_shield)

# Stop Watch Box

A simple `stop-watch-box` web component built with [StencilJS](https://stenciljs.com).

[stencil-component-starter](https://github.com/ionic-team/stencil-component-starter) was used to create this component.

Here's the article that I wrote about creating web components with Stencil. This repository is just a demo component created.
You can use it in your projects however ;)

## DEMO

See the demo [here](http://labs.moduscreate.com/stop-watch-box/)

## Using this component

### Script tag

- Put a script tag similar to this `<script src="https://unpkg.com/stop-watch-box@0.0.3/dist/stopwatchbox.js"></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc :

### Node Modules
- Run `npm install stop-watch-box --save`
- Put a script tag similar to this `<script src='node_modules/stop-watch-box/dist/stopwatchbox.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install stop-watch-box --save`
- Add `{ name: 'stop-watch-box' }` to your [collections](https://github.com/ionic-team/stencil-starter/blob/master/stencil.config.js#L5)
- Then you can use the element anywhere in your template, JSX, html etc


### In the html, JSX etc:

```html
<body>
  <stop-watch-box></stop-watch-box>

  <!-- to have the hover effect on watch, use below -->
  <stop-watch-box apply-hover="true"></stop-watch-box>
</body>
```

## Modus Create

[Modus Create](https://moduscreate.com) is a digital product consultancy. We use a distributed team of the best talent in the world to offer a full suite of digital product design-build services; ranging from consumer facing apps, to digital migration, to agile development training, and business transformation.

[![Modus Create](./modus.logo.svg)](https://moduscreate.com)

## Licensing

This project is [MIT licensed](./LICENSE).

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FModusCreateOrg%2Fstop-watch-box.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FModusCreateOrg%2Fstop-watch-box?ref=badge_large)