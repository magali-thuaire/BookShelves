import { Book } from "../models/Book.model";
import { Subject } from "rxjs";


export class BookService {

  // Tableau privé des livres
  private books: Book[] = [
    {
      title: 'Titre',
      author: 'Auteur'
    }
  ];

  // Subject pour le tableau privé des livres
  booksSubject = new Subject<Book[]>();

  constructor() { }

  // Emission du tableau des livres
  emitBooks() {
    this.booksSubject.next(this.books);
  }
}
