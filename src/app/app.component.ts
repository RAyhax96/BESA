import { Component,OnInit } from '@angular/core';
import { APP_ROUTES } from './app.routes';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public load: boolean;
  
  constructor(){

  }
  ngOnInit(): void {
    setTimeout(() => {
      this.load = true;
    
    }, 10000);
  
  }
}
