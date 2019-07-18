import { Directive, HostListener, HostBinding, ViewChild, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  @HostListener('click')
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
