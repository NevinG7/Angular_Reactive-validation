import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  public submitted:boolean=false;
  
  ngOnInit(): void {
    this.addHobby()


    this.profileForm.valueChanges.subscribe( ()=>console.log(this.profileForm.invalid))
    this.profileForm.markAsPristine()
  }
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

  
  addHobby() {
    const hobbiesFormArray = this.profileForm.get('hobbies') as FormArray;
    hobbiesFormArray.push(new FormControl(''));
  }
  
  submit(){
    this.submitted=true;
  }

}
