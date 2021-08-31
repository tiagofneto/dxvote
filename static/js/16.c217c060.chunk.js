(this["webpackJsonpdxvote"] = this["webpackJsonpdxvote"] || []).push([[16],{

/***/ "+FDh":
/***/ (function(module, exports) {

Prism.languages.apl = {
  'comment': /(?:⍝|#[! ]).*$/m,
  'string': {
    pattern: /'(?:[^'\r\n]|'')*'/,
    greedy: true
  },
  'number': /¯?(?:\d*\.?\b\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞))?/i,
  'statement': /:[A-Z][a-z][A-Za-z]*\b/,
  'system-function': {
    pattern: /⎕[A-Z]+/i,
    alias: 'function'
  },
  'constant': /[⍬⌾#⎕⍞]/,
  'function': /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,
  'monadic-operator': {
    pattern: /[\\\/⌿⍀¨⍨⌶&∥]/,
    alias: 'operator'
  },
  'dyadic-operator': {
    pattern: /[.⍣⍠⍤∘⌸@⌺⍥]/,
    alias: 'operator'
  },
  'assignment': {
    pattern: /←/,
    alias: 'keyword'
  },
  'punctuation': /[\[;\]()◇⋄]/,
  'dfn': {
    pattern: /[{}⍺⍵⍶⍹∇⍫:]/,
    alias: 'builtin'
  }
};

/***/ })

}]);
//# sourceMappingURL=16.c217c060.chunk.js.map