import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  inputedItems1 = [];
  jogDate: Date;
  inputedItems2 = [100, 350];
  jogDistance: number;
  inputedItems3 = [60, 135];
  jogTime: number;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addItems(newitem1: Date, newitem2: number, newitem3: number){
    this.inputedItems1.unshift(newitem1);
    this.inputedItems2.unshift(newitem2);
    this.inputedItems3.unshift(newitem3);
  }
}
