import {Component} from '@angular/core';
import {NavigationEnd, NavigationStart, Router, Event as NavigationEvent} from '@angular/router';
import {RouterLinkModel, routerLinks, routerLinks as listOfLinks} from './router.link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routing';
  currentRoute?: string;
  navbarToggled = false;

  routerLinks?: RouterLinkModel[];

  constructor(private router: Router) {

  }


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
      this.routerLinks = listOfLinks;
      console.log(routerLinks);
  }

  matchRoute(s: string): boolean {
    this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if (event instanceof NavigationEnd) {
            this.currentRoute = event.url;
          }
        });

    return this.currentRoute === s;
  }

  toggleNavbar(): void {
    if (this.navbarToggled) {
      this.navbarToggled = !this.navbarToggled;

      setTimeout(() => {
        document.getElementById('btnNavbarToggle')?.setAttribute('class', 'fa fa-chevron-circle-down');
      }, 100);

    } else {
      this.navbarToggled = !this.navbarToggled;

      setTimeout(() => {
        document.getElementById('btnNavbarToggle')?.setAttribute('class', 'fa fa-chevron-circle-up');
      }, 100);
    }
  }
}
