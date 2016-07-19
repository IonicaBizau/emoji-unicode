"use strict";

const tester = require("tester")
    , toUnicode = require("..")
    ;

tester.describe("✨", t => {
    t.should("get unicode codes", () => {
        t.expect(toUnicode("📻")).toEqual("1f4fb");
        t.expect(toUnicode("🍦")).toEqual("1f366");
        t.expect(toUnicode("🍨")).toEqual("1f368");
    });
});
