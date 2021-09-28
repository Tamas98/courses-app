import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseTimePipe } from './pipes/course-time.pipe';
import { AuthorListPipe } from './pipes/author-list.pipe';
import { InfoComponent, SearchComponent, ButtonComponent, HeaderComponent } from './components/index';

const COMPONENTS =  [
  InfoComponent,
  SearchComponent,
  ButtonComponent,
  HeaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [COMPONENTS, CourseTimePipe, AuthorListPipe],
  exports: [COMPONENTS, CourseTimePipe, AuthorListPipe]
})
export class SharedModule {}
