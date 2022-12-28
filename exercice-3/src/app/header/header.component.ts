import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  date: Date = new Date();
  
  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();
    }, 1000)
  }
}
