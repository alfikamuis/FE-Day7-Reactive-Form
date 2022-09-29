import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  newData: User[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addRow(row :any){
    this.newData.push(row);
  }
  deleteRow(row : any) {
    for (let i in this.newData) {
      if (this.newData[i]['id'] == row.id) {
        this.newData.splice(parseInt(i), 1);
      }
    }
  }

}
