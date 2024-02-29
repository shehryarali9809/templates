import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarStateService } from '../shared.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  // isOpen: boolean = true;
  isOpen$ = this.sidebarStateService.isOpen$;

  constructor(private sidebarStateService: SidebarStateService) {}
  toggleSidebar() {
    this.sidebarStateService.toggleSidebar();
  }
  ngOnInit(): void {
  }
}
