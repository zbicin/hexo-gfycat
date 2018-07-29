'use strict';

/**
* Gfycat tag
*
* Syntax:
*   {% gfycat FunnyGfycatIdentifier fixed|responsive|js [width height]|[paddingBottom] %}
*/

function gfycatTag(args, content) {
    var identifier = args[0];
    var wrapperType = args[1];
    var width = args[2];
    var paddingBottom = args[2];
    var height = args[3];

    if(wrapperType === 'fixed') {
        return '<iframe src="https://gfycat.com/ifr/' + identifier + '" frameborder="0" scrolling="no" allowfullscreen width="' + width + '" height="' + height + '"></iframe>';
    } else if(wrapperType === 'responsive') {
        if(!paddingBottom) {
            paddingBottom = "180%";
        }
        return '<div style="position:relative;padding-bottom:' + paddingBottom + '"><iframe src="https://gfycat.com/ifr/' + identifier + '" frameborder="0" scrolling="no" width="100%" height="100%" style="position:absolute;top:0;left:0;" allowfullscreen></iframe></div>';
    } else if (wrapperType === 'js') {
        return '<div class="gfyitem" data-id="' + identifier + '"></div>';
    } else {
        hexo.log.error('Invalid gfycat tag syntax, cannot determine wrapper type: ' + wrapperType);
        return '';
    }
};

hexo.extend.tag.register('gfycat', gfycatTag);