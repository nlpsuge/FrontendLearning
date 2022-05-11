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

# [`display: "none";` vs `visibility: "hidden";`](https://www.geeksforgeeks.org/what-is-the-difference-between-visibilityhidden-and-displaynone/)
The `display: "none";` property is used to specify whether an element exists or not on the website.

The difference between display: “none”; and visibility: “hidden”; right from the name itself we can tell the difference as display: “none”; completely gets rids of the tag, as it had never existed in the HTML page whereas visibility: “hidden”; just makes the tag invisible, it will still on the HTML page occupying space it’s just invisible.

