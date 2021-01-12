## Spacing

### Margin

You also have a way to add margins simply with \_margin

Exemple:

```html
<div _margin="0">Margin 0</div>
<div _margin="1">Margin 1</div>
<div _margin="2">Margin 2</div>
<div _margin="3">Margin 3</div>
<div _margin="4">Margin 4</div>
<div _margin="5">Margin 5</div>
<div _margin="6">Margin 6</div>
<div _margin="7">Margin 7</div>
<div _margin="8">Margin 8</div>
<div _margin="9">Margin 9</div>
<div _margin="10">Margin 10</div>
```

Results:

<div _bg='muted' _padding='2' _round _margin="0">Margin 0</div>
<div _bg='muted' _padding='2' _round _margin="1">Margin 1</div>
<div _bg='muted' _padding='2' _round _margin="2">Margin 2</div>
<div _bg='muted' _padding='2' _round _margin="3">Margin 3</div>
<div _bg='muted' _padding='2' _round _margin="4">Margin 4</div>
<div _bg='muted' _padding='2' _round _margin="5">Margin 5</div>
<div _bg='muted' _padding='2' _round _margin="6">Margin 6</div>
<div _bg='muted' _padding='2' _round _margin="7">Margin 7</div>
<div _bg='muted' _padding='2' _round _margin="8">Margin 8</div>
<div _bg='muted' _padding='2' _round _margin="9">Margin 9</div>
<div _bg='muted' _padding='2' _round _margin="10">Margin 10</div>

You can precise the direction with the first letter prefix

Exemple:

```html
<div _margin="l-5">Margin left 5</div>
<div _margin="t-5">Margin top 5</div>
<div _margin="r-5">Margin right 5</div>
<div _margin="b-5">Margin bottom 5</div>
```

<div _bg="muted" _padding="2" _round _margin="l-5">Margin left 5</div>
<div _bg="muted" _padding="2" _round _margin="t-5">Margin top 5</div>
<div _bg="muted" _padding="2" _round _margin="r-5">Margin right 5</div>
<div _bg="muted" _padding="2" _round _margin="b-5">Margin bottom 5</div>
</br>

| Value    | Description                        |
| -------- | ---------------------------------- |
| 0..10    | 0 through 10 (or logic limitation) |
| l-0..10  | left marge                         |
| r-0..10  | right marge                        |
| t-0..10  | top marge                          |
| b-0..10  | bottom marge                       |
| x-0..10  | left & right marge                 |
| y-0..10  | top & down marge                   |
| md:0..10 | breakpoints is available           |

### Padding

Padding too with attribute `_padding`

Exemple:

```html
<div _padding="0">Padding 0</div>
<div _padding="1">Padding 1</div>
<div _padding="2">Padding 2</div>
<div _padding="3">Padding 3</div>
<div _padding="4">Padding 4</div>
<div _padding="5">Padding 5</div>
<div _padding="6">Padding 6</div>
<div _padding="7">Padding 7</div>
<div _padding="8">Padding 8</div>
<div _padding="9">Padding 9</div>
<div _padding="10">Padding 10</div>
```

Results:

<div _bg='muted' _margin='t-2' _round _padding="0">Padding 0</div>
<div _bg='muted' _margin='t-2' _round _padding="1">Padding 1</div>
<div _bg='muted' _margin='t-2' _round _padding="2">Padding 2</div>
<div _bg='muted' _margin='t-2' _round _padding="3">Padding 3</div>
<div _bg='muted' _margin='t-2' _round _padding="4">Padding 4</div>
<div _bg='muted' _margin='t-2' _round _padding="5">Padding 5</div>
<div _bg='muted' _margin='t-2' _round _padding="6">Padding 6</div>
<div _bg='muted' _margin='t-2' _round _padding="7">Padding 7</div>
<div _bg='muted' _margin='t-2' _round _padding="8">Padding 8</div>
<div _bg='muted' _margin='t-2' _round _padding="9">Padding 9</div>
<div _bg='muted' _margin='t-2' _round _padding="10">Padding 10</div>

The value of the margin or padding is alway the value x5, so a margin 5 is a 25px marge.

You can precise the direction with the first letter prefix

Exemple:

```html
<div _padding="l-5">Padding left 5</div>
<div _padding="t-5">Padding top 5</div>
<div _padding="r-5">Padding right 5</div>
<div _padding="b-5">Padding bottom 5</div>
```

<div _bg="muted" _margin="t-2" _round _padding="l-5">Padding left 5</div>
<div _bg="muted" _margin="t-2" _round _padding="t-5">Padding top 5</div>
<div _bg="muted" _margin="t-2" _round _padding="r-5">Padding right 5</div>
<div _bg="muted" _margin="t-2" _round _padding="b-5">Padding bottom 5</div>
</br>
  
| Value    | Description                        |
| -------- | ---------------------------------- |
| 0..10    | 0 through 10 (or logic limitation) |
| l-0..10  | left marge                         |
| r-0..10  | right marge                        |
| t-0..10  | top marge                          |
| b-0..10  | bottom marge                       |
| x-0..10  | left & right marge                 |
| y-0..10  | top & down marge                   |
| md:0..10 | breakpoints is available           |
