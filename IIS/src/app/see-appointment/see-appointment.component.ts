import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-see-appointment',
  templateUrl: './see-appointment.component.html',
  styleUrls: ['./see-appointment.component.css']
})
export class SeeAppointmentComponent implements OnInit {

  selectedType: any;
  form: FormGroup;
  user:any;  
  
  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      patient: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required ],
      typeOfAppointment: ['', Validators.required],
    });

    let jsonUser = localStorage.getItem('user');

    if(jsonUser) {
      this.user = JSON.parse(jsonUser);
    }

    if(!this.user) {
      return;
    }

    this.api.getCurrentUser().subscribe((response: any) => {

      console.log(response);

      this.form = this.formBuilder.group({
      patient: [response.patient, Validators.email],
      date: [response.date, Validators.required],
      startTime: [response.startTime, Validators.required ],
      typeOfAppointment: [response.typeOfAppointment, Validators.required],

    });
  });  
  
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

  ngOnInit(): void {
  }

  onSubmit(){

    
  }
}
