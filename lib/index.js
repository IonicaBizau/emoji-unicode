"use strict";

/**
 * emojiUnicode
 * Get the unicode code of an emoji in base 16.
 *
 * @name emojiUnicode
 * @function
 * @param {String} input The emoji character.
 * @returns {String} The base 16 unicode code.
 */
function emojiUnicode (input) {
    return emojiUnicode.raw(input).toString("16");
}

/**
 * emojiunicode.raw
 * Get the unicode code of an emoji in base 16.
 *
 * @name emojiunicode.raw
 * @function
 * @param {String} input The emoji character.
 * @returns {Number} The unicode code.
 */
emojiUnicode.raw = function (input) {
    return (
        (input.charCodeAt(0) - 0xD800) * 0x400
      + (input.charCodeAt(1) - 0xDC00) + 0x10000
    );
};

module.exports = emojiUnicode;
