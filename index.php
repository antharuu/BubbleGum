<?php

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

require_once "vendor/autoload.php";

$loader = new FilesystemLoader('pages');
$twig = new Environment($loader, [
    'cache' => false,
]);

$version = '0.1 alpha';

$separator = [
    'size' => ':'
];

$sizes = ['xs', 'md'];

$logic = [
    'grid' => [
        'container' => ['_' => ['', 'full']],
        'row' => [
            '_' => [
                '',
                'row',
                'reverse',
                'col',
                'column',
                'col reverse',
                'nowrap',
                'wrap',
                'wrap-reverse'
            ],
            'justify_content' => [
                'start',
                'end',
                'center',
                'between',
                'around',
                'evenly'
            ],
            'align_items' => [
                'stretch',
                'start',
                'end',
                'center',
                'baseline'
            ],
            'align_content' => [
                'start',
                'end',
                'center',
                'between',
                'around',
                'evenly',
                'stretch'
            ],
            'align_self' => [
                'stretch',
                'start',
                'end',
                'center',
                'baseline'
            ],
        ],
        'col' => [
            '_' => ['', 1, 3, 5, 7, 8, 10, 12],
            'push' => [1, 3, 5, 7, 8, 10, 12],
            'pull' => [1, 3, 5, 7, 8, 10, 12]
        ],
    ],
    'display' => [
        'visible' => [
            '_' => [
                'show',
                'hide'
            ]
        ],
        'display' => [
            '_' => [
                'flex',
                'block',
                'inline',
                'flow',
                'ruby',
                'grid',
                'table',
                'contents'
            ]
        ]
    ],
    'positions' => [
        'pos' => [
            '_' => [
                'static',
                'relative',
                'absolute',
                'fixed',
                'sticky'
            ],
            'float' => [
                'left',
                'right',
                'none'
            ],
            'z' => ['auto', 0, 1, 3, 10],
            'align' => ['wrapper', 'left', 'center', 'right']
        ]
    ],
    'margins' => [
        'margin' => ['_' => [0, 1, 5, 8, 10,
            'l-1', 'r-2', 't-3', 'b-4', 'x-5', 'y-6 =>']
        ],
        'padding' => ['_' => [1, 5, 8, 10,
            'l-1', 'r-2', 't-3', 'b-4', 'x-5', 'y-6 =>']
        ]
    ],
    'colors' => [
        'bg' => [
            '_' => [
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
                'transparent'
            ]
        ]
    ],
    'typo' => [
        'font' => [
            'tag' => 'p',
            '_' => ['red', 'primary', 'muted', 'h1', 'h5', 'quote', 'center', 'left', 'justify']
        ]
    ],
    'medias' => [
        'respondive' => [
            'tag' => 'img',
            'responsive' => ['']
        ]
    ],
    'shadow' => [
        'shadow' => [
            '_' => [1, 3, 5, 10]
        ]
    ],
    'table' => [
        'table' => [
            '_' => [
                'striped',
                'highlight'
            ]
        ]
    ],
    'badges' => [
        'badge' => ['_' => ['', 'red', 'primary', 'muted']]
    ],
    'buttons' => [
        'button' => ['btn' => ['', 'red', 'primary', 'muted', 'large', 'small', 'disabled']],
    ],
    'nav' => [
        'breadcrumb' => ['_' => ['']],
        'footer' => ['_' => ['', 'sticky']],
        'navbar' => ['_' => ['', 'left', 'right', 'center', 'fixed']],
        'pagination' => ['_' => ['']]
    ],
    'cards' => [
        'card' => ['_' => ['']]
    ],
    'lists' => [
        'list' => ['_' => ['']]
    ],
    'progress' => [
        'progress' => ['_' => ['', 'red', 'primary', 'muted']],
        'bar' => ['_' => ['', 'red', 'primary', 'muted'], 'percent' => ['1', '15', '37', '50', '100']]
    ],
    'form' => [
        'checkbox' => [
            '_' => ['', 'red', 'primary', 'muted'],
            'switch' => ['', 'red', 'primary', 'muted']
        ],
        'radio' => ['_' => ['', 'red', 'primary', 'muted']],
        'chips' => ['_' => ['', 'red', 'primary', 'muted']],
        'range' => ['_' => ['', 'red', 'primary', 'muted']],
        'select' => ['_' => ['', 'red', 'primary', 'muted']],
        'input' => ['_' => ['', 'red', 'primary', 'muted']],
    ]
];

echo $twig->render('index.twig', get_defined_vars());