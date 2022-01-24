import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss'],
})
export class AddInvoiceComponent implements OnInit {
  createInvoice: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createInvoice = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      pNumber: new FormControl('', Validators.required),
      invoiceImg: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}
}
