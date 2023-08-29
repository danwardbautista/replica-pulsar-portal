import { Component } from '@angular/core';
import { faLock, faLockOpen, faSatellite, faEnvelope, faEnvelopeOpenText, faWifi, faEye, faSatelliteDish, faCheckCircle, } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faSatellite = faSatellite;
  faEnvelope = faEnvelope;
  faEnvelopeOpenText = faEnvelopeOpenText;
  faWifi = faWifi;
  // faWifiSlash = faWifiSlash;
  faEye = faEye;
  faSatelliteDish = faSatelliteDish;
  faCheckCircle = faCheckCircle;
  // faMailbox = faMailbox;
  faLock = faLock;
  faLockOpen = faLockOpen;
}
