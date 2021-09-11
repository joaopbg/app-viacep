import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

public cep : any
public address = [{}]

  constructor() { }

  ngOnInit(): void {
    
  }
  public addFriend(address : any){
    this.address.push(address)

  }
  
}
