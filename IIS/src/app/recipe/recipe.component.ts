import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  form: FormGroup
  user: any

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {

    this.form = this.fb.group({
      medicineName: ['', Validators.required],
      takingPeriod: ['', Validators.required],
      quantity: ['', Validators.required],


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
      medicineName: this.form.get('medicineName')?.value,
      takingPeriod: this.form.get('takingPeriod')?.value,
      quantity: this.form.get('quantity')?.value,

    }).subscribe((response: any) => {

      this.router.navigate(['/user-home-page']);
    })
  }

}
