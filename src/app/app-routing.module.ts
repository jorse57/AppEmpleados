import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';

const routes: Routes = [
  {path:'', redirectTo: 'list-employees', pathMatch:'full'},
  {path:'list-employees',component: ListEmployeesComponent},
  {path:'create-employee',component: CreateEmployeeComponent},
  {path:'**', redirectTo: 'list-employees', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
