import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html'
})
export class FormulariosComponent {

  constructor(private fb: FormBuilder){
    this.form = fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      lastname: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      items: fb.array([])
    });
  }

  form: FormGroup = new FormGroup({});

  get getItems(): FormArray {
    return this.form.get('items') as FormArray;
  }

  sendForm(){
    
    // Esta es la forma de acceder a los elementos dentro de "items"
    this.getItems.controls.map((item, index) => {
      console.log(item.value);
    });
    // Esta es la forma de acceder a los elementos dentro de "items"

    console.log(this.form);
    if(this.form.valid){
      console.log(this.form.value);
      console.log('Formulario enviado');
    }else{
      console.log('invalido');
    }
  }

  addItem(value: string){
    this.getItems.push(new FormControl(value));
  }

}
