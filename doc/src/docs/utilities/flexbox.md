## Flexbox

Some of the most used flexbox attributes and values is available

For make your container flex, you can use the attribute `_display`, see more [here](layout.html#display) about.

```html
<div _display="flex">
  <!-- Your content -->
</div>

<!-- Dont forget rows are flexboxes too -->
<div _row>
  <!-- Your content -->
</div>
```

### Direction

```html
<div _display="flex" _direction="row"></div>
<!-- This is the default value-->

<div _display="flex" _direction="reverse"></div>

<div _display="flex" _direction="col"></div>

<div _display="flex" _direction="col reverse"></div>
```

| Value       | Description                    |
| ----------- | ------------------------------ |
| row         | flex direction: row            |
| reverse     | flex direction: row-reverse    |
| col, column | flex direction: column         |
| col reverse | flex direction: column-reverse |

### Wrap

```html
<div _display="flex" _wrap="wrap"></div>
<!-- This is the default value-->

<div _display="flex" _wrap="nowrap"></div>

<div _display="flex" _wrap="reverse"></div>
```

| Value                 | Description             |
| --------------------- | ----------------------- |
| wrap                  | flex wrap: wrap         |
| nowrap                | flex wrap: nowrap       |
| reverse, wrap-reverse | flex wrap: wrap-reverse |

### Justify

```html
<div _display="flex" _justify="start"></div>
<!-- This is the default value-->

<div _display="flex" _justify="end"></div>

<div _display="flex" _justify="center"></div>

<div _display="flex" _justify="around"></div>

<div _display="flex" _justify="between"></div>

<div _display="flex" _justify="evenly"></div>
```

| Value   | Description                    |
| ------- | ------------------------------ |
| start   | justify content: start         |
| end     | justify content: end           |
| center  | justify content: center        |
| around  | justify content: space-around  |
| between | justify content: space-between |
| evenly  | justify content: space-evenly  |

### Items

```html
<div _display="flex" _items="stretch"></div>

<div _display="flex" _items="start"></div>

<div _display="flex" _items="end"></div>

<div _display="flex" _items="center"></div>

<div _display="flex" _items="baseline"></div>
```

| Value    | Description           |
| -------- | --------------------- |
| stretch  | align items: stretch  |
| start    | align items: start    |
| end      | align items: end      |
| center   | align items: center   |
| baseline | align items: baseline |

### Content

```html
<div _display="flex" _content="normal"></div>
<!-- This is the default value-->

<div _display="flex" _content="start"></div>

<div _display="flex" _content="end"></div>

<div _display="flex" _content="center"></div>

<div _display="flex" _content="between"></div>

<div _display="flex" _content="around"></div>

<div _display="flex" _content="evenly"></div>

<div _display="flex" _content="stretch"></div>
```

| Value   | Description                  |
| ------- | ---------------------------- |
| normal  | align content: normal        |
| start   | align content: start         |
| end     | align content: end           |
| center  | align content: center        |
| between | align content: space-between |
| around  | align content: space-around  |
| evenly  | align content: space-evenly  |
| stretch | align content: stretch       |
