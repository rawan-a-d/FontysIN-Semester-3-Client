import { Experience } from './../classes/Profile/Experience';
import { Education } from './../classes/Profile/Education';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile/profile.service';
import { About } from '../classes/Profile/About';
import { Skill } from '../classes/Profile/Skill';
import { userInfo } from 'os';


// export interface profileList{

//   educations: Education[];
//   experience: Experience[];
//   abouts: About[];
//   skills: Skill[];
  
// }

// export interface About{

//   id: number;
//   profileId: number;
//   content: string;
  
// }

// export interface Experience{
//   id: number;
//   profileId: number;
//   title: string;
//   company:string;
//   employmentType : string;
//   locationId: number;
//   startYear: Date;
//   endYear: Date;
//   description: string;

// }

// export interface Skill{

//   id: number;
//   profileId: number;
//   skillName: string;
  
// }

// export interface Education{

//   id: number;
//   profileId: number;
//   school: string;
//   startYear: Date;
//   endYear: Date;
//   degree: string;
//   fieldStudy: string;
//   description: string;
  
// }


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  profileData: Object;
 educations: Education;
 experiences: Experience;
 skills : Skill;
 about: About;
  data = {};


  CreateEducation()
  {
   this.data = {
     "degreeEducation": "High School",
     "descriptionEducation": "Got good grades",
     "endYearEducation": "2020-01-01",
     "fieldStudy": "ICT",
     "id": 9,
     "profileId": 1,
     "school": "Fontys",
     "startYearEducation": "2018-01-01"
     }
     this.profileService.addEducation(<JSON>this.data)
  }

  ngOnInit(): void {
    // this.profileService.getProfile().subscribe((data)=>
    // {
     
    //   this.profileData=<Object>data;

    //   console.log(this.profileData);
      

    // });
    this.profileService.getEducationsById().subscribe((data)=>
    {
     
      this.educations=<Education>data;
      console.log(this.educations);
      
    });
    this.profileService.getExperienceById().subscribe((data)=>
    {
      this.experiences=<Experience>data;
      console.log(this.experiences);
    });
    this.profileService.getSkillsById().subscribe((data)=>
    {
      this.skills=<Skill>data;
      console.log(this.skills);
    });
    this.profileService.getAboutById().subscribe((data)=>
    {
      this.about=<About>data;
      console.log(this.about);
    });
  
  }

  //deleting skill data
  onSkillDelete(userid: number, profileId: number, skillId: number){
    this.profileService.deleteSkill(userid, profileId, skillId).subscribe((data)=>
    {
      this.skills=<Skill>data;
      console.log(this.skills);
    });
  }

  //deleting experience data
  onEducationDelete(userid: number, profileId: number, skillId: number){
    this.profileService.deleteEducation(userid, profileId, skillId).subscribe((data)=>
    {
      this.educations=<Education>data;
      console.log(this.educations);
    });
  }

  //deleting experience data
  onExperienceDelete(userid: number, profileId: number, skillId: number){
    this.profileService.deleteExperience(userid, profileId, skillId).subscribe((data)=>
    {
      this.experiences=<Experience>data;
      console.log(this.experiences);
    });
  }


//  constructor(private route: ActivatedRoute) {
//     this.route.params.subscribe(params => console.log(params))
//    }

//  // educations: Education[];
//   ngOnInit(): void {
//     // this.profileService.getProfile().subscribe((data)=>
//     // {
//     //   console.log(data);
//     //   t his.educations=<Education[]>data;
//   // });

  

}
