import { Component, Directive,Input ,OnInit} from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule,FormControl, FormGroup } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common'; 
import { InputSwitchModule } from 'primeng/inputswitch';
import {MatIconModule} from '@angular/material/icon';
import { DropdownModule } from 'primeng/dropdown';
interface Timezone {
  timezone: string;
  code: string;
}

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [DropdownModule,CalendarModule,FormsModule,RadioButtonModule,MatIconModule,CommonModule,InputSwitchModule],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.sass',
})
export class DeliveryComponent implements OnInit  {
  date: Date | undefined;
  checked: boolean = true;
  timezone: Timezone[] | undefined;
  selectedTimezone: Timezone | undefined;
  calendarVal1?: Date; 
  calendarVal2?: Date; 
  DeliveryType: string | null = 'Current/Past Delivery'; 
  logSelectedValue(value: string | null): void {
    console.log('Selected Value:', value);
  }
  activeSection: number | null = 0;
  settings = [
    { name: 'Email Setting' },
    { name: 'Completion Setting' },
    { name: 'Custom Mail Server' },
    { name: 'Tracking Setting' }
  ];

  toggleSection(index: number) {
    console.log('works')
    if (this.activeSection === index) {
      this.activeSection = null; 
    } else {
      this.activeSection = index;
    }
  }
  ngOnInit() {
    this.timezone = [
        { timezone: "UTC (Coordinated Universal Time)", code: "UTC" },
        { timezone: "GMT (Greenwich Mean Time)", code: "GMT" },
        { timezone: "EST (Eastern Standard Time)", code: "EST" },
        { timezone: "EDT (Eastern Daylight Time)", code: "EDT" },
        { timezone: "CST (Central Standard Time)", code: "CST" },
        { timezone: "CDT (Central Daylight Time)", code: "CDT" },
        { timezone: "MST (Mountain Standard Time)", code: "MST" },
        { timezone: "MDT (Mountain Daylight Time)", code: "MDT" },
        { timezone: "PST (Pacific Standard Time)", code: "PST" },
        { timezone: "PDT (Pacific Daylight Time)", code: "PDT" },
      
          ];
}

}
