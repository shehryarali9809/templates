import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarStateService {
  private isOpen = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpen.asObservable();

  private status = new BehaviorSubject<string>("Templates");
  status$ = this.status.asObservable();

  private editorVisible = new BehaviorSubject<boolean>(false);
  editorVisible$ = this.editorVisible.asObservable();
  updateStatus(newStatus: string) {
    this.status.next(newStatus);
  }

  private templateContentSource = new BehaviorSubject<string>('');
  currentTemplateContent = this.templateContentSource.asObservable();
  loadTemplateContent(content: string) {
    this.templateContentSource.next(content);
  }
  showEditor() {
    this.editorVisible.next(true);
  }
  toggleSidebar() {
    this.isOpen.next(!this.isOpen.value);
  }

  constructor() {}
}