import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { SearchInvoiceComponent } from './search-invoice/search-invoice.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FileUploadPreviewComponent } from './file-upload-preview/file-upload-preview.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'add',
      },
      {
        path: 'add',
        component: AddInvoiceComponent,
      },
      {
        path: 'search',
        component: SearchInvoiceComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [BaseComponent, AddInvoiceComponent, SearchInvoiceComponent, FileUploadPreviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
  ],
  exports: [RouterModule],
})
export class CoreModule {}
