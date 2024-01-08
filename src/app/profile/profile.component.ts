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
  items:any
  form:any;
  ngOnInit() {
    this.form=this.ds.form
    console.log(this.ds.form);
    this.items=['item1','item2','1']
  }
}
