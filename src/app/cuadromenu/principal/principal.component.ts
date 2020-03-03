import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./estilo.css']
})
export class PrincipalComponent implements OnInit {
  public load: boolean;
  constructor() { 
   

    this.load = false;
  }
 

ngOnInit(): void {
  setTimeout(() => {
    this.load = true;
  }, 5000);

}


}
