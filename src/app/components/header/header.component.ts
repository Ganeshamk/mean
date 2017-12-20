import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService} from './../../services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.userService.isLoggedIn; // {2}
  }

  onLogout() {
    this.userService.logout();                      // {3}
  }

}
