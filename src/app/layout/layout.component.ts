import { Component, OnInit } from '@angular/core';
import {RecordDate} from '../model/recordDate';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  inputedItems: RecordDate[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addItems(newItem: RecordDate){
    this.inputedItems.unshift(newItem);
  }
}

