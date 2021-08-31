(this["webpackJsonpdxvote"] = this["webpackJsonpdxvote"] || []).push([[395],{

/***/ "X91X":
/***/ (function(module, exports) {

!function (n) {
  function i(e, t, a) {
    return {
      pattern: RegExp("<#" + e + "[\\s\\S]*?#>"),
      alias: "block",
      inside: {
        delimiter: {
          pattern: RegExp("^<#" + e + "|#>$"),
          alias: "important"
        },
        content: {
          pattern: /[\s\S]+/,
          inside: t,
          alias: a
        }
      }
    };
  }

  n.languages["t4-templating"] = Object.defineProperty({}, "createT4", {
    value: function value(e) {
      var t = n.languages[e],
          a = "language-" + e;
      return {
        block: {
          pattern: /<#[\s\S]+?#>/,
          inside: {
            directive: i("@", {
              "attr-value": {
                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,
                inside: {
                  punctuation: /^=|^["']|["']$/
                }
              },
              keyword: /\w+(?=\s)/,
              "attr-name": /\w+/
            }),
            expression: i("=", t, a),
            "class-feature": i("\\+", t, a),
            standard: i("", t, a)
          }
        }
      };
    }
  });
}(Prism);

/***/ })

}]);
//# sourceMappingURL=395.c217c060.chunk.js.map