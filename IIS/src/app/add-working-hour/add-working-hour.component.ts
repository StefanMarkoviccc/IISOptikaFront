import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-working-hour',
  templateUrl: './add-working-hour.component.html',
  styleUrls: ['./add-working-hour.component.css']
})
export class AddWorkingHourComponent implements OnInit {

  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {

    this.form = this.fb.group({
      startWork: ['', Validators.required],
      endWork: ['', Validators.required],
      weekDay: ['', Validators.required],


    });


  }


  ngOnInit(): void {
  }

  navigate(data : any){
    if(data === 'edit'){
      this.router.navigate(['/edit-profile']);
    }
    else if(data === 'home'){
      this.router.navigate(['/user-home-page']);
    }else if(data == 'workingHours'){
      this.router.navigate(['/working-hour']);
    }
  }

  onSubmit(){
    this.api.addWorkingHour({
      startWork: this.form.get('startWork')?.value,
      endWork: this.form.get('endWork')?.value,
      weekDay: 1
    }).subscribe((response: any) => {

      this.router.navigate(['/working-hour']);
    })
  }


}
