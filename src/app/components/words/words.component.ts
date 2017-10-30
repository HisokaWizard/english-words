import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Word } from '../wordstruct/word';
import { Words } from '../menu/menu.component';
import { Language } from '../menu/menu.component';

@Component({
  selector: 'words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  words: Word[];
  realtime_word: Word = undefined;
  right_translate: boolean = false;
  answer_clicked: boolean = false;
  timer: number = 0;
  complete_word: number[];
  real_index: number;
  final_message: string;
  lang: boolean;
  Rus: any[] = [];
  En: any[] = [];
  reallang: any[] = [];

  constructor(private router: Router) {
    this.words = Words;
    this.complete_word = [];
    if (0 === Words.length) {
      this.router.navigate(['']);
    }
  }

  createRus() {
    this.Rus['start'] = 'Вернуться в начало';
    this.Rus['click'] = 'Проверить перевод';
    this.Rus['right'] = 'Правильно, отлично! Следующее слово >>';
    this.Rus['badly'] = 'Не правильно! Вот праивильный перевод, выучи пожалуйста:';
    this.Rus['translated'] = 'Уже переведено:';
    this.Rus['time'] = 'У тебя есть время чтобы выучить слово!';
    this.Rus['finish'] = 'Вы успешно закончили перевод, возвращайтесь на старт!';
    return this.Rus;
  }

  createEn() {
    this.En['start'] = 'Return to start';
    this.En['click'] = 'Test your translate';
    this.En['right'] = 'You are right, great! Next word >>';
    this.En['badly'] = 'You are not right! This is right translate, please learn it:';
    this.En['translated'] = 'Translated:';
    this.En['time'] = 'You have time to will learn this word!';
    this.En['finish'] = 'You are success finished translate, go to start please!';
    return this.En;
  }

  createWord() {
    if (this.complete_word.length === this.words.length - 1) {
      alert(this.reallang['finish']);
      this.router.navigate(['']);
      return;
    }
    let counter = 0;
    while (1) {
      counter++;
      if (this.words.length * 10 === counter){
        break;
      }
      this.generateIndex();
      if (this.complete_word.find(num => num === this.real_index)) {
        this.generateIndex();
      } else {
        break;
      }
    }
    this.realtime_word = this.words[this.real_index];
    this.right_translate = false;
    this.answer_clicked = false;
  }

  compareWord(word: HTMLInputElement) {
    if (undefined !== word.value && null !== word.value && '' !== word.value) {
      const _word = word.value.replace(/ё/g, 'е');
      if (this.realtime_word.translate.find(translate => _word.toLocaleLowerCase() === translate.toLocaleLowerCase())) {
        this.completeWords(this.real_index);
        this.right_translate = true;
        this.answer_clicked = true;
        word.value = null;
        setTimeout(() => {
          this.createWord();
          this.answer_clicked = false;
        }, 1000);
      } else {
        if (0 === this.timer) {
          this.timer = 7;
          this.interval();
          this.right_translate = false;
          this.answer_clicked = true;
          word.value = null;
        }
      }
    }
  }

  completeWords(index: number) {
    if (0 === this.complete_word.length) {
      this.complete_word.push(index);
    }
    if (this.complete_word.find(num => num !== index)) {
      this.complete_word.push(index);
    }
  }

  generateIndex() {
    const min = 1;
    const max = this.words.length - 1;
    this.real_index = (() => {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    })();
  }

  interval() {
    let time = setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        clearInterval(time);
        this.createWord();
      }
    }, 1000);

  }

  returnToStart() {
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.createWord();
    this.lang = Language;
    if (!this.lang) {
      this.reallang = this.createEn();
    } else {
      this.reallang = this.createRus();
    }
  }

}
