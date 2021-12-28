import { Component, OnInit } from '@angular/core';
import {environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-ng-gh-netlify';

  custom_env = environment.api_id

  ngOnInit() {
    console.log('---env | api_id---', this.custom_env);
    console.warn(environment)

  }

}
