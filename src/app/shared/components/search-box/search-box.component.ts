import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
@Input()
public placeholder:string = '';

@Input()
public initialValue:string = '';

@Output()
public onValue = new EventEmitter<string>();

emitValue(value: string):void {
  this.onValue.emit(value)
}
}
