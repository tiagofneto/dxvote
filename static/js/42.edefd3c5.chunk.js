(this["webpackJsonpdxvote"] = this["webpackJsonpdxvote"] || []).push([[42],{

/***/ "HdDD":
/***/ (function(module, exports) {

Prism.languages.bbcode = {
  'tag': {
    pattern: /\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,
    inside: {
      'tag': {
        pattern: /^\[\/?[^\s=\]]+/,
        inside: {
          'punctuation': /^\[\/?/
        }
      },
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/i,
        inside: {
          'punctuation': [/^=/, {
            pattern: /^(\s*)["']|["']$/,
            lookbehind: true
          }]
        }
      },
      'punctuation': /\]/,
      'attr-name': /[^\s=\]]+/
    }
  }
};
Prism.languages.shortcode = Prism.languages.bbcode;

/***/ })

}]);
//# sourceMappingURL=42.edefd3c5.chunk.js.map