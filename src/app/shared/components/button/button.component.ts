import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IconDefinition, IconName } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text?: string;
  @Input() iconName?: IconDefinition;
  @Output() caButtonClickEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  ca_button_onClick() {
    this.caButtonClickEvent.emit();
  }
}
