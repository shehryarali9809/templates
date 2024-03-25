import { Component ,ViewChild,ElementRef} from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipients',
  standalone: true,
  imports: [RadioButtonModule,FormsModule,CommonModule,MatIconModule,ReactiveFormsModule],
  templateUrl: './recipients.component.html',
  styleUrl: './recipients.component.sass'
})

export class RecipientsComponent {
  recipientType: string | null = 'CSV/Excel'; 
  showCancelIcon: boolean = false;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  showError: boolean = false;
  emailList: string[] = [];
  logSelectedValue(value: string | null): void {
    console.log('Selected Value:', value);
  }

  @ViewChild('emailInput') emailInput! : ElementRef;

    constructor() {}
    onInputChange(): void {
      this.showCancelIcon = this.emailInput.nativeElement.value.length > 0;
    }
  
    clearInput(): void {
      this.emailInput.nativeElement.value = '';
      this.showCancelIcon = false;
    }
    onEnter(): void {
      if (this.emailFormControl.valid) {
        const emailValue: string | null = this.emailFormControl.value;
        if (emailValue !== null) {
          this.emailList.push(emailValue);
          this.emailFormControl.reset();
        }
      } else {
        this.showError = true;
      }
    }
    @ViewChild('fileUpload') fileUpload: ElementRef | undefined;
    openFileUpload() {
      if (this.fileUpload) {
        this.fileUpload.nativeElement.click();
      }
    }
  
  
    onFileSelected(event: any) {
      const file: File = event.target.files[0];
      
      if (file) {
        if (file.type === 'application/vnd.ms-excel' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
          // File type is CSV or Excel
          // Process the file here
          console.log('File uploaded:', file);
        } else {
          alert('Please upload a CSV or Excel file.');
        }
      }
    }  
}
