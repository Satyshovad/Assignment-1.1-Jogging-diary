import {Component  } from '@angular/core';

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
        <tr *ngFor=""></tr>
      </table>
    </div>`,
  styleUrls: ['./results.component.scss']
})


export class ResultsComponent{
  // title = 'Results Component';
}
