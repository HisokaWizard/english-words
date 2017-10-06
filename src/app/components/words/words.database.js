"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Word = (function () {
    function Word(id, word, transcript, translate) {
        this.id = id;
        this.word = word;
        this.transcript = transcript;
        this.translate = translate;
    }
    return Word;
}());
exports.Word = Word;
;
exports.Words = [
    new Word(0, 'hi', '[хай]', ['привет', 'здравствуй', 'здорова', 'салют', 'йоу', 'хай', 'здравствуйте', '', '', '']),
    new Word(1, 'hello', '[хэлОу]', ['здравствуйте', 'привет', '', '', '', '', '', '', '', '']),
    new Word(2, 'sorry', '[сОри]', ['извините', 'простите', 'извини', 'прошу прощения', 'прости', '', '', '', '', '']),
    new Word(3, 'please', '[пли:з]', ['пожалуйста', 'угождать', '', '', '', '', '', '', '', '']),
];
//# sourceMappingURL=words.database.js.map