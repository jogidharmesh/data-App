import { Component, OnInit } from '@angular/core';
import { SearchPipe} from './search.pipe'

@Component({
  selector: 'app-filterdata',
  templateUrl: './filterdata.component.html',
  styleUrls: ['./filterdata.component.css']
})
export class FilterdataComponent implements OnInit {

  flightdata:any[] ;

  constructor() { 
  this.flightdata =[
    {comoditycode:'01010000',comoditydesc:'Live horse,Asses,Mules'},
    {comoditycode:'01230000',comoditydesc:'Live sheep and goat'},
    {comoditycode:'07600012',comoditydesc:'Fresh and chilled'},
    {comoditycode:'04530033',comoditydesc:'Milk for babies'},
    {comoditycode:'09540000',comoditydesc:'other'}
  ]
    
  }
 

  ngOnInit() {
  }

}
