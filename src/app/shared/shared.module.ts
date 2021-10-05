import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseTimePipe } from './pipes/course-time.pipe';
import { AuthorListPipe } from './pipes/author-list.pipe';
import { InfoComponent, SearchComponent, ButtonComponent, HeaderComponent } from './components/index';
import { ValidEmailDirective } from './directives/valid-email.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { CreationDatePipe } from './pipes/creation-date.pipe';

const COMPONENTS =  [
  InfoComponent,
  SearchComponent,
  ButtonComponent,
  HeaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  declarations: [COMPONENTS, CourseTimePipe, AuthorListPipe, ValidEmailDirective, CreationDatePipe],
  exports: [COMPONENTS, CourseTimePipe, AuthorListPipe, ValidEmailDirective, CreationDatePipe]
})
export class SharedModule {}
