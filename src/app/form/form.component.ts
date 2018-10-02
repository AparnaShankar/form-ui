import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  fg: FormGroup;
  requiredError: String=' This field is required.';
  name: String='';

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
    name: ['', Validators.required],
    })
   }

  ngOnInit() {
  }

}
