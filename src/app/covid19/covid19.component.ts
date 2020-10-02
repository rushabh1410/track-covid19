import { Component, OnInit } from '@angular/core';
import { ServiceCovid19Service } from '../service-covid19.service';
import { CountryReports } from '../CountryReports';
import {MatTableDataSource} from '@angular/material/table'

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  countries : CountryReports[];

  displayedColumns:string[]=['country','cases','todayCases','deaths','todayDeaths','recovered','active','critical','casesPerOneMillion','deathsPerOneMillion','tests','testsPerOneMillion'];

  
  
  constructor(private service:ServiceCovid19Service) { 
  }

  ngOnInit(): void {
	  this.service.covid19Reports().subscribe(data =>{
        this.countries= data as CountryReports[];
    });
  }

}
