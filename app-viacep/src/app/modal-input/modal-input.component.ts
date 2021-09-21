import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../friend-table/friend-table.component';
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public fb: FormBuilder,
    private cepService: CepServiceService) { }

    

    ngOnInit(){
      this.formInit()

    }

  public onCancel(){
    this.dialogRef.close()
  }
  public onClick(){
    this.form.controls['fStreet'].patchValue("eu funciono porra")
    console.log(this.form.controls['fStreet'].value)
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



  

}
