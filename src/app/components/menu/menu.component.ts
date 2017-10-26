import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Word } from '../wordstruct/word';

// English
import { FamilyEn } from '../wordsdatabaseenglish/family';
import { AnimalsEn } from '../wordsdatabaseenglish/animals';
import { FoodEn } from '../wordsdatabaseenglish/food';
import { ThingsEn } from '../wordsdatabaseenglish/things';
import { ProfessionEn } from '../wordsdatabaseenglish/profession';
import { FlatEn } from '../wordsdatabaseenglish/flat';
import { FurnitureEn } from '../wordsdatabaseenglish/furniture';
import { YearsEn } from '../wordsdatabaseenglish/years';
import { CityPlacesEn } from '../wordsdatabaseenglish/cityplaces';
import { KitchenEn } from '../wordsdatabaseenglish/kitchen';
import { Names_PeopleEn } from '../wordsdatabaseenglish/names_people';
import { PlantsEn } from '../wordsdatabaseenglish/plants';
import { SaluteEn } from '../wordsdatabaseenglish/salute';
import { TransportEn } from '../wordsdatabaseenglish/transport';

// Russian
import { FamilyRu } from '../wordsdatabaserus/family';
import { AnimalsRu } from '../wordsdatabaserus/animals';
import { FoodRu } from '../wordsdatabaserus/food';
import { ThingsRu } from '../wordsdatabaserus/things';
import { ProfessionRu } from '../wordsdatabaserus/profession';
import { FlatRu } from '../wordsdatabaserus/flat';
import { FurnitureRu } from '../wordsdatabaserus/furniture';
import { YearsRu } from '../wordsdatabaserus/years';
import { CityPlacesRu } from '../wordsdatabaserus/cityplaces';
import { KitchenRu } from '../wordsdatabaserus/kitchen';
import { Names_PeopleRu } from '../wordsdatabaserus/names_people';
import { PlantsRu } from '../wordsdatabaserus/plants';
import { SaluteRu } from '../wordsdatabaserus/salute';
import { TransportRu } from '../wordsdatabaserus/transport';

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
    allcategory: any[] = [];
    dataobject: any[] = [];

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
    }

    createWordsData() {
        this.dataobject = [];
        if (!this.lang) {
            this.dataobject.push({id: 'family', data: this.family = FamilyEn});
            this.dataobject.push({id: 'animals', data: this.animals = AnimalsEn});
            this.dataobject.push({id: 'food', data: this.food = FoodEn});
            this.dataobject.push({id: 'things', data: this.things = ThingsEn});
            this.dataobject.push({id: 'profession', data: this.profession = ProfessionEn});
            this.dataobject.push({id: 'flat', data: this.flat = FlatEn});
            this.dataobject.push({id: 'furniture', data: this.furniture = FurnitureEn});
            this.dataobject.push({id: 'years', data: this.years = YearsEn});
            this.dataobject.push({id: 'cityplaces', data: this.cityplaces = CityPlacesEn});
            this.dataobject.push({id: 'kitchen', data: this.kitchen = KitchenEn});
            this.dataobject.push({id: 'names_people', data: this.names_people = Names_PeopleEn});
            this.dataobject.push({id: 'plants', data: this.plants = PlantsEn});
            this.dataobject.push({id: 'salute', data: this.salute = SaluteEn});
            this.dataobject.push({id: 'transport', data: this.transport = TransportEn});
        } else {
            this.dataobject.push({id: 'family', data: this.family = FamilyRu});
            this.dataobject.push({id: 'animals', data: this.animals = AnimalsRu});
            this.dataobject.push({id: 'food', data: this.food = FoodRu});
            this.dataobject.push({id: 'things', data: this.things = ThingsRu});
            this.dataobject.push({id: 'profession', data: this.profession = ProfessionRu});
            this.dataobject.push({id: 'flat', data: this.flat = FlatRu});
            this.dataobject.push({id: 'furniture', data: this.furniture = FurnitureRu});
            this.dataobject.push({id: 'years', data: this.years = YearsRu});
            this.dataobject.push({id: 'cityplaces', data: this.cityplaces = CityPlacesRu});
            this.dataobject.push({id: 'kitchen', data: this.kitchen = KitchenRu});
            this.dataobject.push({id: 'names_people', data: this.names_people = Names_PeopleRu});
            this.dataobject.push({id: 'plants', data: this.plants = PlantsRu});
            this.dataobject.push({id: 'salute', data: this.salute = SaluteRu});
            this.dataobject.push({id: 'transport', data: this.transport = TransportRu});
        }
    }

    createAllCategory() {
        this.allcategory.push({id: 'family', name: this.realLang['family'], data: this.family});
        this.allcategory.push({id: 'animals', name: this.realLang['animals'], data: this.animals});
        this.allcategory.push({id: 'food',  name: this.realLang['food'], data: this.food});
        this.allcategory.push({id: 'things', name: this.realLang['things'], data: this.things});
        this.allcategory.push({id: 'profession', name: this.realLang['profession'], data: this.profession});
        this.allcategory.push({id: 'flat', name: this.realLang['flat'], data: this.flat});
        this.allcategory.push({id: 'furniture', name: this.realLang['furniture'], data: this.furniture});
        this.allcategory.push({id: 'years',  name: this.realLang['years'], data: this.years});
        this.allcategory.push({id: 'cityplaces', name: this.realLang['cityplaces'], data: this.cityplaces});
        this.allcategory.push({id: 'kitchen', name: this.realLang['kitchen'], data: this.kitchen});
        this.allcategory.push({id: 'names_people', name: this.realLang['names_people'], data: this.names_people});
        this.allcategory.push({id: 'plants', name: this.realLang['plants'], data: this.plants});
        this.allcategory.push({id: 'salute', name: this.realLang['salute'], data: this.salute});
        this.allcategory.push({id: 'transport', name: this.realLang['transport'], data: this.transport});
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
            this.createWordsData();
            for (const category of this.allcategory) {
                category.name = this.realLang[category.id];
                for (const data of this.dataobject) {
                    if (category.id === data.id) {
                        category.data = data.data;
                    }
                }
            }
        } else {
            this.realLang = this.En;
            this.createWordsData();
            for (const category of this.allcategory) {
                category.name = this.realLang[category.id];
                for (const data of this.dataobject) {
                    if (category.id === data.id) {
                        category.data = data.data;
                    }
                }
            }
        }
    }

    goToTranslate(category: any) {
        Words = category.data;
        Language = this.lang;
        this.router.navigate(['/words']);
    }

    ngOnInit() {
        this.RusCreate();
        this.EnCreate();
        if (!this.lang) {
            this.realLang = this.En;
        } else {
            this.realLang = this.Rus;
        }
        this.createWordsData();
        this.createAllCategory();
    }
}


