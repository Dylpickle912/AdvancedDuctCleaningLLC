import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public showMenu = false;
  public showOurCompanyMenu = false;
  public isMobile = false;

  public ngOnInit() {
    this.setIsMobile(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = event.target.innerWidth;
    this.setIsMobile(width);
  }

  public setIsMobile(size: number): void {
    this.isMobile = size <= 960;

    if (this.showMenu && !this.isMobile) {
      this.showMenu = false;
    }
  }

  public toggleShowMenu(): void {
    this.showMenu = !this.showMenu;

    if (!this.showMenu) {
      this.showOurCompanyMenu = false;
    }
  }

  public toggleShowOurCompanyMenu(): void {
    this.showOurCompanyMenu = !this.showOurCompanyMenu;
  }
}
