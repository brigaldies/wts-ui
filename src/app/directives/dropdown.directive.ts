import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

  // The CSS class 'open' (From Bootstrap) is appended to the element with this directive
  // if opened() returns true.
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }

  // Handle click events on the element
  @HostListener('click') openDropdown() {
    this.isOpen = true;
  }

  // Handle mouse leave events
  @HostListener('mouseleave') closeDropdown() {
    this.isOpen = false;
  }

  private isOpen = false;
}
