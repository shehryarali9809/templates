import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; 
import { TemplateComponent } from './template/template.component'; 
import { SidebarComponent } from './sidebar/sidebar.component'; 
import { ProgressbarComponent } from './progressbar/progressbar.component'; 
import { EditorComponent } from './editor/editor.component'; 
import { FormsModule } from '@angular/forms';
import { SidebarStateService } from './shared.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,TemplateComponent,SidebarComponent,CommonModule,ProgressbarComponent,EditorComponent,FormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-app';

  editorVisible$ = this.sidebarStateService.editorVisible$;
  isOpen$ = this.sidebarStateService.isOpen$;
  constructor(private sidebarStateService: SidebarStateService) {}

}
