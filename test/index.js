"use strict";

const tester = require("tester")
    , toUnicode = require("..")
    ;

tester.describe("✨", t => {
    t.should("get unicode codes", () => {
        t.expect(toUnicode("📻")).toEqual("1f4fb");
        t.expect(toUnicode("🍦")).toEqual("1f366");
        t.expect(toUnicode("🍨")).toEqual("1f368");
        t.expect(toUnicode("💅🏿")).toEqual("1f485 1f3ff");
    	t.expect(toUnicode("👯‍♂️")).toEqual("1f46f 200d 2642 fe0f");
        t.expect(toUnicode("🇪🇨")).toEqual("1f1ea 1f1e8");
        t.expect(toUnicode("⭕")).toEqual("2b55");
        t.expect(toUnicode("🇳🇱")).toEqual("1f1f3 1f1f1");
    });
});
