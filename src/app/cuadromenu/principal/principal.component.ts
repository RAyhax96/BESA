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
   
  
  }
 
  
ngOnInit(): void {
  setTimeout(() => {
    this.load = true;
  
  }, 3000);

}


}
