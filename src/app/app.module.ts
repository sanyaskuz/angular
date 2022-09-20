import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import {ExperienceWorkService} from "./summary/experience-work.service";
import {MySkillsService} from "./my-skills.service";

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ExperienceWorkService,MySkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
