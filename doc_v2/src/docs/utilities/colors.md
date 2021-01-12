## Colors

You have access to the colors from the html and change the background color with the `_bg` attribute.

Exemples:

```html
<div _bg="red">I'm a red div</div>
<div _bg="green">I'm a green div</div>
<div _bg="blue">I'm a blue div</div>
```

Results:

<div _bg="red" _padding=2 _margin='t-2' _round>I'm a red div</div>
<div _bg="green" _padding=2 _margin='t-2' _round>I'm a green div</div>
<div _bg="blue" _padding=2 _margin='t-2' _round>I'm a blue div</div>

But you can also use colors in many places, such as on text, alerts etc...

Exemples:

```html
<h4 _font="red">I'm a red text</h4>
<div _alert="purple">I'm a purple alert</div>
<button _btn="amber outline">I'm a amber button</button>
```

Results:

<h4 _font="red">I'm a red text</h4>
<div _alert="purple" _margin='t-2'>I'm a purple alert</div>
<button _btn="amber outline" _margin='t-2'>I'm a amber button</button>

For color list, refer [here](documentation.html#colors)

### Possible values

| Value   | Description            |
| ------- | ---------------------- |
| [color] | you can use all colors |
