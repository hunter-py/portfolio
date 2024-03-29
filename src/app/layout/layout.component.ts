import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormArray,
  FormBuilder,
  FormControl,
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
    private ds: DataSharingService,
    private http: HttpClient
  ) {}

  my_Form: any;
  temp_Photo: any;
  project: any;
  defaultSkills = this.ds.tech_skills;
  ngOnInit() {
    this.my_Form = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      photo: ['', [Validators.required]],
      skills: this.fb.array([]),
      experience: [''],
      about: [''],
      projects: this.fb.array([]),
      linkedin: [''],
      github: [''],
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

  setValidators(checked: boolean) {
    if (checked) {
      this.my_Form.addControl(
        'company',
        this.fb.control('', Validators.required)
      );
      this.my_Form.addControl(
        'designation',
        this.fb.control('', Validators.required)
      );
    } else {
      this.my_Form.removeControl('company');
      this.my_Form.removeControl('designation');
      console.log(this.my_Form);
    }
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
