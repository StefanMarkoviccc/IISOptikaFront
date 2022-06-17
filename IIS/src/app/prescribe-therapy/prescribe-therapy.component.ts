import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-prescribe-therapy',
  templateUrl: './prescribe-therapy.component.html',
  styleUrls: ['./prescribe-therapy.component.css']
})
export class PrescribeTherapyComponent implements OnInit {

  form: FormGroup
  user: any

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {

    this.form = this.fb.group({
      leftEyeTherapy: ['', Validators.required],
      rightEyeTherapy: ['', Validators.required],
      description: ['', Validators.required],


    });

    this.user = this.api.getUserFromLocalstorage();


  }


  ngOnInit(): void {

  }

  navigate(data : any){
    if(data === 'edit'){
      this.router.navigate(['/edit-profile']);
    }else if(data === 'home'){
      this.router.navigate(['/user-home-page']);
    }else if(data == 'scheduleAppointment'){
      this.router.navigate(['/schedule-Appointment']);
    }
  }

  
  onSubmit(){

    this.api.addRecipe({
      
      doctor: this.user,
      lefyEyeTherapy: this.form.get('leftEyeTherapy')?.value,
      righyEyeTherapy: this.form.get('rightEyeTherapy')?.value,
      description: this.form.get('description')?.value,

    }).subscribe((response: any) => {

      this.router.navigate(['/user-home-page']);
    })
  }

}
