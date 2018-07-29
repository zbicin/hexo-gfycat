# hexo-gfycat

Gfycat embedding tag for [hexo](https://hexo.io). Install using: `npm i -S hexo-gfycat`.

## Syntax

`{% gfycat FunnyGfycatIdentifier fixed|responsive|js [width height]|[paddingBottom] %}`

Wrapper types:
 - `fixed` - fixed-size iframe,
 - `responsive` - responsive iframe,
 - `js` - JS embed.

`width height` are optional and applicable only with `fixed` wrapper type.

`paddingBottom` is optional and applicable only with `responsive` wrapper type.

When using `js` remember to include [gfycat.js](https://github.com/gfycat/gfycat.js) in your layout.

## Example:

1. With fixed wrapper:
   
   `{% gfycat CourageousDiscreteDeinonychus fixed 320 240 %}`

   translates to:

   `<iframe src='https://gfycat.com/ifr/CourageousDiscreteDeinonychus' frameborder='0' scrolling='no' width='320' height='240' allowfullscreen></iframe>`


2. With responsive wrapper:
   
   `{% gfycat MiserlyNippyCockroach responsive 54% %}`

   translates to:

   `<div style='position:relative;padding-bottom:54%'><iframe src='https://gfycat.com/ifr/MiserlyNippyCockroach' frameborder='0' scrolling='no' width='100%'    height='100%' style='position:absolute;top:0;left:0' allowfullscreen></iframe></div>`

## Author
[@zbicin](https://twitter.com/zbicin)