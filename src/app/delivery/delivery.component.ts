import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [CalendarModule,FormsModule],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.sass'
})
export class DeliveryComponent {
  date: Date | undefined;

}
