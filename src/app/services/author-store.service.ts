import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { finalize, map, switchMap, tap } from 'rxjs/operators';
import { Author, AuthorService } from './author.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorStoreService implements OnInit {

  private isLoading$$ = new BehaviorSubject<boolean>(false);
  private authors$$ = new BehaviorSubject<Author[]>([]);

  public isLoading$: Observable<boolean> = this.isLoading$$.asObservable();
  public authors$: Observable<Author[]> = this.authors$$.asObservable();

  constructor(private service: AuthorService) { }

  ngOnInit() {}

  getAll(): Observable<Author[]> {
    this.isLoading$$.next(true);
    return this.service.getAll().pipe(
      tap((response: any) => this.authors$$.next(response.result)),
      finalize(() => this.isLoading$$.next(false))
    )
  }

  getAuthor(id: string): Observable<Author> {
    this.isLoading$$.next(true);
    return this.service.getAuthor(id).pipe(
      map((response: any) => response.result),
      finalize(() => this.isLoading$$.next(false))
    )
  }

  addAuthor(author: Author) {
    this.isLoading$$.next(true);
    this.service.addAuthor(author).pipe(
      switchMap(this.getAll),
      finalize(() => this.isLoading$$.next(false))
    ).subscribe();
  }
}
