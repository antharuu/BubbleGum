## Typography

You have the possibility to format your titles and texts to the desired size.

### Headers

Exemples:

```html
<h1>I'm a header 1</h1>
<p _font="h1">I'm a header 1 too</p>

<h3>I'm a header 3</h3>
<p _font="h3">I'm a header 3 too</p>

<h5>I'm a header 5</h5>
<p _font="h5">I'm a header 5 too</p>
```

Result:

<h1>I'm a header 1</h1>
<p _font="h1">I'm a header 1 too</p>
<h3>I'm a header 3</h3>
<p _font="h3">I'm a header 3 too</p>
<h5>I'm a header 5</h5>
<p _font="h5">I'm a header 5 too</p>

| Value  | Description   |
| ------ | ------------- |
| h1..h6 | Header 1 to 6 |

### Alignement

You can change the text alignement

```html
<p _font="left">I'm a left text</p>

<p _font="right">I'm a right text</p>

<p _font="center">I'm a centered text</p>

<p _font="justify">I'm a justify text</p>
```

Result:

<p _font="left">I'm a left text</p>

<p _font="right">I'm a right text</p>

<p _font="center">I'm a centered text</p>

<p _font="justify">I'm a justify text</p>

| Value   | Description             |
| ------- | ----------------------- |
| left    | left text alignement    |
| right   | right text alignement   |
| center  | center text alignement  |
| justify | justify text alignement |

### Transform

You can change the text transform

```html
<p _font="upper">I'm a uppercase text</p>
<!-- can use upper and uppercase -->

<p _font="lower">I'm a lowercase text</p>
<!-- can use lower and lowercase -->

<p _font="capitalize">I'm a capitalized text</p>
<!-- can use cap, capital and capitalize -->
```

Result:

<p _font="upper">I'm a uppercase text</p>

<p _font="lower">I'm a lowercase text</p>

<p _font="capitalize">I'm a capitalized text</p>

| Value                    | Description                    |
| ------------------------ | ------------------------------ |
| upper, uppercase         | upper text transformation      |
| lower, lowercase         | lower text transformation      |
| cap, capital, capitalize | capitalize text transformation |

### Weight

You can change the font weight

```html
<p _font="bold">I'm a bold text</p>

<p _font="bolder">I'm a bolder text</p>

<p _font="lighter">I'm a light text</p>

<p _font="normal">I'm a light text</p>
```

Result:

<p _font="bold">I'm a bold text</p>

<p _font="bolder">I'm a bolder text</p>

<p _font="lighter">I'm a light text</p>

<p _font="normal">I'm a light text</p>

| Value   | Description         |
| ------- | ------------------- |
| bold    | bold font weight    |
| bolder  | bolder font weight  |
| lighter | lighter font weight |
| normal  | normal font weight  |

### Decoration

You can change the font decoration

```html
<p _decoration="del">I'm a deleted text</p>

<p _decoration="underline">I'm a underlined text</p>

<a href="#" _decoration="none">I'm a none underlined link</a>
```

Result:

<p _decoration="del">I'm a deleted text</p>

<p _decoration="underline">I'm a underlined text</p>

<a href="#" _decoration="none">I'm a non decorated link</a>

| Value            | Description                    |
| ---------------- | ------------------------------ |
| del, linethrough | deleted text decoration        |
| underline        | underlined text decoration     |
| none             | none decorated text decoration |

### Others transformations

You can change to italic

Exemple:

```html
<p _font="italic">I'm an italic text</p>
```

Result:

<p _font="italic">I'm an italic text</p>

You can change highlight some text

```html
I'm a <span _font="mark">highlighted</span> text
<!-- you can use highlight value too -->
```

Result:

I'm a <span _font="mark">highlighted</span> text
