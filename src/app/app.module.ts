import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {DxCheckBoxModule, DxDataGridModule, DxDropDownBoxModule} from 'devextreme-angular';
import {AccessGroupService} from './access-group.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    DxDataGridModule,
    DxDropDownBoxModule,
    DxCheckBoxModule
  ],
  providers: [
    AccessGroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
