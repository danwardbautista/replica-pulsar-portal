import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {NgbAccordionModule, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MatSort} from '@angular/material/sort'
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [NgbAccordionModule, FontAwesomeModule],
  styles: [
    'h2 { margin-bottom: 0px; }',
    '.accordion { margin-top: 12px; }'
  ],
  template: `
    <div _ngcontent-xxk-c97="" class="col ng-tns-c97-3">
      <h3 _ngcontent-xxk-c97="" style="font-size: 150%;" class="mb-3 ng-tns-c97-3"><span _ngcontent-xxk-c97=""
                                                                class="ng-tns-c97-3 ng-trigger ng-trigger-fadeField ng-star-inserted"> 16192150177 <a
        _ngcontent-xxk-c97=""  class="ng-tns-c97-3" href=""><fa-icon _ngcontent-xxk-c97=""
                                                                                            class="ng-fa-icon ng-tns-c97-3"><svg
        role="img" aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit"
        class="svg-inline--fa fa-edit fa-w-18 fa-fw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path
        fill="currentColor"
        d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg></fa-icon></a></span>
        <!----><!----><span _ngcontent-xxk-c97="" class="d-block ng-tns-c97-3 ng-star-inserted"><small
          _ngcontent-xxk-c97="" style="font-size: 60%;" class="ng-tns-c97-3 text-danger"><!----><fa-icon
          _ngcontent-xxk-c97="" class="ng-fa-icon ng-tns-c97-3 ng-star-inserted"><svg role="img" aria-hidden="true"
                                                                                      focusable="false"
                                                                                      data-prefix="far"
                                                                                      data-icon="wifi-slash"
                                                                                      class="svg-inline--fa fa-wifi-slash fa-w-20"
                                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                                      viewBox="0 0 640 512"><path
          fill="currentColor"
          d="M36 3.51C29.1-2.01 19.03-.9 13.51 6l-10 12.49C-2.02 25.39-.9 35.46 6 40.98l598 467.51c6.9 5.52 16.96 4.4 22.49-2.49l10-12.49c5.53-6.9 4.41-16.97-2.49-22.49L36 3.51zm467.18 304.31c1.77-.6 3.67-.83 5.05-2.29l16.46-17.37c4.62-4.87 4.38-12.64-.58-17.15-47.67-43.38-105.71-68.61-165.55-76.26l144.62 113.07zm100.09-118.96c4.8 4.39 12.29 4.13 16.81-.54l16.6-17.19c4.65-4.81 4.37-12.43-.57-16.95C509.51 38.38 333.7 5.4 178.62 54.08l46.71 36.52c130.7-29.93 273.12 2.51 377.94 98.26zM3.89 154.18c-4.94 4.52-5.22 12.14-.57 16.95l16.6 17.19c4.52 4.68 12.01 4.93 16.81.54 12.72-11.62 26.16-21.97 39.9-31.74L37.34 126.4c-11.47 8.69-22.66 17.91-33.45 27.78zm112 116.83c-4.96 4.52-5.2 12.28-.58 17.15l16.46 17.37c4.46 4.71 11.81 4.95 16.62.6 19.7-17.81 41.53-31.84 64.54-42.46l-41.51-32.45c-19.55 11.03-38.28 24.09-55.53 39.79zM240 400c0 44.18 35.82 80 80 80 41.03 0 74.45-31 79.07-70.79l-107.24-83.84C261.6 336.79 240 365.77 240 400zm80-32c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.36-32-32 14.36-32 32-32z"></path></svg></fa-icon>
          <!----> Offline</small><small _ngcontent-xxk-c97="" style="font-size: 60%;"
                                        class="ng-tns-c97-3"> - </small><small _ngcontent-xxk-c97=""
                                                                               class="text-muted ng-tns-c97-3"
                                                                               style="font-size: 60%;">16192150177</small></span>
        <!----><!----></h3>
      <div _ngcontent-xxk-c97="" class="mb-3 ng-tns-c97-3"><!---->
        <button _ngcontent-xxk-c97="" class="btn btn-sm btn-success mr-4 ng-tns-c97-3 ng-star-inserted">
          <fa-icon _ngcontent-xxk-c97="" class="ng-fa-icon mr-1 ng-tns-c97-3 d-none">
            <svg role="img" aria-hidden="true" focusable="false" data-prefix="far" data-icon="sync"
                 class="svg-inline--fa fa-sync fa-w-16 fa-spin" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512">
              <path fill="currentColor"
                    d="M500 8h-27.711c-6.739 0-12.157 5.548-11.997 12.286l2.347 98.575C418.212 52.043 342.256 8 256 8 134.813 8 33.933 94.924 12.296 209.824 10.908 217.193 16.604 224 24.103 224h28.576c5.674 0 10.542-3.982 11.737-9.529C83.441 126.128 161.917 60 256 60c79.545 0 147.942 47.282 178.676 115.302l-126.39-3.009c-6.737-.16-12.286 5.257-12.286 11.997V212c0 6.627 5.373 12 12 12h192c6.627 0 12-5.373 12-12V20c0-6.627-5.373-12-12-12zm-12.103 280h-28.576c-5.674 0-10.542 3.982-11.737 9.529C428.559 385.872 350.083 452 256 452c-79.546 0-147.942-47.282-178.676-115.302l126.39 3.009c6.737.16 12.286-5.257 12.286-11.997V300c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12v192c0 6.627 5.373 12 12 12h27.711c6.739 0 12.157-5.548 11.997-12.286l-2.347-98.575C93.788 459.957 169.744 504 256 504c121.187 0 222.067-86.924 243.704-201.824 1.388-7.369-4.308-14.176-11.807-14.176z"></path>
            </svg>
          </fa-icon>
          <fa-icon _ngcontent-xxk-c97="" class="ng-fa-icon mr-1 ng-tns-c97-3">
            <svg role="img" aria-hidden="true" focusable="false" data-prefix="far" data-icon="lock-open"
                 class="svg-inline--fa fa-lock-open fa-w-18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor"
                    d="M432.3 0C352.8-.2 288 64.5 288 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48h-64v-46.8c0-52.8 42.1-96.7 95-97.2 53.4-.6 97 42.7 97 96v56c0 13.3 10.7 24 24 24s24-10.7 24-24v-54.6C576 65.8 512 .2 432.3 0zM400 240v224H48V240h352z"></path>
            </svg>
          </fa-icon>
          Unbar Service
        </button><!----><!----><!---->
        <button _ngcontent-xxk-c97="" class="btn btn-sm btn-secondary mr-2 ng-tns-c97-3">
          <fa-icon _ngcontent-xxk-c97="" class="ng-fa-icon mr-1 ng-tns-c97-3">
            <svg role="img" aria-hidden="true" focusable="false" data-prefix="far" data-icon="stream"
                 class="svg-inline--fa fa-stream fa-w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor"
                    d="M16 128h416c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v32c0 8.84 7.16 16 16 16zm480 96H80c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-64 160H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path>
            </svg>
          </fa-icon>
          Data Detail
        </button>
      </div>
    </div>

    <div ngbAccordion>
      <div ngbAccordionItem [collapsed]="false">
        <h2 ngbAccordionHeader>
          <button ngbAccordionButton>Activity</button>
        </h2>
        <div ngbAccordionCollapse>
          <div ngbAccordionBody>
            <dl class="row mb-0"><!----><!---->
              <dt class="col-sm-3 text-right">Billing Period Ends</dt>
              <dd class="col-sm-9">September 30, 2023 at 10:00:00 PM GMT+8<br
                class="ng-tns-c97-3"><strong
                class="ng-tns-c97-3 ng-star-inserted">25</strong>
                <!----><!----> day(s) remaining
              </dd>
              <dt class="col-sm-3 text-right ng-star-inserted">Total Data Allowance
              </dt><!---->
              <dd class="col-sm-9 ng-star-inserted">30 MB</dd><!---->
              <dt class="col-sm-3 text-right ng-star-inserted">Data Allowance
                Remaining
              </dt><!---->
              <dd class="col-sm-9 ng-star-inserted">30 MB</dd><!----><!---->
              <dt class="col-sm-3 text-right ng-star-inserted">Plan Usage</dt><!---->
              <dd class="col-sm-9 ng-star-inserted">
                <div class="progress progress-data mt-1">
                  <div role="progressbar" class="progress-bar bg-primary"
                       style="width: 0%;"> 0%
                  </div>
                  <div role="progressbar" class="progress-bar bg-info"
                       style="width: 0%;"> 0%
                  </div>
                </div>
                <div class="progress progress-time">
                  <div role="progressbar" class="progress-bar bg-secondary"
                       style="width: 16%;"></div>
                </div>
              </dd><!---->
              <dd class="col-sm-9 offset-sm-3">
                <div class="row">
                  <div class="col"><span
                    class="badge badge-pill badge-primary">Incoming</span>
                    0 B
                  </div>
                  <div class="col"><span
                    class="badge badge-pill badge-info">Outgoing</span>
                    0 B
                  </div>
                  <div class="col"><span
                    class="badge badge-pill badge-dark">Total Used</span>
                    0 B
                  </div>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <div ngbAccordion>
      <div ngbAccordionItem [collapsed]="false">
        <h2 ngbAccordionHeader>
          <button ngbAccordionButton>Summary</button>
        </h2>
        <div ngbAccordionCollapse>
          <div ngbAccordionBody>
            <dl class="row mb-0"><!----><!---->
              <dt class="col-sm-3 text-right">Service ID</dt>
              <dd class="col-sm-9">664498</dd>
              <dt class="col-sm-3 text-right">MSISDN</dt>
              <dd class="col-sm-9">16192150177</dd>
              <dt class="col-sm-3 text-right ng-star-inserted">ICCID</dt><!---->
              <dd class="col-sm-9 ng-star-inserted">8988169771000021429</dd><!---->
              <dt class="col-sm-3 text-right ng-star-inserted">IP Addresses</dt>
              <!---->
              <dd class="col-sm-9 ng-star-inserted"><span _ngcontent-xxk-c97=""
                                                          class="ng-tns-c97-3 ng-star-inserted">172.31.192.47</span>
              </dd><!----></dl>
            <hr class="ng-tns-c97-3">
            <dl class="row mb-0">
              <dt class="col-sm-3 text-right ng-star-inserted">Package</dt><!---->
              <dd class="col-sm-9 ng-star-inserted">Certus 700 L 30MB WS3 US</dd>
              <!---->
              <dt class="col-sm-3 text-right">Connected</dt>
              <dd class="col-sm-9">March 1, 2022 at 9:00:00 PM GMT+8</dd>
              <dt class="col-sm-3 text-right">Plan Started</dt>
              <dd class="col-sm-9">March 1, 2022 at 9:00:00 PM GMT+8</dd>
              <dt class="col-sm-3 text-right"></dt>
              <dd class="col-sm-9"></dd>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <div ngbAccordion>
      <div ngbAccordionItem [collapsed]="false">
        <h2 ngbAccordionHeader>
          <button ngbAccordionButton>Groups & Profiles</button>
        </h2>
        <div ngbAccordionCollapse>
          <div ngbAccordionBody>

            <dl _ngcontent-xxk-c97="" class="row mb-0 ng-tns-c97-3"><!----><!---->
              <dt _ngcontent-xxk-c97="" class="col-sm-3 text-right ng-tns-c97-3">Alert Profile(s)</dt>
              <dd _ngcontent-xxk-c97="" class="col-sm-9 ng-tns-c97-3"><span _ngcontent-xxk-c97=""
                                                                            class="ng-tns-c97-3 ng-trigger ng-trigger-fadeField ng-star-inserted"><span
                _ngcontent-xxk-c97="" class="mr-1 ng-tns-c97-3 ng-star-inserted" style=""><fa-icon _ngcontent-xxk-c97=""
                                                                                                   class="ng-fa-icon ng-tns-c97-3"><svg
                role="img" aria-hidden="true" focusable="false" data-prefix="far" data-icon="bells"
                class="svg-inline--fa fa-bells fa-w-20 fa-fw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path
                fill="currentColor"
                d="M638.4 313.9c-2.1-5.9-6.4-11.2-12.9-14.5-21-10.8-58.3-24.9-87.4-105-.8-2.2-14.7-40.5-15.4-42.6C503 97.6 451.8 64 397.4 64c-15.1 0-30.5 2.6-45.6 8.1-3.6 1.3-6.6 3.3-10 4.8-14.2-16-32.1-29-53.5-36.8-15-5.5-30.5-8.1-45.6-8.1-54.5 0-105.6 33.6-125.3 87.8-.8 2.1-14.6 40.4-15.4 42.6-29.2 80.1-66.4 94.3-87.4 105-6.5 3.3-10.8 8.6-12.9 14.5-4.6 12.9 1 28.8 16 34.2L99.5 346c-2.1 7-3.5 14.3-3.5 22 0 44.2 35.8 80 80 80 32.6 0 60.5-19.6 72.9-47.6l42.1 15.3c-2.8 6.5-7.5 14.8-3.4 26 4.9 13.1 19.6 21.3 34.3 15.9l76.3-27.8C410 459.1 438.4 480 472 480c44.2 0 80-35.8 80-80 0-8.7-1.9-16.8-4.5-24.6l75-27.3c14.9-5.4 20.5-21.3 15.9-34.2zM176 400c-17.6 0-32-14.4-32-32 0-1.9.6-3.7.9-5.5l58.4 21.2c-5.6 9.6-15.5 16.3-27.3 16.3zM76.1 286.4c23.2-18.2 49.7-49.3 70.9-107.5 9.1-25 5.6-15.6 15.4-42.6 12.2-33.6 44.5-56.2 80.2-56.2 21.5 0 42.5 7.8 59.4 24.8-34.4 35.5-48 88.6-30 138.2.8 2.1 14.8 40.4 15.6 42.6 13.1 36.1 16.2 62.6 15 83.3L76.1 286.4zM504 400c0 17.6-14.4 32-32 32-12.8 0-23.5-7.8-28.4-18.7l58.9-21.5c.8 2.6 1.5 5.3 1.5 8.2zm-156.5-2.9c6-28.8 6.4-69.7-14.8-128-8.6-23.5-5.5-15-15.6-42.6-16.1-44.2 6.8-93.3 51-109.4 44.6-16.2 93.4 7.1 109.4 51 9.7 26.7 5 13.8 15.4 42.6 21.2 58.3 47.8 89.3 70.9 107.6l-216.3 78.8z"></path></svg></fa-icon> Default Profile</span>
                <!----><!----><a _ngcontent-xxk-c97="" style="font-size: 80%;" class="ng-tns-c97-3" href=""><fa-icon
                  _ngcontent-xxk-c97="" class="ng-fa-icon ng-tns-c97-3"><svg role="img" aria-hidden="true"
                                                                             focusable="false" data-prefix="far"
                                                                             data-icon="edit"
                                                                             class="svg-inline--fa fa-edit fa-w-18 fa-fw"
                                                                             xmlns="http://www.w3.org/2000/svg"
                                                                             viewBox="0 0 576 512"><path
                  fill="currentColor"
                  d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg></fa-icon></a></span>
                <!----><!----></dd>
              <dt _ngcontent-xxk-c97="" class="col-sm-3 text-right ng-tns-c97-3">Barring Profile</dt>
              <dd _ngcontent-xxk-c97="" class="col-sm-9 ng-tns-c97-3"><span _ngcontent-xxk-c97=""
                                                                            class="ng-tns-c97-3 ng-trigger ng-trigger-fadeField ng-star-inserted"><!---->
                <!----><a _ngcontent-xxk-c97="" class="mr-1 ng-tns-c97-3 ng-star-inserted" href="/bar-profile/1845"
                          style=""><fa-icon _ngcontent-xxk-c97="" class="ng-fa-icon ng-tns-c97-3"><svg role="img"
                                                                                                       aria-hidden="true"
                                                                                                       focusable="false"
                                                                                                       data-prefix="far"
                                                                                                       data-icon="lock"
                                                                                                       class="svg-inline--fa fa-lock fa-w-14 fa-fw"
                                                                                                       xmlns="http://www.w3.org/2000/svg"
                                                                                                       viewBox="0 0 448 512"><path
                  fill="currentColor"
                  d="M400 192h-32v-46.6C368 65.8 304 .2 224.4 0 144.8-.2 80 64.5 80 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48zm-272-48c0-52.9 43.1-96 96-96s96 43.1 96 96v48H128v-48zm272 320H48V240h352v224z"></path></svg></fa-icon> Barred Suspension </a>
                <!----><a _ngcontent-xxk-c97="" style="font-size: 80%;" class="ng-tns-c97-3" href=""><fa-icon
                  _ngcontent-xxk-c97="" class="ng-fa-icon ng-tns-c97-3"><svg role="img" aria-hidden="true"
                                                                             focusable="false" data-prefix="far"
                                                                             data-icon="edit"
                                                                             class="svg-inline--fa fa-edit fa-w-18 fa-fw"
                                                                             xmlns="http://www.w3.org/2000/svg"
                                                                             viewBox="0 0 576 512"><path
                  fill="currentColor"
                  d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg></fa-icon></a></span>
                <!----><!----></dd>
              <dt _ngcontent-xxk-c97="" class="col-sm-3 text-right ng-tns-c97-3">Firewall Profile</dt>
              <dd _ngcontent-xxk-c97="" class="col-sm-9 ng-tns-c97-3 ng-star-inserted"><span _ngcontent-xxk-c97=""
                                                                                             class="text-danger font-weight-bold ng-tns-c97-3"><fa-icon
                _ngcontent-xxk-c97="" class="ng-fa-icon ng-tns-c97-3"><svg role="img" aria-hidden="true"
                                                                           focusable="false" data-prefix="far"
                                                                           data-icon="chess-rook"
                                                                           class="svg-inline--fa fa-chess-rook fa-w-12 fa-fw"
                                                                           xmlns="http://www.w3.org/2000/svg"
                                                                           viewBox="0 0 384 512"><path
                fill="currentColor"
                d="M368 464H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zM346 32H38A38 38 0 0 0 0 70v139.43a32 32 0 0 0 11 24.14l37 32.21c0 48.49 1.54 93-11.85 166.22h49C98 356.41 96 309.53 96 238.22l-48-41.78V80h64v48h48V80h64v48h48V80h64v116.44l-48 41.78C288 309 286 356.6 298.86 432h49C334.47 358.81 336 314 336 265.78l37-32.21a32 32 0 0 0 11-24.14V70a38 38 0 0 0-38-38zM192 224a32 32 0 0 0-32 32v64h64v-64a32 32 0 0 0-32-32z"></path></svg></fa-icon> Firewall unavailable when barred</span>
              </dd><!----><!---->
              <dt _ngcontent-xxk-c97="" class="col-sm-3 text-right ng-tns-c97-3">Domain Filter Profile</dt>
              <dd _ngcontent-xxk-c97="" class="col-sm-9 ng-tns-c97-3 ng-star-inserted"><span _ngcontent-xxk-c97=""
                                                                                             class="text-danger font-weight-bold ng-tns-c97-3"><fa-icon
                _ngcontent-xxk-c97="" class="ng-fa-icon ng-tns-c97-3"><svg role="img" aria-hidden="true"
                                                                           viewBox="0 0 384 512"><path
                fill="currentColor"
                d="M368 464H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zM346 32H38A38 38 0 0 0 0 70v139.43a32 32 0 0 0 11 24.14l37 32.21c0 48.49 1.54 93-11.85 166.22h49C98 356.41 96 309.53 96 238.22l-48-41.78V80h64v48h48V80h64v48h48V80h64v116.44l-48 41.78C288 309 286 356.6 298.86 432h49C334.47 358.81 336 314 336 265.78l37-32.21a32 32 0 0 0 11-24.14V70a38 38 0 0 0-38-38zM192 224a32 32 0 0 0-32 32v64h64v-64a32 32 0 0 0-32-32z"></path></svg></fa-icon> Domain Filter unavailable when barred</span>
              </dd><!----><!----></dl>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ServiceComponent {
  displayedColumns: string[] = ['name', 'vessel', 'type', 'msisdn', 'iccid', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private modalService: NgbModal) {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  open(content: any) {
    this.modalService.open(content);
  }
}

export interface PeriodicElement {
  name: string;
  vessel: string;
  type: string;
  msisdn: string;
  iccid: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: "16192150177",
    vessel: "Ocean Starlight",
    type: "International Iridium Certus",
    msisdn: "16192150177",
    iccid: "8988169771000021429"
  },
  {
    name: "16192150513",
    vessel: "Aurora Voyager",
    type: "International Iridium Certus",
    msisdn: "16192150513",
    iccid: "8988169771000246679"
  },
  {
    name: "16192150565",
    vessel: "Serene Seafarer",
    type: "International Iridium Certus",
    msisdn: "16192150565",
    iccid: "8988169771000122565"
  },
  {
    name: "16193209125",
    vessel: "Crystal Wavecrest",
    type: "International Iridium Certus",
    msisdn: "16193209125",
    iccid: "8988169771000122649"
  },
  {
    name: "16193209713",
    vessel: "Mystic Mariner",
    type: "International Iridium Certus",
    msisdn: "16193209713",
    iccid: "8988169771000080094"
  },
  {
    name: "16193730493",
    vessel: "Silver Horizon",
    type: "International Iridium Certus",
    msisdn: "16193730493",
    iccid: "8988169771000122557"
  },
  {
    name: "16197160395",
    vessel: "Celestial Breeze",
    type: "International Iridium Certus",
    msisdn: "16197160395",
    iccid: "8988169771000080375"
  },
  {
    name: "18052615660",
    vessel: "Radiant Sailfish",
    type: "International Iridium Certus",
    msisdn: "18052615660",
    iccid: "898816977100008101"
  },
  {
    name: "18052615777",
    vessel: "Starry Marlin",
    type: "International Iridium Certus",
    msisdn: "18052615777",
    iccid: "8988169771000133712"
  },
  {
    name: "18052615999",
    vessel: "Cosmic Cruiser",
    type: "International Iridium Certus",
    msisdn: "18052615999",
    iccid: "8988169771000179265"
  },
  {
    name: "18052616012",
    vessel: "Galactic Voyager",
    type: "International Iridium Certus",
    msisdn: "18052616012",
    iccid: "8988169771000235142"
  },
  {
    name: "18052616123",
    vessel: "Starship Enterprise",
    type: "International Iridium Certus",
    msisdn: "18052616123",
    iccid: "8988169771000198763"
  },
  {
    name: "18052616234",
    vessel: "Lunar Pathfinder",
    type: "International Iridium Certus",
    msisdn: "18052616234",
    iccid: "8988169771000224621"
  },
  {
    name: "18052616345",
    vessel: "Solar Skiff",
    type: "International Iridium Certus",
    msisdn: "18052616345",
    iccid: "8988169771000149823"
  },
  {
    name: "18052616456",
    vessel: "Astro Cruiser",
    type: "International Iridium Certus",
    msisdn: "18052616456",
    iccid: "8988169771000267549"
  },
  {
    name: "18052616567",
    vessel: "Neptune's Whisper",
    type: "International Iridium Certus",
    msisdn: "18052616567",
    iccid: "8988169771000309765"
  }
];
