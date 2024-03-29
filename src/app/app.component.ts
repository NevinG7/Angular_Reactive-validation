import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'nestedreac';

  public profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.maxLength(20)]),
    lastName: new FormControl('',[Validators.required,Validators.maxLength(20)]),
    middleName: new FormControl('',[Validators.maxLength(20)]),
    age: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.max(50),Validators.min(10)]),
    gender: new FormControl(''),

    address: new FormGroup({
      street: new FormControl('',[Validators.required,Validators.maxLength(20)]),
      landmark: new FormControl('',[Validators.maxLength(20)]),
      city: new FormControl('',[Validators.required,Validators.maxLength(20)]),
      state: new FormControl('',[Validators.required,Validators.maxLength(20)]),
      zipCode: new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern("^[0-9]*$")]),
      country: new FormControl('',[Validators.required,Validators.maxLength(20)]),

    }),
    hobbies: new FormArray([])
  })
  


  ngOnInit(): void {
    this.addHobby()
  }
  
    
  get hobbies(){
    return this.profileForm.get('hobbies') as FormArray;
  }

  addHobby() {
    const hobbiesFormArray = this.profileForm.get('hobbies') as FormArray;
    hobbiesFormArray.push(new FormControl(''));
  }
  
  submit(){
    console.log(this.profileForm.value);
  }

}
