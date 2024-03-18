import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css'],
})
export class LoansComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  loanForm: any;
  loans: Array<any> = [];
  viewMode: boolean = false;
  ngOnInit(): void {
    this.loanForm = this.fb.group({
      loan_name: this.fb.control('', Validators.compose([Validators.required])),
      type: this.fb.control('', Validators.required),
      description: this.fb.control(''),
      status: this.fb.control('', Validators.required),
    });

    const newLoan = {
      loan_name: 'Gold Loan',
      type: 'personal',
    };
    this.loanForm.patchValue(newLoan);

    this.loanForm.get('loan_name').valueChanges.subscribe((d: any) => {
      console.log(d);
    });
  }

  onSubmit() {
    this.loans.unshift(this.loanForm.value);
    this.loanForm.reset();
  }

  viewLoan(i: number) {
    Object.keys(this.loanForm.controls).forEach((key) => {
      this.loanForm.get(key).disable();
    });
    const loan = {
      loan_name: this.loans[i].loan_name,
      type: this.loans[i].type,
      description: this.loans[i].description,
      status: this.loans[i].status,
    };
    this.loanForm.setValue(loan);
  }

  editLoan(i: number) {
    const loan = {
      loan_name: this.loans[i].loan_name,
      type: this.loans[i].type,
      description: this.loans[i].description,
      status: this.loans[i].status,
    };
    this.loanForm.setValue(loan);
    if (this.loanForm.get('loan_name').disabled == true) {
      Object.keys(this.loanForm.controls).forEach((key) => {
        this.loanForm.get(key).enable();
      });
    }
    this.loans.splice(i, 1);
  }

  deleteLoan(i: number) {
    this.loans.splice(i, 1);
  }

  copyLoan(i: number) {
    const loan = {
      loan_name: this.loans[i].loan_name,
      type: this.loans[i].type,
      description: this.loans[i].description,
      status: this.loans[i].status,
    };
    this.loanForm.setValue(loan);
    if (this.loanForm.get('loan_name').disabled == true) {
      Object.keys(this.loanForm.controls).forEach((key) => {
        this.loanForm.get(key).enable();
      });
    }
  }
}
