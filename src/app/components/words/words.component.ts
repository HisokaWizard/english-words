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
  onswer_clicked: boolean = false;
  timer: number = 10;

  constructor(private router: Router) {
   }

  createWord() {
    let min = 0;
    let max = this.words.length - 1;
    let index = (() => {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    })();
    this.realtime_word = this.words[index];
    this.right_translate = false;
    this.onswer_clicked = false;
  }

  compareWord(word: HTMLInputElement) {
    if (undefined !== word) {
      if (this.realtime_word.translate.find(translate => word.value.toLocaleLowerCase() === translate.toLocaleLowerCase())) {
        this.right_translate = true;
        this.onswer_clicked = true;
        word.value = null;
        setTimeout(() => {
          this.createWord();
          this.onswer_clicked = false;
        }, 2000);
      } else {
        this.timer = 10;
        this.interval();
        this.right_translate = false;
        this.onswer_clicked = true;
        word.value = null;
      }
    } else {
      this.createWord();
    }
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
