# API Spec

Following a simmilar structure as the [realworld api](https://github.com/gothinkster/realworld/blob/master/api/README.md) by
[thinkster.io](https://thinkster.io/).

## Objects

__Single Target__
```js
{
    target: {
        id: 'https://www.example.com/path_to_image', // The url of the image (unique)
        x: 44, // The x coordinate of the top left of the bounding box
        y: 44, // The y coordinate of the top left of the bounding box
        w: 100, // The width of the bounding box
        h: 100  // The height of the bounding box
    }
}
```

__List of Targets__
```js
{
    targets: [{
        id: 'https://www.example.com/path_to_image', // The url of the image (unique)
        x: 44, // The x coordinate of the top left of the bounding box
        y: 44, // The y coordinate of the top left of the bounding box
        w: 100, // The width of the bounding box
        h: 100  // The height of the bounding box
    }, {
        id: 'https://www.example.com/path_to_another_image',
        x: 44,
        y: 44,
        w: 100,
        h: 100
    }],
    targets_count: 2 // number of targets returned
}
```

## End Points

`POST /api/targets`

_POST overrides any existing object in the database with the same id_

__body of the request__

```js
{
    id: 'https://www.example.com/path_to_image', // The url of the image (unique)
    x: 44, // The x coordinate of the top left of the bounding box
    y: 44, // The y coordinate of the top left of the bounding box
    w: 100, // The width of the bounding box
    h: 100  // The height of the bounding box
}
```
required fields: `id`, `x`, `y`, `w`, `h`.

`GET /api/targets/:id`
returns the target object corresponding to the id

`GET /api/targets`
returns a list of all the targets in the database

`DELETE /api/target/:id`
removes the object corresponding to the id from the database and returns the target object
