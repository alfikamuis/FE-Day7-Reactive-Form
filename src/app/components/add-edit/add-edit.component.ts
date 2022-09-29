import { Component, OnInit, ViewChild,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  id?: number;
  nama?: string;
  kota?: string;
  
  @ViewChild('myForm', { static: false }) MyForm!: NgForm;
  @Output() getAddedRow: EventEmitter<any>;

  constructor() {
    this.getAddedRow = new EventEmitter();
  }
  ngOnInit(): void {
    let data1 = {
      id: 1,
      nama:"alfika",
      kota:"banyuwangi"
    };
    let data2 = {
      id: 2,
      nama:"muis",
      kota:"malang"
    };
    this.getAddedRow.emit(data1);
    this.getAddedRow.emit(data2);
  }

  submitValues() {
    let sendObj = {
      id: this.id,
      nama: this.nama,
      kota: this.kota,
    };
    this.getAddedRow.emit(sendObj);
    this.MyForm.reset();
  }

}
