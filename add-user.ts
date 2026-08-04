import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Userservice } from '../../services/userservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports : [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrls: ['./add-user.css'],
})
export class AddUser {
  constructor(private userservice: Userservice , private router: Router) {}
    name = new FormControl('' , [Validators.required]);
    email = new FormControl('' , [Validators.required, Validators.email]);
    age = new FormControl('' , [Validators.required, Validators.min(0)]);


  onsubmit(){
    let name  = this.name.value;
    let email  = this.email.value;
    let age  = this.age.value;

   console.log({ name, email, age });     // ye cheeze agr console me print krwana he to

   
   if(name && email && age){
    let userdata = {
      name : name , 
      email : email , 
      age: Number(age),
    }
    this.userservice.adduserdata(userdata).subscribe((response)=>{      // ab yha se redirect bi krwna he service se 
      if(response){
        this.router.navigate(["/"])
        alert("User Added Successfully")
      }
      else{
        alert("User Not Added")
      }
      // console.log(response)
    })
   }
  }
}
