# pre word wrap 
  https://www.quyu.net/info/69.html

    pre {
        white-space: pre-wrap; /* css-3 */
        word-wrap: break-word; /* InternetExplorer5.5+ */
        white-space: -moz-pre-wrap; /* Mozilla,since1999 */
        white-space: -pre-wrap; /* Opera4-6 */
        white-space: -o-pre-wrap; /* Opera7 */
    }

  https://www.sitepoint.com/everything-need-know-html-pre-element/
    pre {
        white-space: pre-wrap;
    }

# [url()](https://developer.mozilla.org/en-US/docs/Web/CSS/url)

The url() CSS function is used to include a file. The parameter is an absolute URL, a relative URL, a blob URL, or a data URL.

``` css
background-image: url("star.gif");
```

# [Can a CSS class inherit one or more other classes?](https://stackoverflow.com/questions/1065435/can-a-css-class-inherit-one-or-more-other-classes)


An element can take multiple classes:

``` css
.classOne { font-weight: bold; }
.classTwo { font-famiy:  verdana; }
```
```html
<div class="classOne classTwo">
  <p>I'm bold and verdana.</p>
</div>
```

# TODO tree
[CSS to create a simple tree structure with connecting lines. No images or JS required.](https://gist.github.com/dylancwood/7368914) 

https://jsfiddle.net/tomaskafka/ur1hvzy3/


# Color
##  [Hexadecimal color code for transparency](https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4)

[Hexadecimal color code for transparency](https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4)

### How to set transparency?
 
#### hexadecimal transparency
For example, you want to set **40%** alpha transparence to `#000000` (black color), you need to add `66` like this `#66000000`. The first two bit is hexadecimal transparency and the rest 6 bit is hexadecimal RGB color.

00%=FF (fully opacity)
5%=F2    10%=E5    15%=D8    20%=CC    25%=BF    30%=B2    35%=A5    40%=99    45%=8c    50%=7F

55%=72    60%=66    65%=59    70%=4c    75%=3F    80%=33    85%=21    90%=19    95%=0c    
100%=00 (fully transparency)

#### rgba
rgba(194,53,49,0.45)


# [CSS Image Opacity / Transparency](https://www.w3schools.com/css/css_image_transparency.asp)

