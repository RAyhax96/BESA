import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./estilo.css']
})
export class PrincipalComponent implements OnInit {
  public load: boolean;
  public cargablur: boolean;
  constructor() { 
   
  this.cargablur=false;
    this.load = false;
  }
 
  carga(): void {
    setTimeout(() => {
      this.cargablur = true;
    }, 6000);
  
  }
ngOnInit(): void {
  setTimeout(() => {
    this.load = true;
  }, 6000);

}


}
