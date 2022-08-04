import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getYear(): number {
    return new Date().getFullYear();
  }
}
