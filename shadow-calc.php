<?php
$start = 2;
$objective = 24;

$coef = ($objective - $start) / 9;

$res = [0];

for ($i = 1; $i <= 10; $i++) {
    $res[] = round($i * $coef);
}

var_dump($res);