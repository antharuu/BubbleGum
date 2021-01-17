## Columns

The columns are 12 by default, and take the width according to the number of columns.

```html
<div _col></div>
<!-- Basic full width column -->

<div _col="6"></div>
<!-- 50% width column -->

<div _col="2"></div>
<!-- 16,666..% width column -->
```

Here too it uses its full potential when mixed with breakpoints.

```html
<div _col="12 md:6 lg:4 xl:3"></div>
```

Here you can also change the number of columns in the configuration.

| Value   | Description          |
| ------- | -------------------- |
|         | 100% width |
| 1..12 | (100 / 12) * $ width |
