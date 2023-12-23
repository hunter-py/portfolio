import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, public ds: DataSharingService) {}
  photo: any;
  ngOnInit() {
    console.log(this.ds.form);
    this.photo = this.ds.form.photo;
  }
}