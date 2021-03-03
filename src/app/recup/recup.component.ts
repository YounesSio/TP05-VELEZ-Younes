import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recup',
  templateUrl: './recup.component.html',
  styleUrls: ['./recup.component.css']
})
export class RecupComponent implements OnInit {
  @Input () nom : string;
  @Input () prenom : string;
  @Input () adresse : string;
  @Input () cp : string;
  @Input () login : string;
  
  constructor() { }

  ngOnInit(): void {
    
    
  }

}
