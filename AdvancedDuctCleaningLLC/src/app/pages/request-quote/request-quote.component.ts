import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../../contact.service";
import {catchError, tap, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.scss']
})
export class RequestQuoteComponent implements OnInit {

  public form!: FormGroup;

  public serviceDesiredOptions = [
    'Air Duct Cleaning',
    'Sanitizing'
  ];

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
              private readonly contactService: ContactService) { }

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
      serviceDesired: [{ value: undefined, disabled: false }, [ Validators.required ]],
      typeOfProperty: [{ value: undefined, disabled: false }, [ Validators.required ]],
      numberOfFurnaces: [{ value: undefined, disabled: false }, [ Validators.required ]],
      styleOfHome: [{ value: undefined, disabled: false }, [ Validators.required ]],
      foundation: [{ value: undefined, disabled: false }, [ Validators.required ]],
      firstName: [{ value: undefined, disabled: false }],
      lastName: [{ value: undefined, disabled: false }],
      email: [{ value: undefined, disabled: false }],
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
        foundation: this.form.controls['foundation'].value
      }).pipe(
        tap(() => {
          this.isSubmitting = false;
          this.showSuccess = true;
          setTimeout(() => {
            this.showSuccess = false;
          }, 2000);
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
}

function sumValidator(num1: number, num2: number) {
  return function(control: FormControl) {
    const sum = num1 + num2;
    return control.value !== sum ? { 'sumMismatch': true } : null;
  };
}
