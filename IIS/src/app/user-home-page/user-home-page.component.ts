import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {

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
      this.router.navigate(['/user-home-page']);
    }else if(data == 'workigHours'){
      this.router.navigate(['/working-hour']);
    }
  }

 

}
