import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Word } from '../wordsdatabase/word';
import { WordsFirst } from '../wordsdatabase/words.first';
import { WordsSecond } from '../wordsdatabase/words.second';
import { WordsThird } from '../wordsdatabase/words.third';
import { WordsFour } from '../wordsdatabase/words.four';

export let Words: Word[] = [];

@Component({
    selector: 'menu-page',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent {
    wordsFirst: Word[];
    wordsSecond: Word[];
    wordsThird: Word[];
    wordsFour: Word[];

    constructor(private router: Router) {
        this.wordsFirst = WordsFirst;
        this.wordsSecond = WordsSecond;
        this.wordsThird = WordsThird;
        this.wordsFour = WordsFour;
    }

    goWithFisrtWords() {
        Words = this.wordsFirst;
        this.router.navigate(['/words']);
    }

    goWithSecondWords() {
        Words = this.wordsSecond;
        this.router.navigate(['/words']);
    }

    goWithThirdWords() {
        Words = this.wordsThird;
        this.router.navigate(['/words']);
    }

    goWithFourWords() {
        Words = this.wordsFour;
        this.router.navigate(['/words']);
    }
}


