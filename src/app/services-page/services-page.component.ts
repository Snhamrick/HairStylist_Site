import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import {ServiceEntry } from '../Entries/service-interface';
import serviceEntries from '../Entries/serviceEntries.json';
import { DescriptionService } from '../Services/description.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent {

  public submitted = false;
  public emailSent = false;
  public formError = '';
  public entryList: ServiceEntry[];
  private serviceList = serviceEntries;

  constructor(
    private fb: FormBuilder,
    private descriptionService: DescriptionService,
    private router: Router) {

      this.entryList = [];
    for (let i=0; i < this.serviceList.length; i++) {
      this.entryList[i] = this.serviceList[i];
    }
}

  requestForm = this.fb.group({
    name: ['', Validators.required],
    email:['', Validators.required],
    phone:['', Validators.required],
    date: ['', Validators.required],
    ptySize: ['', Validators.required],
    address: ['', Validators.required],
    special: ['']
  });


  public submitRequest() {
    const that = this;
    if (this.requestForm.valid) {
      let templateParams = this.requestForm.value;
      emailjs.send('default_service', 'template_0ugj36d', templateParams, 'IsVzyZjWUEKp8LyiP')
      .then(function(response) {
        that.submitted = true;
        console.log("Email Sent", response.status, response.text);
        that.emailSent = true;
      }, function(error) {
        console.log("Email Failed to send", error);
        that.emailSent = false;
      });
    } else {
      this.formError = 'All fields but "special request" must be completed';
    }
  }


  public selectService(service: ServiceEntry) {
    this.descriptionService.changeService(service);
    this.router.navigateByUrl('description');
  }





}
