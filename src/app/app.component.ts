import { Component } from '@angular/core';
import { faBell, faArrowAltCircleRight, faFile, faHome, faSatelliteDish, faUser, faSearch, faChessRook, faLayerGroup, faWifi, faUsers, faLock, faTags, faGlobe, faFileExport, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showToolbar: boolean = true;

  constructor(private router: Router, private _snackBar: MatSnackBar, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.showToolbar = !this.isLoginPage();
    });
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  title = 'replica-pulsar-portal';
  faUser = faUser;
  faHome = faHome;
  faSearch = faSearch;
  faSatelliteDish = faSatelliteDish;
  faChessRook = faChessRook;
  faLayerGroup = faLayerGroup;
  faBell = faBell;
  faWifi = faWifi;
  faUsers = faUsers;
  faLock = faLock;
  faTags = faTags;
  faGlobe = faGlobe;
  // faMailbox = faMailbox;
  faFile = faFile;
  faFileExport = faFileExport;
  faExternalLink = faExternalLink;
  faArrowAltCircleRight = faArrowAltCircleRight;
}
