import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { GetList } from '../shared/models/get_data_model';
import { ApiService } from '../shared/services/api/api-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public main_data: GetList[]
  public state_data: GetList[]
  constructor(private api: ApiService,public route:Router) { }

  ngOnInit() {
    const main_data = this.api.getCovidMainData()
    const state_data = this.api.getCovidStateData()
    forkJoin([main_data, state_data]).subscribe((response) => {
      this.main_data = response[0]
      this.state_data = response[1]
     
   
    })

  }
  getClickEvent(data){
    this.api.setStateData.set("state_data",data)
    this.route.navigateByUrl('state_record')
  }

}
