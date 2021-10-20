import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthorStoreService } from 'src/app/services/author-store.service';
import { Author } from 'src/app/services/author.service';
import { Course } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css', '../../../../assets/forms.css']
})
export class CourseFormComponent implements OnInit {

  @Input() course?: Observable<Course | undefined>;
  @Output() submitClicked: EventEmitter<Course> = new EventEmitter<Course>();

  public submitted = false;
  public authorList: Author[] = [];
  public buttonText: string = "Create Course"

  private creationDate: string | undefined = "";

  public courseFormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    newAuthor: new FormGroup({
      name: new FormControl('', [Validators.pattern('^[A-Za-z0-9]+$')]),
      authors: new FormArray([new FormControl('')])
  }),
    duration: new FormControl(0, [Validators.min(0)])
  })

  constructor(private authorService: AuthorStoreService) { }

  ngOnInit(): void {
    this.course?.subscribe(
      (course: Course | undefined) => {
        console.log(this.course)
        this.courseFormGroup.get('title')?.setValue(course?.title);
        this.courseFormGroup.get('description')?.setValue(course?.description);
        this.courseFormGroup.get('duration')?.setValue(course?.duration);
        course?.authors.forEach((id: string) => this.authorService.getAuthor(id).subscribe({
            next: (author: Author) => this.authorList.push(author)
        }))
        this.creationDate = course?.creationDate
        this.buttonText = "Edit Course"
    })
  }

  onSubmit() : void {
    this.submitted = true;
    const idList: any[] = this.authorList.map((author: Author) => author.id);
    this.submitClicked.emit({
      title: this.courseFormGroup.get('title')?.value,
      description: this.courseFormGroup.get('description')?.value,
      duration: this.courseFormGroup.get('duration')?.value as number,
      creationDate: this.creationDate ? this.creationDate : Date.now().toString(),
      authors: idList
    })
  }

  addAuthor(name: string): void {
    let authorList = this.courseFormGroup.get(['newAuthor','authors']) as FormArray;
    authorList.push(new FormControl(name));
    this.authorList.push({name: name});
    this.courseFormGroup.get(['newAuthor','name'])?.setValue('');
    this.authorService.addAuthor({name: name})
  }

  removeAuthor(index: number): void {
    let authorList = this.courseFormGroup.get(['newAuthor','authors']) as FormArray;
    authorList.removeAt(index+1);
    this.authorList.splice(index,1);
    console.log(this.courseFormGroup.get(['newAuthor','authors']))
  }

}
