import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sample:any = "Variable from home component";
  data="Before Click"
  disableBtn = true;
  data1="";
  ReturnMsg="";
  showMsg = false;
  servers = ["server1","server2","server3"];
  myServer:string;
  temperature;
  constructor( private loggingservice:ServiceService) { }

  getDetails(){
    console.log(this.loggingservice.getLogging())
  }

  show(){
    this.showMsg = !this.showMsg;
  }
  ngOnInit(){
    if(Math.random()>0.5)
    {
      this.temperature = 'hot'
    }
    else{
      this.temperature = 'cold'
    }
  }

  getColor() {
    if(this.temperature=='hot'){
      return 'red'
    }
    else{
      return 'blue'
    }

  }



  addElement(){
    this.servers.push(this.myServer);

  }


  display() {
    this.data="After click";
    this.disableBtn=false;
    if(this.data1.length>=5){
      this.ReturnMsg="The lenght of the value is greater than or equal to 5";

    }
    else{
      this.ReturnMsg="Letters less than 5";
    }
    return this.ReturnMsg;

    
  }
}
