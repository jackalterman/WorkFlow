import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

date = this.getDate1();
date2 = this.getDate2();

getDate1(){
  var todayDate = new Date();
  return todayDate.toString();
}
getDate2(){
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate()-7);
  var d  = todayDate.toISOString();
  return todayDate.toString();
}

  constructor() { }

  ngOnInit() {
  }

}
