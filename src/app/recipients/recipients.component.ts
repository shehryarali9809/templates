import { Component } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipients',
  standalone: true,
  imports: [RadioButtonModule,FormsModule],
  templateUrl: './recipients.component.html',
  styleUrl: './recipients.component.sass'
})
export class RecipientsComponent {
  recipientType: string | null = null; 
  logSelectedValue(value: string | null): void {
    console.log('Selected Value:', value);
  }

}
