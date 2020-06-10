import { Directive, OnChanges, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCaCheck]'
})
export class CaCheckDirective implements OnChanges {
  @Input() value: number;
  @Input() comparedValue: number;
  @HostBinding('class') nomClass: string;

  constructor() { }

  ngOnChanges() {
    if (this.value > this.comparedValue) {
      this.nomClass = "greater";
    }
    else {
      this.nomClass = "lower";
    }
  }

}
