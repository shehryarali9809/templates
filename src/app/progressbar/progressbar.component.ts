import { Component ,OnInit,Input, } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { SidebarStateService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { Subscription, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.sass'
})
export class ProgressbarComponent {
  private statusSubscription !: Subscription;
  status!: string;
  editorVisible$ = this.sidebarStateService.editorVisible$;

  isOpen$ = this.sidebarStateService.isOpen$;
  status$ = this.sidebarStateService.status$;
  constructor(private sidebarStateService: SidebarStateService) {}

  onCreateNewClick() {
    this.sidebarStateService.showEditor();
    this.sidebarStateService.loadTemplateContent('');
  }
  ngOnInit() {
    this.statusSubscription = this.sidebarStateService.status$.subscribe(status => {
      this.status = status;
    });
    this.editorVisible$.subscribe(showEditor => {
      if (showEditor) {
        this.sidebarStateService.updateStatus('Edit'); // Use the updateStatus method
      } else {
        this.sidebarStateService.updateStatus('Templates'); // Use the updateStatus method
      }
    });


  }

  ngOnDestroy() {
    this.statusSubscription.unsubscribe();
  }

  updateStatus(newStatus: string) {
    this.status = newStatus;
  }
  getMarginLeft(): string {
    switch (this.status) {
      case 'Templates':
        return '16px';
      case 'Edit':
        return '177px'; 
      case 'Recipients':
        return '332px';
      case 'Delivery':
        return '506px';
      default:
        return '0%';
    }
  }
}
