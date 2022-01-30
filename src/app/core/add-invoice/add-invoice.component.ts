import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
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
  imgSrc: string | null = null;

  constructor(private formBuilder: FormBuilder) {
    this.createInvoice = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      pNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[- +()0-9]+'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      invoiceImg: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}
  createNewInvoice() {
    console.log(this.createInvoice);
  }
  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;

      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgSrc = reader.result as string;
      };
    }
  }
  removeImg() {
    this.imgSrc = null;
  }
}
