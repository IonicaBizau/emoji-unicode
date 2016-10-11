
# emoji-unicode

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/emoji-unicode.svg)](https://www.npmjs.com/package/emoji-unicode) [![Downloads](https://img.shields.io/npm/dt/emoji-unicode.svg)](https://www.npmjs.com/package/emoji-unicode) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get the unicode code of an emoji.

## :cloud: Installation

```sh
$ npm i --save emoji-unicode
```


## :clipboard: Example



```js
const emojiUnicode = require("emoji-unicode")
    , toEmoji = require("emoji-name-map")
    ;

console.log(emojiUnicode("📻"));
// => 1f4fb

console.log(emojiUnicode.raw("📻"));
// => 128251

console.log(emojiUnicode(toEmoji.get(":radio:")));
// => 1f4fb

console.log(emojiUnicode(toEmoji.get("radio")));
// => 1f4fb
```

## :memo: Documentation


### `emojiUnicode(input)`
Get the unicode code of an emoji in base 16.

#### Params
- **String** `input`: The emoji character.

#### Return
- **String** The base 16 unicode code.

### `emojiunicode.raw(input)`
Get the unicode code of an emoji in base 16.

#### Params
- **String** `input`: The emoji character.

#### Return
- **Number** The unicode code.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :cake: Thanks
This module is heavily based on [this StackOverflow answer](http://stackoverflow.com/a/37729608/1420197) by [**@liufa**](https://github.com/liufa). :cake:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
