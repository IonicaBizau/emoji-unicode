
















# emoji-unicode

Get the unicode code of an emoji.




## Installation

```sh
$ npm i emoji-unicode
```









## Example






```js
"use strict";

const emojiUnicode = require("emoji-unicode")
    , toEmoji = require("emoji-name-map")
    ;

console.log(emojiUnicode("📻"));
// => 1f4fb

console.log(emojiUnicode.raw("📻"));
// => 128251

console.log(emojiUnicode("👩🏽‍💻"));
// => 1F469 1F3FD 200D 1F4BB

console.log(emojiUnicode.raw("👩🏽‍💻"));
// => 128105 127997 8205 128187

console.log(emojiUnicode.raw("🏳️‍🌈"));
// => 127987 65039 8205 127752

console.log(emojiUnicode("🏳️‍🌈"));
// => 1F3F3 FE0F 200D 1F308

console.log(emojiUnicode(toEmoji.get(":radio:")));
// => 1f4fb

console.log(emojiUnicode(toEmoji.get("radio")));
// => 1f4fb

```






## Documentation





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






## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].



## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
