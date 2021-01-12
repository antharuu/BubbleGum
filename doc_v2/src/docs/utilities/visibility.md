## Visibility

You can choose to show or hide something width some attributes

Exemples:

```html
<div _show="true">I'm a visible div</div>
<div _show="false">I'm a non visible div</div>

<div _hide="true">I'm a non visible div</div>
<div _hide="false">I'm a visible div</div>

<!-- More logical exemple -->
<div _hide="md:false lg:true">I'm a non visible div</div>
```

Results:

<div _padding="2" _margin='t-2' _bg='amber' _round _shadow _show="true">I'm a visible div</div>
<div _padding="2" _margin='t-2' _bg='amber' _round _shadow _show="false">I'm a non visible div</div>

<div _padding="2" _margin='t-2' _bg='amber' _round _shadow _hide="true">I'm a non visible div</div>
<div _padding="2" _margin='t-2' _bg='amber' _round _shadow _hide="false">I'm a visible div</div>

<div _padding="2" _margin='t-2' _bg='amber' _round _shadow _show="md:false lg:true">I'm a non visible div between md and lg size</div>
