<p align="center">
  <img width="200" src="https://i.postimg.cc/zXc2sf0z/Bubblegum.png" alt="Bubblegum icon">
</p>


Bubblegum is a classless CSS framework, this is more than a simple framework, this is a simple, flexible and intuitive modern framework, fast to install, easy to use, and customizable. 

Created with [stylus](https://stylus-lang.com/).

[![GitHub issues](https://img.shields.io/badge/Version-1.1.1-green)](https://github.com/antharuu/BubbleGum/issues)
[![Rate on Openbase](https://badges.openbase.io/js/rating/bubblegum-css.svg)](https://openbase.io/js/bubblegum-css?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

A complete html documentation is in the folder.

#### LOVE LOGIC BUT WANT TO USE BOOTSTRAP OR WHAT YOU WANT ? USE "[BUBBLEGUMED](https://github.com/antharuu/Bubblegumed)"!

## INSTALLATION

You can simply download the project or the css on this github repository. Easier and cleaner ways to come.

### With npm

```
npm i bubblegum-css
```

### With composer

```
composer require antharuu/bubblegum "v1.1.2"
```

### With CDN

```html

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bubblegum-css@1.1.2/dist/bubblegum.min.css">
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

<p align="center">
  <img width="120" src="https://i.postimg.cc/zXc2sf0z/Bubblegum.png">
</p>
