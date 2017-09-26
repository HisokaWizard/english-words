import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from '@angular/router';
import { Word, Words } from "./words.database";

@Component({
  selector: 'words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  words = Words;
  realtime_word : Word = undefined;
  right_translate:boolean = false;
  onswer_clicked: boolean = false;

  constructor(private router: Router) { }

  createWord(){
    let min = 0;
    let max = this.words.length-1;
    let index = (()=>{
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    })(); 
    this.realtime_word = this.words[index];
    this.right_translate = false;
    this.onswer_clicked = false; 
  }

  compareWord(word : string){
    if(this.realtime_word.translate.find(translate => word === translate)){
      this.right_translate = true;
      this.onswer_clicked = true;
      setTimeout(()=> {this.createWord(); this.onswer_clicked=false}, 2000);
      word = undefined;
    } else {
      this.right_translate = false;
      this.onswer_clicked = true;
      // setTimeout(()=> {this.createWord(); this.onswer_clicked=false}, 3000);
      word = undefined;
    }
  }

  ngOnInit() {
  }

}