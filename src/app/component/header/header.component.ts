import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from "../../service/user/user.service";
import { User } from "../../model/user.model";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser?: User;

  isDestroyed: Subject<void> = new Subject();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.user.pipe(takeUntil(this.isDestroyed)).subscribe(
      user => this.currentUser = user,
      error => console.log(error)
    )
  }

  ngOnDestroy(): void {
    this.isDestroyed.next();
    this.isDestroyed.complete();
  }
}
