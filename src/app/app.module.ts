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

@NgModule({
  declarations: [
    AppComponent,
    // TestComponent,
    // EmployeeComponent
    routingComponents
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
