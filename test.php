<?php

$colors = [
    "black",
    "purple",
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "teal",
    "darkblue",
    "blue",
    "lightblue",
    "sky",
    "white",
    "lightgrey",
    "grey",
    "darkgrey",
    "dark",
    "light",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "muted"
];

foreach ($colors as $color) {
    ?>
    <pre>
$color-<?= $color ?>-dark: darken(map-get($base-colors, <?= $color ?>), $darken-value);
$color-<?= $color ?>: map-get($base-colors, <?= $color ?>);
$color-<?= $color ?>-light: lighten(map-get($base-colors, <?= $color ?>), $lighten-value);</pre>
    <?php
}