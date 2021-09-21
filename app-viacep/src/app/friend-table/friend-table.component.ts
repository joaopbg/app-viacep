import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalInputComponent } from '../modal-input/modal-input.component';

export interface PeriodicElement {
  fName: string;
  fZip: string;
  fStreet: string;
  fDistrict: string;
  fCity: string;
}
export interface DialogData {
  fName: string;
  fZip: string;
  fStreet: string;
  fDistrict: string;
  fCity: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {
  fName: 'Emerson',
  fZip: '12200-000',
  fStreet: 'longe bagarai',
  fDistrict:'Parque do Bacanal',
  fCity: 'Sanja City'},
];

@Component({
  selector: 'app-friend-table',
  templateUrl: './friend-table.component.html',
  styleUrls: ['./friend-table.component.scss']
})
export class FriendTableComponent implements OnInit {

  displayedColumns: string[] = ['fName', 'fZip', 'fStreet', 'fDistrict','fCity','edit'];
  dataSource = ELEMENT_DATA;
  
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  public openDialog(): void {
    const dialogRef = this.dialog.open(ModalInputComponent, {
      width: '600px',
      height: '490px',      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
}

