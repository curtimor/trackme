import { Component, OnInit } from '@angular/core';
import { LoginManagerService } from '../login-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public loginManager: LoginManagerService) { }

  ngOnInit(): void {
  }

}
