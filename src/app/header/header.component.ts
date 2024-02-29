import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SidebarStateService } from '../shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent implements OnInit {
  isOpen$ = this.sidebarStateService.isOpen$;

  constructor(private sidebarStateService: SidebarStateService) {}
ngOnInit(): void {
    
}
}
