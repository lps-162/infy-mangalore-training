import { Component, OnInit } from '@angular/core';
import { Employee } from "../../shared/models/employee";
import { mockEmployees } from "../../shared/mock-data/mock-employees";

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  cities: string[] = ['Trivandrum', 'Bangalore', 'Ooty'];
  listOfEmployees = mockEmployees;
  name: string = 'RGV';
  selectedEmployee: Employee;

  constructor() { }

  ngOnInit() {
    
  }

  showDetails(emp: Employee) {
    //this.selectedEmployee = emp;
    
  }

  changeName() {
    this.name = 'LPS';
  }
  
  handleEmpCreation(newEmployee: Employee) {
    console.log('Event received in parent');
    console.log(newEmployee);
    this.listOfEmployees.push(newEmployee);
  }

}
