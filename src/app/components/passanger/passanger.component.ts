import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-passanger',
  templateUrl: './passanger.component.html',
  styleUrls: ['./passanger.component.css']
})
export class PassangerComponent {

  @Input() listData!: User[];
  @Output() getDeletedRow: EventEmitter<any>;

  constructor() {
    this.getDeletedRow = new EventEmitter();
  }
  ngOnInit(): void {
  }

  deleteRow(row : any) {
    this.getDeletedRow.emit(row);
  }

}
