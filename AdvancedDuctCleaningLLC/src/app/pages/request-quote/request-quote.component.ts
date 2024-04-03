import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {ContactService, DesiredService} from "../../contact.service";
import {catchError, tap, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf, NgFor, NgClass } from '@angular/common';

@Component({
    selector: 'app-request-quote',
    templateUrl: './request-quote.component.html',
    styleUrls: ['./request-quote.component.scss'],
    standalone: true,
    imports: [NgIf, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, NgFor, MatOptionModule, NgClass, SpinnerComponent]
})
export class RequestQuoteComponent implements OnInit {

  public form!: FormGroup;

  public serviceDesiredOptions: { name: string, value: string }[] = (Object.keys(DesiredService) as (keyof typeof DesiredService)[]).map((key) => ({
    name: key,
    value: DesiredService[key]
  }));

  public typeOfPropertyOptions = [
    'Residential',
    'Commercial',
    'Industrial'
  ];

  public numberOfFurnacesOptions = [
    1,
    2,
    3,
    4,
    5
  ];

  public styleOfHomeOptions = [
    'Ranch',
    'Two Story',
    'Condo',
    'Apartment',
    'Commercial'
  ];

  public foundationOptions = [
    'Basement',
    'Slab',
    'Crawl Space',
    'Other'
  ];

  public isSubmitting = false;
  public showSuccess = false;
  public showFailure = false;

  constructor(private readonly fb: FormBuilder,
              private readonly contactService: ContactService,
              private readonly router: Router) { }

  public ngOnInit() {
    this.form = this.fb.group({
      firstNameasdf: [{ value: undefined, disabled: false }, [ Validators.required ]],
      lastNameasdf: [{ value: undefined, disabled: false }, [ Validators.required ]],
      emailasdf: [{ value: undefined, disabled: false }, [ Validators.required, Validators.email ]],
      address: [{ value: undefined, disabled: false }, [ Validators.required ]],
      city: [{ value: undefined, disabled: false }, [ Validators.required ]],
      zip: [{ value: undefined, disabled: false }, [ Validators.required ]],
      phoneNumber: [{ value: undefined, disabled: false }, [ Validators.required ]],
      how: [{ value: undefined, disabled: false }],
      serviceDesired: [{ value: [], disabled: false }, [ Validators.required ]],
      typeOfProperty: [{ value: undefined, disabled: false }, [ Validators.required ]],
      numberOfFurnaces: [{ value: undefined, disabled: false }, [ Validators.required ]],
      styleOfHome: [{ value: undefined, disabled: false }, [ Validators.required ]],
      foundation: [{ value: undefined, disabled: false }, [ Validators.required ]],
      firstName: [{ value: undefined, disabled: false }],
      lastName: [{ value: undefined, disabled: false }],
      email: [{ value: undefined, disabled: false }],
      squareFootage: [{ value: 0, disabled: false }, [Validators.required]]
    });
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();

    const honeypot: boolean = Boolean(this.form.controls['firstName'].value) || Boolean(this.form.controls['lastName'].value) || Boolean(this.form.controls['email'].value);

    if (this.form.valid && !honeypot) {
      this.isSubmitting = true;
      this.contactService.submitRequestQuote({
        firstName: this.form.controls['firstNameasdf'].value,
        lastName: this.form.controls['lastNameasdf'].value,
        email: this.form.controls['emailasdf'].value,
        address: this.form.controls['address'].value,
        city: this.form.controls['city'].value,
        zip: this.form.controls['zip'].value,
        phoneNumber: this.form.controls['phoneNumber'].value,
        how: this.form.controls['how'].value,
        serviceDesired: this.form.controls['serviceDesired'].value,
        typeOfProperty: this.form.controls['typeOfProperty'].value,
        numberOfFurnaces: this.form.controls['numberOfFurnaces'].value,
        styleOfHome: this.form.controls['styleOfHome'].value,
        foundation: this.form.controls['foundation'].value,
        squareFootage: this.form.controls['squareFootage'].value
      }).pipe(
        tap(() => {
          this.isSubmitting = false;
          this.showSuccess = true;
          window.scrollTo(0, 0);
          this.form.reset();
        }),
        catchError((err: HttpErrorResponse) => {
          this.isSubmitting = false;
          this.showFailure = true;
          setTimeout(() => {
            this.showFailure = false;
          }, 2000);
          return throwError(err.error);
        })
      ).subscribe();
    }
  }

  public navigateToHome(): void {
    this.router.navigate(['']);
  }
}
