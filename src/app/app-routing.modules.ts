import { MenuComponent } from './components/menu/menu.component';
import { WordsComponent } from './components/words/words.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: MenuComponent
    },
    {
        path: 'words',
        component: WordsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }