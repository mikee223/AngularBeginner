import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from "./employee/employee.component";
import { TestComponent } from "./test/test.component";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  // { path: '', component: EmployeeComponent }, // default route
  { path: '', redirectTo: '/employee',pathMatch: 'full' }, // redirect route only if empty (localhost:4200)
  { path: 'employee', component: EmployeeComponent},
  { path: 'test', component: TestComponent },
  { path: "**", component: PagenotfoundComponent } // must be at the end everytime (404 page)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeComponent,TestComponent,PagenotfoundComponent]