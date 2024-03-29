import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FileUploadModule } from 'ng2-file-upload';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     BsDropdownModule.forRoot(),
     TabsModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }), 
    NgxSpinnerModule.forRoot({
      type: 'line-scale-party'
    }), 
    FileUploadModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot()
  ], 
  exports: [
    BsDropdownModule, 
    ToastrModule, 
    TabsModule,
    NgxSpinnerModule, 
    FileUploadModule,
    BsDatepickerModule, 
    PaginationModule
  ]
})
export class SharedModule { }
