"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var words_database_1 = require("./words.database");
var WordsComponent = (function () {
    function WordsComponent(router) {
        this.router = router;
        this.words = words_database_1.Words;
        this.realtime_word = undefined;
        this.right_translate = false;
        this.answer_clicked = false;
        this.timer = 10;
        this.complete_word = [];
    }
    WordsComponent.prototype.createWord = function () {
        var _this = this;
        if (this.complete_word.length === this.words.length) {
            alert('You are translate all words in this application!!!');
            return;
        }
        var counter = 0;
        while (1) {
            counter++;
            if (this.words.length === counter) {
                break;
            }
            this.generateIndex();
            if (this.complete_word.find(function (num) { return num === _this.real_index; })) {
                this.generateIndex();
            }
            else {
                break;
            }
        }
        this.realtime_word = this.words[this.real_index];
        this.right_translate = false;
        this.answer_clicked = false;
    };
    WordsComponent.prototype.compareWord = function (word) {
        var _this = this;
        if (undefined !== word.value && null !== word.value && '' !== word.value) {
            var _word_1 = word.value.replace(/ё/g, 'е');
            if (this.realtime_word.translate.find(function (translate) { return _word_1.toLocaleLowerCase() === translate.toLocaleLowerCase(); })) {
                this.completeWords(this.real_index);
                this.right_translate = true;
                this.answer_clicked = true;
                word.value = null;
                setTimeout(function () {
                    _this.createWord();
                    _this.answer_clicked = false;
                }, 2000);
            }
            else {
                this.timer = 10;
                this.interval();
                this.right_translate = false;
                this.answer_clicked = true;
                word.value = null;
            }
        }
    };
    WordsComponent.prototype.completeWords = function (index) {
        if (0 === this.complete_word.length) {
            this.complete_word.push(index);
        }
        if (this.complete_word.find(function (num) { return num !== index; })) {
            this.complete_word.push(index);
        }
    };
    WordsComponent.prototype.generateIndex = function () {
        var min = 1;
        var max = this.words.length - 1;
        this.real_index = (function () {
            var rand = min - 0.5 + Math.random() * (max - min + 1);
            rand = Math.round(rand);
            return rand;
        })();
    };
    WordsComponent.prototype.interval = function () {
        var _this = this;
        var time = setInterval(function () {
            _this.timer--;
            if (_this.timer === 0) {
                clearInterval(time);
                _this.createWord();
            }
        }, 1000);
    };
    WordsComponent.prototype.ngOnInit = function () {
        this.createWord();
    };
    return WordsComponent;
}());
WordsComponent = __decorate([
    core_1.Component({
        selector: 'words',
        templateUrl: './words.component.html',
        styleUrls: ['./words.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], WordsComponent);
exports.WordsComponent = WordsComponent;
//# sourceMappingURL=words.component.js.map