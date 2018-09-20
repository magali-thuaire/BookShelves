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

  // Suppression d'un livre
  deleteBook(book: Book) {
    // Index du livre à supprimer
    // Fonction findIndex : renvoie l'indice du premier élément du tableau qui satisfait une condition donnée par une fonction
    const bookIndexToRemove = this.books.findIndex(
      (bookEl) => {
        if (bookEl === book) {
          return true;
        }
      }
    );
    // Suppression du livre dans le tableau
    this.books.splice(bookIndexToRemove, 1);
    // Emission du tableau des livres
    this.emitBooks();
  }

  // Ajout d'un livre
  NewBook(book: Book) {
    this.books.push(book);
  }
}
