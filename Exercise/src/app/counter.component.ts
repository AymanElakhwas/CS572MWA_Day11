import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      <input type='button' value="-" (click)="decrement()"/>
      {{counterValue}}
      <input type='button' value="+" (click)="increment()"/>
    </p>
    
  `,
  styles: [],
  outputs: ['counterUpdated']
})
export class CounterComponent implements OnInit {
  counterValue: number = 0;
  counterUpdated: EventEmitter;
  @Input() counter: number;

  constructor() {
    this.counterUpdated = new EventEmitter();
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges(changes) {
    this.counterValue = this.counter;
  }

  increment(): void {
    this.counterValue++;
    this.counterUpdated.emit(this.counterValue.toString());
  }

  decrement(): void {
    this.counterValue--;
    this.counterUpdated.emit(this.counterValue.toString());
  }
}
