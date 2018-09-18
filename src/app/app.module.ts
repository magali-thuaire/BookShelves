import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const routes: Routes = [
  { path: 'books', component: AppComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
