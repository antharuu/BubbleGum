## Mixins

### add-selector

Allows you to use a selector and insert content into it

| Arguments | Description             |
| --------- | ----------------------- |
| selector  | Selector name           |
| value     | Selector value          |
| extends   | Placeholders to extends |

Exemple:

```stylus
+add-selector('container', 'full'){
    width: 100%;
    background-color: white;
}
```

Return:

```css
[_container~="full"] {
  width: 100%;
  background-color: white;
}
```

### add-value

Allow you to put value inside a selector

| Arguments | Description             |
| --------- | ----------------------- |
| value     | Selector value          |
| extends   | Placeholders to extends |

<div _alert='muted'_shadow _margin='t-2'>You need to set the <code>current_selector</code> value before.</div>

Exemple:

```stylus
+add-selector('container'){
    _.current_selector = 'container';

    width: 100%;
    background-color: white;

    +add-value('limited'){
        max-width: 1280px;
    }
}
```

Return:

```css
[_container] {
  width: 100%;
  background-color: white;
}
[_container][_container~="limited"] {
  max-width: 1280px;
}
```

### add-extends

Add a extends to created placeholders

| Arguments | Description       |
| --------- | ----------------- |
| name      | Placeholders name |

### get-visible-color

Return the most contrasted theme color between light and dark for the given color

| Arguments | Description |
| --------- | ----------- |
| color     | Color value |

### shadow-values

Add automatically the box-shadow with the given modifier and the shadow variables

| Arguments | Description    |
| --------- | -------------- |
| modifier  | Modifier value |

### webfont

Use the font face with the arguments

| Arguments           | Description                          |
| ------------------- | ------------------------------------ |
| family              | Font family name                     |
| file                | File name [see font-url](#functions) |
| hack-chrome-windows | if use the hack for chrome           |
| weight              | Font weight                          |
