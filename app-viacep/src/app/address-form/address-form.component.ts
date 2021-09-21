import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CepServiceService } from '../services/cep-service.service';


@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  @Output() buttonRegisterPressed = new EventEmitter<object>()

public cep : any
public address = {
  name:"",
  cep:"",
  logradouro:"",
  bairro:"",
  localidade:"",
  uf:"",
  ddd:"",
  numero:""
}


  constructor(private cepService: CepServiceService) {}

  ngOnInit(): void {
  }

  public autoFill(){
    if(this.checkCep(this.cep)){
      this.getCep(this.cep)
    }
    
  }

  public register(){
    this.buttonRegisterPressed.emit({cep:this.address.cep,
      logradouro:this.address.logradouro,
      bairro:this.address.bairro,
      localidade:this.address.localidade,
      uf:this.address.uf})
    this.cleanFields()

  }
  
  private getCep(cep : String){
    this.cepService.getCep(cep).subscribe(cep => {
      let aux = cep
      this.completeFields(aux)
    })

  }

  private checkCep( cep: String): boolean{
      if(cep.length == 8){
        return true
      }
      return false
  }

  private completeFields(data : any){
    this.address.cep = data.cep
    this.address.logradouro = data.logradouro
    this.address.bairro = data.bairro
    this.address.localidade = data.localidade
    this.address.uf = data.uf
    this.address.ddd = data.ddd
  }

  private cleanFields(){
    this.address = {
      name:"",
      cep:"",
      logradouro:"",
      bairro:"",
      localidade:"",
      uf:"",
      ddd:"",
      numero:""
    }
    this.cep = null
  }

  

}
