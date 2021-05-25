import {Component} from '@angular/core';
import {NavigationEnd, NavigationStart, Router, Event as NavigationEvent} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routing';
  currentRoute?: string;

  constructor(private router: Router) {

  }

  matchRoute(s: string): boolean {
    console.log();
    this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if (event instanceof NavigationEnd) {
            this.currentRoute = event.url;
          }
        });

    return this.currentRoute === s;
  }
}
