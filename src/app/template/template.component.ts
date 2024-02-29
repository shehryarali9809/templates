import { Component ,OnInit,Input, } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';
import { SidebarStateService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { ProgressbarComponent } from '../progressbar/progressbar.component'; 
import { Chart, registerables } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import {invitationEmailContent} from '../email-templates/event-invitation'
Chart.register(...registerables);

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [MatIconModule, NgChartsModule,CommonModule,ProgressbarComponent],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.sass']
})

export class TemplateComponent implements OnInit {
  @Input() percentage: number = 0;
  @Input() Spercentage: number = 0;
  @Input() Ppercentage: number = 0;
  @Input() Qpercentage: number = 0;
  isOpen$ = this.sidebarStateService.isOpen$;

  constructor(private http: HttpClient, private sidebarStateService: SidebarStateService) {}
  async loadTemplate(templateKey: string) {
    let templateContent = `<p>Content of ${templateKey} not found</p>`;
  
    try {
      if (templateKey === 'event-invitation') {
        const templateModule = await import('../email-templates/event-invitation');
        templateContent = templateModule.invitationEmailContent.join('');
      }
      // Add more conditions here for other templates
    } catch (error) {
      console.error('Error loading the template:', error);
    }
  
    this.sidebarStateService.loadTemplateContent(templateContent);
    this.sidebarStateService.showEditor(); 
  }

  radius: number = 40;
  circumference: number = 2 * Math.PI * this.radius;
  dashoffset: number = this.circumference;
  Sdashoffset: number = this.circumference; 
  Pdashoffset: number = this.circumference; 
  Qdashoffset: number = this.circumference; 

  ngOnInit() {
    this.updateDashOffset();
  }

  ngOnChanges() {
    this.updateDashOffset();
  }

  updateDashOffset() {
    const progress = this.percentage / 100;
    this.dashoffset = this.circumference * (1 - progress);
    const Sprogress = this.Spercentage / 100;
    this.Sdashoffset = this.circumference * (1 - Sprogress);
    const Pprogress = this.Ppercentage / 100;
    this.Pdashoffset = this.circumference * (1 - Pprogress);
    const Qprogress = this.Qpercentage / 100;
    this.Qdashoffset = this.circumference * (1 - Qprogress);

  }
  getStrokeColor(percentage: number): string {
    return '#f1574d';
  }  
}