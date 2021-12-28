import { Component, OnInit } from '@angular/core';
import {environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-ng-gh-netlify';

  custom_env = process.env.NG_APP_ENV

  ngOnInit() {
    console.log('---env---', this.custom_env);
    console.warn(environment)

  }

}
