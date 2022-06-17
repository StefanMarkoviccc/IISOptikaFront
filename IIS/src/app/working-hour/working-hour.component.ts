import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-working-hour',
  templateUrl: './working-hour.component.html',
  styleUrls: ['./working-hour.component.css']
})
export class WorkingHourComponent implements OnInit {

  user:any;
  workingHours:any;
  apikey:any;
  displayedColumns: string[] = ['StartWork', 'EndWork', 'WeekDay'];
  constructor(    private router: Router,    private apiService: ApiService
  
      ) { 
  
        this.user = this.apiService.getUserFromLocalstorage();
      }
  
    ngOnInit(): void {
  
  
    this.apiService.getAllWorkingHours().subscribe((response : any) => {
      console.log('aaa')
      this.workingHours = response
   
  
    });
  
  
  
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
  

    add(){
      this.router.navigate(['/add-working-hour']);
    }
  }