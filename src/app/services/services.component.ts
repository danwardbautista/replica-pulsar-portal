import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatSort, Sort} from '@angular/material/sort'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
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

    console.log('click');
  }

  openSm(content: any) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content: any) {
    this.modalService.open(content, { size: 'xl' });
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
    { name: "16192150177", vessel: "Ocean Starlight", type: "International Iridium Certus", msisdn: "16192150177", iccid: "8988169771000021429" },
    { name: "16192150513", vessel: "Aurora Voyager", type: "International Iridium Certus", msisdn: "16192150513", iccid: "8988169771000246679" },
    { name: "16192150565", vessel: "Serene Seafarer", type: "International Iridium Certus", msisdn: "16192150565", iccid: "8988169771000122565" },
    { name: "16193209125", vessel: "Crystal Wavecrest", type: "International Iridium Certus", msisdn: "16193209125", iccid: "8988169771000122649" },
    { name: "16193209713", vessel: "Mystic Mariner", type: "International Iridium Certus", msisdn: "16193209713", iccid: "8988169771000080094" },
    { name: "16193730493", vessel: "Silver Horizon", type: "International Iridium Certus", msisdn: "16193730493", iccid: "8988169771000122557" },
    { name: "16197160395", vessel: "Celestial Breeze", type: "International Iridium Certus", msisdn: "16197160395", iccid: "8988169771000080375" },
    { name: "18052615660", vessel: "Radiant Sailfish", type: "International Iridium Certus", msisdn: "18052615660", iccid: "898816977100008101" },
    { name: "18052615777", vessel: "Starry Marlin", type: "International Iridium Certus", msisdn: "18052615777", iccid: "8988169771000133712" },
    { name: "18052615999", vessel: "Cosmic Cruiser", type: "International Iridium Certus", msisdn: "18052615999", iccid: "8988169771000179265" },
    { name: "18052616012", vessel: "Galactic Voyager", type: "International Iridium Certus", msisdn: "18052616012", iccid: "8988169771000235142" },
    { name: "18052616123", vessel: "Starship Enterprise", type: "International Iridium Certus", msisdn: "18052616123", iccid: "8988169771000198763" },
    { name: "18052616234", vessel: "Lunar Pathfinder", type: "International Iridium Certus", msisdn: "18052616234", iccid: "8988169771000224621" },
    { name: "18052616345", vessel: "Solar Skiff", type: "International Iridium Certus", msisdn: "18052616345", iccid: "8988169771000149823" },
    { name: "18052616456", vessel: "Astro Cruiser", type: "International Iridium Certus", msisdn: "18052616456", iccid: "8988169771000267549" },
    { name: "18052616567", vessel: "Neptune's Whisper", type: "International Iridium Certus", msisdn: "18052616567", iccid: "8988169771000309765" }
];
