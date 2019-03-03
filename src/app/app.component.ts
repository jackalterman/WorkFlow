import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'List of issues for the Angular project (updated within the last 7 days)';

      // specify the columns
      columnDefs = [
        {headerName: "Issue Number", field: "number", resizable:true, sortable:true, width: 120 },
        {headerName: "Date Created", field: "created_at", filter: true, resizable:true,sortable:true},
        //{headerName: "URL", field: "url",  filter: true, resizable:true, sortable:true, width: 400},
        {headerName: "Title", field: "title", filter: true, resizable:true, sortable:true, width: 400},
        {headerName: "Body", field: "body", filter: true, width: 900, resizable:true,sortable:true},      
        {headerName: "User", field: "user.login", filter: true, resizable:true,sortable:true}
      ];

           
      rowData: any;

      constructor(private http: HttpClient) {
}


ngOnInit() {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate()-7);
  var d  = todayDate.toISOString();
  this.rowData = this.http.get('https://api.github.com/repos/angular/angular/issues?since='+d + '&per_page=100')
}
}