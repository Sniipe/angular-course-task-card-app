//Modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'; //allows you to run angular in a browser, it can be run on a mobile, desktop, etc...
import {FormsModule} from '@angular/forms';

//Components
import { AppComponent} from './app.component';
import { CardComponent} from './card/card.component';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule
        ],
    declarations: [
        AppComponent,
        CardComponent
        ],
    bootstrap: [AppComponent]
})

export class AppModule { }