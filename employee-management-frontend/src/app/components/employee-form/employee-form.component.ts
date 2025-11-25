import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  isEdit = false;
  employeeId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.employeeForm = this.createForm();
  }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['id'];

    if (this.employeeId) {
      this.isEdit = true;
      this.loadEmployee(this.employeeId);
    }
  }

  createForm(): FormGroup {
    return this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', [Validators.required, Validators.min(0)]]
    });
  }

  loadEmployee(id: number): void {
    this.employeeService.getEmployeeById(id).subscribe(
      (employee: Employee) => {
        this.employeeForm.patchValue(employee);
      },
      (error) => {
        console.error('Error loading employee:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const employee: Employee = this.employeeForm.value;

      if (this.isEdit && this.employeeId) {
        this.employeeService.updateEmployee(this.employeeId, employee).subscribe(
          () => {
            this.router.navigate(['/employees']);
          },
          (error) => {
            console.error('Error updating employee:', error);
          }
        );
      } else {
        this.employeeService.createEmployee(employee).subscribe(
          () => {
            this.router.navigate(['/employees']);
          },
          (error) => {
            console.error('Error creating employee:', error);
          }
        );
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/employees']);
  }

  // Getters pour le template
  get firstName() { return this.employeeForm.get('firstName'); }
  get lastName() { return this.employeeForm.get('lastName'); }
  get email() { return this.employeeForm.get('email'); }
  get salary() { return this.employeeForm.get('salary'); }

  // Nouveaux getters pour éviter les erreurs de null
  get salaryValue(): number {
    return this.salary?.value || 0;
  }

  get firstNameValue(): string {
    return this.employeeForm.get('firstName')?.value || '';
  }

  get lastNameValue(): string {
    return this.employeeForm.get('lastName')?.value || '';
  }

  get emailValue(): string {
    return this.employeeForm.get('email')?.value || '';
  }

  get salaryControlValue(): number {
    return this.employeeForm.get('salary')?.value || 0;
  }
}
