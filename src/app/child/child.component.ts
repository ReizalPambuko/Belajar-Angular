import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

isSpecial = true

  @Input() counter! : number
  @Output() counterChange = new EventEmitter<number>();

product = [
  {
          id: 1,
          stock: 10,
          name: "Laptop Asus Zenbook",
          brand: "Asus",
          price: 12000000,
          discount: 0
  },
  {
          id: 2,
          stock: 0,
          name: "Smartphone Samsung Galaxy S21",
          brand: "Samsung",
          price: 13000000,
          discount: 10
  },
  {
          id: 3,
          stock: 5,
          name: "Smart TV LG OLED",
          brand: "LG",
          price: 15000000,
          discount: 10

  }
]

  getClases(){
    return {
      btn : true,
      'btn-primary': this.isSpecial
    }
  }

  incerment(){
    this.handleCounter(this.counter + 1)
  }

  decrement(){
    this.handleCounter(this.counter - 1)
  }
  handleCounter(event:any){
    this.counterChange.emit(event)
  }
}
