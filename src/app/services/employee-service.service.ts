import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private firestore: AngularFirestore) { }
  agregateEmployee(employee: any){
    return this.firestore.collection('empleados').add(employee);
  }

  getAllEmployees(){
    return this.firestore.collection('empleados', ref => ref.orderBy('fechaCreacion','asc')).snapshotChanges();
  }

  deleteEmployee(id: string): Promise<any>{
    return this.firestore.collection('empleados').doc(id).delete();
  }
}
