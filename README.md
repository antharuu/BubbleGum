# Bubblegum

Simple and efficiency Css framework

Current version: 0.4 alpha

### A complete documentation will be done once I have completed the version 1.0.

## USAGE

In the idea it's just a css framework like many others, it's strongly inspired by bootstrap and tailwindcss. It is
however used differently and in a way that I find is more aesthetic for the html code and more practical and intuitive
to use.

#### Examples of equivalent use

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
- [ ] Nav
  - [x] Breadcrumb
  - [ ] Footer
  - [ ] Navbar
  - [ ] Pagination
- [ ] Cards
- [ ] List
- [ ] Progress
    - [ ] Progress
    - [ ] Bar
- [ ] Form
    - [ ] Checkbox
    - [ ] Radio
    - [ ] Chips
    - [ ] Range
    - [ ] Select
    - [ ] Input
