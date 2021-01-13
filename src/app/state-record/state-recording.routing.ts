import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateRecordComponent } from './state-record.component';


const routes: Routes = [
  {
    path: '',
    component: StateRecordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateRecordComponentRoutingModule {}
