import { Component, OnInit } from '@angular/core';
import { User } from '../classes/Profile/User';
import { Address } from '../classes/Profile/Address';

import { ProfileService } from '../services/profile/profile.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  constructor( private service: ProfileService) { }

  address = new Address(1, "test1", "test2", "test3", "test4");
  user = new User(1, "0348348");

  ngOnInit(): void {
    this.service.GetOneAddress()
    .subscribe((data)=>{
      console.log(data);
     this.address = <Address>data;
    });
    this.service.GetOneUser()
    .subscribe((data)=>{
      console.log(data);
     this.user = <User>data;
    });
  }

  update(){
    console.log(this.address);
    this.service.updateAddress(this.address, 1).subscribe(
      (res: any) => {
        console.log("updated address");
      });
      
      this.service.updatePhoneNumber(this.user, 1).subscribe(
        (res: any) => {
          console.log("updated phone" + this.user);
        });
}

}
