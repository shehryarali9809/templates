import { Component, ViewChild, ElementRef } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule, AngularEditorConfig } from '@kolkov/angular-editor';
import { TagInputModule } from 'ngx-chips';

@Component({
  selector: 'app-recipients',
  standalone: true,
  imports: [RadioButtonModule, FormsModule, CommonModule, MatIconModule, ReactiveFormsModule, AngularEditorModule, TagInputModule],
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

  @ViewChild('emailInput') emailInput!: ElementRef;

  constructor() { }
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
        this.toEmails.push(emailValue);
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
  extractedEmails: any[] = [];
  extractEmails(content: string): string[] {
    const emailRegex = /[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}/g;
    const emails = content.match(emailRegex) || [];
    return emails;
  }

  displayEmails(emails: string[]) {
    this.toEmails.push(...emails);
    console.log('Extracted emails:', emails);
    this.toEmails = this.toEmails.slice(); 
    }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      if (file.type === 'application/vnd.ms-excel' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'text/csv') {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const content: string = e.target.result as string;
          const emails: string[] = this.extractEmails(content);
          this.displayEmails(emails);
        };
        reader.readAsText(file);
      } else {
        alert('Please upload a CSV or Excel file.');
      }
    }
  }
  toEmails: any[] = [];
  private checkPattern(control: AbstractControl): ValidationErrors | null {
    const patternRegex = /^[A-Za-z0–9._%+-]+@[a-z0–9.-]+\.[a-z]{2,4}$/
    if (patternRegex.test(control.value)) {
      return null;
    } else {
      return { pattern: true };
    }
  } public validators = [this.checkPattern];

  public errorMessages = {
    'pattern': 'Please enter a valid email address.',
  };
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '200px',
    width: 'auto',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter your email',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
    ],
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [],
      ['customClasses', 'insertImage', 'insertVideo', 'toggleEditorMode'],
    ],
  };
}
