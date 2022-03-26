import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
 createEmployee: FormGroup;
 submitted=false;
 loading= false;
  constructor(private fb: FormBuilder,
              private _employeeService: EmployeeServiceService,
              private router:  Router,
              private toastr: ToastrService) {
    this.createEmployee = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      documento: ['', Validators.required],
      salario: ['', Validators.required],

    })
   }

  ngOnInit(): void {
  }
  agregateEmployee(){
    this.submitted = true;
    if(this.createEmployee.invalid){
      return;

    }
    const employee: any={
      nombre: this.createEmployee.value.nombre,
      apellido: this.createEmployee.value.apellido,
      documento: this.createEmployee.value.documento,
      salario: this.createEmployee.value.salario,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this.loading = true;
    this._employeeService.agregateEmployee(employee).then(() =>{
      this.toastr.success('Empleado registrado con exito','Registrado');
      this.loading = false;
      this.router.navigate(["/list-employees"])
    }).catch(error=>{
      this.loading = false;
      console.log(error); 
    });
  }

}
