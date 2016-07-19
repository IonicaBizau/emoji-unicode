"use strict";

const emojiUnicode = require("../lib")
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
