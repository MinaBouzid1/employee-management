import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.loadEmployee(id);
  }

  loadEmployee(id: number): void {
    this.employeeService.getEmployeeById(id).subscribe(
      (employee: Employee) => {
        this.employee = employee;
      },
      (error) => {
        console.error('Error loading employee:', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/employees']);
  }

  editEmployee(): void {
    if (this.employee) {
      this.router.navigate(['/employees/edit', this.employee.id]);
    }
  }
}
