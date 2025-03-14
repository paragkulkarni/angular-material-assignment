import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbActiveModal,
  NgbModal,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent {
  form: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      title: new FormControl(''),
      description: new FormControl(''),
      location: new FormControl(''),
      date: new FormControl(''),
      price: new FormControl(''),
      availableSeatNo: new FormControl(''),
    });
  }

  submit() {
    console.log(this.form.value);
    this.activeModal.close(this.form.value);
  }
}
