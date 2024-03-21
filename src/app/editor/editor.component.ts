import { Component, OnInit,EventEmitter ,Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SidebarStateService } from '../shared.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule,EditorModule,FormsModule],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass']
})
export class EditorComponent implements OnInit {
  content: string = '';
  @Output() contentSaved = new EventEmitter<string>();

  constructor(private SidebarStateService: SidebarStateService) { }

  saveContent() {
    this.contentSaved.emit(this.content);
  }
  ngOnInit() {
    this.SidebarStateService.currentTemplateContent.subscribe(content => {
      this.content = content;
    });
  }
}