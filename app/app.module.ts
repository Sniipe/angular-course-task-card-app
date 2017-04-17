//Modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'; //allows you to run angular in a browser, it can be run on a mobile, desktop, etc...
import {FormsModule} from '@angular/forms';
import {JsonpModule, HttpModule} from '@angular/http';

//Components
import { AppComponent} from './app.component';
import { CardComponent} from './card/card.component';
import { WeatherComponent} from './weather-widget/component/weather.component';

import { SpeedUnitPipe} from './weather-widget/pipe/speed-unit.pipe';
import { TempUnitPipe} from './weather-widget/pipe/temp-unit.pipe';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        JsonpModule,
        HttpModule
        ],
    declarations: [
        AppComponent,
        CardComponent,
        WeatherComponent,
        SpeedUnitPipe,
        TempUnitPipe
        ],
    bootstrap: [AppComponent]
})

export class AppModule { }