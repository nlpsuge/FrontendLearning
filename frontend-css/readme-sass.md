# Doc

[sass doc](https://sass-lang.com/documentation/)

# Convert to css
```bash
sassc --omit-map-comment _stylesheet.scss stylesheet.css
```

# [Sass: Parent Selector (&)](https://sass-lang.com/documentation/style-rules/parent-selector)

The parent selector, `&`, is a special selector invented by Sass that’s used in [nested selectors](https://sass-lang.com/documentation/style-rules#nesting) to refer to the outer selector. It makes it possible to re-use the outer selector in more complex ways, like adding a [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) or adding a selector _before_ the parent.

```scss
.alert {
  // The parent selector can be used to add pseudo-classes to the outer selector.
  &:hover {
    font-weight: bold;
  }
}
```
=>

```css
.alert:hover {
  font-weight: bold; 
}
```

# [Sass: sass:color](https://sass-lang.com/documentation/modules/color#lighten)

## (https://sass-lang.com/documentation/modules/color#lighten)`lighten($color, $amount)](https://sass-lang.com/documentation/values/colors)`

[Sass: sass:color](https://sass-lang.com/documentation/modules/color#lighten)

Makes `$color` lighter.
 
The `$amount` must be a number between `0%` and `100%` (inclusive). Increases the HSL lightness of `$color` by that amount.


