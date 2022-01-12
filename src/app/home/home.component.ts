import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatomoTracker } from '@ngx-matomo/tracker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private readonly tracker: MatomoTracker){}
  ngOnInit(): void {
    this.tracker.trackEvent('componentNavigation', 'HomeComponent', "onInit", 1)
  }
}
