import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-table-record',
  templateUrl: './table-record.component.html',
  styleUrls: ['./table-record.component.scss'],
})
export class TableRecordComponent implements OnInit {
@Input('state_data')state_data:any;
@Output('clickEvent')clickEvent= new EventEmitter()
  constructor() { }
  public active_menu:any;
  ngOnInit() {
    this.active_menu=this.state_data[0]
  }

  gotoStateRecord(data){
      this.clickEvent.emit(data)
  }
}
