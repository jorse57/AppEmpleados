import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: any[] = [];
  constructor(private _employeeService : EmployeeServiceService,
              private toastr: ToastrService) { 
    
  }

  ngOnInit(): void {
    this.getAllEmployees();
  }
  
  getAllEmployees(){
    this._employeeService.getAllEmployees().subscribe(data =>{
      this.employees = [];
      data.forEach((element: any) => {
        // console.log(element.payload.doc.data());
        this.employees.push({
          id: element.payload.doc.id,
          ... element.payload.doc.data()
        })
        
      });
      console.log(this.employees)
    });
  }

  deleteEmployee(id:string){
    this._employeeService.deleteEmployee(id).then(() =>{
      this.toastr.error('Empleado eliminado correctamente','Registro eliminado');
    }).catch(() =>{
      this.toastr.error('Error', 'Error en la eliminacion del empleado');
    })
  }

}
