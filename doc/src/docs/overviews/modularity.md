## Modularity

The modularity is managed in two files placed in the <code>bubblegum/config</code> folder.

```stylus
$Core = {
  prefix: '_' // All attributes prefix
  breakpoint_prefix: ':' // Breakpoints prefix
  logic_max: 10 // Logic for margin, padding, round etc..
  use: { // Modules used
    breakpoints: true
    color_variants: true
    size_variants: true
  }
  bundle: { // Bundles used
    prism: true
  }
}
```

You also have a large number of variables to edit and customize according to your plans and needs.

```stylus
$Grid = {
  columns: 12 // Amount of columns
  gutters: 30px // Gutter width
  ignored_breakpoint: xs // First breakpoint
  breakpoints: { // Breakpoints
    xs: 0,
    sm: 580px,
    md: 770px,
    lg: 990px,
    xl: 1280px
  }
}
```

```stylus
$Font = {
  family: {
    main: "'Montserrat', sans-serif"
    code: "'Fira code', monospace"
  }
  size: {
    default: 18px
    multiplier: .38
  }
}
```

```stylus
$Sizes = {
  margin: {
    base: 5px
    small: 5px
    medium: 15px
    large: 30px
  }
  padding: {
    base: 5px
    small: 5px
    medium: 15px
    large: 30px
  }
  round: {
    base: 5px
    small: 5px
    medium: 15px
    large: 30px
  }
}
```

```stylus
$Borders = {
  size: 1px
  type: solid
  default_color: $Colors.theme.muted
}
```

```stylus
$Colors = {
  variants_amount: 3
  variation_amount: 15
  base: {
    'red': #f24236,
    'pink': #e43f6f,
    'purple': #6564db,
    'indigo': #473bf0,
    'blue': #3169c4,
    'cyan': #1fa6c1,
    'teal': #00bfb2,
    'green': #3ccd65,
    'lime': #aad922,
    'yellow': #f7b32b,
    'amber': #ff7f11,
    'orange': #f34213,
    'brown': #823329,
    'grey': #7179ad,
    'black': #1a1d2d,
    'white': #fbfaf8,
    'transparent': transparent
  }
  theme:{
    'dark': #1a1d2d,
    'light': #fbfaf8,
    'primary': #00bfb2,
    'secondary': #7179ad,
    'success': #3ccd65,
    'info': #1fa6c1,
    'warning': #ff7f11,
    'danger': #f24236,
    'muted': #1a1d2d + 40%
  }
  all: {}
  variants: {}
}
```

```stylus
$Shadows = {
  first: {
    x_min: 0
    x_max: 0
    y_min: 2
    y_max: 24
    blur_min: 2
    blur_max: 38
    spread_min: 0
    spread_max: 3
    color: $Colors.theme.dark
    opacity: .14
  }
  second: {
    x_min: 0
    x_max: 0
    y_min: 3
    y_max: 9
    blur_min: 1
    blur_max: 46
    spread_min: -2
    spread_max: 8
    color: $Colors.theme.dark
    opacity: .12
  }
  third: {
    x_min: 0
    x_max: 0
    y_min: 1
    y_max: 11
    blur_min: 5
    blur_max: 15
    spread_min: 0
    spread_max: -7
    color: $Colors.theme.dark
    opacity: .2
  }
}
```

```stylus
$Form = {
  color: $Colors.theme.muted
  color_main: $Colors.theme.primary
  color_font: $Colors.theme.dark
}
```

```stylus
$Others = {
  nav:{
    breadcrumb_symbol: '/'
  }
}
```
