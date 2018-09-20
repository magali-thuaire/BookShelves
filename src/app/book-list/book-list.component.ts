import { Component, OnInit } from '@angular/core';
import { BookService } from "../services/book.service";
import { Book } from "../models/Book.model";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  // Tableau des livres
  books: Book[];
  // Souscription au tableau privé des livres
  booksSubscription: Subscription;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    // Initialisation de la souscription au tableau privé des livres
    this.booksSubscription = this.bookService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    // Emission du tableau des livres
    this.bookService.emitBooks();
  }

  // Supression d'un livre
  onDeleteBook(book: Book) {
    this.bookService.deleteBook(book);
  }

}
