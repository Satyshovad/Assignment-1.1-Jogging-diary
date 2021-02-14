import {Component, Input} from '@angular/core';
import {RecordDate} from '../model/recordDate';

@Component({
  selector: 'app-results',
  template: `
    <div class="right_block">
        <h2>
        My results
      </h2>
      <form style="margin-bottom: 10px">
        <button>
          <b>New</b>
        </button>
      </form>
      <table>
        <tr><th>Date</th> <th>Distance in meters</th><th>Time</th><th>Average speed</th><th>Options</th></tr>
        <tr><td>2018-04-11</td><td>5,000.00</td><td>42:40</td><td>7.20</td><td>Edit Delete</td>
        <tr *ngFor="let record of records">
          <td>{{record.jogDate}}</td>
          <td>{{record.jogDistance}}</td>
          <td>{{record.jogTime}}</td>
          <td>7.20</td>
          <td>Edit Delete</td>
      </table>
    </div>`,
  styleUrls: ['./results.component.scss']
})


export class ResultsComponent{
  // title = 'Results Component';
  @Input()records: RecordDate;

  constructor() {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
  }
}
