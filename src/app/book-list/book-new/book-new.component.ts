import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BookService } from "../../services/book.service";
import { Book } from "../../models/Book.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {

  // Formulaire pour l'enregistrement d'un nouveau livres
  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
    // Initialisation du formulaire
    this.initForm();
  }

  // Initialisation du formulaire
  initForm() {
    this.bookForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        author: ['', Validators.required]
      }
    );

  }

  // Soumission du formulaire
  onNewBook() {
    // Récupération des entrées du formulaire
    const title = this.bookForm.get('title').value;
    const author = this.bookForm.get('author').value;
    // Création d'un nouveau livre
    const book = new Book(title, author);
    // Enregistrement du nouveau livre
    this.bookService.NewBook(book);
    // Redirection vers l'affichage de la liste des livres
    this.router.navigate(['/books']);
  }

}
