import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  @Input () prenom1 : string = "";
  @Input () nom : string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
