import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   Counter Component: <app-counter counter="{{parentCounter}}" (counterChange)="counterChangeUpdated($event)" counterComponentValue="{{parentCounter}}"></app-counter>
   <input value={{parentCounter}} (input)="valueChanged($event)"/>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  parentCounter: number = 0;
  valueChanged(evt): void {
    this.parentCounter = evt.target.value;
  }

  counterChangeUpdated(evt): void {
    this.parentCounter = evt;
  }
}
