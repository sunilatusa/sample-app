import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit{

  constructor(private sampleService: SampleService){}

  ngOnInit(): void {
    this.sampleService.updateUserInfo('John Doe');
    console.log('User Name is - '+this.sampleService.getUserName());
  }


}
