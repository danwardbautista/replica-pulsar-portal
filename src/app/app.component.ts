import { Component } from '@angular/core';
import { faBell, faArrowAltCircleRight, faFile, faHome, faSatelliteDish, faUser, faSearch, faChessRook, faLayerGroup, faWifi, faUsers, faLock, faTags, faGlobe, faFileExport, faExternalLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
  faFile= faFile;
  faFileExport = faFileExport;
  faExternalLink = faExternalLink;
  faArrowAltCircleRight = faArrowAltCircleRight;
}
