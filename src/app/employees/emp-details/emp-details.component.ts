import { Component, OnInit, Input } from '@angular/core';
import { Employee } from "../../shared/models/employee";
import { Router, ActivatedRoute } from "@angular/router";
import { mockEmployees } from "../../shared/mock-data/mock-employees";

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  @Input() employee: Employee;
  
  constructor(private router: Router,
              private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    const empId = +this.routeInfo.snapshot.params['id'];
    this.employee = mockEmployees.find(e => e.id === empId);
  }

  goBack() {
    const routerLinkArgs = ['employees'];
    this.router.navigate(routerLinkArgs);
  }

}
