## Responsive

- **XS:** Smallest size and by default, you don't need to prefix but you can, (min-width: 0)
- **SM:** Mobile size (min-width: 580px)
- **MD:** Tablet size (min-width: 770px)
- **LG:** Laptop size (min-width: 990px)
- **XL:** Large screen size (min-width: 1280px)

```html
<script src="/__prepros.js"></script>
<div _margin="1 md:2 xl:5">
  <!-- Default margin 1 -->
  <!-- Medium margin 2 -->
  <!-- Very large margin 5 -->
</div>

<div _font="center xl:right">
  <!-- Default text align center -->
  <!-- Very large text align right -->
</div>

<div _bg="red lg:blue">
  <!-- Default background color red -->
  <!-- Large background color blue -->
</div>
```
