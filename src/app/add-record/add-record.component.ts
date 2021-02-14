import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent implements OnInit {
  jogDate: Date;
  jogDistance: number;
  jogTime: number;
  @Output() inputedItem1: EventEmitter<Date> = new EventEmitter();
  @Output() inputedItem2: EventEmitter<number> = new EventEmitter();
  @Output() inputedItem3: EventEmitter<number> = new EventEmitter();

  constructor() {
}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addItem(jogDate: Date, jogDistance: number, jogTime: number){
    this.inputedItem1.emit(jogDate);
    this.inputedItem2.emit(jogDistance);
    this.inputedItem3.emit(jogTime);
  }
}
