(this["webpackJsonpdxvote"] = this["webpackJsonpdxvote"] || []).push([[398],{

/***/ "sVKi":
/***/ (function(module, exports) {

Prism.languages.tap = {
  fail: /not ok[^#{\n\r]*/,
  pass: /ok[^#{\n\r]*/,
  pragma: /pragma [+-][a-z]+/,
  bailout: /bail out!.*/i,
  version: /TAP version \d+/i,
  plan: /\d+\.\.\d+(?: +#.*)?/,
  subtest: {
    pattern: /# Subtest(?:: .*)?/,
    greedy: true
  },
  punctuation: /[{}]/,
  directive: /#.*/,
  yamlish: {
    pattern: /(^[^\S\r\n]*)---(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?[^\S\r\n]*\.\.\.$/m,
    lookbehind: true,
    inside: Prism.languages.yaml,
    alias: 'language-yaml'
  }
};

/***/ })

}]);
//# sourceMappingURL=398.c217c060.chunk.js.map