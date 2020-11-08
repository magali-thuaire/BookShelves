import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from "@angular/forms";

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HeaderComponent } from './header/header.component';

import { BookService } from "./services/book.service";
import { BookListComponent } from './book-list/book-list.component';
import { BookNewComponent } from './book-list/book-new/book-new.component';


const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: '', component: BookListComponent },
  { path: 'books/new', component: BookNewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    FourOhFourComponent,
    HeaderComponent,
    BookListComponent,
    BookNewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
