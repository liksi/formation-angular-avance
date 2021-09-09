import { Component, OnInit } from '@angular/core';
import { UserService } from "../../service/user/user.service";
import { User } from "../../model/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser?: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.user.subscribe(
      user => this.currentUser = user,
      error => console.log(error)
    )
  }
}
