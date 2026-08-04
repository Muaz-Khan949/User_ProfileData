import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Userservice } from '../../services/userservice';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.css',
})
export class EditUser {
  constructor(private userservice: Userservice, private router: ActivatedRoute, private route: Router) { }
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl('', [Validators.required, Validators.min(0)]);

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get("id")
    console.log(id);
    if (id) {
      this.userservice.getuser(Number(id)).subscribe((data) => {
        console.log(data)
        this.name.setValue(data.name)
        this.email.setValue(data.email)
        this.age.setValue(data.age.toString())
      })


    }
  }

  edituser() {
    let name = this.name.value
    let email = this.email.value
    let age = this.age.value
    let id = this.router.snapshot.paramMap.get("id")

    if (name && email && age && id) {
      let editdata = {
        name: name,
        email: email,
        age: Number(age),
      }
      this.userservice.edituser(Number(id), editdata).subscribe((response) => {
        if (response) {
          this.route.navigate(["/"])
          alert("User Updated Successfully")
        }
        else {
          alert("User Not Updated")
        }
      })
    }

  }

}

