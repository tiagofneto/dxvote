(this["webpackJsonpdxvote"] = this["webpackJsonpdxvote"] || []).push([[176],{

/***/ "0sus":
/***/ (function(module, exports) {

(function (Prism) {
  Prism.languages.ignore = {
    // https://git-scm.com/docs/gitignore
    'comment': /^#.*/m,
    'entry': {
      pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
      alias: 'string',
      inside: {
        'operator': /^!|\*\*?|\?/,
        'regex': {
          pattern: /(^|[^\\])\[[^\[\]]*\]/,
          lookbehind: true
        },
        'punctuation': /\//
      }
    }
  };
  Prism.languages.gitignore = Prism.languages.ignore;
  Prism.languages.hgignore = Prism.languages.ignore;
  Prism.languages.npmignore = Prism.languages.ignore;
})(Prism);

/***/ })

}]);
//# sourceMappingURL=176.edefd3c5.chunk.js.map