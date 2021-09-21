import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  fName: string;
  fZip: string;
  fStreet: string;
  fDistrict: string;
  fCity: string;
  edit:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fName: 'Emerson', fZip: '12247780', fStreet: 'Heras',fDistrict:'Jardim das Flores', fCity: 'SJC',edit:''},
];

@Component({
  selector: 'app-friend-table',
  templateUrl: './friend-table.component.html',
  styleUrls: ['./friend-table.component.scss']
})
export class FriendTableComponent implements OnInit {

  displayedColumns: string[] = ['fName', 'fZip', 'fStreet', 'fDistrict','fCity','edit'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

  public testMethod(){

  }

}
