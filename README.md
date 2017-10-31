# hexo-gfycat

Gfycat embedding tag for [hexo](https://hexo.io). Install using: `npm i -S hexo-gfycat`.

## Syntax

`{% gfycat FunnyGfycatIdentifier fixed|responsive|js [width height] %}`

Wrapper types:
 - `fixed` - fixed-size iframe,
 - `responsive` - responsive iframe,
 - `js` - JS embed.

`width height` are optional and applicable only with `fixed` wrapper type.

When using `js` remember to include [gfycat.js](https://github.com/gfycat/gfycat.js) in your layout.

## Example:

`{% gfycat CourageousDiscreteDeinonychus fixed 320 240 %}`

translates to:

`<iframe src='https://gfycat.com/ifr/CourageousDiscreteDeinonychus' frameborder='0' scrolling='no' width='320' height='240' allowfullscreen></iframe>`

## Author
[@zbicin](https://twitter.com/zbicin)