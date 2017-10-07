export class Word {
    id: number;
    word: string;
    transcript: string;
    translate: string[];

    constructor(id: number, word: string, transcript: string, translate: string[]) {
        this.id = id;
        this.word = word;
        this.transcript = transcript;
        this.translate = translate;
    }
};
