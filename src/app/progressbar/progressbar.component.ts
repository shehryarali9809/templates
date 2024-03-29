import { Component } from '@angular/core';
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
        this.sidebarStateService.updateStatus('Edit');
      } else {
        this.sidebarStateService.updateStatus('Templates'); 
      }
    });


  }
  updateStatustoRecipients(newStatus: string) {
    this.status = newStatus;
    this.sidebarStateService.updateStatus(newStatus); 
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
        return '152px'; 
      case 'Recipients':
        return '289px';
      case 'Delivery':
        return '444px';
      default:
        return '0%';
    }
  }
}
