import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userId: string = '';
  fname: string = '';
  lname: string = '';
  phone: number = null;
  sexSelect = [
    { value: 'Male' },
    { value: 'Woman' }
  ]
  sex: string = '';
  age: number = null;

  constructor(public authservice: AuthService, public postservice: PostService, router: Router) { }

  ngOnInit(): void {
  }

  checkValue(sex) {
    if (sex < 1) {
      console.log('err');
    } else {
      console.log('err2')
    }
  }

  onSubmit() {
    let data: any = {};
    data['userId'] = this.authservice.currentUserId;
    data['fname'] = this.fname;
    data['lname'] = this.lname;
    data['phone'] = this.phone;
    data['sex'] = this.sex;
    data['age'] = this.age;

    console.log(data)

    // this.checkValue(this.sex);

    this.postservice.createNewPost(data).then(res => {
      this.fname = '';
      this.lname = '';
      this.phone = null;
      this.sex = '';
      this.age = null;

      console.log('Done', res);


    }).catch(err => {
      console.log(err)
    })
  }



}
