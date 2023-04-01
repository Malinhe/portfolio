import { Component } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {
  showDropdownImage = false;
  showBurgerMenu = true;

  showDropdown() {
    this.showDropdownImage = true;
    this.showBurgerMenu = false;
  }

  closeDropDownMenu() {
    this.showDropdownImage = false;
    this.showBurgerMenu = true;
  }
}
