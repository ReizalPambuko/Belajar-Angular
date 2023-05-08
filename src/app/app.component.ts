import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  titleName = ""
  counter = 0
  color = ""
  green = "green"
  ngOnInit(): void {}

  greting(){
    this.titleName = "Welcome to Angular"
  }
  
 
}
