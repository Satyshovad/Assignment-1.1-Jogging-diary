import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecordDate} from '../model/recordDate';


@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent implements OnInit {
  jogDate: Date;
  record: RecordDate;
  jogDistance: number;
  jogTime: number;
  @Output() inputedItem: EventEmitter<RecordDate> = new EventEmitter();


  constructor() {
}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addItem(jogDate: Date, jogDistance: number, jogTime: number){
    this.record = new RecordDate(jogDate, jogDistance, jogTime);
    this.inputedItem.emit(this.record);
  }
}
