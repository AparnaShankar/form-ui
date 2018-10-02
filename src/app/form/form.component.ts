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
  submitted: boolean=false;
  saved: boolean=false;
  requiredError: String=' This field is required.';
  save: any;
  name: String='';
  employee_id: String='';
  job_title: String='';
  department: String='';

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
    name: ['', Validators.required],
    employee_id: ['', Validators.required],
    job_title: ['', Validators.required],
    department: ['', Validators.required]
    })
   }

  ngOnInit() {
  }

  save_as_draft(save)
  {
    this.name = save.name;
    this.employee_id = save.employee_id;
    console.log(save.name);
    console.log(save.employee_id);
  }

}
