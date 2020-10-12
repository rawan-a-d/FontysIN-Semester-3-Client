import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Education } from 'src/app/classes/Profile/Education';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  public getProfile(){
    return this.httpClient.get('http://localhost:9099/users/1/profiles/1')
  }
  public getExperienceById(){
    return this.httpClient.get('http://localhost:9099/users/1/profiles/1/experiences')
  }
  public getEducationsById(){
    return this.httpClient.get('http://localhost:9099/users/1/profiles/1/educations')
  }

  public getSkillsById(){
    return this.httpClient.get('http://localhost:9099/users/1/profiles/1/skills')
  }
  public getAboutById(){
    return this.httpClient.get('http://localhost:9099/users/1/profiles/1/abouts')
  }
  public addEducation(data){
    return this.httpClient.post('http://localhost:9099/users/1/profiles/1/educations/new', data).toPromise().then(data => {
      console.log(data);
    })
  }
  public addExperience(data){
    return this.httpClient.post('http://localhost:9099/users/1/profiles/1/experiences/new', data).toPromise().then(data => {
      console.log(data);
    })
  }
  public addSkill(data){
    return this.httpClient.post('http://localhost:9099/users/1/profiles/1/skills/new', data).toPromise().then(data => {
      console.log(data);
    })
  }

    //delete data in profile page
    public deleteEducation(userId, profileId, educationId){
      return this.httpClient.delete('http://localhost:9099/users/' + userId + '/profiles/' + profileId + '/educations/' + educationId);
    }
  
    public deleteExperience(userId, profileId, experienceId){
      return this.httpClient.delete('http://localhost:9099/users/' + userId + '/profiles/' + profileId + '/experiences/' + experienceId);
    }
  
    public deleteSkill(userId, profileId, skillId){
      return this.httpClient.delete('http://localhost:9099/users/' + userId + '/profiles/' + profileId + '/skills/' + skillId);
    }

    public GetOneEducation(){
      return this.httpClient.get('http://localhost:9099/users/profile/education/1')
    }

    public GetOneExperience(){
      return this.httpClient.get('http://localhost:9099/users/profile/experience/1')
      
    }
    public GetOneAbout(){
      return this.httpClient.get('http://localhost:9099/users/profile/about/1')
      
    }
    public GetOneAddress(){
      return this.httpClient.get('http://localhost:9099/users/address/1')
      
    }
    public GetOneUser(){
      return this.httpClient.get('http://localhost:9099/users/user/1')
      
    }

    updateEducation(model, id) {
      const url = 'http://localhost:9099/users/profile/education/' + id
      return this.httpClient.put(url, model);
    }

  
    updateExperience(model, id) {
      const url = 'http://localhost:9099/users/profile/experience/' + id;
      return this.httpClient.put(url, model);
    }
    
  updateAbout(model, id) {
    const url = 'http://localhost:9099/users/profile/about/' + id;
    return this.httpClient.put(url, model);
  }

  updateAddress(model, id) {
    const url = 'http://localhost:9099/users/address/' + id;
    return this.httpClient.put(url, model);
  }
  updatePhoneNumber(model, id) {
    const url = 'http://localhost:9099/users/' + id;
    return this.httpClient.put(url, model);
  }


}
