import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {RouterOutlet} from "@angular/router";
import {FooterAdditionalInfoComponent} from "./footer-additional-info/footer-additional-info.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    NavigationComponent,
    RouterOutlet,
    FooterAdditionalInfoComponent,
    NgIf
  ],
  providers: []
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Advanced Duct Cleaning LLC';
  public isMobile = false;

  public ngOnInit() {
    this.checkIfIsMobile(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIfIsMobile(event.target.innerWidth);
  }

  public checkIfIsMobile(size: number): void {
    this.isMobile = size < 500;
  }

  public ngOnDestroy() {
    document.removeEventListener('resize', this.onResize);
  }
}
