import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PersonalComponent } from './personal/personal.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { SocialComponent } from './social/social.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    ProfileComponent,
    PersonalComponent,
    WorkExperienceComponent,
    EducationComponent,
    SkillsComponent,
    SocialComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
