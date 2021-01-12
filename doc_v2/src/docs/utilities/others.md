## Others

### Round

Your can add some border-radius with attribute `_round`

Exemples:

```html
<div _round>I'am a default rounded div</div>
<div _round="0">I'am a none rounded div</div>
<div _round="1">I'am a 1 rounded div</div>
<div _round="2">I'am a 2 rounded div</div>
<div _round="3">I'am a 3 rounded div</div>
<div _round="4">I'am a 4 rounded div</div>
<div _round="5">I'am a 5 rounded div</div>
<div _round="6">I'am a 6 rounded div</div>
<div _round="7">I'am a 7 rounded div</div>
<div _round="8">I'am a 8 rounded div</div>
<div _round="9">I'am a 9 rounded div</div>
<div _round="10">I'am a 10 rounded div</div>
<div _round="full">I'am a full rounded div</div>
```

Results:

<div _bg="muted" _padding="2" _margin='t-2' _shadow _round>I'am a default rounded div</div>
<div _bg="muted" _padding="2" _margin='t-2' _shadow _round="0">I'am a none rounded div</div>
<div _bg="muted" _padding="2" _margin='t-2' _shadow _round="1">I'am a 1 rounded div</div>
<div _bg="muted" _padding="2" _margin='t-2' _shadow _round="2">I'am a 2 rounded div</div>
<div _bg="muted" _padding="2" _margin='t-2' _shadow _round="3">I'am a 3 rounded div</div>
<div _bg="muted" _padding="2" _margin='t-2' _shadow _round="4">I'am a 4 rounded div</div>
<div _bg="muted" _padding="2" _margin='t-2' _shadow _round="5">I'am a 5 rounded div</div>
<div _bg="muted" _padding="2" _margin='t-2' _shadow _round="6">I'am a 6 rounded div</div>
<div _bg="muted" _padding="2" _margin='t-2' _shadow _round="7">I'am a 7 rounded div</div>
<div _bg="muted" _padding="2" _margin='t-2' _shadow _round="8">I'am a 8 rounded div</div>
<div _bg="muted" _padding="2" _margin='t-2' _shadow _round="9">I'am a 9 rounded div</div>
<div _bg="muted" _padding="2" _margin='t-2' _shadow _round="10">I'am a 10 rounded div</div>
<div _bg="muted" _padding="2" _margin='t-2' _shadow _round="full">I'am a full rounded div</div>

| Value        | Description              |
| ------------ | ------------------------ |
| 0..10        | 5px x size border-radius |
| full, circle | 100% border-radius       |

### Shadow

Your can add some shadows with attribute `_shadow`

Exemples:

```html
<div _shadow>I'am a default shadowed div</div>
<div _shadow="0">I'am a none shadowed div</div>
<div _shadow="1">I'am a 1 shadowed div</div>
<div _shadow="2">I'am a 2 shadowed div</div>
<div _shadow="3">I'am a 3 shadowed div</div>
<div _shadow="4">I'am a 4 shadowed div</div>
<div _shadow="5">I'am a 5 shadowed div</div>
<div _shadow="6">I'am a 6 shadowed div</div>
<div _shadow="7">I'am a 7 shadowed div</div>
<div _shadow="8">I'am a 8 shadowed div</div>
<div _shadow="9">I'am a 9 shadowed div</div>
<div _shadow="10">I'am a 10 shadowed div</div>
```

Results:

<div _bg="muted" _padding="2" _margin='t-10' _round _shadow>I'am a default shadowed div</div>
<div _bg="muted" _padding="2" _margin='t-10' _round _shadow="0">I'am a none shadowed div</div>
<div _bg="muted" _padding="2" _margin='t-10' _round _shadow="1">I'am a 1 shadowed div</div>
<div _bg="muted" _padding="2" _margin='t-10' _round _shadow="2">I'am a 2 shadowed div</div>
<div _bg="muted" _padding="2" _margin='t-10' _round _shadow="3">I'am a 3 shadowed div</div>
<div _bg="muted" _padding="2" _margin='t-10' _round _shadow="4">I'am a 4 shadowed div</div>
<div _bg="muted" _padding="2" _margin='t-10' _round _shadow="5">I'am a 5 shadowed div</div>
<div _bg="muted" _padding="2" _margin='t-10' _round _shadow="6">I'am a 6 shadowed div</div>
<div _bg="muted" _padding="2" _margin='t-10' _round _shadow="7">I'am a 7 shadowed div</div>
<div _bg="muted" _padding="2" _margin='t-10' _round _shadow="8">I'am a 8 shadowed div</div>
<div _bg="muted" _padding="2" _margin='t-10' _round _shadow="9">I'am a 9 shadowed div</div>
<div _bg="muted" _padding="2" _margin='t-10' _round _shadow="10">I'am a 10 shadowed div</div>

### Responsive

You can add `_responsive` attribute to your images for make them responsive

```html
<img src="https://picsum.photos/600/300" />

<img _responsive src="https://picsum.photos/600/300" />
```

<img src="https://picsum.photos/600/300">

<img _responsive src="https://picsum.photos/600/300">
