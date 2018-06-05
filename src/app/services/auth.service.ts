import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { reject, resolve } from 'q';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor() { }

	// Création d'un nouvel utilisateur
	createNewUser(email: string, password: string) {
		return new Promise(
			(resolve, reject) => {
				firebase.auth().createUserWithEmailAndPassword(email, password).then(
					() => {
						resolve();
					},
					(error) => {
						reject(error);
					}
				)
			}
    	)
	}

	// Connexion d'un utilisateur
	signInUser(email:string, password: string) {
		return new Promise(
			(resolve, reject) => {
				firebase.auth().signInWithEmailAndPassword(email, password).then(
					()=> {
						resolve();
					},
					(error)=> {
						reject(error);
					}
				)
			}
		)
	}

	// Déconnexion d'un utilisateur
	signOut() {
		firebase.auth().signOut();
	}
}
