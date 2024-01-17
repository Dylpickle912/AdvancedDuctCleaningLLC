import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
