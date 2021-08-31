(this["webpackJsonpdxvote"] = this["webpackJsonpdxvote"] || []).push([[348],{

/***/ "6GGF":
/***/ (function(module, exports) {

Prism.languages.roboconf = {
  'comment': /#.*/,
  'keyword': {
    'pattern': /(^|\s)(?:(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{)|(?:external|import)\b)/,
    lookbehind: true
  },
  'component': {
    pattern: /[\w-]+(?=[ \t]*\{)/,
    alias: 'variable'
  },
  'property': /[\w.-]+(?=[ \t]*:)/,
  'value': {
    pattern: /(=[ \t]*)[^,;]+/,
    lookbehind: true,
    alias: 'attr-value'
  },
  'optional': {
    pattern: /\(optional\)/,
    alias: 'builtin'
  },
  'wildcard': {
    pattern: /(\.)\*/,
    lookbehind: true,
    alias: 'operator'
  },
  'punctuation': /[{},.;:=]/
};

/***/ })

}]);
//# sourceMappingURL=348.c217c060.chunk.js.map