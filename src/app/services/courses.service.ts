import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<CourseResponse>('http://localhost:3000/courses/all');
  }

  getCourse(id: string) {
    return this.http.get<CourseResponse>('http://localhost:3000/courses/' + id);
  }

  createCourse(course: Course) {
    return this.http.post('http://localhost:3000/courses/add', course);
  }


  editCourse(course: Course, id: string) {
    return this.http.put('http://localhost:3000/courses/' + id, course);
  }

  deleteCourse(id: string) {
    return this.http.delete('http://localhost:3000/courses/' + id);
  }
}

export interface Course {
  title: string
  description: string
  creationDate: string
  duration: number
  authors: string[]
  id?: string
}

export interface CourseResponse {
  result: Course[]
}
