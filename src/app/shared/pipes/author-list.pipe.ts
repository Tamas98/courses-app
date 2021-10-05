import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'authorList'})
export class AuthorListPipe implements PipeTransform {
  transform(authors: string[]): string {
    return authors.join(", ")
  }
}
