import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
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
