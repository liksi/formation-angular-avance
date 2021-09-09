import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from "../../service/user/user.service";
import { User } from "../../model/user.model";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser?: User;

  subscription?: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.subscription = this.userService.user.subscribe(
      user => this.currentUser = user,
      error => console.log(error)
    )
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
