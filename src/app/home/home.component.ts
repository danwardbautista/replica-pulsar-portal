import {Component} from '@angular/core';
import {
  faLock,
  faLockOpen,
  faSatellite,
  faEnvelope,
  faEnvelopeOpenText,
  faWifi,
  faEye,
  faSatelliteDish,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-home',
  template: `
    <div class="text-center">

      <div class="circle-container">
        <div class="blue-circle">
          <fa-icon [icon]="faSatellite" size="5x" [fixedWidth]="true" class="white-icon"></fa-icon>
        </div>
      </div>


      <h1 class="mb-4" style="font-size:35px;font-weight:500;margin-top:15px;">Whenever Communications LLC</h1>
    </div>

    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <a href="https://www.pivotel.com.au/current-outages/" class="btn btn-sm btn-primary float-right"
               target="_blank" style="background-color: #0067B4;float: right;">
              <fa-icon [icon]="faEye"
                       class="mr-1"></fa-icon>
              Pivotel Outages</a>
            <h5 class="card-title mb-4" style="font-size:20px;font-weight:450;">Network Status</h5>

            <div class="row">
              <div class="col text-center">
                        <span class="text-success d-block mb-1"><fa-icon [icon]="faCheckCircle" size="3x"
                                                                         [fixedWidth]="true"></fa-icon></span>
                <span style="font-size: 1.6em;">Pivotel</span>
              </div>
              <div class="col text-center">
                        <span class="text-success d-block mb-1"><fa-icon [icon]="faCheckCircle" size="3x"
                                                                         [fixedWidth]="true"></fa-icon></span>
                <span style="font-size: 1.6em">Inmarsat</span>
              </div>
              <div class="col text-center">
                        <span class="text-success d-block mb-1"><fa-icon [icon]="faCheckCircle" size="3x"
                                                                         [fixedWidth]="true"></fa-icon></span>
                <span style="font-size: 1.6em">Iridium</span>
              </div>
              <div class="col text-center">
                        <span class="text-success d-block mb-1"><fa-icon [icon]="faCheckCircle" size="3x"
                                                                         [fixedWidth]="true"></fa-icon></span>
                <span style="font-size: 1.6em">Thuraya</span>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div class="col">

        <div class="card">
          <div class="card-body">

            <a routerLink="/service" class="btn btn-sm btn-primary float-right"
               style="background-color: #0067B4;float: right;">
              <fa-icon [icon]="faSatelliteDish"
                       class="mr-1"></fa-icon>
              View All</a>
            <h5 class="card-title mb-4" style="font-size:20px;font-weight:450;">Network Status</h5>

            <div class="row">
              <div class="col text-center">
                        <span class="text-success d-block mb-1"><fa-icon [icon]="faWifi" size="3x"
                                                                         [fixedWidth]="true"></fa-icon></span>
                <span style="font-size: 1.6em">3</span>
              </div>
              <div class="col text-center">
                        <span class="text-danger d-block mb-1"><fa-icon [icon]="faWifi" size="3x"
                                                                        [fixedWidth]="true"></fa-icon></span>
                <span style="font-size: 1.6em">576</span>
              </div>
              <div class="col text-center">
                        <span class="text-success d-block mb-1"><fa-icon [icon]="faLock" size="3x"
                                                                         [fixedWidth]="true"></fa-icon></span>
                <span style="font-size: 1.6em">578</span>
              </div>
              <div class="col text-center">
                        <span class="text-danger d-block mb-1"><fa-icon [icon]="faLockOpen" size="3x"
                                                                        [fixedWidth]="true"></fa-icon></span>
                <span style="font-size: 1.6em">1</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>`,
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    FontAwesomeModule
  ]
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
