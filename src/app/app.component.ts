import {Component, OnInit} from '@angular/core';
import {ResolveEnd, ResolveStart, Router} from "@angular/router";
import {filter, mapTo, merge, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  template: `
    <mat-progress-bar
      class="mt-1"
      *ngIf="isLoading$ | async"
      mode="indeterminate"
      style="position: fixed"
    ></mat-progress-bar>

    <div class="container text-center text-black-200">
      <h1>Airline App</h1>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  title = 'Airline';

  isLoading$!:Observable<boolean>
  private _showLoaderEvents$!:Observable<boolean>
  private _hideLoaderEvents$!:Observable<boolean>
  constructor(
    private router:Router
  ) {
  }

  ngOnInit(): void {
    this._showLoaderEvents$ = this.router.events.pipe(
      filter((e):boolean=>e instanceof ResolveStart),
      mapTo(true)
    );

    this._hideLoaderEvents$ = this.router.events.pipe(
      filter((e):boolean=>e instanceof ResolveEnd),
      mapTo(false)
    );

    this.isLoading$ = merge(this._hideLoaderEvents$,this._showLoaderEvents$)
  }
}
