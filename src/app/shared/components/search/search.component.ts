import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() placeHolder!: string;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  searchBar: FormControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  onSearchClicked(): void {
    console.log(this.searchBar.value);
    this.onSearch.emit(this.searchBar.value);
  }
}
