import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
    <p>
      <input type='button' value="-" (click)="decrement()"/>
      {{counterValue}}
      <input type='button' value="+" (click)="increment()"/>
    </p>
    <h3>
    Component Counter Value = {{counterComponentValue}}
    </h3>
    
  `,
  styles: [],

})
export class CounterComponent implements OnInit {
  counterValue: number = 0;
  @Input() counterComponentValue = 0;
  @Output() counterChange: EventEmitter<string>;
  @Input() counter: number;

  constructor() {
    this.counterChange = new EventEmitter();
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.counterValue = this.counter;
  }

  increment(): void {
    this.counterValue++;
    this.counterChange.emit(this.counterValue.toString());
  }

  decrement(): void {
    this.counterValue--;
    this.counterChange.emit(this.counterValue.toString());
  }
}
