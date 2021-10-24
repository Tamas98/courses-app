import { AuthorState } from "./authors.reducer";

export const getAddedAuthors = (state: AuthorState) => state.addedAuthors;
export const getAuthors = (state: AuthorState) => state.authors;
