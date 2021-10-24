import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Author } from "src/app/services/author.service";
import { requestAddAuthor, requestAuthors } from "./authors.actions";
import { AuthorState } from "./authors.reducer";

@Injectable()
export class AuthorsStateFacade {
  public authors$: Observable<any[]> = this.store.pipe(select((author: AuthorState) => author.authors));
  public addedAuthors$: Observable<any[]> = this.store.pipe(select((author: AuthorState) => author.addedAuthors));

  constructor(private store: Store<AuthorState>) {}

  getAuthors() {
    this.store.dispatch(requestAuthors());
  }

  addAuthor(author: Author) {
    this.store.dispatch(requestAddAuthor(author))
  }
}
