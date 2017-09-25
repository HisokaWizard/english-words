import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from '@angular/router';
import { Words } from "./words.database";

@Component({
  selector: 'words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  words = Words;
  realtime_word : any = undefined;

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
  }

  compareWord(word : any){
      for(let translate of this.realtime_word.translate){
        if(word === translate){
           this.createWord();    
        }
    }
    this.createWord();
  }

  ngOnInit() {
  }

}