import './util/rxjs-extension';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatosModule } from './contatos/contatos.module';
import { DialogService } from './dialog.service';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        ContatosModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
        DialogService
    ]
})
export class AppModule {

}