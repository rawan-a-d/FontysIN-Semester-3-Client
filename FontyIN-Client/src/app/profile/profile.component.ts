import { Contact } from './../classes/Profile/Contact';
import { Profile } from './../classes/Profile/Profile';
import { ContactService } from '../services/contact/contact.service';
import { Experience } from './../classes/Profile/Experience';
import { Education } from './../classes/Profile/Education';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile/profile.service';
import { About } from '../classes/Profile/About';
import { Skill } from '../classes/Profile/Skill';
import { HttpHeaders } from '@angular/common/http';




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
  loggedInUser: number = 1;
  profileUser: number;
  isConnected: boolean = false;
  isRequestSent: boolean = false;
  contacts: Contact[];

  constructor(private profileService: ProfileService,
              private contactService: ContactService,
               private route: ActivatedRoute) { }

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
    this.profileUser = +this.route.snapshot.paramMap.get('id');
    console.log(this.profileUser);
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


    // GET ALL CONTACTS

    this.contactService.getAll()
    .subscribe(
      contacts => {
        this.contacts = <Contact[]>contacts;

        console.log("contacts");

        console.log(contacts);

        this.contacts.forEach(contact => {
          // if(((contact.userId == this.loggedInUser && contact.friendId == this.profileUser) || (contact.userId == this.profileUser && contact.friendId == this.loggedInUser))) {
          //   this.isConnected = true;
          // }
          // Logged in user sent request or other user sent request, status isAccepted true
          if(((contact.userId == this.loggedInUser && contact.friendId == this.profileUser) || (contact.userId == this.profileUser && contact.friendId == this.loggedInUser)) && contact.isAccepted == true) {
            console.log("first if statement")
            this.isRequestSent = true;
            this.isConnected = true;
            return;
          }
          // Logged in user sent request, status isAccepted false, status isAccepted false
          if(((contact.userId == this.loggedInUser && contact.friendId == this.profileUser) && !contact.isAccepted)) {
            console.log("second if statement")

            this.isRequestSent = true;
            this.isConnected = false;
            return
          }


          
        });

        console.log("isConnected " + this.isConnected);
        console.log("isRequestsent " + this.isRequestSent);

        // if(!found) {
          
        // }



      }
    )
   
    
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



          /*------------------------------------------------------ CONTACTS -------------------------------------------------------- */
  getContacts() {
    this.contactService.getAll()
      .subscribe(
        contacts => {
          this.contacts = <Contact[]>contacts;
        }
      )
  }
  

  createContact() {
    // get logged in user id from auth and friendId from url
    let contact : {} = { userId: this.loggedInUser, friendId: this.profileUser, isAccepted: false};
    this.contactService.create(contact)
      .subscribe(
        newContact => {
          console.log(newContact);
          //this.isConnected = true;
        }
      )
  }

  deleteContact() {
    // get logged in user id from auth and contatcId from link
    this.contactService.delete(1)
      .subscribe();
  }


  
  // isContact() {
  //   //let contacts;

  //   this.contactService.getAll()
  //   .subscribe(
  //     contacts => {
  //       this.contacts = <Contact[]>contacts;
  //       console.log("contacts");

  //       console.log(contacts);

  //       this.contacts.forEach(contact => {
  //         if((contact.userId == this.loggedInUser || contact.friendId == this.loggedInUser) && contact.isAccepted) {
  //           this.isConnected = true;
  //         }
  //         else if((contact.userId == this.loggedInUser || contact.friendId == this.loggedInUser) && !contact.isAccepted) {
  //           this.isConnected = false;
  //         }
  //       });
  //     }
  //   )
  // }



}
