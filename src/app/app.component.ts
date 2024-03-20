import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; 
import { TemplateComponent } from './template/template.component'; 
import { SidebarComponent } from './sidebar/sidebar.component'; 
import { ProgressbarComponent } from './progressbar/progressbar.component'; 
import { EditorComponent } from './editor/editor.component'; 
import { RecipientsComponent } from './recipients/recipients.component'; 
import { DeliveryComponent } from './delivery/delivery.component'; 

import { FormsModule } from '@angular/forms';
import { SidebarStateService } from './shared.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { map } from 'rxjs/operators';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./template/template.component').then(m => m.TemplateComponent)
  }
];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,SidebarComponent,CommonModule,ProgressbarComponent,EditorComponent,FormsModule,HttpClientModule,TemplateComponent,RecipientsComponent,DeliveryComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']

})
export class AppComponent {
  title = 'my-app';
  editorVisible$;
  templateVisible$;
  recipientsVisible$;
  deliveryVisible$;
  isOpen$ = this.sidebarStateService.isOpen$;

  constructor(private sidebarStateService: SidebarStateService) {
    this.editorVisible$ = this.sidebarStateService.status$.pipe(
      map(status => status === 'Edit')
    );
    this.recipientsVisible$ = this.sidebarStateService.status$.pipe(
      map(status => status === 'Recipients')
    );
    this.deliveryVisible$ = this.sidebarStateService.status$.pipe(
      map(status => status === 'Delivery')
    );
    this.templateVisible$ = this.sidebarStateService.status$.pipe(
      map(status => status === 'Templates')
    );
  }
}
