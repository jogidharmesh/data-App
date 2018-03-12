import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.css']
})
export class LandingComponentComponent implements OnInit {
  flightdata:any[] ;

  constructor() { 
  this.flightdata =[
    {Type:'Actibity Number', Flight:'25 sep 2016',Transaction:'20 sep 2016',Partner:'JPSC',Activity:'Enroolment',Miles:'1,000'},
    {Type:'Actibity Number', Flight:'25 sep 2016',Transaction:'20 sep 2016',Partner:'JPSC',Activity:'Enroolment',Miles:'1,000'},
    {Type:'Actibity Number', Flight:'25 sep 2016',Transaction:'20 sep 2016',Partner:'JPSC',Activity:'Enroolment',Miles:'1,000'},
    {Type:'Actibity Number', Flight:'25 sep 2016',Transaction:'20 sep 2016',Partner:'JPSC',Activity:'Enroolment',Miles:'1,000'},
    {Type:'Actibity Number', Flight:'25 sep 2016',Transaction:'20 sep 2016',Partner:'JPSC',Activity:'Enroolment',Miles:'1,000'}
  ]
    
  }
 

  ngOnInit() {
  }

}
