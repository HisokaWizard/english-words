import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Word, Words } from './words.database';

@Component({
  selector: 'words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  words: Word[] = Words;
  realtime_word: Word = undefined;
  right_translate: boolean = false;
  answer_clicked: boolean = false;
  timer: number = 10;
  complete_word: number[];
  real_index: number;
  final_message: string;

  constructor(private router: Router) {
    this.complete_word = [];
  }

  createWord() {
    if (this.complete_word.length === this.words.length - 1) {
      this.final_message = 'finish';
    }
    if ('finish' === this.final_message) {
      alert('You are finished this quest, go out!');
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
        }, 2000);
      } else {
        this.timer = 10;
        this.interval();
        this.right_translate = false;
        this.answer_clicked = true;
        word.value = null;
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

  ngOnInit() {
    this.createWord();
  }

}
