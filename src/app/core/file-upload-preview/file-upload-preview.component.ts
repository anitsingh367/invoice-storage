import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload-preview',
  templateUrl: './file-upload-preview.component.html',
  styleUrls: ['./file-upload-preview.component.scss'],
})
export class FileUploadPreviewComponent implements OnInit {
  @Input('imgSrc') imgSrc: string;
  @Output() removeItem = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  removeImg() {
    this.removeItem.emit();
  }
}
