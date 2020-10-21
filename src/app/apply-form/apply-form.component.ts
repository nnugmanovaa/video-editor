import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../model/user';
import {FormService} from '../services/form.service';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})
export class ApplyFormComponent implements OnInit {

  infoForm: FormGroup;

  @Input()
  user: User;

  constructor( private builder: FormBuilder,
               private formService: FormService) { }


  ngOnInit(): void {
    this.infoForm = this.builder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      appleId: ['', [Validators.required]],
      imei: ['', [Validators.required]],
      version: ['', [Validators.required]],
    });
  }

  sendData() {
    const formData = this.infoForm.getRawValue() as User;
    this.formService.add(formData).subscribe(perf => {
      alert('Thank you, for using VN!');
      window.location.reload();
    });
  }

}
