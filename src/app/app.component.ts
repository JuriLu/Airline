import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container text-center text-black-200">
      <h1>Airline App</h1>
    </div>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Airline';
}
