import {Component, OnDestroy, OnInit} from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'air-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit , OnDestroy {

  constructor() {
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
