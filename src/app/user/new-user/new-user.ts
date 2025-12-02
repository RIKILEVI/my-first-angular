import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-user.html',
  styleUrl: './new-user.css'
})

export class NewUser implements OnInit {
  @Output() createUser = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();
  form!: FormGroup;
  categories: string[] = ['work', 'personal', 'urgent'];
  passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const p = group.get('password')?.value;
    const c = group.get('confirmPassword')?.value;
    return p === c ? null : { mismatch: true };
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.maxLength(18)]),
        lastName: new FormControl('', [Validators.required, Validators.maxLength(18)]),
      }),
      email: new FormControl('', [Validators.required, Validators.email]),
      passwords: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', Validators.required),
      }, { validators: this.passwordsMatchValidator }),
      categories: new FormArray(
        this.categories.map(() => new FormControl(false))
      )
    });
  }

  get nameGroup(): FormGroup {
    return this.form.controls['name'] as FormGroup;
  }
  get firstNameControl(): FormControl {
    return this.nameGroup.get('firstName') as FormControl;
  }
  get firstNameHasError(): boolean {
    return this.firstNameControl?.touched && this.firstNameControl?.invalid;
  }
  get lastNameHasError(): boolean {
    const lastNameControl = this.nameGroup.get('lastName') as FormControl;
    return lastNameControl?.touched && lastNameControl?.invalid;
  }
  get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }
  get emailHasError(): boolean {
    return this.emailControl?.touched && this.emailControl?.invalid;
  }
  get passwordControl(): FormControl {
    return this.form.get('passwords')?.get('password') as FormControl;
  }
  get passwordHasError(): boolean {
    return this.passwordControl?.touched && this.passwordControl?.invalid;
  }
  get categoriesControls(): FormArray {
    return this.form.get('categories') as FormArray;
  }
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.createUser.emit(this.form.value);
      this.form.reset();
      this.close.emit();
    } else {
      this.form.markAllAsTouched();
    }
  }
  onClose() {
    this.close.emit();
  }
}

