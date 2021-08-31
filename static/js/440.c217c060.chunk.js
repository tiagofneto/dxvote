(this["webpackJsonpdxvote"] = this["webpackJsonpdxvote"] || []).push([[440],{

/***/ "YBrI":
/***/ (function(module, exports) {

(function (Prism) {
  /**
   * If the given language is present, it will insert the given doc comment grammar token into it.
   *
   * @param {string} lang
   * @param {any} docComment
   */
  function insertDocComment(lang, docComment) {
    if (Prism.languages[lang]) {
      Prism.languages.insertBefore(lang, 'comment', {
        'doc-comment': docComment
      });
    }
  }

  var tag = Prism.languages.markup.tag;
  var slashDocComment = {
    pattern: /\/\/\/.*/,
    greedy: true,
    alias: 'comment',
    inside: {
      'tag': tag
    }
  };
  var tickDocComment = {
    pattern: /'''.*/,
    greedy: true,
    alias: 'comment',
    inside: {
      'tag': tag
    }
  };
  insertDocComment('csharp', slashDocComment);
  insertDocComment('fsharp', slashDocComment);
  insertDocComment('vbnet', tickDocComment);
})(Prism);

/***/ })

}]);
//# sourceMappingURL=440.c217c060.chunk.js.map