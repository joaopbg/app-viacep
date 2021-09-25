import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ModalInputComponent } from '../modal-input/modal-input.component';

export interface dataArray {
  fName: string
  fZip: string
  fStreet: string
  fDistrict: string
  fCity: string
  fState: string
  fHomeNumber: string
}
export interface dataModal {
  fName: string
  fZip: string
  fStreet: string
  fDistrict: string
  fCity: string
  fState: string
  fHomeNumber: string
}

@Component({
  selector: 'app-friend-table',
  templateUrl: './friend-table.component.html',
  styleUrls: ['./friend-table.component.scss']
})
export class FriendTableComponent implements OnInit {

  displayedColumns: string[] = ['fName', 'fZip', 'fStreet', 'fDistrict','fCity','fState','fHomeNumber','edit'];

  dataSource : dataArray[] = [
    {
      fName: 'Joao Pedro' ,
      fZip: "12247700" ,
      fStreet: "Rua Cronipios" ,
      fDistrict: "Jardim de Narnia" ,
      fCity: "São José Dos Campos" ,
      fState: "SP" ,
      fHomeNumber: "99"
    },
    {
      fName: 'Ed Rock' ,
      fZip: "11700000" ,
      fStreet: "Rua Santo André" ,
      fDistrict: "Jardim de Saint Andersan" ,
      fCity: "Santander" ,
      fState: "SA" ,
      fHomeNumber: "0"
    },
    {
      fName: 'Emersaum' ,
      fZip: "12247800" ,
      fStreet: "Rua Interlagos" ,
      fDistrict: "Autodromo de Interlagos" ,
      fCity: "São José dos Camopos" ,
      fState: "SP" ,
      fHomeNumber: "69"
    },
  ]

  @ViewChild(MatTable)
  table!: MatTable<any>
  
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  public openDialog(element : dataArray | null) {
    let dialogRef = this.dialog.open(ModalInputComponent, {
      width: '600px',
      height: '490px',
      data: {fName: '',fZip: '',fStreet: '',fDistrict: '',fCity: '',fState: '',fHomeNumber: ''}
    })

    dialogRef.afterClosed().subscribe(ele => {
      if(ele != undefined){
        this.dataSource.push(ele)
        this.table.renderRows()
      }
    })

  }

  public editElement(element : dataArray){
    let dialogRef = this.dialog.open(ModalInputComponent, {
      width: '600px',
      height: '490px',
      data: element
    })
    debugger
  }

  public deleteElement(element : dataArray){
    this.dataSource = this.dataSource.filter(newSource => { newSource.fName != element.fName})
    this.table.renderRows() 
  }
}

