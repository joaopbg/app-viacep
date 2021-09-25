import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { dataModal } from '../friend-table/friend-table.component';
import { CepServiceService } from '../services/cep-service.service';

@Component({
  selector: 'app-modal-input',
  templateUrl: './modal-input.component.html',
  styleUrls: ['./modal-input.component.scss']
})
export class ModalInputComponent implements OnInit{

  form !: FormGroup
  public cep !: string
  
  constructor(
    public dialogRef: MatDialogRef<ModalInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dataModal,
    public fb: FormBuilder,
    private cepService: CepServiceService) { }

    ngOnInit(){
      this.formInit()
      this.loadData(this.data)
    }
    
    public onCancel(){
      this.dialogRef.close()
    }

    public addItem(){
      this.data.fName = this.form.controls['fName'].value
      this.data.fZip = this.form.controls['fZip'].value
      this.data.fHomeNumber = this.form.controls['fHomeNumber'].value
      this.data.fState = this.form.controls['fState'].value
      this.data.fStreet = this.form.controls['fStreet'].value
      this.data.fDistrict = this.form.controls['fDistrict'].value
      this.data.fCity = this.form.controls['fCity'].value
     }

    private formInit(){
      this.form = this.fb.group({
        fName: [''],
        fZip: [''],
        fStreet: new FormControl({value: '', disabled: true}),
        fDistrict: new FormControl({value: '', disabled: true}),
        fCity: new FormControl({value: '', disabled: true}),
        fState: new FormControl({value: '', disabled: true}),
        fHomeNumber: ['']
      })
    }

  public autoFill(){
    this.cepService.getCep(this.form.controls['fZip'].value).subscribe(cep => {
      let aux = cep
      this.completeFields(cep)
    })

  }

  private completeFields(data : any){
    this.form.controls['fStreet'].patchValue(data.logradouro)
    this.form.controls['fDistrict'].patchValue(data.bairro)
    this.form.controls['fCity'].patchValue(data.localidade)
    this.form.controls['fState'].patchValue(data.uf)
  }

  private loadData(data : any){
    this.form.controls['fName'].patchValue(data.fName)
    this.form.controls['fZip'].patchValue(data.fZip)
    this.form.controls['fHomeNumber'].patchValue(data.fHomeNumber)
    this.form.controls['fStreet'].patchValue(data.fStreet)
    this.form.controls['fDistrict'].patchValue(data.fDistrict)
    this.form.controls['fCity'].patchValue(data.fCity)
    this.form.controls['fState'].patchValue(data.fState)

  }

}
