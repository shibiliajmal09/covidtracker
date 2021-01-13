import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api/api-service';

@Component({
  selector: 'app-state-record',
  templateUrl: './state-record.component.html',
  styleUrls: ['./state-record.component.scss'],
})
export class StateRecordComponent implements OnInit {
  public state_data:any;
  constructor(public api:ApiService) { }

  ngOnInit() {


   this.state_data= this.api.setStateData.get("state_data").map(elm => ({ state:elm.name,confirmed: elm.confirmed, recovered: elm.recovered,deaths: elm.deaths}));
  }

}
