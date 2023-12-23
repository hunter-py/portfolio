import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public router: Router,
    private ds: DataSharingService
  ) {}

  my_Form: any;
  temp_Photo: any;
  project: any;
  defaultSkills = this.ds.tech_skills;
  ngOnInit() {
    this.my_Form = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      photo: ['', [Validators.required]],
      skills: this.fb.array([
        '',
        [Validators.required, Validators.minLength(1)],
      ]),
      experience: [''],
      company: [''],
      about: [''],
      projects: this.fb.array([]),
    });
    this.addSkills();
    this.addProject();
  }

  get skills(): FormArray {
    return this.my_Form.get('skills') as FormArray;
  }

  addSkills() {
    let newSkill = new FormControl(null, Validators.required);
    this.skills.push(newSkill);
  }

  removeskill(i: number) {
    if (this.skills.length <= 1) alert('Must have a skill');
    else this.skills.removeAt(i);
  }

  get projects(): FormArray {
    return this.my_Form.get('projects') as FormArray;
  }

  addProject() {
    this.project = this.fb.group({
      name: ['', [Validators.required]],
      link: ['', [Validators.required]],
      about: [''],
    });
    this.projects.push(this.project);
  }

  removeProject(i: number) {
    this.projects.removeAt(i);
  }

  submit() {
    this.ds.form = this.my_Form.value;
    this.ds.form.photo = this.temp_Photo;
  }

  saveImage(event: any) {
    const imageFiles = event.target.files;
    /**
     * Count the number of files selected.
     */
    const imageFilesLength = imageFiles.length;
    if (imageFilesLength > 0) {
      /**
       * Get the image path.
       */
      const imageSrc = URL.createObjectURL(imageFiles[0]);
      this.temp_Photo = imageSrc;
      // code for downloading image
      // const a = document.createElement('a');
      // a.href = imageSrc;
      //   a.download = "image1";
      //   document.body.appendChild(a);
      //   a.click();
    }
  }
}
