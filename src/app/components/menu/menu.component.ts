import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Word } from '../wordsdatabase/word';
import { Family } from '../wordsdatabase/family';
import { Animals } from '../wordsdatabase/animals';
import { Food } from '../wordsdatabase/food';
import { Things } from '../wordsdatabase/things';
import { Profession } from '../wordsdatabase/profession';
import { Flat } from '../wordsdatabase/flat';
import { Furniture } from '../wordsdatabase/furniture';
import { Years } from '../wordsdatabase/years';
import { CityPlaces } from '../wordsdatabase/cityplaces';
import { Kitchen } from '../wordsdatabase/kitchen';
import { Names_People } from '../wordsdatabase/names_people';
import { Plants } from '../wordsdatabase/plants';
import { Salute } from '../wordsdatabase/salute';
import { Transport } from '../wordsdatabase/transport';

export let Words: Word[] = [];
export let Language = false;

@Component({
    selector: 'menu-page',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

    Rus: any[] = [];
    En: any[] = [];
    realLang: any[] = [];
    lang = Language;

    family: Word[];
    animals: Word[];
    food: Word[];
    things: Word[];
    profession: Word[];
    flat: Word[];
    furniture: Word[];
    years: Word[];
    cityplaces: Word[];
    kitchen: Word[];
    names_people: Word[];
    plants: Word[];
    salute: Word[];
    transport: Word[];

    constructor(private router: Router) {
        this.family = Family;
        this.animals = Animals;
        this.food = Food;
        this.things = Things;
        this.profession = Profession;
        this.flat = Flat;
        this.furniture = Furniture;
        this.years = Years;
        this.cityplaces = CityPlaces;
        this.kitchen = Kitchen;
        this.names_people = Names_People;
        this.plants = Plants;
        this.salute = Salute;
        this.transport = Transport;
    }

    RusCreate() {
        this.Rus['family'] = 'Семья';
        this.Rus['animals'] = 'Животные';
        this.Rus['food'] = 'Еда/Продукты';
        this.Rus['things'] = 'Вещи';
        this.Rus['profession'] = 'Профессии';
        this.Rus['flat'] = 'Квартира';
        this.Rus['furniture'] = 'Мебель';
        this.Rus['years'] = 'Время/Времена года';
        this.Rus['cityplaces'] = 'Город/Места';
        this.Rus['kitchen'] = 'Кухня/Посуда';
        this.Rus['names_people'] = 'Названия - люди';
        this.Rus['plants'] = 'Растения';
        this.Rus['salute'] = 'Приветсвия';
        this.Rus['transport'] = 'Транспорт';
    }

    EnCreate () {
        this.En['family'] = 'Family';
        this.En['animals'] = 'Animals';
        this.En['food'] = 'Food';
        this.En['things'] = 'Things';
        this.En['profession'] = 'Profession';
        this.En['flat'] = 'Flat';
        this.En['furniture'] = 'Furniture';
        this.En['years'] = 'Years/Time';
        this.En['cityplaces'] = 'City/Places';
        this.En['kitchen'] = 'Kitchen/Dishes';
        this.En['names_people'] = 'Names - people';
        this.En['plants'] = 'Plants';
        this.En['salute'] = 'Salute';
        this.En['transport'] = 'Transport';
    }

    language() {
        this.lang = !this.lang;
        if (this.lang) {
            this.realLang = this.Rus;
        } else {
            this.realLang = this.En;
        }
    }

    goToFamily() {
        Words = this.family;
        this.router.navigate(['/words']);
    }

    goToAnimals() {
        Words = this.animals;
        this.router.navigate(['/words']);
    }

    goToFood() {
        Words = this.food;
        this.router.navigate(['/words']);
    }

    goToThings() {
        Words = this.things;
        this.router.navigate(['/words']);
    }

    goToProfession() {
        Words = this.profession;
        this.router.navigate(['/words']);
    }

    goToFlat() {
        Words = this.flat;
        this.router.navigate(['/words']);
    }

    goToFurniture() {
        Words = this.furniture;
        this.router.navigate(['/words']);
    }

    goToYears() {
        Words = this.years;
        this.router.navigate(['/words']);
    }

    goToCityPlaces() {
        Words = this.cityplaces;
        this.router.navigate(['/words']);
    }

    goToKitchen() {
        Words = this.kitchen;
        this.router.navigate(['/words']);
    }

    goToNamesPeople() {
        Words = this.names_people;
        this.router.navigate(['/words']);
    }

    goToPlants() {
        Words = this.plants;
        this.router.navigate(['/words']);
    }

    goToSalute() {
        Words = this.salute;
        this.router.navigate(['/words']);
    }

    goToTransport() {
        Words = this.transport;
        this.router.navigate(['/words']);
    }

    ngOnInit() {
        this.RusCreate();
        this.EnCreate();
        this.realLang = this.En;
    }
}


