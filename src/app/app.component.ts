import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyD4BT2TOyVcsCoJJJEADPs8WipXrjlQraw",
            authDomain: "bookshelves-a20ef.firebaseapp.com",
            databaseURL: "https://bookshelves-a20ef.firebaseio.com",
            projectId: "bookshelves-a20ef",
            storageBucket: "bookshelves-a20ef.appspot.com",
            messagingSenderId: "223343333232"
        };
        firebase.initializeApp(config);
    }
}
