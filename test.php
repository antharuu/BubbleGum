<?php

$colors = [
    'red',
    'pink',
    'purple',
    'indigo',
    'blue',
    'cyan',
    'teal',
    'green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'brown',
    'grey',
    'black',
    'white',
    'transparent',
    'dark',
    'light',
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'muted'
];

foreach ($colors as $color) {
    ?>
    <pre>%background-color-<?= $color ?> {
  $color: map-get($all-colors, '<?= $color ?>');
  background-color: $color;
  color: get-contrasted($color);
}

%color-<?= $color ?> {
  $color: map-get($all-colors, '<?= $color ?>');
  color: $color;
}

%border-color-<?= $color ?> {
  $color: map-get($all-colors, '<?= $color ?>');
  border-color: $color;
}
    <?php
}