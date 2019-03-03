import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  text = "This app is using Angular and Node.js. The grid is ag-grid, populated from an API call to GitHub."
  + " The list shows 100 of the most recently updated issues for the last 7 days in the Angular project."
  + " Double-click on a row to be taken to that issue."

  constructor() { }

  ngOnInit() {
  }

}
