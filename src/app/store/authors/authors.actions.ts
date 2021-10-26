import { createAction, props } from "@ngrx/store";

export const requestAuthors = createAction('[Author] Request authors');
export const requestAuthorsSuccess = createAction('[Author] Request authors success');
export const requestAuthorsFail = createAction('[Author] Request authors failed');
export const requestAddAuthor = createAction('[Author] Request add authors',props<{name: string; id?: string}>());
export const requestAddAuthorSuccess = createAction('[Author] Request add authors success');
export const requestAddAuthorFail = createAction('[Author] Request add authors fail');
export const resetAddedAuthor = createAction('[Author] Reset added author');
