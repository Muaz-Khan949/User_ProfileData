import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { users } from '../../services/user-datatype';
import { Userservice } from '../../services/userservice';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [UpperCasePipe],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  userdata = signal<users[] | undefined>(undefined)
  constructor(private sate: Userservice , private route:Router) { }

  ngOnInit() {
    this.getusers()

  }

  getusers() {
    this.sate.getusers().subscribe((data) => {
      console.log(data)
      this.userdata.set(data)
    })
  }

  deleteuserdata(id: number | undefined) {
    if (id) {
      this.sate.deleteuserdata(id).subscribe((data) => {
        if (data) {
          this.getusers()
        }
      })
    }
  }

  edituser(id: number | undefined) {
    this.route.navigate([`/edit/${id}`])
    // console.log(id)
  }
}