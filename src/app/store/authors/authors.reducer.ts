import { Action, createReducer, on } from "@ngrx/store";
import { requestAddAuthorSuccess, requestAuthorsSuccess, resetAddedAuthor } from "./authors.actions";

export const authorsFeatureKey = 'authorsFeatureKey';

const initialState: AuthorState = {
  authors: [],
  addedAuthors: []
}

export interface AuthorState {
  authors: any[],
  addedAuthors: any[]
}

const privateAuthorReducer = createReducer(initialState,
    on(requestAddAuthorSuccess, (state, author) => {
      state.addedAuthors.push(author)
      return state;
    }),
    on(requestAuthorsSuccess, state => state),
    on(resetAddedAuthor, state => {
      state.addedAuthors = [];
      return state;
    })
  )

export const authorReducer = (state:
  AuthorState | undefined, action: Action): AuthorState => privateAuthorReducer(state, action);
