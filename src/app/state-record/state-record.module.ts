import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TableRecordComponent } from '../shared/components/table-record/table-record.component';
import { StateRecordComponent } from './state-record.component';
import { StateRecordComponentRoutingModule } from './state-recording.routing';

@NgModule({
    imports: [CommonModule,
        StateRecordComponentRoutingModule,
        FormsModule,
        IonicModule],
    declarations: [StateRecordComponent,TableRecordComponent]
})

export class StateRecordModule {

}