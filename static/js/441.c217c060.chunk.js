(this["webpackJsonpdxvote"] = this["webpackJsonpdxvote"] || []).push([[441],{

/***/ "ee5R":
/***/ (function(module, exports) {

!function (n) {
  function a(a, e) {
    n.languages[a] && n.languages.insertBefore(a, "comment", {
      "doc-comment": e
    });
  }

  var e = n.languages.markup.tag,
      t = {
    pattern: /\/\/\/.*/,
    greedy: !0,
    alias: "comment",
    inside: {
      tag: e
    }
  },
      g = {
    pattern: /'''.*/,
    greedy: !0,
    alias: "comment",
    inside: {
      tag: e
    }
  };
  a("csharp", t), a("fsharp", t), a("vbnet", g);
}(Prism);

/***/ })

}]);
//# sourceMappingURL=441.c217c060.chunk.js.map