import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor() {
		var config = {
			apiKey: "AIzaSyAxBwXB0SLOQcCfiRvo_pEw6e5X6HOjSI8",
			authDomain: "bookshelves-dab6b.firebaseapp.com",
			databaseURL: "https://bookshelves-dab6b.firebaseio.com",
			projectId: "bookshelves-dab6b",
			storageBucket: "bookshelves-dab6b.appspot.com",
			messagingSenderId: "117552658411"
		};
		firebase.initializeApp(config);
	}
}
