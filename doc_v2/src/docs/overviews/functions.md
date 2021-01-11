## Functions

### selector-name

Allows you to quickly select the selector name of an element

| Arguments | Description            | Exemple   | Return             |
| --------- | ---------------------- | --------- | ------------------ |
| selector  | The named selector     | container | [\_container]      |
| value     | The value of attribute | 5         | [\_container~='5'] |

### get-selectors

Allows you to quickly choose the different selectors you require.

| Arguments | Description            | Exemple        | Return                              |
| --------- | ---------------------- | -------------- | ----------------------------------- |
| selector  | The named selector     | container cont | [\_container], [\_cont]             |
| value     | The value of attribute | 5              | [\_container\~='5'], [\_cont\~='5'] |

### shadow-calc

Returns the value of the shadow according to the logic

| Arguments | Description    | Exemple | Return |
| --------- | -------------- | ------- | ------ |
| start     | minimal value  | 0       | /      |
| end       | maximal value  | 5       | /      |
| i         | logic modifier | 2       | 2      |

### font-url

Return the url of the font file name

| Arguments | Description | Exemple | Return          |
| --------- | ----------- | ------- | --------------- |
| file      | File name   | exemple | 'fonts/exemple' |
