import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSort, Sort } from '@angular/material/sort'

@Component({
  selector: 'app-services',
  template: `
    <style>
      .card-container {
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0);
  pointer-events: none;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.42, 0, 0.58, 1);
}

.content-container {
  margin-bottom: 300px;
}

.card {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
  width: 120vh;
  position: relative;
  height: 300px;
  overflow-y: auto; 
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  outline: none;
}

@keyframes fadeInFromBottom {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.show-card {
  display: flex;
  animation: fadeInFromBottom 0.5s ease forwards;
}
      </style>


    <input type="text" class="form-control" placeholder="Filter Services" (keyup)="applyFilter($event)">

    <br>

    <div>
      <table mat-table [dataSource]="dataSource" matSort>

        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
          <td mat-cell *matCellDef="let element"> {{element.name}} </td>
        </ng-container>

        <ng-container matColumnDef="vessel">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> Vessel </th>
          <td mat-cell *matCellDef="let element"> {{element.vessel}} </td>
        </ng-container>

        <ng-container matColumnDef="type">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> Type </th>
          <td mat-cell *matCellDef="let element"> {{element.type}} </td>
        </ng-container>

        <ng-container matColumnDef="msisdn">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> MSISDN </th>
          <td mat-cell *matCellDef="let element"> {{element.msisdn}} </td>
        </ng-container>

        <ng-container matColumnDef="iccid">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> ICCID </th>
          <td mat-cell *matCellDef="let element"> {{element.iccid}} </td>
        </ng-container>

        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef> Status </th>
          <td mat-cell *matCellDef="let element"><mat-icon style="color:green">wifi</mat-icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mat-icon style="color:green;">lock</mat-icon> </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr routerLink="/service" mat-row *matRowDef="let row; columns: displayedColumns;" class="clickable-row"></tr>
<!--        (click)="open(content)"-->
      </table>

      <mat-paginator [pageSizeOptions]="[15, 20, 50]" showFirstLastButtons aria-label="Select page of periodic elements">
      </mat-paginator>
    </div>

    <ng-template #content let-modal>
      <div class="modal-header">
        <h4 class="modal-title" id="modal-basic-title">Profile update</h4>
        <button type="button" class="btn-close" aria-label="Close" (click)="modal.dismiss('Cross click')"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="dateOfBirth">Date of birth</label>
            <div class="input-group">
              <input
                id="dateOfBirth"
                class="form-control"
                placeholder="yyyy-mm-dd"
                name="dp"
                ngbDatepicker
                #dp="ngbDatepicker"
              />
              <button class="btn btn-outline-secondary bi bi-calendar3" (click)="dp.toggle()" type="button"></button>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Save</button>
      </div>
    </ng-template>


  `,
})
export class ServicesComponent {
  isCardVisible: boolean = false;
  display: any;

  toggleCardOpen(elementData: any) {
    this.display = elementData;

    this.isCardVisible = true;
  }


  toggleCardClose() {
    this.isCardVisible = false;
  }


  displayedColumns: string[] = ['name', 'vessel', 'type', 'msisdn', 'iccid', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private modalService: NgbModal) { }

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
  serviceid: string;
  msisdn: string;
  iccid: string;
  ip: string;
  package: string;
  connected: string;
  plan_started: string;
}

const ELEMENT_DATA: PeriodicElement[] =
  [
    {
      name: "198745521",
      vessel: "Ocean Starlight",
      type: "International Iridium Certus",
      serviceid: "25442",
      msisdn: "14457782",
      iccid: "118877744568841",
      ip: "154.25.142.14",
      package: "Example 300mb US",
      connected: "January 25, 2023 at 12:00:00 PM GMT+8",
      plan_started: "January 25, 2023 at 12:00:00 PM GMT+8"
    },
    {
      name: "654987321",
      vessel: "Blue Horizon",
      type: "Global Satellite",
      serviceid: "36987",
      msisdn: "75395124",
      iccid: "456987123654789",
      ip: "203.156.78.45",
      package: "Premium 2GB Global",
      connected: "February 5, 2023 at 02:30:15 PM GMT+8",
      plan_started: "February 5, 2023 at 02:30:15 PM GMT+8"
    },
    {
      name: "123456789",
      vessel: "Sailor's Delight",
      type: "Maritime Satellite",
      serviceid: "98765",
      msisdn: "32165478",
      iccid: "987654321098765",
      ip: "78.45.156.203",
      package: "Basic 1GB Coastal",
      connected: "March 15, 2023 at 03:15:30 PM GMT+8",
      plan_started: "March 15, 2023 at 03:15:30 PM GMT+8"
    },
    {
      name: "987123456",
      vessel: "Airship Skyline",
      type: "Airborne Broadband",
      serviceid: "45678",
      msisdn: "15975324",
      iccid: "234567890123456",
      ip: "142.14.25.154",
      package: "Deluxe 5GB Skyline",
      connected: "April 10, 2023 at 04:45:00 PM GMT+8",
      plan_started: "April 10, 2023 at 04:45:00 PM GMT+8"
    },
    {
      name: "555444333",
      vessel: "Sunset Voyager",
      type: "Global Satellite",
      serviceid: "33322",
      msisdn: "98765432",
      iccid: "555444333222111",
      ip: "203.156.78.45",
      package: "Premium 3GB Global",
      connected: "May 20, 2023 at 05:30:15 PM GMT+8",
      plan_started: "May 20, 2023 at 05:30:15 PM GMT+8"
    },
    {
      name: "112233445",
      vessel: "Seafarer's Pride",
      type: "Maritime Satellite",
      serviceid: "55661",
      msisdn: "12345678",
      iccid: "112233445566778",
      ip: "78.45.156.203",
      package: "Basic 2GB Coastal",
      connected: "June 5, 2023 at 06:15:30 PM GMT+8",
      plan_started: "June 5, 2023 at 06:15:30 PM GMT+8"
    },
    {
      name: "777888999",
      vessel: "AeroWings",
      type: "Airborne Broadband",
      serviceid: "11223",
      msisdn: "87654321",
      iccid: "777888999111222",
      ip: "154.25.142.14",
      package: "Deluxe 1GB Skyline",
      connected: "July 10, 2023 at 07:45:00 PM GMT+8",
      plan_started: "July 10, 2023 at 07:45:00 PM GMT+8"
    },
    {
      name: "987123456",
      vessel: "Stellar Explorer",
      type: "Interstellar Link",
      serviceid: "33221",
      msisdn: "45612378",
      iccid: "987123456332211",
      ip: "203.156.78.45",
      package: "Premium 4GB Interstellar",
      connected: "August 15, 2023 at 08:30:15 PM GMT+8",
      plan_started: "August 15, 2023 at 08:30:15 PM GMT+8"
    },
    {
      name: "456789123",
      vessel: "Aqua Serenity",
      type: "Underwater Connection",
      serviceid: "78933",
      msisdn: "15975362",
      iccid: "456789123789336",
      ip: "78.45.156.203",
      package: "Basic 3GB Oceanic",
      connected: "September 5, 2023 at 09:15:30 PM GMT+8",
      plan_started: "September 5, 2023 at 09:15:30 PM GMT+8"
    },
    {
      name: "333222111",
      vessel: "Orbiting Station",
      type: "Space Data Link",
      serviceid: "55544",
      msisdn: "98765432",
      iccid: "333222111555446",
      ip: "142.14.25.154",
      package: "Deluxe 6GB SpaceLink",
      connected: "October 10, 2023 at 10:45:00 PM GMT+8",
      plan_started: "October 10, 2023 at 10:45:00 PM GMT+8"
    },
    {
      name: "888999000",
      vessel: "Solar Cruiser",
      type: "Solar Satellite",
      serviceid: "77733",
      msisdn: "12345678",
      iccid: "888999000777334",
      ip: "154.25.142.14",
      package: "Premium 7GB SolarNet",
      connected: "November 15, 2023 at 11:30:15 PM GMT+8",
      plan_started: "November 15, 2023 at 11:30:15 PM GMT+8"
    },
    {
      name: "112233445",
      vessel: "DeepSea Explorer",
      type: "Submarine Link",
      serviceid: "88992",
      msisdn: "87654321",
      iccid: "112233445889921",
      ip: "203.156.78.45",
      package: "Basic 4GB SubNet",
      connected: "December 5, 2023 at 12:15:30 AM GMT+8",
      plan_started: "December 5, 2023 at 12:15:30 AM GMT+8"
    },
    {
      name: "555444333",
      vessel: "Galactic Explorer",
      type: "Interstellar Link",
      serviceid: "77889",
      msisdn: "15975324",
      iccid: "555444333778891",
      ip: "78.45.156.203",
      package: "Deluxe 8GB Interstellar",
      connected: "January 10, 2024 at 01:45:00 AM GMT+8",
      plan_started: "January 10, 2024 at 01:45:00 AM GMT+8"
    },
    {
      name: "777888999",
      vessel: "Skyward Star",
      type: "Aerial Network",
      serviceid: "99000",
      msisdn: "98765432",
      iccid: "777888999990001",
      ip: "142.14.25.154",
      package: "Premium 9GB AirLink",
      connected: "February 15, 2024 at 02:30:15 AM GMT+8",
      plan_started: "February 15, 2024 at 02:30:15 AM GMT+8"
    },
    {
      name: "987123456",
      vessel: "DeepOcean Surveyor",
      type: "Underwater Connection",
      serviceid: "11221",
      msisdn: "12345678",
      iccid: "987123456112218",
      ip: "203.156.78.45",
      package: "Basic 5GB Oceanic",
      connected: "March 10, 2024 at 03:15:30 AM GMT+8",
      plan_started: "March 10, 2024 at 03:15:30 AM GMT+8"
    },
    {
      name: "456789123",
      vessel: "Lunar Gateway",
      type: "Lunar Satellite",
      serviceid: "66551",
      msisdn: "15975362",
      iccid: "456789123665515",
      ip: "78.45.156.203",
      package: "Deluxe 10GB LunarNet",
      connected: "April 5, 2024 at 04:45:00 AM GMT+8",
      plan_started: "April 5, 2024 at 04:45:00 AM GMT+8"
    },
    {
      name: "333222111",
      vessel: "Red Planet Explorer",
      type: "Mars Data Link",
      serviceid: "88777",
      msisdn: "98765432",
      iccid: "333222111887778",
      ip: "142.14.25.154",
      package: "Premium 11GB MarsLink",
      connected: "May 20, 2024 at 05:30:15 AM GMT+8",
      plan_started: "May 20, 2024 at 05:30:15 AM GMT+8"
    },
    {
      name: "888999000",
      vessel: "HighAltitude Observer",
      type: "Stratospheric Network",
      serviceid: "77888",
      msisdn: "12345678",
      iccid: "888999000778887",
      ip: "154.25.142.14",
      package: "Basic 6GB StratoLink",
      connected: "June 10, 2024 at 06:15:30 AM GMT+8",
      plan_started: "June 10, 2024 at 06:15:30 AM GMT+8"
    },
    {
      name: "112233445",
      vessel: "Titan Explorer",
      type: "Saturn Data Link",
      serviceid: "99999",
      msisdn: "87654321",
      iccid: "112233445999998",
      ip: "203.156.78.45",
      package: "Deluxe 12GB SaturnLink",
      connected: "July 5, 2024 at 07:45:00 AM GMT+8",
      plan_started: "July 5, 2024 at 07:45:00 AM GMT+8"
    },
    {
      name: "555444333",
      vessel: "DeepSpace Probe",
      type: "Interstellar Link",
      serviceid: "88999",
      msisdn: "15975324",
      iccid: "555444333889999",
      ip: "78.45.156.203",
      package: "Premium 13GB DeepSpace",
      connected: "August 20, 2024 at 08:30:15 AM GMT+8",
      plan_started: "August 20, 2024 at 08:30:15 AM GMT+8"
    }
  ];