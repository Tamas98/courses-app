import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<AuthorResponse[]>('http://localhost:3000/authors/all')
  }

  getAuthor(id: string) {
    return this.http.get<AuthorResponse[]>('http://localhost:3000/authors/'+id)
  }

  addAuthor(author: Author) {
    return this.http.post('http://localhost:3000/authors/add', author)
  }
}

export interface AuthorResponse {
  result: Author[]
}

export interface Author {
  name: string
  id?: string
}
