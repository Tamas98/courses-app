import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css', '../../../assets/forms.css']
})
export class CourseComponent implements OnInit {

  submitted = false;
  authorList: {
    name: string
  }[] = [];

  courseFormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    newAuthor: new FormGroup({
      name: new FormControl('', [Validators.pattern('^[A-Za-z0-9]+$')]),
      authors: new FormArray([new FormControl('')])
  }),
    duration: new FormControl(0, [Validators.min(0)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() : void {
    this.submitted = true;
  }

  addAuthor(name: string): void {
    let authorList = this.courseFormGroup.get(['newAuthor','authors']) as FormArray;
    authorList.push(new FormControl(name));
    this.authorList.push({name: name});
    this.courseFormGroup.get(['newAuthor','name'])?.setValue('');
  }

  removeAuthor(index: number): void {
    let authorList = this.courseFormGroup.get(['newAuthor','authors']) as FormArray;
    authorList.removeAt(index+1);
    this.authorList.splice(index,1);
    console.log(this.courseFormGroup.get(['newAuthor','authors']))
  }
}
