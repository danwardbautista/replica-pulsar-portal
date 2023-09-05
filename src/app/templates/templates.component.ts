import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatSort, Sort} from '@angular/material/sort'

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
})
export class TemplatesComponent {
  displayedColumns: string[] = ['template', 'action'];
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
}
export interface PeriodicElement {
  template: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { template: "Example", description: "This is an example template"},
    { template: "Sword", description: "A template with an emphasis on fighting"},
    { template: "Shield", description: "This demplate focuses on the defense"},
];

