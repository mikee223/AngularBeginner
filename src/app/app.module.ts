import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from "@angular/forms"; //import to use ngModel
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TestComponent } from './test/test.component';
// import { EmployeeComponent } from './employee/employee.component';



//services import
import { EmployeeService } from "./employee.service";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeHeaderComponent } from './employee-header/employee-header.component';
import { EmployeeContactComponent } from './employee-detail/employee-contact/employee-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    // TestComponent,
    // EmployeeComponent
    routingComponents,
    PagenotfoundComponent,
    EmployeeDetailComponent,
    EmployeeHeaderComponent,
    EmployeeContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // import FormsModule
    HttpClientModule //import HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
