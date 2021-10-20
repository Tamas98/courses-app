import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faTrash, IconDefinition, IconName } from '@fortawesome/free-solid-svg-icons';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { UserStoreService } from 'src/app/user/services/user-store.service';

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
  disabled: boolean = false;

  constructor(private courseStore: CoursesStoreService, private userService: UserStoreService, private router: Router) {

   }

  ngOnInit(): void {
    this.userService.getUser();
    this.userService.isAdmin$.subscribe(
      (isAdmin: boolean) => {
        this.disabled = isAdmin
      }
    )
  }

  editClicked(id: string) {
    this.router.navigate(['courses','edit',id])
  }

  removeClicked(id: string) {
    this.courseStore.deleteCourse(id);
  }

  showClicked(id: string) {
    this.router.navigate(['courses',id])
  }

}
