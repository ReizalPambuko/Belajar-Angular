import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy{
counter = 0;
interval:any;

  constructor() {
    console.log('constrator hero')
    }

    
  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    console.log('onInit hero')
    this.interval = setInterval(() => {
      this.counter++
      console.log(this.counter)
    }, 1000)
  }

  ngOnDestroy(): void {
    console.log('destroy app')
    clearInterval(this.interval)
  }

}
