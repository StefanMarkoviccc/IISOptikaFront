import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-health-card',
  templateUrl: './health-card.component.html',
  styleUrls: ['./health-card.component.css']
})
export class HealthCardComponent implements OnInit {

  selectedType: any;
  form: FormGroup;
  user:any;  
  
  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      email: ['', Validators.email ],
      phone: ['', Validators.required],
      anamnesis: ['', Validators.required],
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
      patient: [response.patient.name, Validators.required],
      date: [response.date, Validators.required],
      email: [response.email, Validators.email ],
      phone: [response.phone, Validators.required],
      anamnesis: [response.anamnesis, Validators.required],

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
