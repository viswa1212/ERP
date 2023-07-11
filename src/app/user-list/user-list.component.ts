import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[];
  constructor(private userservice:UserService,private router:Router){}
  ngOnInit(): void {
      //  this.users=[{
      //   "id":1,
      //   "emailid":"susmitha@gmail.com",
      //   "firstname":"susmi",
      //    "lastname":"vadivelu"

      //  }];
      this.getUsers();
  }
private getUsers(){
  this.userservice.getUserList().subscribe(data => {
this.users=data;
  });
}
updateUser(id:number){
  this.router.navigate([`update-user`,id]);
}
deleteUser(id:number){
  this.userservice.deleteUser(id).subscribe(data =>{
    console.log(data);
    this.getUsers();
  })}

   viewUser(id:number){
     this.router.navigate([`user-details`,id]);

   }
  
  

}
