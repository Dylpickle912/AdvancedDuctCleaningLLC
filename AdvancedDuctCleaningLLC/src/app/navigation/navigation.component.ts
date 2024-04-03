import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLinkActive, RouterLink } from "@angular/router";
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    standalone: true,
    imports: [RouterLinkActive, RouterLink, NgClass]
})
export class NavigationComponent implements OnInit, OnDestroy {
  public showMenu = false;
  public showOurCompanyMenu = false;
  public isMobile = false;

  public isOurCompany = false;

  constructor(private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute) { }

  public ngOnInit() {
    this.setIsMobile(window.innerWidth);
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const ourCompanyRoutes = ['/our-company', '/steps', '/before-and-after'];
        this.isOurCompany = ourCompanyRoutes.includes(e.url)
      }
    })
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

  public closeMenu(): void {
    this.showMenu = false;
    this.showOurCompanyMenu = false;
  }

  public toggleShowOurCompanyMenu(): void {
    this.showOurCompanyMenu = !this.showOurCompanyMenu;
  }

  public ngOnDestroy() {
    document.removeEventListener('resize', this.onResize);
  }
}
