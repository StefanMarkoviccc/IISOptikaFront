import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  selectedType: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) 
  {
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required ],
      jmbg: ['',Validators.required],
      address: ['',Validators.required],
      gender: ['', Validators.required],
      userType: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {

    console.log('Test', this.selectedType);

      this.api.userRegistration({
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
        posswordConformation : this.form.get('passwordConformation')?.value,
        firstName: this.form.get('firstName')?.value,
        lastName: this.form.get('lastName')?.value,
        jmbg : this.form.get('jmbg')?.value,
        address: this.form.get('address')?.value,
        userType: 2,
        gender: this.selectedType,
        phone: this.form.get('phone')?.value,
        }).subscribe((response: any) => {
        this.router.navigate(['/login']);
      })
    }

    navigate(data : any){
      if(data === 'login'){
        this.router.navigate(['/login']);
      }
  
      else if(data === 'registration'){
        this.router.navigate(['/registration']);
      }
      else if(data === 'home'){
        this.router.navigate(['/unregistered-home-page']);
      }
      
    }

}
