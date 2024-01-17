import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';
import { Skills } from '../skills';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, public ds: DataSharingService) {}
  photo: any;
  items: any;
  form: any;
  skills: Skills[] = this.ds.tech_skills;
  ngOnInit() {
    this.form = this.ds.form;
    console.log(this.ds.form);
    this.items = ['item1', 'item2', '1'];
  }
  experience: boolean = true;
  projects = [
    {
      name: 'Google',
      link: 'www.google.com',
      about:
        'This is google designed by me.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      name: 'Facebook',
      link: 'www.facebook.com',
      about:
        'This is facebook designed by me.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      name: 'Facebook',
      link: 'www.facebook.com',
      about:
        'This is facebook designed by me.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      name: 'Facebook',
      link: 'www.facebook.com',
      about:
        'This is facebook designed by me.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      name: 'Facebook',
      link: 'www.facebook.com',
      about:
        'This is facebook designed by me.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      name: 'Facebook',
      link: 'www.facebook.com',
      about:
        'This is facebook designed by me.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      name: 'Facebook',
      link: 'www.facebook.com',
      about:
        'This is facebook designed by me.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      name: 'Facebook',
      link: 'www.facebook.com',
      about:
        'This is facebook designed by me.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
  ];
}
