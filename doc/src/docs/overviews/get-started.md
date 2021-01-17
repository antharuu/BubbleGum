## Get started

- **Consistent:** Its main objective is to bring together the different uses of classical frameworks, see Bubblegum as a framework accompanied by a whole logic of code and way of thinking.
- **Fast:** It is fast and uses the Stylus library to compile its CSS code, as well as Babel for JS (if you use it, as it is completely optional).
- **Customizable:** It comes with a bunch of variables that you can modify very simply.
- **Bundles:** It comes with bundles that allow you to extend its functionalities, it will allow you to use libraries in a simpler and more intuitive way. While remaining consistent with your settings.

### Installation

#### Use npm

<pre _code>npm i bubblegum-css</pre>

#### Use composer

<pre _code>composer require antharuu/bubblegum "v1.0.0"</pre>

#### Use JSdelivr cdn

https://www.jsdelivr.com/package/npm/bubblegum-css

#### Download from the repository

https://github.com/antharuu/BubbleGum/tree/main/css

---

### Starter template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>

    <link rel="stylesheet" href="css/bubblegum.min.css" />
  </head>
  <body>
    <div _container>
      <div _row>
        <div _col>
          <!-- Your content -->
        </div>
      </div>
    </div>
  </body>
</html>
```
