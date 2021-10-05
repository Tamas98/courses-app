import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faEdit, faTrash, IconDefinition, IconName } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input() courses!: any[];
  @Input() editable: boolean = true;
  @Output() showClickedEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeClickedEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() editClickedEvent: EventEmitter<number> = new EventEmitter<number>();

  removeIcon: IconDefinition = faTrash;
  editIcon: IconDefinition = faEdit;

  constructor() { }

  ngOnInit(): void {
  }

  editClicked(id: number) {
    this.editClickedEvent.emit(id);
  }

  removeClicked(id: number) {
    this.removeClickedEvent.emit(id);
  }

  showClicked(id: number) {
    this.showClickedEvent.emit(id);
  }

}
