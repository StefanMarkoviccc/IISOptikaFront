import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css']
})
export class ScheduleAppointmentComponent implements OnInit {

  form: FormGroup
  user: any

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {

    this.form = this.fb.group({
      patient: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      duration: ['', Validators.required],


    });

    this.user = this.api.getUserFromLocalstorage();


  }


  ngOnInit(): void {

  }

  navigate(data : any){
    if(data === 'edit'){
      this.router.navigate(['/edit-profile']);
    }else if(data === 'home'){
      this.router.navigate(['/sister-home-page']);
    }else if(data == 'scheduleAppointment'){
      this.router.navigate(['/schedule-Appointment']);
    }
  }

  
  onSubmit(){

    this.api.addAppointment({
      
      patient: this.user,
      sister: this.user,
      date: this.form.get('date')?.value,
      startTime: this.form.get('startTime')?.value,
      duration: this.form.get('duration')?.value,

    }).subscribe((response: any) => {

      this.router.navigate(['/sister-home-page']);
    })
  }

}
