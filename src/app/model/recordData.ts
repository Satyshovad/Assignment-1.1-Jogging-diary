import {Breed} from './add-record.';

export class User{
  jogDate: Date;
  jogDistance: number;
  jogTime: number;

  constructor(jogDate: Date, jogDistance: number, jogTime: number) {
    this.jogDate = jogDate;
    this.jogDistance = jogDistance;
    this.jogTime = jogTime;
  }
}
