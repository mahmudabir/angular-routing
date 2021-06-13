import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, Event as NavigationEvent } from '@angular/router';
import { AuthService } from './auth.service';
import { RouterLinkModel, routerLinks as listOfLinks } from './router.link.model';

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
  data?: any;
  constructor(private router: Router, private authService: AuthService) {

  }


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.routerLinks = listOfLinks;
    console.log(this.routerLinks);


    // this.data = document.getElementById('app-root')?.innerHTML;
    // console.log(this.data?.length);
    // if (this.data?.length != 0) {
    //   console.log(`hidden="true"`);
    //   document.getElementById('loader')?.setAttribute('hidden', 'true');
    // } else {
    //   console.log(`hidden="false"`);
    //   document.getElementById('loader')?.removeAttribute('hidden');
    // }
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
