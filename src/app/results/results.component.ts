import {Component  } from '@angular/core';

@Component({
  selector: 'app-results',
  template: `
    <div class="right_block">
        <h2 style="padding-top: 8px">
        My results
      </h2>
      <form style="margin-bottom: 10px">
        <button type = "button" name = "button1" style = "width: 50px; height:40px;">
          <b>New</b>
        </button>
      </form>
      <table>
        <tr><th>Date</th> <th>Distance in meters</th><th>Time</th><th>Average speed</th><th>Options</th></tr>
        <tr><td>2018-04-11</td><td>5,000.00</td><td>42:40</td><td>7.20</td><td>Edit Delete</td>
        <tr><td>2018-04-03</td><td>3,000.00</td><td>13:20</td><td>13:50</td><td>Edit Delete</td></tr>
        <tr><td>2018-04-02</td><td>5,000.00</td><td>35:00</td><td>8.57</td><td>Edit Delete</td></tr>
        <tr><td>2018-03-28</td><td>1,000.00</td><td>10:00</td><td>6.00</td><td>Edit Delete</td></tr>
        <tr><td>2018-03-27</td><td>1,200.00</td><td>12:00</td><td>6.00</td><td>Edit Delete</td></tr>
        <tr><td>2018-03-26</td><td>1,300.00</td><td>13:30</td><td>6.24</td><td>Edit Delete</td></tr>
      </table>
    </div>`,
  styleUrls: ['./results.component.scss']
})


export class ResultsComponent{
  // title = 'Results Component';
}
