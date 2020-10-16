# React Flex Cards

[![MIT License](https://img.shields.io/github/license/peter-stuhlmann/ReactFlexCards.svg)](https://github.com/peter-stuhlmann/ReactFlexCards/blob/master/LICENSE)
![Code size](https://img.shields.io/github/languages/code-size/peter-stuhlmann/ReactFlexCards.svg)
[![open issues](https://img.shields.io/github/issues/peter-stuhlmann/ReactFlexCards.svg)](https://github.com/peter-stuhlmann/ReactFlexCards/issues?q=is%3Aopen+is%3Aissue)
[![closed issues](https://img.shields.io/github/issues-closed/peter-stuhlmann/ReactFlexCards.svg)](https://github.com/peter-stuhlmann/ReactFlexCards/issues?q=is%3Aissue+is%3Aclosed)

![Demo Screenshot](./demo-screenshot.png)

## Minimal setup example

```javascript
const cards = [
  {
    img: {
      src: 'http://example.com/example/img1.jpg',
      alt: 'Lorem ipsum'
    },
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    href: 'http://example.com'
  },
  {
    img: {
      src: 'http://example.com/example/img2.jpg',
      alt: 'Lorem ipsum'
    },
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    href: 'http://example.com'
  },
  ...
];

<FlexCards cards={cards} />;
```

## Props

With props you have a lot of possibilities to easily customize this module.

| prop             | type    | default                    | notes                                                                                                     |
| ---------------- | ------- | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| cards            | array   |                            | includes data of all cards                                                                                |
| cardColor        | string  | '#f2f2f2'                  | background color of each card                                                                             |
| cardsPerRow      | number  | 4                          | amount of cards per row (on desktop screens)                                                              |
| className        | string  |                            | class to style the whole container with css                                                               |
| containerColor   | string  | '#fff'                     | background color of the whole container                                                                   |
| label            | string  | 'Read more'                | text that appears on the image when hovering over a card                                                  |
| labelColor       | string  | 'rgba(255, 255, 255, 0.9)' | background color of the text that appears on the image when hovering over a card                          |
| noLabel          | boolean | false                      | `true` hides the label (text that appears on the image when hovering over a card)                         |
| noTextbox        | boolean | false                      | `true` hides the textbox below the picture                                                                |
| noImage          | boolean | false                      | `true` hides the image above the text                                                                     |
| mediaPriority    | string  | 'image'                    | if both img and iframe are specified in the data object, the mediaPriority value is shown. (image/iframe) |
| mobileBreakpoint | string  | '480px'                    | media breakpoint (mobile devices)                                                                         |
| tabletBreakpoint | string  | '768px'                    | media breakpoint (tablet devices)                                                                         |
| margin           | string  | '8px'                      | value will be used to calculate all margins/paddings in this component                                    |
| width            | string  | '100%'                     | width of the whole container; content is centered (may not be responsive)                                 |
| maxWidth         | string  | '100%'                     | max width of the whole container; content is centered                                                     |

---

## License

Licensed under the [MIT](https://github.com/peter-stuhlmann/ReactFlexCards/blob/master/LICENSE) license by [Peter R. Stuhlmann](https://peter-stuhlmann-webentwicklung.de).
