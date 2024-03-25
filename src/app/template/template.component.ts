import { Component ,OnInit,Input,ViewChild,ElementRef , HostListener} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';
import { SidebarStateService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { ProgressbarComponent } from '../progressbar/progressbar.component'; 
import { Chart, registerables } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import {emailTemplatesContent} from '../email-templates/emails'
Chart.register(...registerables);
interface EmailTemplate {
  imgSrc: string;
  emailHead: string;
  emailDesc: string;
}
@Component({
  selector: 'app-template',
  standalone: true,
  imports: [MatIconModule, NgChartsModule,CommonModule,ProgressbarComponent],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.sass']
})

export class TemplateComponent implements OnInit {
  emailTemplates = Object.keys(emailTemplatesContent).map(key => ({
    imgSrc: emailTemplatesContent[key].imgSrc,
    emailHead: emailTemplatesContent[key].emailHead,
    emailDesc: emailTemplatesContent[key].emailDesc,
  }));
  campaignsData = [
    { id: 1, dateTime: '5 Feb-8:30 PM', target: 'Health care', statusColor: '#F1574D', icon: 'done', status: 'Sent' },
    { id: 2, dateTime: '20 Feb-10:00 AM', target: 'Business', statusColor: '#505868', icon: 'close', status: 'Pending' },
    { id: 3, dateTime: '20 Feb-10:00 AM', target: 'Business', statusColor: '#505868', icon: 'close', status: 'Pending' },
    { id: 3, dateTime: '20 Feb-10:00 AM', target: 'Business in Health Care', statusColor: '#F1574D', icon: 'done', status: 'Sent' },

  ];
  @Input() percentage: number = 0;
  @Input() Spercentage: number = 0;
  @Input() Ppercentage: number = 0;
  @Input() Qpercentage: number = 0;
  isOpen$ = this.sidebarStateService.isOpen$;
  @ViewChild('templateContainer') templateContainer !: ElementRef;
  templatesPerLine: number = 3;

  displayedTemplates: EmailTemplate[] = [];
  showAll = false; 
  buttonText = 'Show More';
  constructor(private http: HttpClient, private sidebarStateService: SidebarStateService) {
    setTimeout(() => {
      this.calculateTemplatesPerLine();
      const totalTemplatesToDisplay = this.templatesPerLine * 2;
      this.displayedTemplates = this.emailTemplates.slice(0, totalTemplatesToDisplay);
    });
  
    }
  shouldShowButton(): boolean {
    const totalTemplatesToDisplay = this.templatesPerLine * 2;
    return this.emailTemplates.length > totalTemplatesToDisplay;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calculateTemplatesPerLine();
  }
  calculateTemplatesPerLine() {
    const containerWidth = this.templateContainer.nativeElement.clientWidth;
    const templateWidth = 305;
    this.templatesPerLine = Math.floor(containerWidth / templateWidth);
    }

  toggleShowAll() {
    this.showAll = !this.showAll;
    const totalTemplatesToDisplay = this.templatesPerLine * 2;
    this.displayedTemplates = this.showAll ? this.emailTemplates : this.emailTemplates.slice(0, totalTemplatesToDisplay);
    this.buttonText = this.showAll ? 'Show Less' : 'Show More';
    }
  async loadTemplate(templateKey: string) {
    let templateContent = `<p>Content of ${templateKey} not found</p>`;
      const template = emailTemplatesContent[templateKey];
    if (template && template.content) {
      templateContent = template.content.join('');
    } else {
      console.error('Error loading the template: Template not found');
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