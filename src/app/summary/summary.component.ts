import { Component, OnInit } from '@angular/core';
import {infoSummary} from "./summary.info";
import {experience} from "./workExperience";
import localeRu from '@angular/common/locales/ru';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeRu,"ru");

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
info:infoSummary = {
  tel:+30935918735,
  name:'Sanya',
  surname:'Skuz',
  salary:99999,
  address:'Ukraine, kiev',
  dataBirth:new Date(1995,8,24),
}
  path = '/assets/img/img.jpeg';
Exp: experience = {
  work:'kitchener',
  text:'Work Experience',
  skill:'kitchener',
  skill1:'Js',
  skill2:'Html'
}

  constructor() { }

  ngOnInit(): void {
  }

}
