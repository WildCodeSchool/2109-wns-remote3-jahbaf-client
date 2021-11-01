# How to use SCSS

## Colors

We have a theming functionnality, to be able to switch between light and dark mode, for now it only contains background-color and text-color variables but in the future we will need to add more to that.<br/>
When you need to color a background or text with light or dark base colors use it this way :

```scss
body {
    @include themify {
        background-color: themed( 'backgroundColor' );
    }
}
```

We don't yet have the theme button switch, so we can not test it right now, theme is initialized to be the light one.

## Mixins

There is also a few mixins in the partials files, you can have a look to see if what you need is defined, keep in mind that if a mixin for a property is present you must use it, to ensure style consistency through the app.
If you need to add some style to a component style file and you think this style is reusable, add it to the mixins so we can use it elsewhere.
<br/>
<br/>
To use the following mixin :

```scss
@mixin column {
    display: flex;
    flex-direction: column;
}
```

Simply add it to your SCSS file :

```scss
div {
    @include column;
}
```
