<p align="center">
  <img width="600" src="https://i.postimg.cc/mrNwgZNF/Bubblegum-full.png">
</p>

Simple and efficiency Css framework

[![GitHub issues](https://img.shields.io/badge/Version-0.6%20alpha-orange)](https://github.com/antharuu/BubbleGum/issues)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4d29b2e75bb7432c81708eecec2861ea)](https://app.codacy.com/gh/antharuu/BubbleGum?utm_source=github.com&utm_medium=referral&utm_content=antharuu/BubbleGum&utm_campaign=Badge_Grade)

A complete documentation will be done once I have completed the version 1.0.

## INSTALLATION

You can simply download the project or the css on this github repository. Easier and cleaner ways to come.

### With npm

```
npm i bubblegum-css
```

### With composer

```
composer require antharuu/bubblegum "v0.6.0-alpha"
```

### With CDN

```html

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bubblegum-css@0.6.0/css/bubblegum.min.css">
```

## USAGE

In the idea it's just a css framework like many others, it's strongly inspired by bootstrap and tailwindcss. It is
however used differently and in a way that I find is more aesthetic for the html code and more practical and intuitive
to use.

### Examples of equivalent use

```html
<!-- BOOTSTRAP -->
<div class="container">
    <div class="row">
        <div class="col-6"></div>
    </div>
</div>

<!-- BUBBLEGUM -->
<div _container>
    <div _row>
        <div _col="6"></div>
    </div>
</div>
```

```html
<!-- BOOTSTRAP -->
<h1 class="color-primary text-center bg-secondary">My text</h1>

<!-- BUBBLEGUM -->
<h1 _font="primary center" _bg="secondary">My text</h1>
```

```html
<!-- BOOTSTRAP -->
<div class="row justify-content-center">
    <div class="col-10 col-md-10 col-xl-6"></div>
    <div class="col-6 col-push-1"></div>
</div>

<!-- BUBBLEGUM -->
<div _row _justify="center">
    <div _col="10 md:10 xl:6"></div>
    <div _col="6" _push="1"></div>
</div>
```

```html
<!-- BOOTSTRAP -->
<div class="m-2"></div>
<div class="y-2 x-5"></div>

<!-- BUBBLEGUM -->
<div _margin="2"></div>
<div _margin="y-2 x-5"></div>
```

## /!\ WORK IN PROGRESS /!\

- [x] Grid
    - [x] Container
    - [x] Row
    - [x] Col
- [x] Display
    - [x] Visible
    - [x] Display
- [x] Positions
- [x] Margins
    - [x] Margin
    - [x] Padding
- [x] Colors
- [x] Typo
- [x] Medias
- [x] Shadow
- [x] Table
- [x] Buttons
- [x] Nav
    - [x] Breadcrumb
    - [x] Footer
    - [x] Navbar
    - [x] Pagination
- [x] Cards
- [x] List
- [x] Progress
    - [x] Progress
    - [x] Bar
- [ ] Form
    - [x] Input
    - [x] Checkbox
    - [x] Radio
    - [ ] Chips
    - [ ] Range
    - [ ] Select

<p align="center">
  <img width="300" src="https://i.postimg.cc/zXc2sf0z/Bubblegum.png">
</p>
