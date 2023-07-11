import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any={}
  getData:any;
  constructor(private userService:UserService,private router:Router){}

  ngOnInit() {

  }
  loginuser(){
    
  
    var username=this.model.username;
    var password=this.model.password;
    this.userService.getUserData(username,password).subscribe((res: any)=>{
      this.getData=res as boolean;
      console.log(this.getData);
      if(this.getData==true){
        this.router.navigate(["/users"])
        alert("Sucessfully Logged in!!!");
          }else{
            alert("Invalid username or Password");
          }
    },
      // (error) => {
      //   alert("Invalid username or Password");
      // }
    );
    
  }
}
