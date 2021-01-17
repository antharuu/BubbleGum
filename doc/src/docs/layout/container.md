## Container

Containers are blocks that limit the size of your page so that it respects responsive sizes and is always centered.

```html
<div _container></div>
<!-- Basic container -->

<div _container="full"></div>
<!-- Full width container -->

<div _container="limited"></div>
<!-- limited width container -->
```

Basic size is 100%, but limited to 1280px, but you can remove this limitation by adding "full", or give it back with "limited".

| Value   | Description          |
| ------- | -------------------- |
|         | limited 1280px width |
| limited | limited 1280px width |
| full    | full width           |
