import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  valid1: boolean = true;
  valid2: boolean = false;

  nom: string = "";
  nomVide: boolean = false;
  nom3min: boolean = false;
  nomRecup: string = "";

  prenom: string = "";
  prenomVide: boolean = false;
  prenom3min: boolean = false;
  prenomRecup: string = "";

  
  adresse: string = "";
  adresseVide: boolean = false;
  adresse3min: boolean = false;
  adresseRecup: string = "";

  cp: string = "";
  cpVide: boolean = false;
  cp5min: boolean = false;
  cpRecup: string = "";

  email: string = "";
  emailVide: boolean = false;
  email3min: boolean = false;
  emailRecup: string = "";

  login: string = "";
  loginVide: boolean = false;
  login3min: boolean = false;
  loginRecup: string = "";


  click: string = "";
  constructor() { }

  listArticles = ["livre", "ordinateur", "stylo", "verre"]
  listPays = ["France", "Allemagne", "Suisse", "Espagne"];

  ngOnInit(): void {
  }

  click1() {
    this.click = "Caché !";
    this.valid1 = false;
    this.valid2 = true;

  }

  click2() {
    this.click = "Affiché !";
    this.valid1 = true;
    this.valid2 = false;

  }

  clickValidation() {
    //Nom
    if (this.nom == "") {
      this.nomVide = true;
    }
    else {
      this.nomVide = false;
      this.nomRecup = "";
    }

    if (this.nom.length < 3) {
      this.nom3min = true;
    }
    else {
      this.nom3min = false;
      this.nomRecup = this.nom;
    }

    //Prenom
    if (this.prenom == "") {
      this.prenomVide = true;
    }
    else {
      this.prenomVide = false;
      this.prenomRecup = "";
    }

    if (this.prenom.length < 3) {
      this.prenom3min = true;
    }
    else {
      this.prenom3min = false;
      this.prenomRecup = this.prenom;
    }

    //Adresse
    if (this.adresse == "") {
      this.adresseVide = true;
    }
    else {
      this.adresseVide = false;
      this.adresseRecup = "";
    }

    if (this.adresse.length < 3) {
      this.adresse3min = true;
    }
    else {
      this.adresse3min = false;
      this.adresseRecup = this.adresse;
    }

    //Code postal
    if (this.cp == "") {
      this.cpVide = true;
    }
    else {
      this.cpVide = false;
      this.cpRecup = "";
    }
    if (this.cp.toString().length == 5) {
      this.cp5min = false;
      this.cpRecup = this.cp;
    }
    else {
      this.cp5min = true;
    }

    //login
    if (this.login == "") {
      this.loginVide = true;
    }
    else {
      this.loginVide = false;
      this.loginRecup = "";
    }

    if (this.login.length < 3) {
      this.login3min = true;
    }
    else {
      this.login3min = false;
      this.loginRecup = this.login;
    }
  }

}
