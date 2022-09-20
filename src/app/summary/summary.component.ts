import { Component, OnInit } from '@angular/core';
import {infoSummary} from "./summary.info";
import localeRu from '@angular/common/locales/ru';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeRu,"ru");
import {ExperienceWorkService} from "./experience-work.service";
import {MySkillsService} from "../my-skills.service";

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
  experience:string[]=[];
  skill:string[]=[]

  constructor(private experienceWork:ExperienceWorkService,private skills:MySkillsService) { }

  ngOnInit(): void {
    this.experience = this.experienceWork.getExperience();
    this.skill=this.skills.getSkills();
  }

}
