import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sister-home-page',
  templateUrl: './sister-home-page.component.html',
  styleUrls: ['./sister-home-page.component.css']
})
export class SisterHomePageComponent implements OnInit {

  form: FormGroup;
  user: any;
  appointments: any;
  displayedColumns: string[] = ['Date', 'StartTime', 'Duration', 'Patient'];


  constructor(private formBuilder: FormBuilder, private api : ApiService, private activatedRoute: ActivatedRoute, private router: Router) 
  {
    this.form = this.formBuilder.group({
      search: ['']
    });   
  }

  ngOnInit(): void {
    this.api.getAllAppointments().subscribe((response: any)=> {
      this.appointments = response;
    })
  }


  onSubmit() {

  }


  navigate(data : any){
    if(data === 'edit'){
      this.router.navigate(['/edit-profile']);
    }
    else if(data === 'home'){
      this.router.navigate(['/sister-home-page']);
    }else if(data == 'scheduleAppointment'){
      this.router.navigate(['/schedule-Appointment']);
    }
  }

}
