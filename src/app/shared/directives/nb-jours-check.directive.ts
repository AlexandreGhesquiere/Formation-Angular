import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appNbJoursCheck]'
})
export class NbJoursCheckDirective implements OnChanges {
  @Input() value: number;
  @Input() treshold: number;
  @HostBinding('class') nomClass: string;

  constructor() { }

  ngOnChanges() {
    if (this.value > this.treshold){
      this.nomClass = "greater";
    }
    else {
      this.nomClass = "lower";
    }
  }

  }

