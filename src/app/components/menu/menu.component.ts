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
import { HeathAndBodyEn } from '../wordsdatabaseenglish/healt&body';
import { ClothesEn } from '../wordsdatabaseenglish/clothes';
import { EventsEn } from '../wordsdatabaseenglish/events';
import { WeatherEn } from '../wordsdatabaseenglish/weather';
import { ArtEn } from '../wordsdatabaseenglish/art';
import { MeasureEn } from '../wordsdatabaseenglish/measure';
import { FeelingEn } from '../wordsdatabaseenglish/feeling';
import { PretextEn } from '../wordsdatabaseenglish/pretext';

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
import { HeathAndBodyRu } from '../wordsdatabaserus/healt&body';
import { ClothesRu } from '../wordsdatabaserus/clothes';
import { EventsRu } from '../wordsdatabaserus/events';
import { WeatherRu } from '../wordsdatabaserus/weather';
import { ArtRu } from '../wordsdatabaserus/art';
import { MeasureRu } from '../wordsdatabaserus/measure';
import { FeelingRu } from '../wordsdatabaserus/feeling';
import { PretextRu } from '../wordsdatabaserus/pretext';

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
    healthandbody: Word[];
    clothes: Word[];
    events: Word[];
    weather: Word[];
    art: Word[];
    measure: Word[];
    feeling: Word[];
    pretext: Word[];

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
            this.dataobject.push({id: 'healthandbody', data: this.healthandbody = HeathAndBodyEn});
            this.dataobject.push({id: 'clothes', data: this.clothes = ClothesEn});
            this.dataobject.push({id: 'events', data: this.events = EventsEn});
            this.dataobject.push({id: 'weather', data: this.weather = WeatherEn});
            this.dataobject.push({id: 'art', data: this.art = ArtEn});
            this.dataobject.push({id: 'measure', data: this.measure = MeasureEn});
            this.dataobject.push({id: 'feeling', data: this.feeling = FeelingEn});
            this.dataobject.push({id: 'pretext', data: this.pretext = PretextEn});
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
            this.dataobject.push({id: 'healthandbody', data: this.healthandbody = HeathAndBodyRu});
            this.dataobject.push({id: 'clothes', data: this.clothes = ClothesRu});
            this.dataobject.push({id: 'events', data: this.events = EventsRu});
            this.dataobject.push({id: 'weather', data: this.weather = WeatherRu});
            this.dataobject.push({id: 'art', data: this.art = ArtRu});
            this.dataobject.push({id: 'measure', data: this.measure = MeasureRu});
            this.dataobject.push({id: 'feeling', data: this.feeling = FeelingRu});
            this.dataobject.push({id: 'pretext', data: this.pretext = PretextRu});
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
        this.allcategory.push({id: 'healthandbody', name: this.realLang['healthandbody'], data: this.healthandbody});
        this.allcategory.push({id: 'clothes', name: this.realLang['clothes'], data: this.clothes});
        this.allcategory.push({id: 'events', name: this.realLang['events'], data: this.events});
        this.allcategory.push({id: 'weather', name: this.realLang['weather'], data: this.weather});
        this.allcategory.push({id: 'art', name: this.realLang['art'], data: this.art});
        this.allcategory.push({id: 'measure', name: this.realLang['measure'], data: this.measure});
        this.allcategory.push({id: 'feeling', name: this.realLang['feeling'], data: this.feeling});
        this.allcategory.push({id: 'pretext', name: this.realLang['pretext'], data: this.pretext});
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
        this.Rus['healthandbody'] = 'Здоровье и тело';
        this.Rus['clothes'] = 'Одежда';
        this.Rus['events'] = 'События';
        this.Rus['weather'] = 'Погода';
        this.Rus['art'] = 'Хобби и исскуство';
        this.Rus['measure'] = 'Меры и финансы';
        this.Rus['feeling'] = 'Чувства/Действия';
        this.Rus['pretext'] = 'Местоимения/Предлоги';
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
        this.En['healthandbody'] = 'Health & Body';
        this.En['clothes'] = 'Clothes';
        this.En['events'] = 'Events';
        this.En['weather'] = 'Weather';
        this.En['art'] = 'Hobby/Art';
        this.En['measure'] = 'Measure';
        this.En['feeling'] = 'Feeling/Action';
        this.En['pretext'] = 'Pronouns/Pretexts';
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


